import { doc, getDoc, setDoc} from 'firebase/firestore';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { db } from '../../components/firebase/firebase';
import { validCode } from '../../components/gameCode/gameCode';
import { setLobbyName, setPlayers, setPrivate } from '../../reducers/gameReducer';


const createGame = async (gameCode: string) => {
  const user = useSelector((state: any) => state.user);
  const id = user.userID;
  const name = user.name;
  const gameRef = doc(db, 'games', gameCode);
  const gameSnapshot = await getDoc(gameRef);
  if (gameSnapshot.exists()) { // you are joining somebodies game
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
  } else { // you are making a new game
    console.log('Game does not exist');
    await setDoc(doc(db, 'games', gameCode), {});
    await setDoc(doc(db, 'games', gameCode, 'lobby', 'lobby'), {
      createdBy: id,
      dayTime: 180,
      nightTime: 30,
      delay: 30,
      voteTime: 30,
      detectiveNumbers: 0,
      doctorNumbers: 0,
      jackalNumbers: 0,
      mafiaNumbers: 1,
      narrator: true,
      private: false,
      showRoles: false,
      showVotes: false,
      playersByUID: [id],
      playersByName: {id: name},
    });
    await setDoc(doc(db, 'games', gameCode, 'game', 'game'), {
      gameStarted: false,
      gameRoles: {id: 'narrator'},
      gameAlivePlayers: {id: true},
      gameStage: 'lobby', 
      gameDay: 0, 
      gameDayOrNight: true, // true = day, false = night
      gameStateVote: {}, // do we have a vote for this day?
      gameVotePlayer: {}, // who voted? who was voted for?
      gameEnded: false, // has the game ended?
      gameEndedReason: '', // why did the game end?
      gameEndedBy: [], // who ended the game? list of uids
    });
    await setDoc(doc(db, 'games', gameCode, 'game', 'doctor'), {
      doctorSelected: {}, // who selected a patient to heal? who was healed?
    });
    await setDoc(doc(db, 'games', gameCode, 'game', 'mafia'), {
      mafiaSelected: {}, // who selected a player to kill? who was selected to die?
    });
    await setDoc(doc(db, 'games', gameCode, 'game', 'jackal'), {
      jackalSelected: {}, // who selected a player to kill? who was selected to die?
    });
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