import { MagnifyingGlass } from 'phosphor-react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { filterState } from '../../state/atoms';
import Styles from './Search.module.scss';

const Search = () => {
  const [filter, setFilter] = useRecoilState(filterState);
  return (
    <div className={Styles.container}>
      <MagnifyingGlass size={26} />
      <input
        onChange={(event) => setFilter(event.target.value)}
        value={filter}
        className={Styles.input}
        type="text"
      />
    </div>
  );
};

export default Search;
