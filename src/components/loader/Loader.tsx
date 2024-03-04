import React, { type FC } from 'react';

import Spin from 'antd/es/spin';

import styles from './Loader.module.scss';

export const Loader: FC = () => (
  <div className={styles.wrap}>
    <Spin />
  </div>
);
