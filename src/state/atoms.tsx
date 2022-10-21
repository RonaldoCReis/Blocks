import { atom } from 'recoil';

export const searchState = atom({
  key: 'searchState',
  default: '',
});

export const blocksState = atom({
  key: 'blocksState',
  default: [
    {
      id: 0,
      title: '',
      text: '',
      color: '',
    },
  ],
});

export const modalState = atom({
  key: 'modalState',
  default: {
    isOpen: false,
    id: 0,
    title: '',
    text: '',
    color: '',
  },
});
