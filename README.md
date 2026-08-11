# devicons-pack

[Devicons](https://github.com/devicons/devicon) — Microsoft's familiar,
packaged for every stack, with fully automated releases from the devicons/devicon icon set.

**Docs:** https://devicons-pack.mkabumattar.com · **All packages on npm:** [@devicons-pack](https://www.npmjs.com/org/devicons-pack)

## Packages

| Package | Description | npm |
|---|---|---|
| [`@devicons-pack/svg`](packages/svg) | Optimized SVGs (4 icon sets) + typed metadata | [npm](https://www.npmjs.com/package/@devicons-pack/svg) |
| [`@devicons-pack/react`](packages/react) | Tree-shakeable typed React components | [npm](https://www.npmjs.com/package/@devicons-pack/react) |
| [`@devicons-pack/preact`](packages/preact) | Tree-shakeable typed Preact components | [npm](https://www.npmjs.com/package/@devicons-pack/preact) |
| [`@devicons-pack/vue`](packages/vue) | Tree-shakeable typed Vue 3 components | [npm](https://www.npmjs.com/package/@devicons-pack/vue) |
| [`@devicons-pack/solid`](packages/solid) | SolidJS components (DOM, SSR, and `solid`-condition builds) | [npm](https://www.npmjs.com/package/@devicons-pack/solid) |
| [`@devicons-pack/svelte`](packages/svelte) | Svelte 5 `Icon` component + tree-shakeable icon data | [npm](https://www.npmjs.com/package/@devicons-pack/svelte) |
| [`@devicons-pack/astro`](packages/astro) | Zero-JS Astro component, SVG inlined at build time | [npm](https://www.npmjs.com/package/@devicons-pack/astro) |
| [`@devicons-pack/angular`](packages/angular) | Standalone `devIcon` directive (Angular 17+) | [npm](https://www.npmjs.com/package/@devicons-pack/angular) |
| [`@devicons-pack/lit`](packages/lit) | `<dev-icon>` LitElement + template helpers | [npm](https://www.npmjs.com/package/@devicons-pack/lit) |
| [`@devicons-pack/web-components`](packages/web-components) | Framework-less `<dev-icon>` custom element | [npm](https://www.npmjs.com/package/@devicons-pack/web-components) |
| [`@devicons-pack/alpine`](packages/alpine) | Alpine.js directive + magic | [npm](https://www.npmjs.com/package/@devicons-pack/alpine) |
| [`@devicons-pack/htmx`](packages/htmx) | Server handler serving icon fragments for htmx | [npm](https://www.npmjs.com/package/@devicons-pack/htmx) |

## Release channels

- `latest` — stable, published when the auto-generated Version Packages PR merges
- `beta` — pre-releases from the `next` branch (`x.y.z-beta.N`)
- `canary` — snapshot of every `main` merge (`@devicons-pack/react@canary`)

New upstream icon land automatically: a weekly workflow syncs
the devicons/devicon icons package, opens a PR, and merging it rides the release train.
No release step in this repo is manual.

## Development

```sh
pnpm install
pnpm sync      # scrape upstream → optimize → assets/ + metadata.json
pnpm build     # build all packages
pnpm lint
```

Previously: [`archived-devicons-react`](https://github.com/MKAbuMattar/archived-devicons-react) and
[`archived-devicons-react_private`](https://github.com/MKAbuMattar/archived-devicons-react_private).
The old npm name `devicons-react` is deprecated in favor of `@devicons-pack/react`.

Devicon artwork is from [devicons/devicon](https://github.com/devicons/devicon) (MIT).
This repo and packages: [MIT](LICENSE).
