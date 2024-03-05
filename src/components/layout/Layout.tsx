import React, { type FC } from 'react';
import { Outlet } from 'react-router-dom';

import { SearchByName, SelectType } from 'src/components/controls';

import styles from './Layout.module.scss';

export const Layout: FC = () => (
  <div className={styles.wrap}>
    <h1 className={styles.title}>Pokémon</h1>

    <aside className={styles.controlsWrap}>
      <div className={styles.controls}>
        <SearchByName />
        <SelectType />
      </div>
    </aside>

    <main className={styles.mainWrap}>
      <div className={styles.main}>
        <Outlet />
      </div>
    </main>
  </div>
);
