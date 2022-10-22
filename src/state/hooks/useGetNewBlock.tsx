import { useRecoilValue } from 'recoil';
import { blocksState, blockType } from '../atoms';

export const useGetNewBlock = () => {
  const blocks = useRecoilValue(blocksState);
  const block: blockType = {
    color: '#34627B',
    text: '',
    title: '',
    id: blocks.length,
  };
  return block;
};
