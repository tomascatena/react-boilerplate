import { ComponentMeta, ComponentStory } from '@storybook/react';
import CustomThemeSwitch from './CustomThemeSwitch';
import React from 'react';

export default {
  title: `UI/CustomThemeSwitch`,
  component: CustomThemeSwitch,
} as ComponentMeta<typeof CustomThemeSwitch>;

const Template: ComponentStory<typeof CustomThemeSwitch> = (args) => {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <CustomThemeSwitch
      {...args}
      value={darkMode}
      onChange={(e) => setDarkMode(e.target.checked)}
      defaultChecked
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  darkThemeSwitchThumbColor: `#003892`,
  darkThemeTrackBackgroundColor: `#8796A5`,
  lightThemeSwitchThumbColor: `#001e3c`,
  lightThemeTrackBackgroundColor: `#aab4be`,
  textColor: `#fff`,
};
