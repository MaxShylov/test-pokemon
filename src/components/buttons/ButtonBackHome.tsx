import React, { type FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'antd';

import { Route } from 'src/types';

export const ButtonBackHome: FC = () => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => navigate(Route.Home), [navigate]);

  return (
    <Button type="primary" onClick={handleClick}>
      Back Home
    </Button>
  );
};
