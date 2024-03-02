import React, { type FC } from 'react';

interface HeaderProps {
  data?: unknown;
}

export const Header: FC<HeaderProps> = () => {
  /* eslint-disable-next-line */
  console.log('Header');

  return <h1>Header</h1>;
};
