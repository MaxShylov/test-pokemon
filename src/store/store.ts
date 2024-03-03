import { configureStore } from '@reduxjs/toolkit';

import { pokemonApi } from './services/pokemon';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware),

  reducer: {
    filter: filterReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
