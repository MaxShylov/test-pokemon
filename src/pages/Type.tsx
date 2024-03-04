import React, { type FC } from 'react';
import { useParams } from 'react-router-dom';

import Space from 'antd/es/space';

import { ButtonBackHome } from 'src/components/buttons';
import { ErrorAlert } from 'src/components/ErrorAlert';
import { Loader } from 'src/components/loader';
import { PokemonList } from 'src/components/pokemon-list';
import { useGetPokemonListByTypeQuery } from 'src/store/services/pokemon';
import { capitalize } from 'src/utils/helpers/text';

export const Type: FC = () => {
  const { type = '' } = useParams();

  const { data: pokemonNames, error, isLoading } = useGetPokemonListByTypeQuery(type);

  if (isLoading) return <Loader />;
  if (error || !pokemonNames) return <ErrorAlert error={error} message="Pokémon not found" />;

  return (
    <Space align="center" direction="vertical">
      <ButtonBackHome />

      <h2>Type: {capitalize(type)}</h2>

      <PokemonList data={pokemonNames} />
    </Space>
  );
};
