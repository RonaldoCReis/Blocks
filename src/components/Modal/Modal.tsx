import { Trash } from 'phosphor-react';
import React, { useEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  activeIdState,
  blocksState,
  blockType,
  colorsState,
  modalState,
} from '../../state/atoms';
import { useBlocks } from '../../state/hooks/useBlocks';
import { useConfirm } from '../../state/hooks/useConfirm';
import { useGetNewBlock } from '../../state/hooks/useGetNewBlock';
import FilterBall from '../FilterBall';
import styles from './Modal.module.scss';

const Modal = () => {
  const [modal, setModal] = useRecoilState(modalState);
  const [blocks, setBlocks] = useBlocks();
  const modalId = useRecoilValue(activeIdState);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [activeBlock, setActiveBlock] = useState<blockType>(useGetNewBlock());
  const [activeBlockIndex, setActiveBlockIndex] = useState(-1);
  const [newId, setNewId] = useState(0);
  const [localBlock, setLocalBlock] = useState<blockType | null>(null);
  const colors = useRecoilValue(colorsState);
  const [color, setColor] = useState(colors[0]);
  const [placeholder, setPlaceholder] = useState<string>('');
  const placeholders = [
    'A great idea',
    'A genius thought',
    'Gotta remember',
    'A cake recipe',
    'My todo list',
    'Once upon a time',
  ];

  useEffect(() => {
    setPlaceholder(
      placeholders[Math.floor(Math.random() * placeholders.length)] + '...'
    );
  }, []);

  useEffect(() => {
    console.log('id: ' + modalId);
    setActiveBlockIndex(blocks.findIndex((item) => item.id === modalId));
  }, [modalId]);

  useEffect(() => {
    if (activeBlockIndex !== -1) {
      setActiveBlock(blocks[activeBlockIndex]);
      console.log('existe');
      setNewId(blocks[activeBlockIndex].id);
    } else {
      setNewId(blocks.length + 1);
      console.log('n existe');
    }
  }, [activeBlockIndex]);

  useEffect(() => {
    setTitle(activeBlock.title);
    setText(activeBlock.text);
    setColor(activeBlock.color);
  }, [activeBlock]);

  useEffect(() => {
    setLocalBlock({
      ...activeBlock,
      title,
      text,
      color,
      id: newId,
    });
    console.log(color);
  }, [title, text, color]);

  function closeDialog() {
    if (text !== '' || title !== '') {
      const newBlocks = [...blocks];
      if (activeBlockIndex !== -1) {
        if (localBlock) newBlocks[activeBlockIndex] = localBlock;
      } else {
        if (localBlock) newBlocks[blocks.length] = localBlock;
      }
      setBlocks(newBlocks);
    }

    setModal(false);
  }

  function deleteBlock() {
    const newBlocks = [...blocks];
    newBlocks.splice(activeBlockIndex, 1);
    setBlocks(newBlocks);
    setModal(false);
  }

  return (
    <div onClick={closeDialog} role="dialog" className={styles.backdrop}>
      <div
        style={{ background: localBlock?.color }}
        role="dialog-inner"
        onClick={(event) => event.stopPropagation()}
        className={styles.modal}
      >
        <input
          role="title-input"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="New Title"
          className={styles.title}
        ></input>
        <textarea
          role="text-input"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder={placeholder}
          className={styles.text}
        ></textarea>
        <div className={styles.footer}>
          <div className={styles.changeColor}>
            {colors.map((colorBall) => (
              <FilterBall
                click={() => {
                  console.log(colorBall);
                  setColor(colorBall);
                }}
                active={colorBall === color}
                size={30}
                key={colorBall}
                color={colorBall}
              />
            ))}
          </div>
          <button
            role="delete-button"
            onClick={useConfirm(deleteBlock)}
            className={styles.delete}
          >
            <Trash size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
