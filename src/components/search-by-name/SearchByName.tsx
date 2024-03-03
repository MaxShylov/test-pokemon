import React, { type FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import Input from 'antd/es/input/Input';
import SearchOutlined from '@ant-design/icons/SearchOutlined';

import { clearFilterBy, selectFilterBy, setFilterBy } from 'src/store/filterSlice';
import { Path } from 'src/types';
import { debounce } from 'src/utils/helpers/functions';

import styles from './SearchByName.module.scss';

export const SearchByName: FC = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [value, setValue] = useState(name);
  const filterBy = useSelector(selectFilterBy);
  const dispatch = useDispatch();

  const debounceNavigate = useMemo(
    () => debounce((name) => navigate(`${Path.Pokemon}/${name}`), 500),
    [navigate],
  );

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setValue(value);

      if (!value) {
        dispatch(clearFilterBy());
        navigate(Path.Home);
        return;
      }

      if (filterBy !== 'name') dispatch(setFilterBy('name'));
      debounceNavigate(value);
    },
    [debounceNavigate, dispatch, filterBy, navigate],
  );

  useEffect(() => {
    setValue(name);

    if (filterBy !== 'name') {
      debounceNavigate.cancel();
    }
  }, [debounceNavigate, filterBy, name]);

  return (
    <Input
      className={styles.input}
      placeholder="Enter name"
      prefix={<SearchOutlined />}
      value={value}
      allowClear
      onChange={handleChange}
    />
  );
};
