import { Trash } from 'phosphor-react';
import React from 'react';
import FilterBall from '../FilterBall';
import styles from './Modal.module.scss';

const Modal = () => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <input placeholder="Title" className={styles.title}></input>
        <textarea placeholder="A great idea" className={styles.text}></textarea>
        <div className={styles.footer}>
          <div className={styles.changeColor}>
            <FilterBall color="#7B7834" size={30} />
            <FilterBall color="#7B4E34" size={30} />
            <FilterBall color="#347B59" size={30} />
            <FilterBall color="#53347B" size={30} />
          </div>
          <button className={styles.delete}>
            <Trash size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
