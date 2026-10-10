# Ram Praveen C: Portfolio

React + TypeScript + Vite + Tailwind CSS + Framer Motion + Lucide.

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview
```

## What to replace
| Item | Where |
|---|---|
| Resume PDF | `public/resume.pdf` (your uploaded resume is already included; overwrite to update) |
| Portrait | Removed. The site is image-free. |
| Project GitHub / demo links | `github` and `demo` fields in `src/data/content.ts`. Buttons appear only when a URL is set. |
| All text | `src/data/content.ts` |

## Contact form
No backend is configured, so the form validates, then opens the visitor's email app with the message pre-filled. It never claims a message was delivered.
To send directly: create a form at Formspree (or similar), copy `.env.example` to `.env`, and set `VITE_FORM_ENDPOINT` to the endpoint URL. On Vercel/Netlify add the same variable in project settings.

## Deploy
**GitHub Pages:** `base` is `/Portfolio/` in `vite.config.ts`. Settings > Pages > Source: GitHub Actions, then push to `main` (workflow in `.github/workflows/deploy.yml`).
**Vercel:** remove `base` from `vite.config.ts` first, then import the repo (build `npm run build`, output `dist`).

## Final checklist
- [ ] Replace `public/resume.pdf` if your resume changed
- [x] No portrait needed
- [ ] Add real repo/demo URLs to the projects
- [ ] Update `og-image.svg` / site URL if you want richer link previews
- [ ] Set `VITE_FORM_ENDPOINT` (optional)
- [ ] Test on your phone: menu, resume download, email, phone, LinkedIn, GitHub links
- [ ] `npm run build` passes, then deploy
