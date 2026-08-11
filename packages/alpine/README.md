# @devicons-pack/alpine

[Devicons](https://github.com/devicons/devicon) for Alpine.js —
an `x-dev-icon` directive and `$devIcon` magic with tree-shakeable icon
data. 578 icons in `original`, `plain`, `line`, and their `-wordmark` variants.

**Docs:** https://devicons-pack.mkabumattar.com · **This package:** [npm](https://www.npmjs.com/package/@devicons-pack/alpine) · **All packages:** [@devicons-pack](https://www.npmjs.com/org/devicons-pack)

## Install

```sh
pnpm add @devicons-pack/alpine
```

## Usage

```js
import Alpine from 'alpinejs';
import devIcon, {register} from '@devicons-pack/alpine';
import {Javascript} from '@devicons-pack/alpine/original';

register(Javascript);
Alpine.plugin(devIcon);
Alpine.start();
```

```html
<span x-dev-icon="'javascript'"></span>
<span x-dev-icon="{name: 'javascript', style: 'plain-wordmark', label: 'Javascript'}"></span>
<span x-data x-html="$devIcon('javascript', 'architecture-service')"></span>
```

Only registered icons end up in your bundle. Without `label` the svg is `aria-hidden`.

## License

[MIT](https://github.com/MKAbuMattar/devicons-pack/blob/main/LICENSE).
Devicon artwork is from [devicons/devicon](https://github.com/devicons/devicon) (MIT).
