import { Trash } from 'phosphor-react';
import React, { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { blocksState, blockType, modalState } from '../../state/atoms';
import { useGetNewBlock } from '../../state/hooks/useGetNewBlock';
import FilterBall from '../FilterBall';
import styles from './Modal.module.scss';

interface modalTypes {
  modalId: number;
}

const Modal = ({ modalId }: modalTypes) => {
  const [modal, setModal] = useRecoilState(modalState);
  const [blocks, setBlocks] = useRecoilState(blocksState);

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [activeBlock, setActiveBlock] = useState<blockType>(useGetNewBlock());
  const [activeBlockIndex, setActiveBlockIndex] = useState(
    blocks.findIndex((item) => item.id === modalId)
  );
  const [newId, setNewId] = useState(0);
  const [localBlock, setLocalBlock] = useState<blockType | null>(null);
  useEffect(() => {
    console.log(blocks);

    if (activeBlockIndex !== -1) {
      console.log(activeBlockIndex);
      setActiveBlock(blocks[activeBlockIndex]);
      console.log('existe');
    } else {
      setActiveBlockIndex(blocks.length);
      setNewId(blocks.length + 1);
      console.log('n existe');
    }
  }, [modalId]);

  useEffect(() => {
    setTitle(activeBlock.title);
    setText(activeBlock.text);
  }, [activeBlock]);

  useEffect(() => {
    setLocalBlock({
      ...activeBlock,
      title,
      text,
      id: newId,
    });
  }, [title, text]);
  function closeDialog() {
    if (text !== '' && title !== '') {
      const newBlocks = [...blocks];
      if (localBlock) newBlocks[activeBlockIndex] = localBlock;
      setBlocks(newBlocks);
    }

    setModal(false);
  }

  return (
    <div onClick={closeDialog} role="dialog" className={styles.backdrop}>
      <div
        style={{ background: activeBlock.color }}
        role="dialog-inner"
        onClick={(event) => event.stopPropagation()}
        className={styles.modal}
      >
        <input
          role="title-input"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Title"
          className={styles.title}
        ></input>
        <textarea
          role="text-input"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="A great idea"
          className={styles.text}
        ></textarea>
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
