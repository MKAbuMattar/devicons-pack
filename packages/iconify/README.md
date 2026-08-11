# @devicons-pack/iconify

[Devicons](https://github.com/devicons/devicon) as Iconify JSON collections — drop into unplugin-icons, the Tailwind Iconify plugin, or any Iconify component — 578 icons in `flat`, `high-contrast`, and `modern` sets.

**Docs:** https://devicons-pack.mkabumattar.com · **This package:** [npm](https://www.npmjs.com/package/@devicons-pack/iconify) · **All packages:** [@devicons-pack](https://www.npmjs.com/org/devicons-pack)

## Install

```sh
pnpm add @devicons-pack/iconify
```

## Usage

```ts
// unplugin-icons (vite.config.ts)
import Icons from "unplugin-icons/vite";
import {ExternalPackageIconLoader} from "unplugin-icons/loaders";

Icons({customCollections: ExternalPackageIconLoader("@devicons-pack/iconify")});
```

```ts
// or register manually with any Iconify component:
import {addCollection} from "@iconify/react";
import flat from "@devicons-pack/iconify/flat.json";
addCollection(flat);
// <Icon icon="devicons-pack-flat:rocket" />
```

## License

[MIT](https://github.com/MKAbuMattar/devicons-pack/blob/main/LICENSE).
Devicon artwork is from [devicons/devicon](https://github.com/devicons/devicon) (MIT).
