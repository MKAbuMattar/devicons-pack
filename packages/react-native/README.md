# @devicons-pack/react-native

[Devicons](https://github.com/devicons/devicon) as typed React Native components built on react-native-svg — 578 icons in `original`, `plain`, `line`, and their `-wordmark` variants.

**Docs:** https://devicons-pack.mkabumattar.com · **This package:** [npm](https://www.npmjs.com/package/@devicons-pack/react-native) · **All packages:** [@devicons-pack](https://www.npmjs.com/org/devicons-pack)

## Install

```sh
pnpm add @devicons-pack/react-native
```

## Usage

```tsx
import {Javascript} from '@devicons-pack/react-native/original';
// or per-icon (no barrel): import Nodejs from '@devicons-pack/react-native/plain-wordmark/nodejs';

<Javascript width={32} height={32} />
<Javascript title="JavaScript" />  // accessible label
```

Variants: `@devicons-pack/react-native/original`, `/plain`, `/line`, `/original-wordmark`, `/plain-wordmark`, `/line-wordmark`.
Requires the `react-native-svg` peer. Default size 24, override via props.
Icon names are the PascalCased slug (`nodejs` → `Nodejs`).

## License

[MIT](https://github.com/MKAbuMattar/devicons-pack/blob/main/LICENSE).
Devicon artwork is from [devicons/devicon](https://github.com/devicons/devicon) (MIT).
