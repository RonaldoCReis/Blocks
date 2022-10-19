import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Block from './Block';
import Text from '../Text';
import Title from '../Title';

export default {
  title: 'Components/Block',
  component: Block,
  args: {
    color: '#34627B',
    children: (
      <>
        <Title>A great UX design tip:</Title>
        <Text>
          Maintain consistency of the user flow throughout the journey
        </Text>
      </>
    ),
  },
} as Meta<typeof Block>;

export const Default: StoryObj<typeof Text> = {};
