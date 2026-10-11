import {type FunctionComponent, h, type SVGAttributes} from 'preact';

export type DevIconProps = Omit<
  SVGAttributes<SVGSVGElement>,
  'dangerouslySetInnerHTML'
> & {
  /** Accessible label. Without it the icon is aria-hidden (decorative). */
  title?: string;
};

export type DevIconComponent = FunctionComponent<DevIconProps>;

/** Factory used by the generated icon modules — not meant for direct use. */
export const createDevIcon = (
  displayName: string,
  attrs: Record<string, string>,
  html: string,
): DevIconComponent => {
  const Component: DevIconComponent = ({title, ...props}) =>
    h('svg', {
      ...attrs,
      role: 'img',
      'aria-hidden': title ? undefined : 'true',
      'aria-label': title,
      dangerouslySetInnerHTML: {__html: html},
      ...props,
    });
  Component.displayName = displayName;
  return Component;
};
