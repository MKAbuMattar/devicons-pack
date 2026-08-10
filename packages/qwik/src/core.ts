import {type JSXOutput, jsx} from '@builder.io/qwik';

export type DevIconProps = Record<string, unknown> & {
  /** Accessible label. Without it the icon is aria-hidden (decorative). */
  title?: string;
};

export type DevIconComponent = (props?: DevIconProps) => JSXOutput;

/** Factory used by the generated icon modules — not meant for direct use. */
export const createDevIcon = (
  name: string,
  attrs: Record<string, string>,
  html: string,
): DevIconComponent => {
  return (props = {}) => {
    const {title, ...rest} = props;
    return jsx('svg', {
      ...attrs,
      role: 'img',
      'aria-hidden': title ? undefined : 'true',
      'aria-label': title as string | undefined,
      dangerouslySetInnerHTML: html,
      ...rest,
    });
  };
};
