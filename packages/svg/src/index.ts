import metadataJson from '../metadata.json' with {type: 'json'};
import type {IconSlug, IconVariant} from './icon.generated';

export type {IconSlug, IconVariant} from './icon.generated';

export type IconEntry = {
  slug: IconSlug;
  name: string;
  styles: IconVariant[];
  tags: string[];
  altnames: string[];
};

export type IconMetadata = {
  count: number;
  styles: IconVariant[];
  icons: IconEntry[];
};

export const metadata = metadataJson as IconMetadata;

const bySlug = new Map(metadata.icons.map((e) => [e.slug, e]));

/** Metadata entry for one icon, or undefined if the slug is unknown. */
export const getIcon = (slug: IconSlug): IconEntry | undefined =>
  bySlug.get(slug);

/**
 * Package path of an icon SVG, resolvable by bundlers and
 * `import.meta.resolve` / `require.resolve`.
 */
export const getIconPath = (slug: IconSlug, style: IconVariant): string =>
  `@devicons-pack/svg/icons/${style}/${slug}.svg`;
