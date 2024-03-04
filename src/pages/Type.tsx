import React, { type FC } from 'react';
import { useParams } from 'react-router-dom';

import { ErrorAlert } from 'src/components/ErrorAlert';
import { Loader } from 'src/components/loader';
import { PokemonList } from 'src/components/pokemon-list';
import { useGetPokemonListByTypeQuery } from 'src/store/services/pokemon';

export const Type: FC = () => {
  const { type = '' } = useParams();

  const { data: pokemonNames, error, isLoading } = useGetPokemonListByTypeQuery(type);

  if (isLoading) return <Loader />;
  if (error || !pokemonNames) return <ErrorAlert error={error} message="Pokémon not found" />;

  return (
    <div>
      <h2>Type: {type}</h2>

      <PokemonList data={pokemonNames} />
    </div>
  );
};
