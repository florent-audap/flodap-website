# 🚀 Nom du projet

Petit projet web construit avec **React**, **Vite** et **TypeScript**, déployé sur **Vercel**.

## 🧱 Stack technique

- React
- Vite
- TypeScript
- Vercel (Hosting & Preview deployments)
- Cloudflare (DNS, sécurité, emails)
- Vercel Analytics

## 📦 Prérequis

- Node.js >= 18
- npm (ou yarn / pnpm)

## ⚙️ Installation

```bash
npm install
```

▶️ Lancer le projet en local

```bash
vercel dev --local-config vercel.dev.json
```

Le site sera accessible sur :

http://www.florentaudap.com

🏗️ Build production

```bash
npm run build
npm run preview
```

🌱 Environnements

Environnement Usage
Local Développement
Preview Tests sur branche develop
Production Branche main

Les variables d’environnement sont gérées via :

- `.env.local` (local)
- Vercel → Project Settings → Environment Variables

⚠️ Les fichiers .env ne sont jamais commit.

🌿 Git workflow

main → production

develop → développement & preview

Développement sur develop, puis merge vers main pour la production.

Les merges vers main se font via Pull Request.

📊 Analytics

Pas d'analytics pour le moment

📄 Licence

Projet personnel – usage libre.
