import { SxProps, Theme } from '@mui/material';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';

type Props = {
  /**
   * The variant to use for the button. Defaults to 'contained'
   */
  variant?: `text` | `contained` | `outlined` | undefined;
  /**
   * The type of button. Defaults to 'submit'
   */
  type?: `button` | `submit` | `reset` | undefined;
  /**
   * Weather the button is loading. Defaults to false
   */
  isLoading?: boolean;
  /**
   * Weather the button is disabled. Defaults to false
   */
  disabled?: boolean;
  /**
   * The text to display in the button. Defaults to 'Loading...'
   */
  loadingText?: string;
  /**
   * Weather the button is full width. Defaults to false
   */
  fullWidth?: boolean;
  /**
   * The styles to apply to the button.
   */
  sx?: SxProps<Theme> | undefined;
  /**
   * The icon to display in the left side of the button.
   */
  startIcon?: JSX.Element;
  /**
   * The onSubmit handler for the button.
   */
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  /**
   * The onReset handler for the button.
   */
  onReset?: (e: React.FormEvent<HTMLFormElement>) => void;
  /**
   * Children to render in the button.
   */
  children?: React.ReactNode;
};

/**
 * A custom button component.
 */
const CustomButton = ({
  isLoading = false,
  disabled = false,
  variant = `contained`,
  type = `button`,
  loadingText = `Loading...`,
  fullWidth = false,
  sx,
  startIcon,
  onSubmit,
  onReset,
  children
}: Props) => {
  const loadingState = (
    <>
      <CircularProgress
        size={20}
        sx={{ marginRight: 1 }}
      />
      {loadingText || children}
    </>
  );

  return (
    <Button
      sx={sx}
      variant={variant}
      type={type}
      startIcon={!isLoading && startIcon}
      disabled={disabled || isLoading}
      fullWidth={fullWidth}
      {...(type === `submit` ? onSubmit : undefined)}
      {...(type === `reset` ? onReset : undefined)}
    >
      {isLoading ? loadingState : <>{children}</>}
    </Button>
  );
};

export default CustomButton;
