import React from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import ConfigProvider from 'antd/es/config-provider';

import { store } from 'src/store';

import router from './router';

const themeSettings = {
  cssVar: true,
  hashed: false,
};

const App = () => (
  <Provider store={store}>
    <ConfigProvider theme={themeSettings}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </Provider>
);

export default App;
