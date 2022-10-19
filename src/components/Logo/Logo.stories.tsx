import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Logo from './Logo';

export default {
  title: 'Components/Logo',
  component: Logo,

  args: {
    color: '#1E1F27',
  },
} as Meta<typeof Logo>;

export const Default: StoryObj<typeof Logo> = {};
