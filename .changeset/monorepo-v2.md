---
'@devicons-pack/svg': major
'@devicons-pack/react': major
'@devicons-pack/preact': major
'@devicons-pack/vue': major
'@devicons-pack/solid': major
'@devicons-pack/svelte': major
'@devicons-pack/astro': major
'@devicons-pack/angular': major
'@devicons-pack/lit': major
'@devicons-pack/web-components': major
'@devicons-pack/alpine': major
'@devicons-pack/htmx': major
---

Monorepo consolidation — `devicons-react` moves to the `@devicons-pack` scope
with eleven new framework packages, all generated from
[devicons/devicon](https://github.com/devicons/devicon) (578 icons, 6 variants:
original, plain, line, and their -wordmark forms):

- `devicons-react` → `@devicons-pack/react`: tree-shakeable per-variant entries, dual ESM+CJS
- New: `/svg`, `/preact`, `/vue`, `/solid`, `/svelte`, `/astro`, `/angular`,
  `/lit`, `/web-components`, `/alpine`, `/htmx`
