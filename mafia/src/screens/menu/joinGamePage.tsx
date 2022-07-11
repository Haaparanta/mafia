import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { setLastGame } from "../../reducers/userReducer";

export const JoinGamePage = () => {
  const userS = useSelector((state: any) => state.user);
  const [gameCode, setGameCode] = useState('AAAAAA');

  const handleChange = (e: any) => {
    setGameCode(e.target.value.toUpperCase());
  }

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
            <input value={gameCode} maxLength={6} minLength={6} onChange={handleChange}/>
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


