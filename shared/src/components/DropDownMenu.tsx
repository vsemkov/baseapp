import { FC, useCallback, useRef, useState } from 'react';
import { useEscapeKeyDown } from '../hooks/useEscapeKeyDown';
import { useOnClickOutside } from '../hooks/useOnClickOutside';
import { getLinks, GetLinksParams } from '../links';
import { RenderNavLinkComponent } from '../types';
import { Box } from './Box';

import * as s from './DropDownMenu.css';
import { DropDownMenuItem } from './DropDownMenuItem';

export type Props = {
  renderNavLinkComponent: RenderNavLinkComponent;
  onSignInClick?: () => void;
  onSignUpClick?: () => void;
  onLogoutClick?: () => void;
} & GetLinksParams;

export const DropDownMenu: FC<Props> = ({
  renderNavLinkComponent,
  onSignInClick,
  onSignUpClick,
  onLogoutClick,
  ...props
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOnOutsideClick = useCallback(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [isOpen]);

  useOnClickOutside(elementRef, handleOnOutsideClick);
  useEscapeKeyDown(handleOnOutsideClick);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const links = getLinks('sidebar', props);
  const callbacks: Record<string, (() => void) | undefined> = {
    ':onclick:signin': onSignInClick,
    ':onclick:signup': onSignUpClick,
    ':onclick:logout': onLogoutClick,
  };

  const handleItemClick = (callback?: () => void) => () => {
    setIsOpen(false);
    callback?.();
  };

  return (
    <div className={s.block} ref={elementRef}>
      <Box
        as="button"
        display="block"
        size="4x"
        mr="4x"
        cursor="pointer"
        padding="0"
        backgroundColor="transparent"
        border="none"
        onClick={handleClick}
      >
        <Box bg="interactive" h="0.5x" mb="1x" />
        <Box bg="interactive" h="0.5x" mb="1x" />
        <Box bg="interactive" h="0.5x" />
      </Box>
      <Box
        className={`${s.dropdown}${isOpen ? ` ${s.dropdownOpened}` : ''}`}
        bg="dropdown"
        borderRadius="2x"
        borderWidth="1x"
        borderStyle="solid"
        borderColor="dropdownBorder"
        fontSize="medium"
        boxShadow="dropdown"
      >
        {links.map((item) => (
          <DropDownMenuItem
            key={item.to}
            renderNavLinkComponent={renderNavLinkComponent}
            {...item}
            onClick={handleItemClick(
              item.type === 'external' && item.to in callbacks ? callbacks[item.to] : undefined,
            )}
          />
        ))}
      </Box>
    </div>
  );
};
