import { ComponentMeta, ComponentStory } from '@storybook/react';
import CustomBadge from './CustomBadge';
import React from 'react';

export default {
  title: 'UI/CustomBadge',
  component: CustomBadge,
} as ComponentMeta<typeof CustomBadge>;

const Template: ComponentStory<typeof CustomBadge> = (args) => {
  return <CustomBadge {...args}>Custom Badge</CustomBadge>;
};

export const Default = Template.bind({});

Default.args = {
  badgeColor: 'primary',
  textColor: 'black',
};
