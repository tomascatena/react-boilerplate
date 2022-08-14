import { ComponentMeta, ComponentStory } from '@storybook/react';
import CustomButton from './CustomButton';
import React from 'react';
import SaveIcon from '@mui/icons-material/Save';

export default {
  title: 'UI/CustomButton',
  component: CustomButton,
} as ComponentMeta<typeof CustomButton>;

const Template: ComponentStory<typeof CustomButton> = (args) => <CustomButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'contained',
  isLoading: false,
  disabled: false,
  type: 'submit',
  text: 'Save',
  loadingText: 'Saving...',
  startIcon: <SaveIcon />,
};

export const Loading = Template.bind({});
Loading.args = {
  variant: 'contained',
  isLoading: true,
  disabled: false,
  type: 'submit',
  text: 'Save',
  loadingText: 'Saving...',
  startIcon: <SaveIcon />,
};
