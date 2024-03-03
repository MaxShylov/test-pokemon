import React, { type FC } from 'react';
import { useParams } from 'react-router-dom';

export const Pokemon: FC = () => {
  const { name = '' } = useParams();

  return (
    <div>
      <h2>Name: {name}</h2>
    </div>
  );
};
