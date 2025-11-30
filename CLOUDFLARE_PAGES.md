# Cloudflare Pages Setup

## 1. Créer le projet Cloudflare Pages

1. Aller sur https://dash.cloudflare.com
2. Pages → Create a project
3. Connect to Git → GitHub
4. Sélectionner: `OLYAHYAI/abououways-ecommerce`

## 2. Configuration Build

**Framework preset:** Next.js
**Build command:** `cd frontend && npm install && npm run build`
**Build output directory:** `frontend/.next`
**Root directory:** `/`

## 3. Environment Variables

Ajouter dans Cloudflare Pages settings:
```
NODE_VERSION=18
NEXT_PUBLIC_API_URL=https://api.abououways.ma
```

## 4. URLs

- **Preview:** `https://abououways-ecommerce.pages.dev`
- **Production VPS:** `https://abououways.ma`

## 5. Workflow

```
Local → GitHub → Cloudflare (preview) → VPS (production)
```

**Test sur Cloudflare → Si OK → Deploy sur VPS**
