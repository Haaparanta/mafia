import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { setLastGame } from "../../reducers/userReducer";

export const JoinGamePage = () => {
  const userS = useSelector((state: any) => state.user);
  const [gameCode, setGameCode] = useState('AAAAAA');
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    setGameCode(e.target.value);
  }

  const handleSubmit = (e: any) => {
    console.log(e.target.value);
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
              <input value={gameCode} maxLength={6} onChange={handleChange}/>
              <button type="submit">save</button>
            </form>
          </div>
        </div>
        <div className='container'>
          <div className='item'>
            <Link to={{pathname: `/lobby/${gameCode}`}} >
              <button>
                Join Game
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}


