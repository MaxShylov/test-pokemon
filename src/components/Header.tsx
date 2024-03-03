import React, { type FC } from 'react';

interface HeaderProps {
  data?: unknown;
}

export const Header: FC<HeaderProps> = () => <h1>Header</h1>;
