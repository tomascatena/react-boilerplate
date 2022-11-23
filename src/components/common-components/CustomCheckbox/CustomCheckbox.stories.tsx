import { ComponentMeta, ComponentStory } from '@storybook/react';
import CustomCheckbox from './CustomCheckbox';
import React from 'react';

export default {
  title: `UI/CustomCheckbox`,
  component: CustomCheckbox,
} as ComponentMeta<typeof CustomCheckbox>;

const Template: ComponentStory<typeof CustomCheckbox> = (args) => <CustomCheckbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  checked: false,
  label: `Custom Checkbox`,
  disabled: false,
  handleChange: () => { },
};
