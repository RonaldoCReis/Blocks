import React, { ReactEventHandler } from 'react';
import styles from './FilterBall.module.scss';

interface ballTypes {
  color: string;
  size?: number;
  click?: any;
  active: boolean;
}

const FilterBall = ({ color, size = 40, click, active }: ballTypes) => {
  return (
    <div
      onClick={click}
      className={`${styles.ball} ${active && styles.active}`}
      style={{ background: color, width: size, height: size }}
    ></div>
  );
};

export default FilterBall;
