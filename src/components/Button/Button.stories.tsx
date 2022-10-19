import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

export default {
  Button: 'Components/Button',
  component: Button,

  args: {
    children: 'Create block',
  },
} as Meta<typeof Button>;

export const Default: StoryObj<typeof Button> = {};
