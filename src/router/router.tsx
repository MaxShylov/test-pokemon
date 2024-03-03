import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Layout } from 'src/components/layout/Layout';
import { Error } from 'src/pages/Error';
import { Home } from 'src/pages/Home';
import { Pokemon } from 'src/pages/Pokemon';
import { Type } from 'src/pages/Type';
import { Path } from 'src/types';

export const router = createBrowserRouter([
  {
    children: [
      { element: <Home />, index: true },
      { element: <Pokemon />, path: `${Path.Pokemon}/:name` },
      { element: <Type />, path: `${Path.Type}/:type` },
    ],
    element: <Layout />,
    errorElement: <Error />,
    path: Path.Home,
  },
]);
