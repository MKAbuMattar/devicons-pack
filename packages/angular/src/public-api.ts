import {
  Directive,
  ElementRef,
  Input,
  inject,
  type OnChanges,
} from '@angular/core';

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

/** Makes icons usable by name in the directive. */
export const register = (...icons: DevIconData[]): void => {
  for (const icon of icons) registry.set(`${icon.style}/${icon.slug}`, icon);
};

const esc = (v: string): string =>
  v.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');

/** Raw SVG markup for a registered icon; empty string when unknown. */
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

/**
 * Standalone directive rendering a registered icon into the host element.
 *
 * ```html
 * <span devIcon="javascript"></span>
 * <span devIcon="javascript" iconStyle="original" iconLabel="JavaScript"></span>
 * ```
 */
@Directive({selector: '[devIcon]', standalone: true})
export class DevIconDirective implements OnChanges {
  @Input({required: true}) devIcon!: string;
  @Input() iconStyle: DevIconData['style'] = 'original';
  @Input() iconLabel?: string;

  readonly #el = inject<ElementRef<HTMLElement>>(ElementRef);

  ngOnChanges(): void {
    this.#el.nativeElement.innerHTML = iconHtml(
      this.devIcon,
      this.iconStyle,
      this.iconLabel,
    );
  }
}
