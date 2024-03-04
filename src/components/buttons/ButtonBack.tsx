import React, { type FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'antd/es/button/button';
import LeftOutlined from '@ant-design/icons/LeftOutlined';

interface ButtonBackProps {
  data?: unknown;
}

export const ButtonBack: FC<ButtonBackProps> = () => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => navigate(-1), [navigate]);

  return (
    <Button icon={<LeftOutlined />} onClick={handleClick}>
      Go Back
    </Button>
  );
};
