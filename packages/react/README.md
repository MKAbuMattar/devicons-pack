# @devicons-pack/react

[Devicons](https://github.com/devicons/devicon) as tree-shakeable,
typed React components — 578 icons in `original`, `plain`, `line`, and their `-wordmark` variants.

Successor of the deprecated [`devicons-react`](https://www.npmjs.com/package/devicons-react) package. Dual ESM + CJS.

**Docs:** https://devicons-pack.mkabumattar.com · **This package:** [npm](https://www.npmjs.com/package/@devicons-pack/react) · **All packages:** [@devicons-pack](https://www.npmjs.com/org/devicons-pack)

## Install

```sh
pnpm add @devicons-pack/react
```

## Usage

```tsx
import {Javascript} from '@devicons-pack/react/original';
// or per-icon (no barrel): import Javascript from '@devicons-pack/react/plain-wordmark/nodejs';

<Javascript width={32} />                     // decorative: aria-hidden
<Javascript title="Amazon EC2" />          // accessible: role="img" + aria-label
```

Styles: `@devicons-pack/react/original`, `/plain`, `/line`, `/original-wordmark`, `/plain-wordmark`, `/line-wordmark`.
Every component forwards its ref and accepts all `SVGProps<SVGSVGElement>`.
Icon names are the PascalCased slug (`1st-place-medal` → `Icon1stPlaceMedal`).

## License

[MIT](https://github.com/MKAbuMattar/devicons-pack/blob/main/LICENSE).
Devicon artwork is from [devicons/devicon](https://github.com/devicons/devicon) (MIT).
