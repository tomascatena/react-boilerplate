import { SxProps, Theme } from '@mui/material';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';

type Props = {
  /**
   * The variant to use for the button.
   */
  variant?: 'text' | 'contained' | 'outlined' | undefined;
  /**
   * The type of button.
   */
  type?: 'button' | 'submit' | 'reset' | undefined;
  /**
   * Weather the button is loading.
   */
  isLoading: boolean;
  /**
   * Weather the button is disabled.
   */
  disabled: boolean;
  /**
   * The text to display in the button.
   */
  text: string;
  /**
   * The text to display in the button when it is loading.
   */
  loadingText?: string;
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
};

/**
 * A custom button component.
 */
const CustomButton = ({
  isLoading,
  disabled,
  variant,
  type,
  text,
  loadingText,
  sx,
  startIcon,
  onSubmit,
  onReset
}: Props) => {
  const loadingState = (
    <>
      <CircularProgress
        size={20}
        sx={{ marginRight: 1 }}
      />
      {loadingText || text}
    </>
  );

  return (
    <Button
      sx={sx}
      variant={variant}
      type={type}
      startIcon={!isLoading && startIcon}
      disabled={disabled || isLoading}
      {...(type === 'submit' ? onSubmit : undefined)}
      {...(type === 'reset' ? onReset : undefined)}
    >
      {isLoading ? loadingState : <>{text}</>}
    </Button>
  );
};

export default CustomButton;
