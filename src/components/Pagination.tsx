import React, { type FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import AntPagination from 'antd/es/pagination/Pagination';

import { usePagination } from 'src/hooks/usePagination';

interface PaginationProps {
  total: number;
}

const pageSizeOptions = [12, 20];

export const Pagination: FC<PaginationProps> = ({ total }) => {
  const { limit, page } = usePagination();

  const navigate = useNavigate();

  const handleChange = useCallback(
    (page: number, pageSize: number) => navigate(`/?limit=${pageSize}&page=${page}`),
    [navigate],
  );

  return (
    <AntPagination
      defaultCurrent={page}
      defaultPageSize={limit}
      pageSizeOptions={pageSizeOptions}
      total={total}
      onChange={handleChange}
    />
  );
};
