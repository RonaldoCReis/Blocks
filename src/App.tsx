import React from 'react';
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
  colorsState,
  modalState,
} from './state/atoms';
const App = () => {
  const blocks = useRecoilValue(blocksState);
  const activeId = useRecoilValue(activeIdState);
  const modal = useRecoilValue(modalState);
  const colors = useRecoilValue(colorsState);

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
          {blocks.map((block) => (
            <Block id={block.id} color={block.color} key={block.id}>
              <Title>{block.title}</Title>
              <Text>{block.text}</Text>
            </Block>
          ))}
        </div>
      </main>
      {modal && <Modal />}
    </div>
  );
};

export default App;
