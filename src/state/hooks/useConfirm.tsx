import { useRecoilState } from 'recoil';
import { confirmModalState } from '../atoms';

export const useConfirm = (action: any) => {
  const [confirm, setConfirm] = useRecoilState(confirmModalState);
  function openConfirm() {
    setConfirm({ isOpen: true, action });
  }
  return openConfirm;
};
