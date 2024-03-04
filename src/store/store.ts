import { configureStore } from '@reduxjs/toolkit';

import { pokemonApi } from './services/pokemon';

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware),

  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
