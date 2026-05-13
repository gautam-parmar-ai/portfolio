# TODO - Fix Vercel Images Not Showing

- [ ] Identify all broken asset references (avatar, project images, resume PDF).
- [ ] Decide fix strategy (recommended: use Vite static asset imports / pass resolved URLs).
- [ ] Update `src/pages/Home/Home.jsx` to use imported avatar/resume URLs instead of `/src/...`.
- [ ] Update `src/data/projects.json` + `Home.jsx` rendering so `src` for project images uses Vite-resolved URLs (either via imports or mapping).
- [x] Build locally (`npm run build`) and sanity check assets paths.
- [x] Deploy to Vercel and verify images display.
- [x] Fix project image thumbnails on Vercel (import assets + map keys).
