import { createApi } from '@reduxjs/toolkit/query/react';

import { axiosBaseQuery } from '../axiosBaseQuery';

interface PokemonResponse {
  id: string;
  moves: { move: { name: string } }[];
  name: string;
  types: { type: { name: string } }[];
}

interface TypeResponse {
  results: { name: string }[];
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
    getPokemonByType: build.query<PokemonResponse[], string>({
      query: (type) => ({ url: `/type/${type}` }),
    }),
    getTypes: build.query<string[], void>({
      query: () => ({ url: `/type` }),
      transformResponse: (response: TypeResponse): string[] =>
        response.results.map(({ name }) => name),
    }),
  }),
  reducerPath: 'pokemonApi',
});

export const {
  useGetPokemonByNameQuery,
  useGetPokemonByTypeQuery,
  useGetPokemonQuery,
  useGetTypesQuery,
} = pokemonApi;
