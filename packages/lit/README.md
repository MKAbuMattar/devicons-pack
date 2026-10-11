# @devicons-pack/lit

[Devicons](https://github.com/devicons/devicon) for Lit — a
`<dev-icon>` LitElement plus template helpers, with tree-shakeable icon
data. 578 icons in `original`, `plain`, `line`, and their `-wordmark` variants.

**Docs:** https://devicons-pack.mkabumattar.com · **This package:** [npm](https://www.npmjs.com/package/@devicons-pack/lit) · **All packages:** [@devicons-pack](https://www.npmjs.com/org/devicons-pack)

## Install

```sh
pnpm add @devicons-pack/lit
```

## Usage

As an element:

```js
import {defineDevIcon, register} from '@devicons-pack/lit';
import {Javascript} from '@devicons-pack/lit/original';

register(Javascript);
defineDevIcon();
```

```html
<dev-icon name="javascript"></dev-icon>
<dev-icon name="javascript" variant="plain-wordmark" label="Javascript"></dev-icon>
```

Inside your own templates:

```js
import {html} from 'lit';
import {iconTemplate} from '@devicons-pack/lit';
import {Javascript} from '@devicons-pack/lit/original';

html`<button>${iconTemplate(Javascript, 'Launch')} Launch</button>`;
```

Only imported icons end up in your bundle. Without `label` the svg is `aria-hidden`.

## License

[MIT](https://github.com/MKAbuMattar/devicons-pack/blob/main/LICENSE).
Devicon artwork is from [devicons/devicon](https://github.com/devicons/devicon) (MIT).
