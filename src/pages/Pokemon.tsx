import React, { type FC } from 'react';
import { useParams } from 'react-router-dom';

import { ErrorAlert } from 'src/components/ErrorAlert';
import { Loader } from 'src/components/loader';
import { PokemonDetails } from 'src/components/pokemon-details';
import { useGetPokemonByNameQuery } from 'src/store/services/pokemon';

export const Pokemon: FC = () => {
  const { name = '' } = useParams();

  const { data: pokemon, error, isFetching } = useGetPokemonByNameQuery(name);

  if (isFetching) return <Loader />;
  if (error || !pokemon) return <ErrorAlert error={error} message="Pokémon not found" />;

  return <PokemonDetails pokemon={pokemon} />;
};
