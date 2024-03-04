import React, { type FC } from 'react';
import { Link } from 'react-router-dom';

import Flex from 'antd/es/flex';
import Tag from 'antd/es/tag';

import { type IPokemon, Path } from 'src/types';

type PokemonTypesProps = Pick<IPokemon, 'types'>;

export const PokemonTypes: FC<PokemonTypesProps> = ({ types }) => (
  <Flex gap="8px 0" wrap="wrap">
    {types.map((type) => (
      <Link key={type} to={`${Path.Type}/${type}`}>
        <Tag color="red">{type}</Tag>
      </Link>
    ))}
  </Flex>
);
