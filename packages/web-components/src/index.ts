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

/** Makes an icon usable by name: `<dev-icon name="rocket" variant="flat">`. */
export const register = (...icons: DevIconData[]): void => {
  for (const icon of icons) registry.set(`${icon.style}/${icon.slug}`, icon);
};

const render = (el: HTMLElement, icon: DevIconData | undefined): void => {
  if (!icon) {
    el.replaceChildren();
    return;
  }
  const label = el.getAttribute('label');
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  for (const [k, v] of Object.entries(icon.attrs)) svg.setAttribute(k, v);
  svg.setAttribute('role', 'img');
  if (label) svg.setAttribute('aria-label', label);
  else svg.setAttribute('aria-hidden', 'true');
  svg.innerHTML = icon.html;
  el.replaceChildren(svg);
};

/**
 * Defines the `<dev-icon>` custom element (browser only).
 *
 * ```html
 * <dev-icon name="rocket" variant="modern" label="Rocket"></dev-icon>
 * ```
 *
 * Icons resolve from the registry (`register(Rocket)`) or via the `icon`
 * property. `variant` defaults to `flat`; without `label` the svg is
 * aria-hidden.
 */
export const defineDevIcon = (tag = 'dev-icon'): void => {
  if (typeof HTMLElement === 'undefined') {
    throw new Error('@devicons-pack/web-components requires a DOM');
  }
  if (customElements.get(tag)) return;

  class DevIconElement extends HTMLElement {
    static observedAttributes = ['name', 'variant', 'label'];
    #icon: DevIconData | undefined;

    get icon(): DevIconData | undefined {
      return this.#icon;
    }

    set icon(icon: DevIconData | undefined) {
      this.#icon = icon;
      render(this, this.#resolve());
    }

    #resolve(): DevIconData | undefined {
      if (this.#icon) return this.#icon;
      const name = this.getAttribute('name');
      const variant = this.getAttribute('variant') ?? 'original';
      return name ? registry.get(`${variant}/${name}`) : undefined;
    }

    connectedCallback() {
      render(this, this.#resolve());
    }

    attributeChangedCallback() {
      if (this.isConnected) render(this, this.#resolve());
    }
  }

  customElements.define(tag, DevIconElement);
};
