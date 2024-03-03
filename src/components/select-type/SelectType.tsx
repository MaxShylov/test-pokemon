import React, { type FC, useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import Select from 'antd/es/select';

import { setFilterBy } from 'src/store/filterSlice';
import { useGetTypesQuery } from 'src/store/services/pokemon';
import { Path } from 'src/types';
import { capitalize } from 'src/utils/helpers/text';

import styles from './SelectType.module.scss';

export const SelectType: FC = () => {
  const { type } = useParams();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { data: types, isLoading } = useGetTypesQuery();

  const options = useMemo(
    () => types?.map((type) => ({ label: capitalize(type), value: type })),
    [types],
  );

  const handleChange = useCallback(
    (value: string) => {
      dispatch(setFilterBy('type'));
      navigate(`${Path.Type}/${value}`);
    },
    [dispatch, navigate],
  );

  return (
    <Select
      className={styles.select}
      disabled={isLoading}
      loading={isLoading}
      options={options}
      placeholder="Select type"
      value={type}
      onChange={handleChange}
    />
  );
};
