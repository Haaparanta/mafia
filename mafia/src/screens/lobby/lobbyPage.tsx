import { doc, onSnapshot, setDoc} from 'firebase/firestore';
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
      <Navigate to="/" />
    );
  }
  if (!gameCode) {
    return (
      <Navigate to="*" />
    );
  }
  if (!validCode(gameCode)) {
    return (
      <Navigate to="*" />
    );
  }
  const lobbyRef = doc(db, 'games', gameCode, 'lobby', 'lobby');
  useEffect(() => {
    const unsubscribe = onSnapshot(lobbyRef, (snapshot) => {
      if (snapshot.exists()) {
        const lobbyData = snapshot.data();
        dispatch(setCreatedBy(lobbyData.createdBy));
        dispatch(setDayTime(lobbyData.dayTime));
        dispatch(setNightTime(lobbyData.nightTime));
        dispatch(setDelay(lobbyData.delay));
        dispatch(setVoteTime(lobbyData.voteTime));
        dispatch(setDetectiveNumbers(lobbyData.detectiveNumbers));
        dispatch(setDoctorNumbers(lobbyData.doctorNumbers));
        dispatch(setJackalNumbers(lobbyData.jackalNumbers));
        dispatch(setMafiaNumbers(lobbyData.mafiaNumbers));
        dispatch(setNarrator(lobbyData.narrator));
        dispatch(setPrivate(lobbyData.private));
        dispatch(setShowRoles(lobbyData.showRoles));
        dispatch(setShowVotes(lobbyData.showVotes));
        dispatch(setPlayers(lobbyData.playersByUID));
        dispatch(setPlayersByName(lobbyData.playersByName));
      }
    });
    return () => unsubscribe();
  }, []);



  const startNewGame = () => {
    console.log('startNewGame');
    const alivePlayers: {[uid : string]: boolean} = {};
    const roles: {[uid:string]: string}= {};
    console.log('1');
    for (let uid of game.players) {
      alivePlayers[uid] = true;
      roles[uid] = 'town';
    }
    console.log('2');
    roles[game.createdBy] = 'narrator';
    for (let i = 0; i < game.mafiaNumbers; i++) {
      while (true) {
        const uid = game.players[Math.floor(Math.random() * game.players.length)];
        if ('town' === roles.uid) {
          roles[uid] = 'mafia';
          break;
        }
      }
    }
    console.log('3');
    for (let i = 0; i < game.detectiveNumbers; i++) {
      while (true) {
        const uid = game.players[Math.floor(Math.random() * game.players.length)];
        if ('town' === roles.uid) {
          roles[uid] = 'detective';
          break;
        }
      }
    }
    console.log('4');
    for (let i = 0; i < game.doctorNumbers; i++) {
      while (true) {
        const uid = game.players[Math.floor(Math.random() * game.players.length)];
        if ('town' === roles.uid) {
          roles[uid] = 'doctor';
          break;
        }
      }
    }
    console.log('5');
    for (let i = 0; i < game.jackalNumbers; i++) {
      while (true) {
        const uid = game.players[Math.floor(Math.random() * game.players.length)];
        if ('town' === roles.uid) {
          roles[uid] = 'jackal';
          break;
        }
      }
    }
    console.log('7');
    for (let i = 0; i < game.jesterNumbers; i++) {
      while (true) {
        const uid = game.players[Math.floor(Math.random() * game.players.length)];
        if ('town' === roles.uid) {
          roles[uid] = 'jester';
          break;
        }
      }
    }
    console.log(roles);
    console.log(alivePlayers);
    const gameRef = doc(db, 'games', gameCode, 'game', 'game');
    setDoc(gameRef, {
      gameStarted: false,
      gameRoles: roles,
      gameAlivePlayers: alivePlayers,
      gameStage: 'list',
      gameActions: new Map<number, string>(),
      gameDay: 0, 
      gameDayOrNight: true, // true = day, false = night
      gameStateVote: new Map<string, true>(), // do we have a vote for this day?
      gameVotePlayer: new Map<string, string>() , // who voted? who was voted for?
      gameEnded: false, // has the game ended?
      gameEndedReason: '', // why did the game end?
      gameEndedBy: [], // who ended the game? list of uids
    });
    dispatch(setGameStage('list'));
  }

  if (game.gameStage === 'list') {
    return (
      <Navigate to={{pathname: `/game/${gameCode}`}} />
    );
  }

  if (game.creator) {
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
            <button onClick={startNewGame}>Let's Play</button>
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