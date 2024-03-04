import React, { type FC } from 'react';

import Flex from 'antd/es/flex';
import Tag from 'antd/es/tag';

import { type IPokemon } from 'src/types';

type PokemonMovesProps = Pick<IPokemon, 'moves'>;

export const PokemonMoves: FC<PokemonMovesProps> = ({ moves }) => (
  <Flex gap="8px 0" wrap="wrap">
    {moves.map((move) => (
      <Tag key={move} color="purple">
        {move}
      </Tag>
    ))}
  </Flex>
);
