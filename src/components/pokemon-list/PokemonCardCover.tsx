import React, { type FC } from 'react';

import { SkeletonPokemonImage } from 'src/components/skeleton-pokemon-image';
import { useGetPokemonByNameQuery } from 'src/store/services/pokemon';

interface PokemonCardCoverProps {
  name: string;
}

export const PokemonCardCover: FC<PokemonCardCoverProps> = ({ name }) => {
  const { data, isFetching } = useGetPokemonByNameQuery(name);

  if (!data?.image) return <SkeletonPokemonImage active={isFetching} />;

  return <img alt={name} src={data?.image} />;
};
