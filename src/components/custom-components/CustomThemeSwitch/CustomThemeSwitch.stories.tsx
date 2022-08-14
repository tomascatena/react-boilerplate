import { ComponentMeta, ComponentStory } from '@storybook/react';
import CustomThemeSwitch from './CustomThemeSwitch';
import React from 'react';

export default {
  title: 'UI/CustomThemeSwitch',
  component: CustomThemeSwitch,
} as ComponentMeta<typeof CustomThemeSwitch>;

const Template: ComponentStory<typeof CustomThemeSwitch> = (args) => <CustomThemeSwitch {...args} />;

export const Default = Template.bind({});
Default.args = {
  darkThemeTrackBackgroundColor: '#8796A5',
  lightThemeTrackBackgroundColor: '#aab4be',
  darkThemeSwitchThumbColor: '#003892',
  lightThemeSwitchThumbColor: '#001e3c',
  textColor: '#fff',
};
