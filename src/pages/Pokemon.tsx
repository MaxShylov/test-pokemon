import React, { type FC } from 'react';
import { useParams } from 'react-router-dom';

import Alert from 'antd/es/alert/Alert';

import { Loader } from 'src/components/loader';
import { PokemonDetails } from 'src/components/pokemon-details';
import { useGetPokemonByNameQuery } from 'src/store/services/pokemon';

export const Pokemon: FC = () => {
  const { name = '' } = useParams();

  const { data: pokemon, isError, isLoading } = useGetPokemonByNameQuery(name);

  if (isLoading) return <Loader />;
  if (isError || !pokemon) return <Alert message="Pokémon not found" type="error" showIcon />;

  return <PokemonDetails pokemon={pokemon} />;
};
