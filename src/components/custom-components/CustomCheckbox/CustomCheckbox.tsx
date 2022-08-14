import { Checkbox, FormControlLabel, Typography } from '@mui/material';
import React from 'react';

type Props = {
  /**
   * Whether the checkbox is checked or not
   */
  checked: boolean;
  /**
   * The label for the checkbox
   */
  label: string;
  /**
   * Whether the checkbox is disabled or not
   */
  disabled?: boolean;
  /**
   * The onChange handler for the checkbox
   */
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

/**
 * A custom checkbox component
 */
const CustomCheckbox = ({
  checked,
  handleChange,
  label,
  disabled
}: Props) => {
  return (
    <FormControlLabel
      sx={{ width: 'fit-content' }}
      label={
        <Typography color='text.primary'>
          {label}
        </Typography>
      }
      control={
        <Checkbox
          onChange={handleChange}
          checked={checked}
          disabled={disabled}
        />
      }
    />
  );
};

export default CustomCheckbox;
