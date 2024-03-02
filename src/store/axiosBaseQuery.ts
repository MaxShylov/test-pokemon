import axios from 'axios';
import { type AxiosError, type AxiosRequestConfig } from 'axios';

import { type BaseQueryFn } from '@reduxjs/toolkit/query';

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' },
  ): BaseQueryFn<
    {
      data?: AxiosRequestConfig['data'];
      headers?: AxiosRequestConfig['headers'];
      method?: AxiosRequestConfig['method'];
      params?: AxiosRequestConfig['params'];
      url: string;
    },
    unknown,
    unknown
  > =>
  async ({ data, headers, method = 'get', params, url }) => {
    try {
      const result = await axios({
        data,
        headers,
        method,
        params,
        url: baseUrl + url,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          data: err.response?.data || err.message,
          status: err.response?.status,
        },
      };
    }
  };
