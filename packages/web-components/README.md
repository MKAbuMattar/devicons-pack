# @devicons-pack/web-components

[Devicons](https://github.com/devicons/devicon) as a framework-less
`<dev-icon>` custom element — 578 icons in `original`, `plain`, `line`, and
their `-wordmark` variants. Works in any page, any framework, no build required.

**Docs:** https://devicons-pack.mkabumattar.com · **This package:** [npm](https://www.npmjs.com/package/@devicons-pack/web-components) · **All packages:** [@devicons-pack](https://www.npmjs.com/org/devicons-pack)

## Install

```sh
pnpm add @devicons-pack/web-components
```

## Usage

```js
import {defineDevIcon, register} from '@devicons-pack/web-components';
import {Javascript} from '@devicons-pack/web-components/original';

defineDevIcon();   // defines <dev-icon>
register(Javascript);      // makes it available by name
```

```html
<dev-icon name="javascript"></dev-icon>
<dev-icon name="javascript" variant="plain-wordmark" label="Javascript"></dev-icon>
```

Or skip the registry and set the icon directly:

```js
document.querySelector('dev-icon').icon = Javascript;
```

Only imported icons end up in your bundle. Without `label` the svg is `aria-hidden`.

## License

[MIT](https://github.com/MKAbuMattar/devicons-pack/blob/main/LICENSE).
Devicon artwork is from [devicons/devicon](https://github.com/devicons/devicon) (MIT).
