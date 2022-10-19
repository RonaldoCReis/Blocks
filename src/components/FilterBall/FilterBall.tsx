import React from 'react';
import styles from './FilterBall.module.scss';

interface ballTypes {
  color?: string;
}

const FilterBall = ({ color = '#34627B' }: ballTypes) => {
  return <div className={styles.ball} style={{ background: color }}></div>;
};

export default FilterBall;
