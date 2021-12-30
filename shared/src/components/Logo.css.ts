import { style } from '@vanilla-extract/css';
import { vars } from '../theme/vars.css';

export const container = style({
  position: 'relative',
});

export const logo = style({
  height: '100%',
  width: 'auto',
  objectFit: 'contain',
  maxHeight: 60,
  maxWidth: 120,
});

export const beta = style({
  color: vars.colors.beta,
  left: 42,
  position: 'absolute',
  top: 30,
  width: 26,
});
