import { createApi } from '@reduxjs/toolkit/query/react';

import { axiosBaseQuery } from 'src/store/axiosBaseQuery';

interface PokemonResponse {
  id: string;
  moves: { move: { name: string } }[];
  name: string;
  types: { type: { name: string } }[];
}

export const pokemonApi = createApi({
  baseQuery: axiosBaseQuery(),
  endpoints: (build) => ({
    getPokemon: build.query<PokemonResponse[], void>({
      query: () => ({ url: `/pokemon?limit=12` }),
    }),
    getPokemonByName: build.query<PokemonResponse, string>({
      query: (name) => ({ url: `/pokemon/${name}` }),
    }),
  }),
  reducerPath: 'pokemonApi',
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery, useGetPokemonQuery } = pokemonApi;
