import { useRecoilState } from 'recoil';
import { blocksState, blockType } from '../atoms';

export const useBlocks = () => {
  const [blocks, setBlocks] = useRecoilState(blocksState);

  function setLocalBlocks(newBlocks: blockType[]) {
    window.localStorage.setItem('blocks', JSON.stringify(newBlocks));
    setBlocks(newBlocks);
  }
  return { blocks, setBlocks: setLocalBlocks };
};
