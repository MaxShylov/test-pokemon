import React, { type FC } from 'react';
import { Outlet } from 'react-router-dom';

import Space from 'antd/es/space';

import { SearchByName, SelectType } from 'src/components/controls';

import styles from './Layout.module.scss';

export const Layout: FC = () => (
  <div className={styles.wrap}>
    <Space align="center" direction="vertical">
      <h1>Pokémon</h1>

      <aside className={styles.controls}>
        <SearchByName />
        <SelectType />
      </aside>

      <main className={styles.main}>
        <Outlet />
      </main>
    </Space>
  </div>
);
