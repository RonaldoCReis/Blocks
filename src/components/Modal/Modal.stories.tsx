import { Meta, StoryObj } from '@storybook/react';
import { RecoilRoot } from 'recoil';
import Modal from './Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
  // args: {
  //   color: '#34627B',
  // },
  decorators: [
    (Story) => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
} as Meta<typeof Modal>;

export const Default: StoryObj<typeof Modal> = {};
