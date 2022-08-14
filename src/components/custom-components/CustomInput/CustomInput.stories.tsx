import { ComponentMeta, ComponentStory } from '@storybook/react';
import CustomInput from './CustomInput';
import React from 'react';

export default {
  title: 'UI/CustomInput',
  component: CustomInput,
  argTypes: {},
} as ComponentMeta<typeof CustomInput>;

const Template: ComponentStory<typeof CustomInput> = (args) => {
  const [value, setValue] = React.useState('John Doe');

  return (
    <CustomInput
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Standard = Template.bind({});
Standard.args = {
  variant: 'filled',
  type: 'text',
  label: 'Custom Input',
  value: '',
  placeholder: 'Enter your name',
  helpText: 'This is a help text',
  error: '',
  shouldShowCheckIcon: true,
  required: true,
  disabled: false,
  touched: true,
  onChange: () => { },
  onBlur: () => { },
};

export const Password = Template.bind({});
Password.args = {
  variant: 'filled',
  type: 'password',
  label: 'Password',
  value: '',
  placeholder: 'Enter your password',
  helpText: 'Enter a strong password',
  error: '',
  shouldShowCheckIcon: true,
  required: true,
  disabled: false,
  touched: true,
  onChange: () => { },
  onBlur: () => { },
};

export const Error = Template.bind({});
Error.args = {
  variant: 'filled',
  type: 'email',
  label: 'Email',
  value: '',
  placeholder: 'Enter your email address',
  helpText: 'Enter your company email address',
  error: 'Please enter a valid email address',
  shouldShowCheckIcon: true,
  required: true,
  disabled: false,
  touched: true,
  onChange: () => { },
  onBlur: () => { },
};
