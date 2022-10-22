import React, { ReactNode } from 'react';
import styles from './Block.module.scss';

interface blockTypes {
  children: ReactNode;
  color?: string;
}

const Block = ({ children, color = '#7B7834' }: blockTypes) => {
  return (
    <div role="notepad" style={{ background: color }} className={styles.block}>
      {children}
    </div>
  );
};

export default Block;
