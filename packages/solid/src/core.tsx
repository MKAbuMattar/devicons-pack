import {type Component, type JSX, splitProps} from 'solid-js';

export type DevIconProps = JSX.SvgSVGAttributes<SVGSVGElement> & {
  /** Accessible label. Without it the icon is aria-hidden (decorative). */
  title?: string;
};

export type DevIconComponent = Component<DevIconProps>;

/** Factory used by the generated icon modules — not meant for direct use. */
export const createDevIcon = (
  name: string,
  attrs: Record<string, string>,
  html: string,
): DevIconComponent => {
  const Component: DevIconComponent = (props) => {
    const [local, rest] = splitProps(props, ['title']);
    return (
      <svg
        {...attrs}
        role="img"
        aria-hidden={local.title ? undefined : 'true'}
        aria-label={local.title}
        innerHTML={html}
        {...rest}
      />
    );
  };
  (Component as {displayName?: string}).displayName = name;
  return Component;
};
