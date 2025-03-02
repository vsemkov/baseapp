import { style } from '@vanilla-extract/css';
import { sprinkles } from 'theme/sprinkles.css';
import { vars } from 'theme/vars.css';
import { item as dropdownItem } from './Dropdown/DropdownItem.css';

export const item = style([
  dropdownItem,
  sprinkles({
    display: 'flex',
    justifyContent: 'space-between',
  }),
]);

export const themeSwitcher = style({});

export const sun = style({
  display: 'block',
  color: vars.colors.themeSwitcherSun,
  selectors: {
    [`${themeSwitcher}:hover &`]: {
      color: vars.colors.themeSwitcherSunHover,
    },
  },
});

export const moon = style({
  display: 'block',
  color: vars.colors.themeSwitcherMoon,
});
