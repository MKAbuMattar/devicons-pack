# @devicons-pack/preact

[Devicons](https://github.com/devicons/devicon) as tree-shakeable,
typed Preact components — 578 icons in `original`, `plain`, `line`, and their `-wordmark` variants.
Dual ESM + CJS. Preact 10+.

## Install

```sh
pnpm add @devicons-pack/preact
```

## Usage

```tsx
import {Javascript} from '@devicons-pack/preact/original';
// or per-icon: import Javascript from '@devicons-pack/preact/plain-wordmark/nodejs';

<Javascript width={32} />
<Javascript title="Amazon EC2" />  // accessible: role="img" + aria-label
```

Styles: `@devicons-pack/preact/original`, `/plain`, `/line`, `/original-wordmark`, `/plain-wordmark`, `/line-wordmark`.
Extra props land on the root `<svg>`. Without `title` the icon is `aria-hidden`.

## License

[MIT](https://github.com/MKAbuMattar/devicons-pack/blob/main/LICENSE).
Devicon artwork is from [devicons/devicon](https://github.com/devicons/devicon) (MIT).
