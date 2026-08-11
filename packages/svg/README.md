# @devicons-pack/svg

[Devicons](https://github.com/devicons/devicon) as optimized SVGs —
578 icons in `original`, `plain`, `line`, and their `-wordmark` variants — with typed metadata.

Part of the [devicons-pack](https://github.com/MKAbuMattar/devicons-pack) family.

**Docs:** https://devicons-pack.mkabumattar.com · **This package:** [npm](https://www.npmjs.com/package/@devicons-pack/svg) · **All packages:** [@devicons-pack](https://www.npmjs.com/org/devicons-pack)

## Install

```sh
pnpm add @devicons-pack/svg
```

## Usage

```ts
import {metadata, getIcon, getIconPath} from '@devicons-pack/svg';
import type {IconSlug, IconVariant} from '@devicons-pack/svg';

getIcon('javascript');                 // {slug: 'javascript', name: 'Javascript', styles: [...]}
getIconPath('javascript', 'architecture-service');     // '@devicons-pack/svg/icons/original/javascript.svg'
```

Import an SVG directly (bundler):

```ts
import amazon-ec2 from '@devicons-pack/svg/icons/original/javascript.svg';
```

Or grab the raw metadata: `import meta from '@devicons-pack/svg/metadata.json'`.

## License

[MIT](https://github.com/MKAbuMattar/devicons-pack/blob/main/LICENSE).
Devicon artwork is from [devicons/devicon](https://github.com/devicons/devicon) (MIT).
