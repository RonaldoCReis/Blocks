import React, { ReactHTMLElement } from 'react';
import styles from './Title.module.scss';

export interface titleTypes {
  children: string;
  color?: string;
}

const Text = ({ children, color }: titleTypes) => {
  return (
    <h2 role="title" style={{ color }} className={`title ${styles.title}`}>
      {children}
    </h2>
  );
};

export default Text;
