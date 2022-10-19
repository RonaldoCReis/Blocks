import React, { ReactHTMLElement } from 'react';
import Styles from './Button.module.scss';
import { PlusCircle } from 'phosphor-react';

export interface buttonTypes {
  children: string;
  color?: string;
}

const Text = ({ children, color }: buttonTypes) => {
  return (
    <button style={{ color }} className={Styles.button}>
      <PlusCircle />
      {children}
    </button>
  );
};

export default Text;
