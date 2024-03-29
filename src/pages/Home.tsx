import React, { type FC } from 'react';

import Flex from 'antd/es/flex';

import { ErrorAlert } from 'src/components/ErrorAlert';
import { Loader } from 'src/components/loader';
import { Pagination } from 'src/components/Pagination';
import { PokemonList } from 'src/components/pokemon-list';
import { usePagination } from 'src/hooks/usePagination';
import { useGetPokemonListQuery } from 'src/store/services/pokemon';

export const Home: FC = () => {
  const { limit, page } = usePagination();

  const { data, error, isFetching } = useGetPokemonListQuery({
    limit,
    offset: (page - 1) * limit,
  });

  if (isFetching) return <Loader />;
  if (error || !data) return <ErrorAlert error={error} message="Pokémon not found" />;

  return (
    <Flex align="center" gap={32} vertical>
      <div className="w-100">
        <PokemonList data={data.names} />
      </div>

      <Pagination total={data.count} />
    </Flex>
  );
};
