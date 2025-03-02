import { FC } from 'react';
import cn from 'classnames';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { UserPanel } from './UserPanel/UserPanel';
import * as s from './Header.css';
import { Box } from './Box';
import { themeDark, themeLight } from 'theme/vars.css';
import { HamburgerMenu } from './HamburgerMenu';
import { HeaderContext, HeaderContextValue } from './HeaderContext';
import {
  USER_STATUS_AUTHORIZATION_REQUIRED,
  USER_STATUS_AUTHORIZED,
  USER_STATUS_NOT_AUTHORIZED,
} from 'constants';

type Props = HeaderContextValue;

export const Header: FC<Props> = (props) => {
  const { children, theme } = props;
  const themeClassName = theme === 'light' ? themeLight : themeDark;

  return (
    <HeaderContext.Provider value={props}>
      <Box
        className={cn(s.header, themeClassName)}
        bg="primary"
        display="flex"
        alignItems="center"
        px={['2x', '2x', '4x', '8x']}
        h={['14x', '18x']}
      >
        <HamburgerMenu />
        <Logo />

        {children ? children : <Navigation />}

        <UserPanel
          responsiveMode={children !== undefined && children !== null && children !== false}
        />
      </Box>
    </HeaderContext.Provider>
  );
};

export { USER_STATUS_NOT_AUTHORIZED, USER_STATUS_AUTHORIZATION_REQUIRED, USER_STATUS_AUTHORIZED };
