import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Title from './Title';

export default {
  title: 'Components/Title',
  component: Title,

  args: {
    children: 'Lorem ipsum',
    color: '#1E1F27',
  },
} as Meta<typeof Title>;

export const Default: StoryObj<typeof Title> = {};
