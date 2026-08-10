import {createElement, forwardRef, type SVGProps} from 'react';

export type DevIconProps = Omit<
  SVGProps<SVGSVGElement>,
  'children' | 'dangerouslySetInnerHTML'
> & {
  /** Accessible label. Without it the icon is aria-hidden (decorative). */
  title?: string;
};

export type DevIconComponent = React.ForwardRefExoticComponent<
  DevIconProps & React.RefAttributes<SVGSVGElement>
>;

/** Factory used by the generated icon modules — not meant for direct use. */
export const createDevIcon = (
  displayName: string,
  attrs: Record<string, string>,
  html: string,
): DevIconComponent => {
  const Component = forwardRef<SVGSVGElement, DevIconProps>(
    ({title, ...props}, ref) =>
      createElement('svg', {
        ...attrs,
        role: 'img',
        'aria-hidden': title ? undefined : true,
        'aria-label': title,
        ref,
        dangerouslySetInnerHTML: {__html: html},
        ...props,
      }),
  );
  Component.displayName = displayName;
  return Component;
};
