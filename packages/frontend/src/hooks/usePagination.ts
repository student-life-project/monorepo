import type { IPagination, IPaginationParams } from '@student_life/common';
import { useCallback, useState } from 'react';

import { api } from '@/services/api';

export type TPaginationHook<T> = {
  nextPage: () => void;
  prevPage: () => void;
  goToPage: (page?: number) => void;
} & Omit<IPagination<T>, 'data'>;

export type TPaginationHookParams<T> = {
  route: string;
  dataSetter: (data: T[]) => void;
} & IPaginationParams;

export const usePaginaion = <T>({
  dataSetter,
  route,
  ...paginationParams
}: TPaginationHookParams<T>): TPaginationHook<T> => {
  const [currentPage, setCurrentPage] = useState(0);
  const [nextPageState, setNextPageState] = useState<number | null>(null);
  const [prevPageState, setPrevPageState] = useState<number | null>(null);
  const [currentLimit, setCurrentLimit] = useState<number | null>(null);
  const [count, setCount] = useState(0);

  const goToPage = useCallback(
    async (page?: number) => {
      const from = (page || currentPage) * (paginationParams.limit || 0);

      const response = await api.get<IPagination<T>>(route, {
        params: {
          from,
          limit: paginationParams.limit,
          sortBy: paginationParams.sortBy,
          order: paginationParams.order,
        } as IPaginationParams,
      });

      const paginationData = response.data;

      setCurrentPage(paginationData.current);
      setCount(paginationData.count);
      setNextPageState(paginationData.next || null);
      setPrevPageState(paginationData.prev || null);
      setCurrentLimit(paginationData.limit || null);
      dataSetter(paginationData.data);
    },
    [currentPage, paginationParams, route, dataSetter],
  );

  const nextPage = useCallback(() => {
    if (nextPageState !== null) {
      goToPage(nextPageState);
    }
  }, [nextPageState, goToPage]);

  const prevPage = useCallback(() => {
    if (prevPageState !== null) {
      goToPage(prevPageState);
    }
  }, [prevPageState, goToPage]);

  return {
    goToPage,
    nextPage,
    prevPage,
    count,
    current: currentPage,
    limit: currentLimit,
    next: nextPageState,
    prev: prevPageState,
  } as TPaginationHook<T>;
};
