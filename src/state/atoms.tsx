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
      title: 'Testing',
      text: 'The first Block just for testing',
      color: '#53347B',
    },
  ],
});

export const modalState = atom({
  key: 'modalState',
  default: false,
});

export const activeIdState = atom({
  key: 'activeIdState',
  default: 0,
});
