import { FC } from 'react';

import * as s from './Button.css';

interface Props extends NonNullable<s.ButtonVariants> {
  id?: string;
  onClick: () => void;
}

export const Button: FC<Props> = ({ children, id, onClick, ...props }) => {
  return (
    <button className={s.button(props)} type="button" id={id} onClick={onClick}>
      {children}
    </button>
  );
};
