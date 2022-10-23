import React, { ReactEventHandler } from 'react';
import styles from './FilterBall.module.scss';

interface ballTypes {
  color: string;
  size?: number;
  click?: any;
}

const FilterBall = ({ color, size = 40, click }: ballTypes) => {
  return (
    <div
      onClick={click}
      className={styles.ball}
      style={{ background: color, width: size, height: size }}
    ></div>
  );
};

export default FilterBall;
