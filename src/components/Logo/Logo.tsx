import { NoteBlank } from 'phosphor-react';
import React, { ReactHTMLElement } from 'react';
import styles from './Logo.module.scss';

export interface titleTypes {
  color?: string;
}

const Text = ({ color }: titleTypes) => {
  return (
    <div style={{ color }} className={styles.logo}>
      <NoteBlank size={32} />
      <h1>Blocks</h1>
    </div>
  );
};

export default Text;
