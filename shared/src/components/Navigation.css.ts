import { sprinkles } from '../theme/sprinkles.css';

export const item = sprinkles({
  display: {
    mobile: 'none',
    desktop: 'block',
  },
  color: {
    default: 'text',
    hover: 'textHighlighted',
  },
  mr: '6x',
  textDecoration: {
    default: 'none',
    hover: 'underline',
  },
  cursor: 'pointer',
});

export const itemActive = sprinkles({
  color: 'textHighlighted',
});
