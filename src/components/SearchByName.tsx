import React, { type FC, useCallback } from 'react';

import Search from 'antd/es/input/Search';

interface SearchProps {
  data?: unknown;
}

export const SearchByName: FC<SearchProps> = () => {
  const handleSearch = useCallback((value: string) => console.info('value', value), []);

  return (
    <Search enterButton="Search" placeholder="input name" allowClear onSearch={handleSearch} />
  );
};
