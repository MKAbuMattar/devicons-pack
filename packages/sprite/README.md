# @devicons-pack/sprite

[Devicons](https://github.com/devicons/devicon) as SVG symbol sprites — one `<use href>` sheet per variant, ideal for pages with many icons — 578 icons in `original`, `plain`, `line`, and their `-wordmark` variants.

**Docs:** https://devicons-pack.mkabumattar.com · **This package:** [npm](https://www.npmjs.com/package/@devicons-pack/sprite) · **All packages:** [@devicons-pack](https://www.npmjs.com/org/devicons-pack)

## Install

```sh
pnpm add @devicons-pack/sprite
```

## Usage

```html
<!-- copy dist/original.svg into your static assets, then: -->
<svg width="32" height="32"><use href="/sprites/original.svg#javascript" /></svg>
```

```ts
import {spriteHref} from "@devicons-pack/sprite";
spriteHref("/sprites/original.svg", "javascript"); // "/sprites/original.svg#javascript"
```

One sprite per variant: `./original.svg`, `./plain.svg`, `./line.svg`, `./original-wordmark.svg`, `./plain-wordmark.svg`, `./line-wordmark.svg`.

## License

[MIT](https://github.com/MKAbuMattar/devicons-pack/blob/main/LICENSE).
Devicon artwork is from [devicons/devicon](https://github.com/devicons/devicon) (MIT).
