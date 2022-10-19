import React, { ReactHTMLElement } from 'react';
import Styles from './Text.module.scss';

export interface textTypes {
  children: string;
  color?: string;
}

const Text = ({ children, color }: textTypes) => {
  return (
    <p style={{ color }} className={Styles.text}>
      {children}
    </p>
  );
};

export default Text;
