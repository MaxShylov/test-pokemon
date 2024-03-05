import React, { type FC, useMemo } from 'react';

import { type SerializedError } from '@reduxjs/toolkit';

import Alert from 'antd/es/alert/Alert';
import Flex from 'antd/es/flex';

import { type ApiError } from 'src/types';
import { isApiError } from 'src/utils/helpers/types';

interface ErrorAlertProps {
  error?: ApiError | SerializedError;
  message?: string;
}

export const ErrorAlert: FC<ErrorAlertProps> = ({ error, message }) => {
  const msg = useMemo(() => {
    if (isApiError(error) && error.data === 'Network Error') return error.data;

    return message;
  }, [error, message]);

  return (
    <Flex justify="center">
      <Alert message={msg} type="error" showIcon />
    </Flex>
  );
};
