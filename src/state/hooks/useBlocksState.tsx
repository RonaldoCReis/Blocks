import { useRecoilValue } from 'recoil';
import { blocksState } from '../atoms';

export const useBlocksState = () => {
  const blocks = useRecoilValue(blocksState);
  return blocks;
};
