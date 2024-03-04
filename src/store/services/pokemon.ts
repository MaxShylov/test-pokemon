import { createApi } from '@reduxjs/toolkit/query/react';

import { type IPokemon } from 'src/types';

import { axiosBaseQuery } from '../api/axiosBaseQuery';

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

interface PokemonListArgs {
  limit?: number;
  offset?: number;
}

interface PokemonListResponse {
  count: number;
  results: { name: string }[];
}

interface PokemonListReturn {
  count: number;
  names: string[];
}

interface PokemonListByTypeResponse {
  pokemon: { pokemon: { name: string } }[];
}
type PokemonListByTypeRequrn = string[];

interface PokemonTypeResponse {
  results: { name: string }[];
}

export const pokemonApi = createApi({
  baseQuery: axiosBaseQuery(),
  endpoints: (build) => ({
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
    getPokemonList: build.query<PokemonListReturn, PokemonListArgs>({
      query: ({ limit = 12, offset = 0 }) => ({
        params: { limit, offset },
        url: `/pokemon`,
      }),
      transformResponse: (response: PokemonListResponse): PokemonListReturn => {
        const { count, results } = response;
        return { count, names: results.map(({ name }) => name) };
      },
    }),
    getPokemonListByType: build.query<PokemonListByTypeRequrn, string>({
      query: (type) => ({ url: `/type/${type}` }),
      transformResponse: (response: PokemonListByTypeResponse): string[] =>
        response.pokemon.map(({ pokemon }) => pokemon.name),
    }),
    getPokemonTypes: build.query<string[], void>({
      query: () => ({ url: `/type` }),
      transformResponse: (response: PokemonTypeResponse): string[] =>
        response.results.map(({ name }) => name),
    }),
  }),
  reducerPath: 'pokemonApi',
});

export const {
  useGetPokemonByNameQuery,
  useGetPokemonListByTypeQuery,
  useGetPokemonListQuery,
  useGetPokemonTypesQuery,
} = pokemonApi;
