import { type ApiError } from 'src/types';

import { isApiError } from './types';

describe('isApiError function', () => {
  it('should return true if the object is an ApiError', () => {
    const obj: ApiError = {
      data: 'Example data',
      status: 200,
    };
    expect(isApiError(obj)).toBeTruthy();
  });

  it('should return true if the object is an ApiError with optional status missing', () => {
    const obj: ApiError = {
      data: 'Example data',
    };
    expect(isApiError(obj)).toBeTruthy();
  });

  it('should return false if the object is not an ApiError', () => {
    const obj = {
      message: 'Example message',
    };
    expect(isApiError(obj)).toBeFalsy();
  });
});
