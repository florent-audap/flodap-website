export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
  tags: string[];
}

// Importation dynamique de tous les fichiers .md du dossier ../articles
// markdownFiles est un dictionnaire avec en clé le chemin et en valeur le contenu du fichier
const markdownFiles = import.meta.glob("../articles/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

export const blogPosts: BlogPost[] = Object.keys(markdownFiles)
  .map((path) => {
    const fileName = path.split("/").pop() || "";
    const slug = fileName.replace(".md", "");
    const fileContent = markdownFiles[path] as string;

    try {
      // Parser manuel pour éviter les erreurs de librairie (process is not defined)
      // On sépare le header (entre les ---) du contenu
      const match = fileContent.match(
        /^---\s*[\r\n]+([\s\S]*?)[\r\n]+---\s*[\r\n]*([\s\S]*)$/
      );

      if (!match) {
        // Si pas de frontmatter, on renvoie un contenu par défaut
        return {
          slug,
          title: slug,
          date: new Date().toISOString().split("T")[0],
          description: "No description",
          content: fileContent,
          tags: [],
        };
      }

      const frontMatterBlock = match[1];
      const body = match[2];
      const attributes: Record<string, string | string[]> = {};

      // Parsing ligne par ligne des attributs (title: ..., date: ...)
      frontMatterBlock.split("\n").forEach((line) => {
        const parts = line.split(":");
        if (parts.length >= 2) {
          const key = parts[0].trim();
          let value = parts.slice(1).join(":").trim();

          // Enlever les guillemets si présents
          if (
            (value.startsWith('"') && value.endsWith('"')) ||
            (value.startsWith("'") && value.endsWith("'"))
          ) {
            value = value.slice(1, -1);
          }

          if (key === "tags") {
            // Gestion des tags [Tag1, Tag2]
            attributes[key] = value
              .replace(/[[\]"']/g, "")
              .split(",")
              .map((t) => t.trim())
              .filter((t) => t);
          } else {
            attributes[key] = value;
          }
        }
      });

      return {
        slug,
        title: (attributes.title as string) || slug,
        date: (attributes.date as string) || "",
        description: (attributes.description as string) || "",
        tags: (attributes.tags as string[]) || [],
        content: body,
      };
    } catch (e) {
      console.error(`Erreur lors du chargement de l'article ${fileName}:`, e);
      return null;
    }
  })
  .filter((post): post is BlogPost => post !== null)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
