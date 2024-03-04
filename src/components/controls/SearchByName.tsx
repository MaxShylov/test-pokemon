import React, { type FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import Input from 'antd/es/input/Input';
import LoadingOutlined from '@ant-design/icons/LoadingOutlined';
import SearchOutlined from '@ant-design/icons/SearchOutlined';

import { clearFilterBy, selectFilterBy, setFilterBy } from 'src/store/filterSlice';
import { Path } from 'src/types';
import { debounce } from 'src/utils/helpers/functions';

export const SearchByName: FC = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [value, setValue] = useState(name);
  const [loading, setLoading] = useState(false);
  const filterBy = useSelector(selectFilterBy);
  const dispatch = useDispatch();

  const debounceNavigate = useMemo(
    () =>
      debounce((name) => {
        setLoading(false);
        navigate(`${Path.Pokemon}/${name}`);
      }, 500),
    [navigate],
  );

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setValue(value);

      if (!value) {
        dispatch(clearFilterBy());
        setLoading(false);
        navigate(Path.Home);
        return;
      }

      if (filterBy !== 'name') dispatch(setFilterBy('name'));
      setLoading(true);
      debounceNavigate(value);
    },
    [debounceNavigate, dispatch, filterBy, navigate],
  );

  useEffect(() => {
    if (filterBy !== 'name') {
      if (!name) setValue('');
      debounceNavigate.cancel();
    }
  }, [debounceNavigate, filterBy, name]);

  return (
    <Input
      allowClear={!loading}
      placeholder="Enter name"
      prefix={<SearchOutlined />}
      suffix={loading ? <LoadingOutlined /> : null}
      value={value}
      onChange={handleChange}
    />
  );
};
