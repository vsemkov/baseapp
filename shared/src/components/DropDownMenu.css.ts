import { style } from '@vanilla-extract/css';

export const block = style({
  position: 'relative',
});

export const dropdown = style({
  position: 'absolute',
  top: 36,
  left: 0,
  opacity: 0,
  overflow: 'hidden',
  pointerEvents: 'none',
  transition: 'opacity 0.3s ease-out',
  width: 254,
  zIndex: 99990,
});

export const dropdownOpened = style({
  opacity: 1,
  pointerEvents: 'initial',
});
