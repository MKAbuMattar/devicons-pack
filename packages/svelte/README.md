# @devicons-pack/svelte

[Devicons](https://github.com/devicons/devicon) for Svelte 5 —
tree-shakeable icon data plus a single `Icon` component. 578 icons in
`original`, `plain`, `line`, and their `-wordmark` variants.

**Docs:** https://devicons-pack.mkabumattar.com · **This package:** [npm](https://www.npmjs.com/package/@devicons-pack/svelte) · **All packages:** [@devicons-pack](https://www.npmjs.com/org/devicons-pack)

## Install

```sh
pnpm add @devicons-pack/svelte
```

## Usage

```svelte
<script>
  import {Icon} from '@devicons-pack/svelte';
  import {Javascript} from '@devicons-pack/svelte/original';
  // or per-icon: import Javascript from '@devicons-pack/svelte/plain-wordmark/nodejs';
</script>

<Icon icon={Javascript} width="32" />
<Icon icon={Javascript} title="Amazon EC2" />  <!-- accessible label -->
```

Only the icons you import end up in your bundle. Extra attributes land on the
root `<svg>`. Without `title` the icon is `aria-hidden`.

## License

[MIT](https://github.com/MKAbuMattar/devicons-pack/blob/main/LICENSE).
Devicon artwork is from [devicons/devicon](https://github.com/devicons/devicon) (MIT).
