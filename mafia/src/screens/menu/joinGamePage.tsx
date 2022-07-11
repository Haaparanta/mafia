import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import store from "../../reducers/store";
import { setLastGame } from "../../reducers/userReducer";

export const JoinGamePage = () => {
  const userS = useSelector((state: any) => state.user);
  const [gameCode, setGameCode] = useState('');
  store.subscribe(() => {
    const user = store.getState().user;
    setGameCode(user.lastGame);
  }, );
  console.log('JoinGamePage user: ', userS);
  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    dispatch(setLastGame(e.target.value));
    setGameCode(e.target.value);
    e.preventDefault();
  };

  if (!userS.active) {
    return (
      <>
        <Navigate to="/" />
      </>
    );
  } else {
    return (
      <div className='app'>
        <div className='container'>
          <div className='item'>
            <strong>{userS.lastGame}</strong>
          </div>
        </div>
        <div className='container'>
          <div className='item'>
            <form onSubmit={handleSubmit}>
              <input type="text" value={gameCode} maxLength={6}/>
              <input type="submit" value="Submit"/>
            </form>
          </div>
        </div>
        <div className='container'>
          <div className='item'>
            <button>
              Join Game
            </button>
          </div>
        </div>
      </div>
    )
  }
}


