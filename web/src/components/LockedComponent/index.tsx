import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '../Box';
import { Label } from '../Label';
import { Button } from '../Button/Button';
import { LockedIcon } from 'src/assets/images/LockedIcon';
import { useSelector } from 'react-redux';
import { selectMobileDeviceState } from 'src/modules/public/globalSettings/selectors';

interface Props {
  text: string;
  link?: string;
  buttonText: string;
  onClick?: () => void;
}

export const LockedComponent: React.FC<Props> = ({ text, link, buttonText, onClick }) => {
  const isMobileDevice = useSelector(selectMobileDeviceState);
  return (
    <Box padding="3" col spacing="2" align="center">
      <LockedIcon />
      <Label size="lg" center style={{ maxWidth: 180 }}>
        {text}
      </Label>
      {link ? (
        <Button
          component={Link}
          to={link}
          variant={isMobileDevice ? 'primary-outline' : 'primary'}
          revertLightPrimary={isMobileDevice}
        >
          {buttonText}
        </Button>
      ) : (
        <Button
          variant={isMobileDevice ? 'primary-outline' : 'primary'}
          revertLightPrimary={isMobileDevice}
          onClick={onClick}
        >
          {buttonText}
        </Button>
      )}
    </Box>
  );
};
