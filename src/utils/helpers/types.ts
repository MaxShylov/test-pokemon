import { type ApiError } from 'src/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isApiError = (obj: any): obj is ApiError =>
  obj &&
  typeof obj.data !== 'undefined' &&
  (typeof obj.status === 'undefined' || typeof obj.status === 'number');
