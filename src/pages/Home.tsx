import React, { type FC } from 'react';

import { useGetPokemonQuery } from 'src/store/services/pokemon';

interface HomeProps {
  data?: unknown;
}

export const Home: FC<HomeProps> = () => {
  // const qwe = useQuery();

  // const { data } = useGetPokemonByNameQuery('bulbasaur');
  const { data: data2 } = useGetPokemonQuery();

  // console.log('data', data);
  console.warn('data2', data2);

  return <div>Home</div>;
};
