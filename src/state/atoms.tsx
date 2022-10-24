import { atom } from 'recoil';

export const searchState = atom({
  key: 'searchState',
  default: '',
});

export interface blockType {
  id: number;
  title: string;
  text: string;
  color: string;
}

export const blocksState = atom<blockType[]>({
  key: 'blocksState',
  default: [
    {
      id: 1,
      title: 'Hello!',
      text: 'Welcome to Blocks',
      color: '#53347B',
    },
  ],
});

export const colorsState = atom<string[]>({
  key: 'colorsState',
  default: ['#34627B', '#347B59', '#53347B', '#7B4E34', '#697B34'],
});

export const modalState = atom({
  key: 'modalState',
  default: false,
});

export const activeIdState = atom({
  key: 'activeIdState',
  default: 0,
});

export const filterState = atom({
  key: 'filterState',
  default: '',
});

export const filterColorState = atom({
  key: 'filterColorState',
  default: '',
});
