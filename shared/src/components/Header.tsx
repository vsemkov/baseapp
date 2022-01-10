import { FC, ReactNode } from 'react';
import { Logo, Props as LogoProps } from './Logo';
import { Navigation, Props as NavigationProps } from './Navigation';
import {
  UserPanel,
  Props as UserPanelProps,
  USER_STATUS_NOT_AUTHORIZED,
  USER_STATUS_AUTHORIZATION_REQUIRED,
  USER_STATUS_AUTHORIZED,
} from './UserPanel';
import * as s from './Header.css';
import { Box } from './Box';
import { themeDark, themeLight } from '../theme/vars.css';
import { DropDownMenu } from './DropDownMenu';
import { GetLinksParams, TargetParams } from '../links';

type Props = {
  children?: ReactNode;
} & Pick<NavigationProps, 'renderNavLinkComponent'> &
  UserPanelProps &
  LogoProps &
  TargetParams;

const getLinksParams = ({ language, status, ...props }: Props): GetLinksParams => {
  const navigationProps = {
    language,
    isAuthorized: status === 'authorized',
  };

  switch (props.target) {
    case 'p2p': {
      return {
        ...navigationProps,
        target: props.target,
        marketUrl: props.marketUrl,
      };
    }

    case 'market': {
      return {
        ...navigationProps,
        target: props.target,
        p2pUrl: props.p2pUrl,
      };
    }

    default: {
      return {
        ...navigationProps,
        target: props.target,
        p2pUrl: props.p2pUrl,
        marketUrl: props.marketUrl,
      };
    }
  }
};

const getUserPanelProps = ({
  children,
  renderLinkComponent,
  theme,
  language,
  onThemeChange,
  onLanguageChange,
  ...props
}: Props): UserPanelProps => {
  const userPanelProps = {
    responsiveMode: children !== undefined,
    renderLinkComponent,
    theme,
    language,
    onThemeChange,
    onLanguageChange,
  };

  switch (props.status) {
    case 'authorization_required': {
      return {
        ...userPanelProps,
        status: props.status,
        onSignInClick: props.onSignInClick,
        onSignUpClick: props.onSignUpClick,
      };
    }

    case 'authorized': {
      return {
        ...userPanelProps,
        status: props.status,
        // user: props.user,
        onLogoutClick: props.onLogoutClick,
      };
    }

    default: {
      return {
        ...userPanelProps,
        status: props.status,
      };
    }
  }
};

export const Header: FC<Props> = (props) => {
  const { children, renderLinkComponent, renderNavLinkComponent, theme } = props;
  let onSignInClick, onSignUpClick, onLogoutClick;
  if (props.status === 'authorization_required') {
    onSignInClick = props.onSignInClick;
    onSignUpClick = props.onSignUpClick;
  } else if (props.status === 'authorized') {
    onLogoutClick = props.onLogoutClick;
  }

  return (
    <Box
      className={`${s.header} ${theme === 'light' ? themeLight : themeDark}`}
      bg="primary"
      display="flex"
      alignItems="center"
      px={['0', '2x', '4x', '8x']}
      h="18x"
    >
      <DropDownMenu
        renderNavLinkComponent={renderNavLinkComponent}
        {...getLinksParams(props)}
        onSignInClick={onSignInClick}
        onSignUpClick={onSignUpClick}
        onLogoutClick={onLogoutClick}
      />
      <Logo theme={theme} renderLinkComponent={renderLinkComponent} />

      {children ? (
        children
      ) : (
        <Navigation renderNavLinkComponent={renderNavLinkComponent} {...getLinksParams(props)} />
      )}

      <UserPanel {...getUserPanelProps(props)} />
    </Box>
  );
};

export { USER_STATUS_NOT_AUTHORIZED, USER_STATUS_AUTHORIZATION_REQUIRED, USER_STATUS_AUTHORIZED };
