import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { generateGameCode } from "../../components/gameCode/gameCode"
import { setLastGame } from "../../reducers/userReducer"

export const CreateGamePage = () => {
  const [gameCode, setGameCode] = useState(generateGameCode());
  const dispatch = useDispatch()
  dispatch(setLastGame(gameCode))
  const user = useSelector((state: any) => state.user)
  console.log('CreateGamePage user: ', user);

  if (!user.active) {
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
            <strong>{user.lastGame}</strong>
          </div>
        </div>
        <div className='container'>
          <div className='item'>
            <button>
              Create Game
            </button>
          </div>
        </div>
      </div>
    )
  }
}

