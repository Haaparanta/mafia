import { configureStore } from '@reduxjs/toolkit';

import userSlice from './userReducer';
import gameSlice from './gameReducer';

const store = configureStore({
  reducer: {
    user: userSlice,
    game: gameSlice
  }
});

export default store;

