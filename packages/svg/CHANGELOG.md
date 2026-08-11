# @devicons-pack/svg

## 2.1.1

### Patch Changes

- bf6f5df: Correct `exports` types conditions: CJS consumers now resolve `index.d.cts`
  instead of ESM-flavored types (publint strict clean).

## 2.1.0

### Minor Changes

- 790442d: - **`currentColor` for the font-glyph variants** — `plain`, `line`,
  `plain-wordmark`, and `line-wordmark` are single-color and now inherit CSS
  `color`, so `color: #f0db4f` just works. `original` variants keep their brand
  colors.
  - **Search-friendly metadata** — `tags` and `altnames` from devicon.json are in
    `metadata.json` and the `IconEntry` type; the docs gallery matches them
    (searching "js" finds JavaScript).
  - `"./package.json"` added to every package's exports map; `engines.node >= 18`.

## 2.0.0

### Major Changes

- 48f3c26: Monorepo consolidation — `devicons-react` moves to the `@devicons-pack` scope
  with eleven new framework packages, all generated from
  [devicons/devicon](https://github.com/devicons/devicon) (578 icons, 6 variants:
  original, plain, line, and their -wordmark forms):

  - `devicons-react` → `@devicons-pack/react`: tree-shakeable per-variant entries, dual ESM+CJS
  - New: `/svg`, `/preact`, `/vue`, `/solid`, `/svelte`, `/astro`, `/angular`,
    `/lit`, `/web-components`, `/alpine`, `/htmx`

## 4.0.0

### Major Changes

- 1708546: Monorepo consolidation — `dev-icons` and `aws-react-icons` move to the
  `@dev-icons` scope with ten new framework packages, all generated from the
  devicons/devicon icons set (805 icons, 4 sets: architecture-group,
  architecture-service, category, resource):

  - `dev-icons` → `@devicons-pack/svg`: typed metadata, `getIcon`/`getIconPath`, dual ESM+CJS
  - `aws-react-icons` → `@devicons-pack/react`: tree-shakeable per-set entries, dual ESM+CJS
  - New: `/preact`, `/vue`, `/solid`, `/svelte`, `/astro`, `/angular`, `/lit`,
    `/web-components`, `/alpine`, `/htmx`
