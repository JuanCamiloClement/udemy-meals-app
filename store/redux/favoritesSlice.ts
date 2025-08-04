import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FavoritesState = {
  ids: string[];
};

type FavoritesActionPayload = {
  id: string;
};

const initialState: FavoritesState = { ids: [] };

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state: FavoritesState, action: PayloadAction<FavoritesActionPayload>) => {
      state.ids.push(action.payload.id); // Redux toolkit allows state mutation, if not using toolkit, new state should be returned in an unmutable way
    },
    removeFavorite: (state: FavoritesState, action: PayloadAction<FavoritesActionPayload>) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;

export default favoritesSlice.reducer;
