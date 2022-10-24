import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Logo from './Logo';

export default {
  title: 'Components/Logo',
  component: Logo,
} as Meta<typeof Logo>;

export const Default: StoryObj<typeof Logo> = {};
