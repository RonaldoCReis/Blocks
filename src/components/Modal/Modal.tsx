import { Trash } from 'phosphor-react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from '../../state/atoms';
import FilterBall from '../FilterBall';
import styles from './Modal.module.scss';

const Modal = () => {
  const [modal, setModal] = useRecoilState(modalState);
  if (!modal.isOpen) return null;
  function closeDialog() {
    setModal({ ...modal, isOpen: false });
  }
  return (
    <div onClick={closeDialog} role="dialog" className={styles.backdrop}>
      <div
        role="dialog-inner"
        onClick={(event) => event.stopPropagation()}
        className={styles.modal}
      >
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
