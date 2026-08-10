# @devicons-pack/web-components

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
