import React, { ReactHTMLElement } from 'react';
import Styles from './Title.module.scss';

export interface titleTypes {
  children: string;
  color?: string;
}

const Text = ({ children, color }: titleTypes) => {
  return (
    <p style={{ color }} className={Styles.text}>
      {children}
    </p>
  );
};

export default Text;
