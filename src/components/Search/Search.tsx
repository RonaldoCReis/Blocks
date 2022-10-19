import { MagnifyingGlass } from 'phosphor-react';
import React from 'react';
import Styles from './Search.module.scss';

const Search = () => {
  return (
    <div className={Styles.container}>
      <MagnifyingGlass size={26} />
      <input className={Styles.input} type="text" />
    </div>
  );
};

export default Search;
