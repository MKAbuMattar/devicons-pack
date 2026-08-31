# @devicons-pack/qwik

[Devicons](https://github.com/devicons/devicon) as typed Qwik components (ESM only) — 578 icons in `original`, `plain`, `line`, and their `-wordmark` variants.

**Docs:** https://devicons-pack.mkabumattar.com · **This package:** [npm](https://www.npmjs.com/package/@devicons-pack/qwik) · **All packages:** [@devicons-pack](https://www.npmjs.com/org/devicons-pack)

## Install

```sh
pnpm add @devicons-pack/qwik
```

## Usage

```tsx
import {Javascript} from '@devicons-pack/qwik/original';
// or per-icon (no barrel): import Nodejs from '@devicons-pack/qwik/plain-wordmark/nodejs';

<Javascript width={32} />                     // decorative: aria-hidden
<Javascript title="JavaScript" />          // accessible: role="img" + aria-label
```

Variants: `@devicons-pack/qwik/original`, `/plain`, `/line`, `/original-wordmark`, `/plain-wordmark`, `/line-wordmark`.
Icon names are the PascalCased slug (`nodejs` → `Nodejs`).

## License

[MIT](https://github.com/MKAbuMattar/devicons-pack/blob/main/LICENSE).
Devicon artwork is from [devicons/devicon](https://github.com/devicons/devicon) (MIT).
