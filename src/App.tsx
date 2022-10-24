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
import { RecoilRoot, useRecoilValue } from 'recoil';
import {
  activeIdState,
  blocksState,
  blockType,
  colorsState,
  filterState,
  modalState,
} from './state/atoms';
const App = () => {
  const blocks = useRecoilValue(blocksState);
  const activeId = useRecoilValue(activeIdState);
  const modal = useRecoilValue(modalState);
  const colors = useRecoilValue(colorsState);
  const filter = useRecoilValue(filterState);
  const [filterBlocks, setFilterBlocks] = useState<blockType[]>([]);

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
    setFilterBlocks(text);
  }, [filter, blocks]);
  return (
    <div className={styles.app}>
      <aside>
        <Logo />
        <div className={styles.filter}>
          {colors.map((color) => (
            <FilterBall key={color} color={color} />
          ))}
        </div>
      </aside>
      <main className={styles.main}>
        <Search />
        <Button>Create block</Button>
        <div className={styles.blocks}>
          {filterBlocks.map((block) => (
            <Block id={block.id} color={block.color} key={block.id}>
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
