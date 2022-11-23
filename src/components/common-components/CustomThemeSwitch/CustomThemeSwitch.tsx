import { SxProps } from '@mui/material';
import React from 'react';
import StyledCustomSwitch from './StyledCustomSwitch';

type Props = {
  /**
   * The value of the switch.
   */
  value: boolean;
  /**
   * onChange event handler.
   */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * The default value of the switch. Defaults to false.
   */
  defaultChecked?: boolean;
  /**
   * The color of the track in dark mode. Defaults to #8796A5.
   */
  darkThemeTrackBackgroundColor?: string;
  /**
   * The color of the track in light mode. Defaults to #aab4be.
   */
  lightThemeTrackBackgroundColor?: string;
  /**
   * The color of the thumb in dark mode. Defaults to #003892.
   */
  darkThemeSwitchThumbColor?: string;
  /**
   * The color of the thumb in light mode. Defaults to #001e3c.
   */
  lightThemeSwitchThumbColor?: string;
  /**
   * The color of the text. Defaults to #fff.
   */
  textColor?: string;
  /**
   * Custom styles. Defaults to {}.
   */
  sx?: SxProps;
};

const CustomThemeSwitch = ({
  darkThemeSwitchThumbColor = `#003892`,
  darkThemeTrackBackgroundColor = `#8796A5`,
  defaultChecked = false,
  lightThemeSwitchThumbColor = `#001e3c`,
  lightThemeTrackBackgroundColor = `#aab4be`,
  onChange,
  sx = {},
  textColor = `#fff`,
  value,
}: Props) => {
  return (
    <StyledCustomSwitch
      darkThemeSwitchThumbColor={darkThemeSwitchThumbColor}
      darkThemeTrackBackgroundColor={darkThemeTrackBackgroundColor}
      defaultChecked={defaultChecked}
      lightThemeSwitchThumbColor={lightThemeSwitchThumbColor}
      lightThemeTrackBackgroundColor={lightThemeTrackBackgroundColor}
      onChange={onChange}
      sx={sx}
      textColor={textColor}
      value={value}
    />
  );
};

export default CustomThemeSwitch;
