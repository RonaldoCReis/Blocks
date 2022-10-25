import React, { MouseEventHandler } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { confirmModalState } from '../../state/atoms';
import styles from './ConfirmModal.module.scss';

const ConfirmModal = () => {
  const [confirm, setConfirm] = useRecoilState(confirmModalState);
  return (
    <div
      onClick={() => {
        setConfirm({ isOpen: false, action: () => {} });
      }}
      className={styles.backdrop}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className={styles.modal}
      >
        <h3 className={styles.title}>Are you sure?</h3>
        <p className={styles.message}>
          This action will delete your block forever
        </p>
        <div className={styles.buttonContainer}>
          <button
            role="confirm-button"
            onClick={() => {
              confirm.action();
              setConfirm({ isOpen: false, action: () => {} });
            }}
            className={styles.delete}
          >
            Delete
          </button>
          <button
            onClick={() => {
              setConfirm({ isOpen: false, action: () => {} });
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
