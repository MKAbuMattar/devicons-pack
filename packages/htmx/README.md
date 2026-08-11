# @devicons-pack/htmx

[Devicons](https://github.com/devicons/devicon) for htmx — a
tiny server handler that serves icon SVG fragments for htmx to swap in.
578 icons in `original`, `plain`, `line`, and their `-wordmark` variants.

**Docs:** https://devicons-pack.mkabumattar.com · **This package:** [npm](https://www.npmjs.com/package/@devicons-pack/htmx) · **All packages:** [@devicons-pack](https://www.npmjs.com/org/devicons-pack)

## Install

```sh
pnpm add @devicons-pack/htmx
```

## Usage

Server (Express, or plain `node:http`):

```js
import express from 'express';
import {devIconHandler} from '@devicons-pack/htmx';

const app = express();
app.use(devIconHandler());  // GET /devicons/:style/:slug?label=...
```

Page:

```html
<span hx-get="/devicons/original/javascript" hx-trigger="load"></span>
<span hx-get="/devicons/plain-wordmark/typescript?label=Lambda" hx-trigger="load"></span>
```

Responses are sent with immutable cache headers. There's also a direct helper
for template engines: `await iconHtml('javascript', 'architecture-service', 'Javascript')`.

## License

[MIT](https://github.com/MKAbuMattar/devicons-pack/blob/main/LICENSE).
Devicon artwork is from [devicons/devicon](https://github.com/devicons/devicon) (MIT).
