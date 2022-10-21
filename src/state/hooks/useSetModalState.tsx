import { useRecoilState } from 'recoil';
import { modalState } from '../atoms';

export const useSetModalState = () => {
  const [modal, setModal] = useRecoilState(modalState);
  return setModal;
};
