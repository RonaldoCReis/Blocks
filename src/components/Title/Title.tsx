import React, { ReactHTMLElement } from 'react';
import styles from './Title.module.scss';

export interface titleTypes {
  children: string;
  color?: string;
}

const Text = ({ children, color }: titleTypes) => {
  return (
    <p style={{ color }} className={styles.title}>
      {children}
    </p>
  );
};

export default Text;
