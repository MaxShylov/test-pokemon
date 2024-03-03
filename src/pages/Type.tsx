import React, { type FC } from 'react';
import { useParams } from 'react-router-dom';

export const Type: FC = () => {
  const { type = '' } = useParams();

  return (
    <div>
      <h2>Type: {type}</h2>
    </div>
  );
};
