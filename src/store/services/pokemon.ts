import { createApi } from '@reduxjs/toolkit/query/react';

import { type IPokemon } from 'src/types';

import { axiosBaseQuery } from '../axiosBaseQuery';

interface PokemonResponse {
  id: string;
  moves: { move: { name: string } }[];
  name: string;
  sprites: {
    other: {
      dream_world: { front_default: string };
      home: { front_default: string };
      'official-artwork': { front_default: string };
    };
  };
  types: { type: { name: string } }[];
}

interface PokemonListByTypeResponse {
  pokemon: { pokemon: { name: string } }[];
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
    getPokemonByName: build.query<IPokemon, string>({
      query: (name) => ({ url: `/pokemon/${name.toLowerCase()}` }),
      transformResponse: (response: PokemonResponse): IPokemon => {
        const { moves, name, sprites, types } = response;
        const { dream_world, home, 'official-artwork': official } = sprites.other;

        return {
          image: dream_world.front_default || home.front_default || official.front_default,
          moves: moves.map(({ move }) => move.name),
          name,
          types: types.map(({ type }) => type.name),
        };
      },
    }),
    getPokemonListByType: build.query<string[], string>({
      query: (type) => ({ url: `/type/${type}` }),
      transformResponse: (response: PokemonListByTypeResponse): string[] =>
        response.pokemon.map(({ pokemon }) => pokemon.name),
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
  useGetPokemonListByTypeQuery,
  useGetPokemonQuery,
  useGetTypesQuery,
  useLazyGetPokemonByNameQuery,
} = pokemonApi;
