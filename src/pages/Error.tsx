import React, { type FC } from 'react';

import Flex from 'antd/es/flex';
import Result from 'antd/es/result';

import { ButtonBackHome } from 'src/components/buttons';

export const Error: FC = () => (
  <Flex align="center" className="layout-height" justify="center">
    <Result
      extra={<ButtonBackHome />}
      status="404"
      subTitle="Sorry, the page you visited does not exist."
      title={404}
    />
  </Flex>
);
