# Setup & Deployment

## Run locally

```sh
bun install
bun run dev
```

App runs at http://localhost:8080. Production build: `bun run build`.

## Deploying to Netlify

This is a **server-rendered** TanStack Start app (Vite + Nitro), not a static site.

`netlify.toml` in the project root already has the correct settings:

```toml
[build]
  command = "bun run build"
  publish = "dist"
```

Important:

- **Do not use `dist/client`.** That path only exists for the Cloudflare target
  used by Lovable hosting. In a Netlify build Nitro switches to its Netlify
  preset and writes static assets to `dist/` and the SSR handler to
  `.netlify/functions-internal/server/`.
- If the Netlify dashboard has a publish directory set
  (Site settings → Build & deploy → Publish directory), **clear it** or set it
  to `dist`. A value there overrides `netlify.toml`.
- Nitro emits `dist/_redirects` with a catch-all to the server function, so deep
  links such as `/services` and `/blog/<slug>` render server-side instead of 404ing.

## Deploying with Lovable

Click **Publish** in the Lovable editor — no configuration needed; the SSR build
is hosted automatically.

## Brand logos

Raw logo files (transparent PNG) are included twice for convenience:

- `brand-logos/` — standalone copies you can reuse anywhere
  (`alif-symbol.png`, `dt-interiors.png`, `safa-fresh.png`, `sumera-collections.png`)
- `src/assets/` — same PNGs next to their `.asset.json` pointers

The app code imports the `*.asset.json` pointers, which resolve to the Lovable
CDN URLs. If you move the site off Lovable and want fully local images, replace
those imports with direct PNG imports, e.g.:

```ts
import dtInteriors from "@/assets/dt-interiors.png";
```
