import React from 'react';
import styles from './FilterBall.module.scss';

interface ballTypes {
  color?: string;
  size?: number;
}

const FilterBall = ({ color = '#34627B', size = 40 }: ballTypes) => {
  return (
    <div
      className={styles.ball}
      style={{ background: color, width: size, height: size }}
    ></div>
  );
};

export default FilterBall;
