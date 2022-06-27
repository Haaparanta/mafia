import React, { useState } from "react"
import { generateGameCode } from "../../components/gameCode/gameCode"

export const CreateGamePage = () => {
  let gameCode = (generateGameCode())
  return (
    <div className='app'>
      <h1>{gameCode}</h1>
      <h1>Create</h1>
    </div>
  )
}


