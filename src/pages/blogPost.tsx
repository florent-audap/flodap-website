import { useParams, Link, Navigate } from "react-router-dom";
import { blogPosts } from "../utils/blogPostsExtract";
import { FaArrowLeft, FaCalendarAlt, FaTag } from "react-icons/fa";
import ReactMarkdown from "react-markdown";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();

  // Trouver l'article correspondant au slug
  const post = blogPosts.find((p) => p.slug === slug);

  // Si l'article n'existe pas, on redirige vers la page 404 (ou liste blog)
  if (!post) {
    return (
      <Navigate
        to="/404"
        replace
      />
    );
  }

  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      <Link
        to="/blog"
        className="btn btn-ghost btn-sm mb-6 gap-2"
      >
        <FaArrowLeft /> Back to Blog
      </Link>

      <article>
        <h1 className="text-primary mb-4 text-4xl font-bold">{post.title}</h1>

        <div className="border-primary mb-8 flex flex-wrap items-center gap-6 border-b pb-4 text-sm opacity-70">
          <div className="flex items-center gap-2">
            <FaCalendarAlt />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaTag />
            <div className="flex gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="badge badge-outline badge-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Affichage du contenu */}
        <div className="prose prose-headings:text-primary prose-a:text-primary prose-li:marker:text-primary prose-img:mx-auto prose-img:rounded-xl prose-img:shadow-lg max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
