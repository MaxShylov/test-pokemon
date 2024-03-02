import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Layout } from 'src/components/layout/Layout';
import { Error } from 'src/pages/Error';
import { Home } from 'src/pages/Home';
import { Pokemon } from 'src/pages/Pokemon';
import { Route } from 'src/types';

export const router = createBrowserRouter([
  {
    children: [
      { element: <Home />, index: true },
      { element: <Pokemon />, path: `${Route.Pokemon}/:name` },
    ],
    element: <Layout />,
    errorElement: <Error />,
    path: Route.Home,
  },
]);
