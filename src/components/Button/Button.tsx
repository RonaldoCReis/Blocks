import React, { MouseEventHandler, ReactHTMLElement } from 'react';
import Styles from './Button.module.scss';
import { PlusCircle } from 'phosphor-react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { activeIdState, modalState } from '../../state/atoms';

export interface buttonTypes {
  children: string;
  color?: string;
}

const Button = ({ children, color }: buttonTypes) => {
  const setActive = useSetRecoilState(activeIdState);
  const setModal = useSetRecoilState(modalState);
  const openModal = (event: any) => {
    event.preventDefault();
    setActive(0);
    setModal(true);
  };
  return (
    <button onClick={openModal} style={{ color }} className={Styles.button}>
      <PlusCircle />
      {children}
    </button>
  );
};

export default Button;
