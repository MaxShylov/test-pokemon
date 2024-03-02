import React, { type FC } from 'react';

import Select from 'antd/es/select';

interface SelectTypeProps {
  data?: unknown;
}

export const SelectType: FC<SelectTypeProps> = () => {
  /* eslint-disable-next-line */
  console.log('SelectType');

  return <Select options={[{ label: <span>sample</span>, value: 'sample' }]} />;
};
