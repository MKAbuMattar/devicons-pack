# @devicons-pack/vue

[Devicons](https://github.com/devicons/devicon) as tree-shakeable,
typed Vue 3 components — 578 icons in `original`, `plain`, `line`, and their `-wordmark` variants.
Dual ESM + CJS.

## Install

```sh
pnpm add @devicons-pack/vue
```

## Usage

```vue
<script setup>
import {Javascript} from '@devicons-pack/vue/original';
// or per-icon: import Javascript from '@devicons-pack/vue/plain-wordmark/nodejs';
</script>

<template>
  <Javascript width="32" />
  <Javascript title="Amazon EC2" />  <!-- accessible: role="img" + aria-label -->
</template>
```

Styles: `@devicons-pack/vue/original`, `/plain`, `/line`, `/original-wordmark`, `/plain-wordmark`, `/line-wordmark`.
Extra attributes land on the root `<svg>`. Without `title` the icon is `aria-hidden`.

## License

[MIT](https://github.com/MKAbuMattar/devicons-pack/blob/main/LICENSE).
Devicon artwork is from [devicons/devicon](https://github.com/devicons/devicon) (MIT).
