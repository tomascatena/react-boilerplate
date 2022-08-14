import { StyledBackdrop } from './CustomBackdrop.styled';
import { Typography } from '@mui/material';
import CircularLoader from '../CircularLoader/CircularLoader';
import React from 'react';

type Props = {
  /**
   * Whether the backdrop is open or not
   */
  isOpen: boolean;
  /**
   * The message to display inside the backdrop. Default message is 'Loading... Please wait.'
   */
  message?: string;
  /**
   * The size of the loader. Defaults to 100px
   */
  loaderSize?: number;
  /**
   * The thickness of the loader. the default is 4
   */
  loaderThickness?: number;
  /**
   * The variant of the text message. The default is 'h4'
   */
  textVariant?: 'button' | 'caption' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'inherit' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'overline' | undefined;
};

/**
 * A custom backdrop component
 */
const CustomBackdrop = ({
  isOpen,
  message = 'Loading... Please wait.',
  loaderSize = 100,
  loaderThickness = 4,
  textVariant = 'h4'
}: Props) => {
  return (
    <StyledBackdrop open={isOpen}>
      <CircularLoader
        size={loaderSize}
        thickness={loaderThickness}
      />

      <Typography
        sx={{ textAlign: 'center' }}
        variant={textVariant}
        color='text.primary'
      >
        {message}
      </Typography>
    </StyledBackdrop>
  );
};

export default CustomBackdrop;
