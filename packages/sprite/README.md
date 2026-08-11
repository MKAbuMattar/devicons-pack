# @devicons-pack/sprite

[Devicons](https://github.com/devicons/devicon) as SVG symbol sprites — one `<use href>` sheet per set, ideal for pages with many icons — 578 icons in `flat`, `high-contrast`, and `modern` sets.

**Docs:** https://devicons-pack.mkabumattar.com · **This package:** [npm](https://www.npmjs.com/package/@devicons-pack/sprite) · **All packages:** [@devicons-pack](https://www.npmjs.com/org/devicons-pack)

## Install

```sh
pnpm add @devicons-pack/sprite
```

## Usage

```html
<!-- copy dist/flat.svg into your static assets, then: -->
<svg width="32" height="32"><use href="/sprites/flat.svg#rocket" /></svg>
```

```ts
import {spriteHref} from "@devicons-pack/sprite";
spriteHref("/sprites/flat.svg", "rocket"); // "/sprites/flat.svg#rocket"
```

## License

[MIT](https://github.com/MKAbuMattar/devicons-pack/blob/main/LICENSE).
Devicon artwork is from [devicons/devicon](https://github.com/devicons/devicon) (MIT).
