export type SpriteSet =
  | 'original'
  | 'plain'
  | 'line'
  | 'original-wordmark'
  | 'plain-wordmark'
  | 'line-wordmark';

export const sets: readonly SpriteSet[] = [
  'original',
  'plain',
  'line',
  'original-wordmark',
  'plain-wordmark',
  'line-wordmark',
] as const;

/**
 * Fragment URL for one icon in a sprite you serve yourself:
 * `spriteHref('/sprites/flat.svg', 'rocket')` -> `/sprites/flat.svg#rocket`.
 */
export const spriteHref = (spriteUrl: string, slug: string): string =>
  `${spriteUrl}#${slug}`;

/** Package path of a sprite file, resolvable by bundlers. */
export const spritePath = (set: SpriteSet): string =>
  `@devicons-pack/sprite/${set}.svg`;
