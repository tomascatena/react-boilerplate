import React from 'react';
import StyledCustomSwitch from './StyledCustomSwitch';

type Props = {
  darkThemeTrackBackgroundColor?: string;
  lightThemeTrackBackgroundColor?: string;
  darkThemeSwitchThumbColor?: string;
  lightThemeSwitchThumbColor?: string;
  textColor?: string;
};

const CustomThemeSwitch = ({
  darkThemeTrackBackgroundColor = '#8796A5',
  lightThemeTrackBackgroundColor = '#aab4be',
  darkThemeSwitchThumbColor = '#003892',
  lightThemeSwitchThumbColor = '#001e3c',
  textColor = '#fff',
}: Props) => {
  return (
    <StyledCustomSwitch
      darkThemeTrackBackgroundColor={darkThemeTrackBackgroundColor}
      lightThemeTrackBackgroundColor={lightThemeTrackBackgroundColor}
      darkThemeSwitchThumbColor={darkThemeSwitchThumbColor}
      lightThemeSwitchThumbColor={lightThemeSwitchThumbColor}
      textColor={textColor}
    />
  );
};

export default CustomThemeSwitch;
