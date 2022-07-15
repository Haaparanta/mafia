import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    lobbyName: '',
    private: false,
    players: [],
    playersByName: {},
    possibleRoles: [],
    createdBy: '',
    narrator: true,
    creator: false,
    delay: 30,
    voteTime: 30,
    nightTime: 30,
    dayTime: 180,
    showRoles: false,
    showVotes: false,
    mafiaNumbers: 0,
    doctorNumbers: 0,
    detectiveNumbers: 0,
    jesterNumbers: 0,
    jackalNumbers: 0,
    gameStarted: false,
    gameRoles: {},
    gameActions: {}, 
    gameAlivePlayers: {},
    gameStateDayOrNight: true,
    gameRound: 0,
    gameStage: 'joinGame',
    gameMafiaSelected: {},
    gameDoctorSelected: {},
    gameDetectiveSelected: {},
    gameMafiaKilled: [],
    gameJackalKilled: [],
    gameDoctorHealed: [],
    gameStateVote: {},
    gameVotePlayer: {},
    gameEnded: false,
    gameEndedReason: '',
    gameWinner: [],
    loading: 1,
  },
  reducers: {
    setLobbyName: (state, action) => {
      state.lobbyName = action.payload;
    },
    setPrivate: (state, action) => {
      state.private = action.payload;
    },
    setPlayers: (state, action) => {
      state.players = action.payload;
    },
    setPlayersByName: (state, action) => {
      state.playersByName = action.payload;
    },
    setPossibleRoles: (state, action) => {
      state.possibleRoles = action.payload;
    },
    setCreatedBy: (state, action) => {
      state.createdBy = action.payload;
    },
    setNarrator: (state, action) => {
      state.narrator = action.payload;
    },
    setCreator: (state, action) => {
      state.creator = action.payload;
    },
    setDelay: (state, action) => {
      state.delay = action.payload;
    },
    setVoteTime: (state, action) => {
      state.voteTime = action.payload;
    },
    setNightTime: (state, action) => {
      state.nightTime = action.payload;
    },
    setDayTime: (state, action) => {
      state.dayTime = action.payload;
    },
    setShowRoles: (state, action) => {
      state.showRoles = action.payload;
    },
    setShowVotes: (state, action) => {
      state.showVotes = action.payload;
    },
    setMafiaNumbers: (state, action) => {
      state.mafiaNumbers = action.payload;
    },
    setDoctorNumbers: (state, action) => {
      state.doctorNumbers = action.payload;
    },
    setDetectiveNumbers: (state, action) => {
      state.detectiveNumbers = action.payload;
    },
    setJesterNumbers: (state, action) => {
      state.jesterNumbers = action.payload;
    },
    setJackalNumbers: (state, action) => {
      state.jackalNumbers = action.payload;
    },
    setGameStarted: (state, action) => {
      state.gameStarted = action.payload;
    },
    setGameRoles: (state, action) => {
      state.gameRoles = action.payload;
    },
    setGameActions: (state, action) => {
      state.gameActions = action.payload;
    },
    setGameAlivePlayers: (state, action) => {
      state.gameAlivePlayers = action.payload;
    },
    setGameStateDayOrNight: (state, action) => {
      state.gameStateDayOrNight = action.payload;
    },
    setGameRound: (state, action) => {
      state.gameRound = action.payload;
    },
    setGameStage: (state, action) => {
      state.gameStage = action.payload;
    },
    setGameMafiaSelected: (state, action) => {
      state.gameMafiaSelected = action.payload;
    },
    setGameDoctorSelected: (state, action) => {
      state.gameDoctorSelected = action.payload;
    },
    setGameDetectiveSelected: (state, action) => {
      state.gameDetectiveSelected = action.payload;
    },
    setGameMafiaKilled: (state, action) => {
      state.gameMafiaKilled = action.payload;
    },
    setGameJackalKilled: (state, action) => {
      state.gameJackalKilled = action.payload;
    },
    setGameDoctorHealed: (state, action) => {
      state.gameDoctorHealed = action.payload;
    },
    setGameStateVote: (state, action) => {
      state.gameStateVote = action.payload;
    },
    setGameVotePlayer: (state, action) => {
      state.gameVotePlayer = action.payload;
    },
    setGameEnded: (state, action) => {
      state.gameEnded = action.payload;
    },
    setGameEndedReason: (state, action) => {
      state.gameEndedReason = action.payload;
    },
    setGameWinner: (state, action) => {
      state.gameWinner = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  }
});

export const { setLobbyName, setPrivate, setPlayers, setPlayersByName, setPossibleRoles, setCreatedBy, setNarrator, setCreator, setDelay, setVoteTime, setNightTime, setDayTime, setShowRoles, setShowVotes, setMafiaNumbers, setDoctorNumbers, setDetectiveNumbers, setJesterNumbers, setJackalNumbers, setGameStarted, setGameRoles, setGameActions, setGameAlivePlayers, setGameStateDayOrNight, setGameRound, setGameStage, setGameMafiaSelected, setGameDoctorSelected, setGameDetectiveSelected, setGameMafiaKilled, setGameJackalKilled, setGameDoctorHealed, setGameStateVote, setGameVotePlayer, setGameEnded, setGameEndedReason, setGameWinner, setLoading } = gameSlice.actions;
export default gameSlice.reducer;

