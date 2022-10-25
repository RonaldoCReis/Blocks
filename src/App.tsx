import React, { useEffect, useState } from 'react';
import Button from './components/Button';
import FilterBall from './components/FilterBall';
import Logo from './components/Logo';
import Modal from './components/Modal';
import Search from './components/Search';
import styles from './App.module.scss';
import Block from './components/Block';
import Title from './components/Title';
import Text from './components/Text';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import {
  activeIdState,
  blocksState,
  blockType,
  colorsState,
  filterColorState,
  filterState,
  modalState,
} from './state/atoms';
const App = () => {
  const blocks = useRecoilValue(blocksState);
  const activeId = useRecoilValue(activeIdState);
  const modal = useRecoilValue(modalState);
  const colors = useRecoilValue(colorsState);
  const filter = useRecoilValue(filterState);
  const [filterColor, setFilterColor] = useRecoilState(filterColorState);
  const [filterBlocks, setFilterBlocks] = useState<blockType[]>([]);
  const [inUseColors, setInUseColors] = useState<string[]>([]);
  const active = useRecoilValue(activeIdState);

  function colorFilter(color: string) {
    if (filterColor !== color) {
      setFilterColor(color);
    } else {
      setFilterColor('');
    }
  }
  useEffect(() => {
    const text = blocks.filter((block) => {
      if (filter) {
        return (
          block.text.toLowerCase().includes(filter) ||
          block.title.toLowerCase().includes(filter)
        );
      } else {
        return true;
      }
    });

    const color = text.filter((block) => {
      if (filterColor) {
        return block.color === filterColor;
      } else {
        return true;
      }
    });
    setFilterBlocks(color);
  }, [filter, blocks, filterColor]);

  useEffect(() => {
    let activeColors = blocks.map((block) => block.color);
    activeColors = [...new Set(activeColors)];
    setInUseColors(activeColors);
  }, [colors, blocks]);
  return (
    <div className={styles.app}>
      <aside>
        <Logo />
        <div className={styles.filter}>
          {inUseColors.length > 1 &&
            inUseColors.map((color) => (
              <FilterBall
                active={color === filterColor}
                click={() => colorFilter(color)}
                key={color}
                color={color}
              />
            ))}
        </div>
      </aside>
      <main className={styles.main}>
        <Search />
        <Button>Create block</Button>
        <div className={styles.blocks}>
          {filterBlocks.map((block) => (
            <Block
              id={block.id}
              color={block.color}
              key={block.id}
              active={block.id === active && modal}
            >
              {block.title && <Title>{block.title}</Title>}
              {block.text && <Text>{block.text}</Text>}
            </Block>
          ))}
        </div>
      </main>
      {modal && <Modal />}
    </div>
  );
};

export default App;
