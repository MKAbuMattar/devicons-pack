export type DevIconData = {
  slug: string;
  style:
    | 'original'
    | 'plain'
    | 'line'
    | 'original-wordmark'
    | 'plain-wordmark'
    | 'line-wordmark';
  attrs: Record<string, string>;
  html: string;
};

const registry = new Map<string, DevIconData>();

/** Makes icons usable by name in the directive and magic. */
export const register = (...icons: DevIconData[]): void => {
  for (const icon of icons) registry.set(`${icon.style}/${icon.slug}`, icon);
};

const esc = (v: string): string =>
  v.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');

/** SVG markup for an icon; empty string when the icon is unknown. */
export const iconHtml = (
  name: string,
  style: DevIconData['style'] = 'original',
  label?: string,
): string => {
  const icon = registry.get(`${style}/${name}`);
  if (!icon) return '';
  const attrs = Object.entries(icon.attrs)
    .map(([k, v]) => ` ${k}="${esc(v)}"`)
    .join('');
  const aria = label ? ` aria-label="${esc(label)}"` : ' aria-hidden="true"';
  return `<svg${attrs} role="img"${aria}>${icon.html}</svg>`;
};

type Expression =
  | string
  | {name: string; style?: DevIconData['style']; label?: string};

/**
 * Alpine plugin: `Alpine.plugin(devIcon)`.
 *
 * ```html
 * <span x-dev-icon="'rocket'"></span>
 * <span x-dev-icon="{name: 'rocket', style: 'modern', label: 'Rocket'}"></span>
 * <span x-html="$devIcon('rocket', 'flat')"></span>
 * ```
 */
// biome-ignore lint/suspicious/noExplicitAny: Alpine has no bundled types
export default function devIcon(Alpine: any): void {
  Alpine.magic('devIcon', () => iconHtml);
  Alpine.directive(
    'dev-icon',
    // biome-ignore lint/suspicious/noExplicitAny: Alpine directive signature
    (el: HTMLElement, {expression}: any, {evaluateLater, effect}: any) => {
      const getValue = evaluateLater(expression);
      effect(() =>
        getValue((value: Expression) => {
          const opts = typeof value === 'string' ? {name: value} : value;
          el.innerHTML = iconHtml(opts.name, opts.style, opts.label);
        }),
      );
    },
  );
}
