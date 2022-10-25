import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ConfirmModal from './ConfirmModal';
import { RecoilRoot } from 'recoil';

export default {
  title: 'Components/ConfirmModal',
  color: '#34627B',
  component: ConfirmModal,
  decorators: [
    (Story) => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
} as Meta<typeof ConfirmModal>;

export const Default: StoryObj<typeof ConfirmModal> = {};
