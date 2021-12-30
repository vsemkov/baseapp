import { FC } from 'react';
import { RenderLinkComponent, Theme } from '../types';
import Beta from '../assets/svg/Beta.svg';

import * as s from './Logo.css';

export interface Props {
  theme: Theme;
  renderLinkComponent: RenderLinkComponent;
}

export const Logo: FC<Props> = ({ theme, renderLinkComponent }) => (
  <div className={s.container}>
    {renderLinkComponent({
      to: '/',
      children: (
        <img
          className={s.logo}
          alt="Logo"
          src={theme === 'dark' ? (window as any).env.logoDarkUrl : (window as any).env.logoUrl}
        />
      ),
    })}
    <div className={s.beta}>
      <Beta />
    </div>
  </div>
);
