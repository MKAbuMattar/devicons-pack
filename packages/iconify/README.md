# @devicons-pack/iconify

[Devicons](https://github.com/devicons/devicon) as Iconify JSON collections — drop into unplugin-icons, the Tailwind Iconify plugin, or any Iconify component — 578 icons in `original`, `plain`, `line`, and their `-wordmark` variants.

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
import original from "@devicons-pack/iconify/original.json";
addCollection(original);
// <Icon icon="devicons-pack-original:javascript" />
```

One JSON collection per variant: `./original.json`, `./plain.json`, `./line.json`, `./original-wordmark.json`, `./plain-wordmark.json`, `./line-wordmark.json`. Collection prefixes follow `devicons-pack-<variant>`.

## License

[MIT](https://github.com/MKAbuMattar/devicons-pack/blob/main/LICENSE).
Devicon artwork is from [devicons/devicon](https://github.com/devicons/devicon) (MIT).
