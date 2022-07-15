import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";




const GameEndPage = () => {
  const game = useSelector((state: any) => state.game);

  const nextGame = () => {
    console.log("next game");
    return (
      <Navigate to={{pathname: `/lobby/${game.lobbyName}`}} />
    );
  }

  if (game.gameRoles.id === 'narrator') {
    return (
      <div className='app'> 
        <div className='container'>
          <div className='item'>
            <button>Game Over</button>
          </div>
          <div className='item'>
            <button>{game.gameEndedReason}</button>
          </div>
          <div className='item'>
            <button>{game.gameEndedBy}</button>
          </div>
          <div className='item'>
            <button onClick={nextGame}>Next Game</button>
          </div> 
        </div>
      </div>
    )
  } else {
    return (
      <div className='app'> 
        <div className='container'>
          <div className='item'>
            <button>Game Over</button>
          </div>
          <div className='item'>
            <button>{game.gameEndedReason}</button>
          </div>
          <div className='item'>
            <button>{game.gameEndedBy}</button>
          </div>
        </div>
      </div>
    )
  }
}

export default GameEndPage;