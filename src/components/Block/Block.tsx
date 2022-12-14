import React, { ReactNode } from 'react';
import { useSetRecoilState } from 'recoil';
import { activeIdState, modalState } from '../../state/atoms';
import styles from './Block.module.scss';

interface blockTypes {
  children: ReactNode;
  color?: string;
  id: number;
  active: boolean;
}

const Block = ({ children, color = '#7B7834', id, active }: blockTypes) => {
  const setModal = useSetRecoilState(modalState);
  const setActive = useSetRecoilState(activeIdState);
  function openDialog() {
    console.log('id clicado: ' + id);
    setActive(id);
    setModal(true);
  }
  return (
    <div
      onClick={openDialog}
      role="notepad"
      style={{ background: color }}
      className={`${styles.block} ${active && styles.active}`}
    >
      {children}
    </div>
  );
};

export default Block;
