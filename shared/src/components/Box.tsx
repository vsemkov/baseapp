import { FC, useMemo, JSXElementConstructor, ComponentProps, AllHTMLAttributes } from 'react';

import { sprinkles, Sprinkles } from '../theme/sprinkles.css';

type SprinklesKeys = keyof Sprinkles;
type JSXElement = keyof JSX.IntrinsicElements | JSXElementConstructor<any>;
export interface Props
  extends Omit<AllHTMLAttributes<HTMLElement>, 'as' | 'className' | SprinklesKeys>,
    Sprinkles {
  as?: JSXElement;
  className?: string;
}
type a = ComponentProps<'div'>;

export const Box: FC<Props> = ({ as: Component = 'div', className, ...props }) => {
  const [sprinklesProps, componentProps] = useMemo(
    () =>
      Object.keys(props).reduce<[Record<string, any>, Record<string, any>]>(
        (acc, propName) => {
          if (sprinkles.properties.has(propName as SprinklesKeys)) {
            acc[0][propName] = props[propName as SprinklesKeys];
          } else {
            acc[1][propName] = props[propName as keyof typeof props];
          }

          return acc;
        },
        [{}, {}],
      ),
    Object.values(props),
  );

  return (
    <Component
      className={`${className ? `${className} ` : ''}${sprinkles(sprinklesProps)}`}
      {...componentProps}
    />
  );
};
