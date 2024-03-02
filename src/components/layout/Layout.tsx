import React, { type FC } from 'react';
import { Outlet } from 'react-router-dom';

import Space from 'antd/es/space';

import { Header } from 'src/components/Header';
import { SearchByName } from 'src/components/SearchByName';
import { SelectType } from 'src/components/SelectType';

import styles from './Layout.module.scss';

interface LayoutProps {
  data?: unknown;
}

export const Layout: FC<LayoutProps> = () => (
  <div className={styles.wrap}>
    <Space align="center" direction="vertical">
      <Header />

      <Space>
        <SearchByName />
        <SelectType />
      </Space>

      <Outlet />
    </Space>
  </div>
);
