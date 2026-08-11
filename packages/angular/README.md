# @devicons-pack/angular

[Devicons](https://github.com/devicons/devicon) for Angular — a
standalone `devIcon` directive with tree-shakeable icon data. 578 icons
in `original`, `plain`, `line`, and their `-wordmark` variants. Angular 17+.

**Docs:** https://devicons-pack.mkabumattar.com · **This package:** [npm](https://www.npmjs.com/package/@devicons-pack/angular) · **All packages:** [@devicons-pack](https://www.npmjs.com/org/devicons-pack)

## Install

```sh
pnpm add @devicons-pack/angular
```

## Usage

```ts
import {Component} from '@angular/core';
import {DevIconDirective, register} from '@devicons-pack/angular';
import {Javascript} from '@devicons-pack/angular/original';

register(Javascript);

@Component({
  standalone: true,
  imports: [DevIconDirective],
  template: `
    <span devIcon="javascript"></span>
    <span devIcon="javascript" iconStyle="plain" iconLabel="JavaScript"></span>
  `,
})
export class AppComponent {}
```

Only registered icons end up in your bundle. Without `iconLabel` the svg is
`aria-hidden`. `iconHtml(name, style, label)` is exported for direct use.

## License

[MIT](https://github.com/MKAbuMattar/devicons-pack/blob/main/LICENSE).
Devicon artwork is from [devicons/devicon](https://github.com/devicons/devicon) (MIT).
