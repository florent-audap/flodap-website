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
npm run dev
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

develop → preview

feature/\* → nouvelles fonctionnalités

Les merges vers main se font via Pull Request.

📊 Analytics

Les analytics sont gérés via Vercel Analytics :

- trafic
- pages vues
- performances

📄 Licence

Projet personnel – usage libre.
