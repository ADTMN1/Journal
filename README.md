# The Process — modern stack edition

The original single-file page ([The Process — Build Better Every Day.html](The%20Process%20—%20Build%20Better%20Every%20Day.html))
is kept untouched as the reference. **The design, markup structure, CSS and the
`fit()` headline-scaling script are unchanged** — only the technology around
them was modernized:

| Area | Before | Now |
| --- | --- | --- |
| Rendering | Static single HTML file | React Server Components on Next.js (App Router, TypeScript) |
| Fonts | Render-blocking Google Fonts `<link>` | `next/font` — Inter downloaded at build time, self-hosted, `display: swap` |
| Styles | Inline `<style>` block | Same CSS verbatim in [app/globals.css](app/globals.css) |
| Assets | Base64 blobs inline in markup | Extracted to [lib/assets.ts](lib/assets.ts), same `data:` URIs in the DOM |
| Backend | None | Next.js Route Handler at `/api/health` + Supabase clients |
| Data | None | Supabase (`@supabase/ssr`) browser + server clients, ready to use |

## Commands

```bash
npm install     # install dependencies
npm run dev     # development server
npm run build   # production build (type-checks too)
npm start       # serve the production build
npm run typecheck
```

## Supabase setup

1. Copy [.env.example](.env.example) to `.env.local` and fill in
   `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   (Supabase dashboard → Project Settings → API).
2. `GET /api/health` reports `{"ok":true,"supabase":"connected"}` once the
   credentials are valid — until then it reports `not_configured`.
3. Clients live in [lib/supabase/client.ts](lib/supabase/client.ts) (browser)
   and [lib/supabase/server.ts](lib/supabase/server.ts) (Server Components /
   Route Handlers). Both return `null` while unconfigured, so nothing breaks
   during setup.

## Layout of the app

```
app/
  layout.tsx        # <html>/<head>, metadata, viewport, next/font Inter
  page.tsx          # the landing page markup (same structure as the original)
  about/            # inner pages (About, Services, Blog, Contact)
  services/
  blog/
  contact/
  globals.css       # the original CSS + navbar/mobile-menu additions at the end
  api/health/       # backend smoke test
components/
  Navbar.tsx        # shared navbar: active link + hamburger menu (<900px)
lib/
  assets.ts         # generated base64 image data URIs
  supabase/         # Supabase clients
```
