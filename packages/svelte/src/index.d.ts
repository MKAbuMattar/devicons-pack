import type {Component} from 'svelte';
import type {SVGAttributes} from 'svelte/elements';

export type DevIconData = {
  attrs: Record<string, string>;
  html: string;
};

export type IconProps = SVGAttributes<SVGSVGElement> & {
  /** Icon data imported from a style entry, e.g. `@devicons-pack/svelte/original` */
  icon: DevIconData;
  /** Accessible label. Without it the icon is aria-hidden (decorative). */
  title?: string;
};

export declare const Icon: Component<IconProps>;
