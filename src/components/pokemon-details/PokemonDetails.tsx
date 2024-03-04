import React, { type FC } from 'react';

import Col from 'antd/es/col';
import Divider from 'antd/es/divider';
import Flex from 'antd/es/flex';
import Image from 'antd/es/image';
import Row from 'antd/es/row';
import Space from 'antd/es/space';

import { ButtonBackHome } from 'src/components/buttons';
import { ButtonBack } from 'src/components/buttons/ButtonBack';
import { SkeletonPokemonImage } from 'src/components/skeleton-pokemon-image';
import { type IPokemon } from 'src/types';
import { capitalize } from 'src/utils/helpers/text';

import { PokemonMoves } from './PokemonMoves';
import { PokemonTypes } from './PokemonTypes';

interface PokemonDetailsProps {
  pokemon: IPokemon;
}

export const PokemonDetails: FC<PokemonDetailsProps> = ({
  pokemon: { image, moves, name, types },
}) => (
  <Space direction="vertical">
    <Flex gap={8} justify="center">
      <ButtonBack />
      <ButtonBackHome />
    </Flex>
    <Row gutter={32} justify="center">
      <Col flex="0 1">
        <div>{image ? <Image alt={name} src={image} width={260} /> : <SkeletonPokemonImage />}</div>
      </Col>
      <Col flex="1 1 500px">
        <div>
          <h2>{capitalize(name)}</h2>

          <div>
            <Divider>Types</Divider>
            <PokemonTypes types={types} />
          </div>

          <div>
            <Divider>Moves</Divider>
            <PokemonMoves moves={moves} />
          </div>
        </div>
      </Col>
    </Row>
  </Space>
);
