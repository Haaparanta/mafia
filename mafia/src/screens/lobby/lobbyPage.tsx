import { doc, getDoc, setDoc} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { db } from '../../components/firebase/firebase';
import { validCode } from '../../components/gameCode/gameCode';
import { setCreatedBy, setCreator, setDayTime, setDelay, setDetectiveNumbers, setDoctorNumbers, setGameStage, setJackalNumbers, setLoading, setLobbyName, setMafiaNumbers, setNarrator, setNightTime, setPlayers, setPlayersByName, setPrivate, setShowRoles, setShowVotes, setVoteTime } from '../../reducers/gameReducer';


const LobbyPage = () => {
  const {gameCode} = useParams();
  const user = useSelector((state: any) => state.user)
  const game = useSelector((state: any) => state.game);
  const dispatch = useDispatch();
  const id = user.userID;
  const name = user.name;
  if (!user.active) {
    return (
      <>
        <Navigate to="/" />
      </>
    );
  }
  if (!gameCode) {
    return (
      <>
        <Navigate to="*" />
      </>
    );
  }
  if (!validCode(gameCode)) {
    return (
      <>
        <Navigate to="*" />
      </>
    );
  }
  if (game.createdBy) {
    return (
      <div className='app'> 
        <div className='container'>
          <div className='item'>
            <button>How many players: {game.players.length}</button>
          </div>
          <div className='item'>
            <button>How many members of mafia: {game.mafiaNumbers}</button>
          </div>
          <div className='item'>
            <button>How many doctors: {game.doctorNumbers}</button>
          </div>
          <div className='item'>
            <button>How many detectives: {game.detectiveNumbers}</button>
          </div>
          <div className='item'>
            <button>How many jesters: {game.jesterNumbers}</button>
          </div>
          <div className='item'>
            <button>How many jackals:{game.jackalNumbers}</button>
          </div>
          <div className='item'>
            <button>Let's Play</button>
          </div>
        </div>
      </div>
    );
  } else { // you are not the creator of this game
    return ( // AKA you are player
      <div className='app'> 
        <div className='container'>
          <div className='item'>
            <button>How many players: {game.players.length}</button>
          </div>
          <div className='item'>
            <button>How many members of mafia: {game.mafiaNumbers}</button>
          </div>
          <div className='item'>
            <button>How many doctors: {game.doctorNumbers}</button>
          </div>
          <div className='item'>
            <button>How many detectives: {game.detectiveNumbers}</button>
          </div>
          <div className='item'>
            <button>How many jesters: {game.jesterNumbers}</button>
          </div>
          <div className='item'>
            <button>How many jackals:{game.jackalNumbers}</button>
          </div>
        </div>
      </div>
    );
  }
}


export default LobbyPage;