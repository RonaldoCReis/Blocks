import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Text from './Text';

export default {
  title: 'Components/Text',
  component: Text,

  args: {
    children: 'Lorem ipsum',
  },
} as Meta<typeof Text>;

export const Default: StoryObj<typeof Text> = {};
