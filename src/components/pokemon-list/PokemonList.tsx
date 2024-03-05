import React, { type FC, useCallback } from 'react';

import List from 'antd/es/list';

import { PokemonCard } from './PokemonCard';

interface PokemonListProps {
  data: string[];
}

const grid = {
  gutter: 16,
  lg: 4,
  md: 3,
  sm: 2,
  xl: 4,
  xs: 1,
  xxl: 4,
};

export const PokemonList: FC<PokemonListProps> = ({ data }) => {
  const renderItem = useCallback(
    (name: string) => (
      <List.Item>
        <PokemonCard name={name} />
      </List.Item>
    ),
    [],
  );

  return <List dataSource={data} grid={grid} renderItem={renderItem} />;
};
