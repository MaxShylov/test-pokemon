import React, { type FC } from 'react';

import { useQuery } from 'src/hooks/useQuery';
import { useGetPokemonQuery } from 'src/store/services/pokemon';

interface HomeProps {
  data?: unknown;
}

export const Home: FC<HomeProps> = () => {
  const qwe = useQuery();
  console.log('qwe', qwe);

  // const { data } = useGetPokemonByNameQuery('bulbasaur');
  const { data: data2 } = useGetPokemonQuery();

  // console.log('data', data);
  console.log('data2', data2);

  return <div>Home</div>;
};
