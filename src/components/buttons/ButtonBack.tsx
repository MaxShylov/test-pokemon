import React, { type FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'antd';

interface ButtonBackProps {
  data?: unknown;
}

export const ButtonBack: FC<ButtonBackProps> = () => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => navigate(-1), [navigate]);

  return <Button onClick={handleClick}>Go Back</Button>;
};
