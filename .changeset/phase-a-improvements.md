---
'@devicons-pack/svg': minor
'@devicons-pack/react': minor
'@devicons-pack/preact': minor
'@devicons-pack/vue': minor
'@devicons-pack/solid': minor
'@devicons-pack/svelte': minor
'@devicons-pack/astro': minor
'@devicons-pack/angular': minor
'@devicons-pack/lit': minor
'@devicons-pack/web-components': minor
'@devicons-pack/alpine': minor
'@devicons-pack/htmx': minor
---

- **`currentColor` for the font-glyph variants** — `plain`, `line`,
  `plain-wordmark`, and `line-wordmark` are single-color and now inherit CSS
  `color`, so `color: #f0db4f` just works. `original` variants keep their brand
  colors.
- **Search-friendly metadata** — `tags` and `altnames` from devicon.json are in
  `metadata.json` and the `IconEntry` type; the docs gallery matches them
  (searching "js" finds JavaScript).
- `"./package.json"` added to every package's exports map; `engines.node >= 18`.
