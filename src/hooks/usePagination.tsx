import { useMemo } from 'react';

import { useQuery } from 'src/hooks/useQuery';
import { getPositiveNumber } from 'src/utils/helpers/numbers';

interface UsePaginationReturn {
  limit: number;
  page: number;
}

export const usePagination = (): UsePaginationReturn => {
  const { limit, page } = useQuery();

  return useMemo(() => {
    const numLimit = getPositiveNumber(limit) || 12;
    const numPage = getPositiveNumber(page) || 1;

    return {
      limit: numLimit,
      page: numPage,
    };
  }, [limit, page]);
};
