import React, { type FC, useCallback, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Select from 'antd/es/select';

import { useGetPokemonTypesQuery } from 'src/store/services/pokemon';
import { Path } from 'src/types';
import { capitalize } from 'src/utils/helpers/text';

export const SelectType: FC = () => {
  const { type } = useParams();

  const navigate = useNavigate();
  const { data: types, isLoading } = useGetPokemonTypesQuery();

  const options = useMemo(
    () => types?.map((type) => ({ label: capitalize(type), value: type })),
    [types],
  );

  const handleChange = useCallback(
    (value: string) => navigate(`${Path.Type}/${value}`),
    [navigate],
  );

  return (
    <Select
      disabled={isLoading}
      loading={isLoading}
      options={options}
      placeholder="Select type"
      value={type}
      onChange={handleChange}
    />
  );
};
