import { useRecoilState } from 'recoil';
import { modalState } from '../atoms';

export const useModalState = () => {
  const [modal, setModal] = useRecoilState(modalState);
  return modal;
};
