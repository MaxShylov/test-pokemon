import React, { type FC } from 'react';
import { Outlet } from 'react-router-dom';

import Space from 'antd/es/space';

import { SearchByName } from 'src/components/search-by-name/SearchByName';
import { SelectType } from 'src/components/select-type/SelectType';

import styles from './Layout.module.scss';

interface LayoutProps {
  data?: unknown;
}

export const Layout: FC<LayoutProps> = () => (
  <div className={styles.wrap}>
    <Space align="center" direction="vertical">
      <h1>Pokémon</h1>

      <Space>
        <SearchByName />
        <SelectType />
      </Space>

      <Outlet />
    </Space>
  </div>
);
