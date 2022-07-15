import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";



const GamePage = () => {
  const {gameCode} = useParams();
  const user = useSelector((state: any) => state.user)
  const game = useSelector((state: any) => state.game);
  const dispatch = useDispatch();
  const id = user.userID;
  const name = user.name;
  if (game.players.includes(id)) {
    const role = game.gameRoles.id

    if (!user.active) {
      if (game.gameStarted) {
        if (!game.gameEnded) {

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
  } else {
    return (
      <Navigate to="/" />
    );
  }
}


export default GamePage;