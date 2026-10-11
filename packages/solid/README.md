# @devicons-pack/solid

[Devicons](https://github.com/devicons/devicon) as tree-shakeable,
typed SolidJS components — 578 icons in `original`, `plain`, `line`, and their `-wordmark` variants.
Ships DOM, SSR, and `solid`-condition JSX source builds.

**Docs:** https://devicons-pack.mkabumattar.com · **This package:** [npm](https://www.npmjs.com/package/@devicons-pack/solid) · **All packages:** [@devicons-pack](https://www.npmjs.com/org/devicons-pack)

## Install

```sh
pnpm add @devicons-pack/solid
```

## Usage

```tsx
import {Javascript} from '@devicons-pack/solid/original';
// or per-icon: import Javascript from '@devicons-pack/solid/plain-wordmark/nodejs';

<Javascript width={32} />
<Javascript title="Amazon EC2" />  // accessible: role="img" + aria-label
```

Styles: `@devicons-pack/solid/original`, `/plain`, `/line`, `/original-wordmark`, `/plain-wordmark`, `/line-wordmark`.
Extra props land on the root `<svg>`. Without `title` the icon is `aria-hidden`.

## License

[MIT](https://github.com/MKAbuMattar/devicons-pack/blob/main/LICENSE).
Devicon artwork is from [devicons/devicon](https://github.com/devicons/devicon) (MIT).
