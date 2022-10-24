import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Search from './Search';
import { RecoilRoot } from 'recoil';

export default {
  title: 'Components/Search',
  component: Search,
  decorators: [
    (Story) => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
} as Meta<typeof Search>;

export const Default: StoryObj<typeof Text> = {};
