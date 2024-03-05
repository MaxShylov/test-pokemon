import React, { type ChangeEvent, type FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import Input from 'antd/es/input/Input';
import LoadingOutlined from '@ant-design/icons/LoadingOutlined';
import SearchOutlined from '@ant-design/icons/SearchOutlined';

import { Path } from 'src/types';
import { debounce } from 'src/utils/helpers/functions';

const SEARCH_BY_NAME = 'search-by-name';

export const SearchByName: FC = () => {
  const { name = '' } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);

  const debounceNavigate = useMemo(
    () =>
      debounce((name) => {
        setLoading(false);
        navigate(`${Path.Pokemon}/${name}`);
      }, 500),
    [navigate],
  );

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;

      if (location.state !== SEARCH_BY_NAME) {
        navigate('', { replace: false, state: SEARCH_BY_NAME });
      }

      setValue(value);

      if (!value) {
        setLoading(false);
        navigate(Path.Home);
        return;
      }

      setLoading(true);
      debounceNavigate(value);
    },
    [debounceNavigate, location.state, navigate],
  );

  useEffect(() => {
    setValue(name);
  }, [name]);

  useEffect(() => {
    if (location.state !== SEARCH_BY_NAME && debounceNavigate.pending()) {
      debounceNavigate.cancel();
      setLoading(false);
      setValue('');
    }
  }, [debounceNavigate, location.state]);

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
