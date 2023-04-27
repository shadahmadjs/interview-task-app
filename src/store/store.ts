import { normalize } from 'normalizr';
import { gameListSchema } from '../schemas/gameListSchema';
import data from '../data/game.json';
import { configureStore } from '@reduxjs/toolkit';

const normalizedData = normalize(data, gameListSchema);

const initialState = {
  games: normalizedData.entities.games,
};

export const store = configureStore({
  reducer: {
    games: (state = initialState.games, action) => state,
  },
});
