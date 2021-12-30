import { FC } from 'react';
import Moon from '../assets/svg/Moon.svg';
import Sun from '../assets/svg/Sun.svg';
import { Theme } from '../types';

import * as s from './ThemeSwitcher.css';

export interface Props {
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
}

export const ThemeSwitcher: FC<Props> = ({ theme, onThemeChange }) => {
  const handleThemeChange = () => {
    onThemeChange(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button className={s.themeSwitcher} type="button" onClick={handleThemeChange}>
      <span className={s.sun}>
        <Sun />
      </span>
      <span className={s.moon}>
        <Moon />
      </span>
    </button>
  );
};
