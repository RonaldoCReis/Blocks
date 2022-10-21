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
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';

const App = () => {
  return (
    <RecoilRoot>
      <div className={styles.app}>
        <aside>
          <Logo />
          <div className={styles.filter}>
            <FilterBall />
            <FilterBall />
            <FilterBall />
            <FilterBall />
            <FilterBall />
          </div>
          xw
        </aside>
        <main className={styles.main}>
          <Search />
          <Button>Create block</Button>
          <div className={styles.blocks}>
            <Block>
              <Title>Titulo</Title>
              <Text>Block text</Text>
            </Block>
            <Block>
              <Title>Titulo</Title>
              <Text>Block text</Text>
            </Block>
          </div>
        </main>
        <Modal />
      </div>
    </RecoilRoot>
  );
};

export default App;
