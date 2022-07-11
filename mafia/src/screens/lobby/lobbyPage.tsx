import { doc, getDoc } from 'firebase/firestore';
import React from 'react';
import { ReactReduxContext, useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { db } from '../../components/firebase/firebase';
import { validCode } from '../../components/gameCode/gameCode';
import { setLobbyName, setPlayers, setPrivate } from '../../reducers/gameReducer';


const createGame = async (gameCode: string) => {
  const gameRef = doc(db, 'games', gameCode);
  const gameSnapshot = await getDoc(gameRef);
  if (gameSnapshot.exists()) {
    console.log('Game already exists');
    const lobbyRef = doc(db, 'games', gameCode, 'lobby', 'lobby');
    const lobbySnapshot = await getDoc(lobbyRef);
    if (lobbySnapshot.exists()) {
      console.log(lobbySnapshot.data());
    }
    const gameGameRef = doc(db, 'games', gameCode, 'game', 'game');
    const gameGameSnapshot = await getDoc(gameGameRef);
    if (gameGameSnapshot.exists()) {
      console.log(gameGameSnapshot.data());
    }
    const doctorRef = doc(db, 'games', gameCode, 'game', 'doctor');
    const doctorSnapshot = await getDoc(doctorRef);
    if (doctorSnapshot.exists()) {
      console.log(doctorSnapshot.data());
    }
    const detectiveRef = doc(db, 'games', gameCode, 'game', 'detective');
    const detectiveSnapshot = await getDoc(detectiveRef);
    if (detectiveSnapshot.exists()) {
      console.log(detectiveSnapshot.data());
    }
    const mafiaRef = doc(db, 'games', gameCode, 'game', 'mafia');
    const mafiaSnapshot = await getDoc(mafiaRef);
    if (mafiaSnapshot.exists()) {
      console.log(mafiaSnapshot.data());
    }
    const jackalRef = doc(db, 'games', gameCode, 'game', 'jackal');
    const jackalSnapshot = await getDoc(jackalRef);
    if (jackalSnapshot.exists()) {
      console.log(jackalSnapshot.data());
    }
  }
}


const LobbyPage = () => {
  const {gameCode} = useParams();
  const user = useSelector((state: any) => state.user)
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
  /*
  if (!validCode(gameCode)) {
    return (
      <>
        <Navigate to="*" />
      </>
    );
  }
  */

  createGame(gameCode);



  return (
    <div className='app'>
      <div className='container'>
        <div className='item'>
          <strong>{gameCode}</strong>
        </div>
      </div>
    </div>
  );
}


export default LobbyPage;