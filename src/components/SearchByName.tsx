import React, { type FC, useCallback } from 'react';

import Search from 'antd/es/input/Search';

interface SearchProps {
  data?: unknown;
}

export const SearchByName: FC<SearchProps> = () => {
  const handleSearch = useCallback(
    (
      value: string,
      event?:
        | React.ChangeEvent<HTMLInputElement>
        | React.KeyboardEvent<HTMLInputElement>
        | React.MouseEvent<HTMLElement>,
      info?: {
        source?: string | string;
      },
    ) => {
      console.log('value', value);
    },
    [],
  );

  return (
    <Search enterButton="Search" placeholder="input name" allowClear onSearch={handleSearch} />
  );
};
