import {
  IconButton,
  InputAdornment
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import React from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface Props {
  shouldShowCheckIcon?: boolean;
  showPassword?: boolean;
  hasError: boolean;
  type: `text` | `password` | `email`;
  setShowPassword?: (showPassword: boolean) => void;
}

const EndAdornment = ({
  shouldShowCheckIcon,
  showPassword,
  hasError,
  type,
  setShowPassword,
}: Props) => {
  return (
    <InputAdornment position="end">
      {shouldShowCheckIcon && !hasError && <CheckIcon color="success" />}

      {
        setShowPassword && type === `password` && (
          <IconButton
            aria-label="toggle password visibility"
            onClick={() => setShowPassword(!showPassword)}
            edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        )
      }
    </InputAdornment>);
};

export default EndAdornment;
