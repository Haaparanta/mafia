import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
  name: "user",
  initialState: {
    name: 'user',
    lastGame: 'AAAAAA',
    active: false,
    addFree: false,
    items: [],
    gamesNarrated: 0,
    gamesWonAsGood: 0,
    gamesWonAsEvil: 0,
    gamesWonAsNeutral: 0,
    gamesLostAsGood: 0,
    gamesLostAsEvil: 0,
    gamesLostAsNeutral: 0,
    userID: '',
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setLastGame: (state, action) => {
      state.lastGame = action.payload;
    },
    setActive: (state, action) => {
      state.active = action.payload;
    },
    setAddFree: (state, action) => {
      state.addFree = action.payload;
    },
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setGamesNarrated: (state, action) => {
      state.gamesNarrated = action.payload;
    },
    setGamesWonAsGood: (state, action) => {
      state.gamesWonAsGood = action.payload;
    },
    setGamesWonAsEvil: (state, action) => {
      state.gamesWonAsEvil = action.payload;
    },
    setGamesWonAsNeutral: (state, action) => {
      state.gamesWonAsNeutral = action.payload;
    },
    setGamesLostAsGood: (state, action) => {
      state.gamesLostAsGood = action.payload;
    },
    setGamesLostAsEvil: (state, action) => {
      state.gamesLostAsEvil = action.payload;
    },
    setGamesLostAsNeutral: (state, action) => {
      state.gamesLostAsNeutral = action.payload;
    },
    setUserID: (state, action) => {
      state.userID = action.payload;
    }
  }
});

export const { setName, setLastGame, setActive, setAddFree, setItems, setGamesNarrated, setGamesWonAsGood, setGamesWonAsEvil, setGamesWonAsNeutral, setGamesLostAsGood, setGamesLostAsEvil, setGamesLostAsNeutral, setUserID} = userSlice.actions;
export default userSlice.reducer;

