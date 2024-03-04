import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type FilterBy = 'name' | 'type';

interface FilterState {
  by?: FilterBy;
}

const initialState: FilterState = {};

export const filterSlice = createSlice({
  initialState,
  name: 'filter',
  reducers: {
    clearFilterBy: (state) => {
      state.by = undefined;
    },
    setFilterBy: (state, action: PayloadAction<FilterBy>) => {
      state.by = action.payload;
    },
  },
  selectors: {
    selectFilterBy: (sliceState) => sliceState.by,
  },
});

export const { clearFilterBy, setFilterBy } = filterSlice.actions;
export const { selectFilterBy } = filterSlice.selectors;

export const filterReducer = filterSlice.reducer;
