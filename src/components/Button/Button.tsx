import React, { MouseEventHandler, ReactHTMLElement } from 'react';
import Styles from './Button.module.scss';
import { PlusCircle } from 'phosphor-react';
import { useSetRecoilState } from 'recoil';
import { modalState } from '../../state/atoms';

export interface buttonTypes {
  children: string;
  color?: string;
}

const Button = ({ children, color }: buttonTypes) => {
  const setModal = useSetRecoilState(modalState);
  const openModal = (event: any) => {
    event.preventDefault();
    setModal({
      isOpen: true,
      text: '',
      title: '',
      id: 0,
      color: '',
    });
  };
  return (
    <button onClick={openModal} style={{ color }} className={Styles.button}>
      <PlusCircle />
      {children}
    </button>
  );
};

export default Button;
