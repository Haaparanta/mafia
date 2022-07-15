import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { db } from "../../components/firebase/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { setGameActions, setGameAlivePlayers, setGameEnded, setGameEndedReason, setGameRoles, setGameRound, setGameStage, setGameStarted, setGameStateDayOrNight, setGameStateVote, setGameVotePlayer, setGameWinner } from "../../reducers/gameReducer";



const GamePage = () => {
  const {gameCode} = useParams();
  const user = useSelector((state: any) => state.user)
  const game = useSelector((state: any) => state.game);
  const dispatch = useDispatch();
  const id = user.userID;
  const name = user.name;
  if (!user.active) {
    return (
      <Navigate to="/" />
    );
  }
  if (!gameCode) {
    return (
      <Navigate to="*" />
    );
  }
  const gameRef = doc(db, 'games', gameCode, 'game', 'game');
  const unsubscribe = onSnapshot(gameRef, (snapshot) => {
    if (snapshot.exists()) {
      const gameData = snapshot.data();
      console.log(gameData);
      dispatch(setGameStarted(gameData.gameStarted));
      dispatch(setGameRoles(gameData.gameRoles));
      dispatch(setGameAlivePlayers(gameData.gameAlivePlayers));
      dispatch(setGameStage(gameData.gameStage));
      dispatch(setGameActions(gameData.gameActions));
      dispatch(setGameRound(gameData.gameDay));
      dispatch(setGameStateDayOrNight(gameData.gameDayOrNight));
      dispatch(setGameStateVote(gameData.gameStateVote));
      dispatch(setGameVotePlayer(gameData.gameVotePlayer));
      dispatch(setGameEnded(gameData.gameEnded));
      dispatch(setGameEndedReason(gameData.gameEndedReason));
      dispatch(setGameWinner(gameData.gameEndedBy))
    }
  });

  if (game.players.includes(id)) {
    const role = game.gameRoles.id

    if (game.gameStarted) {
      if (!game.gameEnded) {
        if (game.gameStateDayOrNight) {
          return (
            <div>
              <h1>Day</h1>
            </div>
          );
        } else {
          return (
            <div>
              <h1>Night</h1>
            </div>
          );
        }
      } else {
        return (
          <Navigate to="/gameEndPage" />
        );
      }
    } else {
      return (
        <Navigate to={{pathname: `/lobby/${gameCode}`}} />
      );
    }
  } else {
    return (
      <Navigate to="/" />
    );
  }
}


export default GamePage;