import { doc, getDoc, setDoc} from 'firebase/firestore';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { db } from '../../components/firebase/firebase';
import { validCode } from '../../components/gameCode/gameCode';
import { setCreatedBy, setCreator, setDayTime, setDelay, setDetectiveNumbers, setDoctorNumbers, setJackalNumbers, setLoading, setLobbyName, setMafiaNumbers, setNarrator, setNightTime, setPlayers, setPlayersByName, setPrivate, setShowRoles, setShowVotes, setVoteTime } from '../../reducers/gameReducer';


const createGame = async (gameCode: string) => {
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  dispatch(setLobbyName(gameCode));
  dispatch(setLoading(true));
  const id = user.userID;
  const name = user.name;
  const gameRef = doc(db, 'games', gameCode);
  const gameSnapshot = await getDoc(gameRef);
  if (!gameSnapshot.exists) {
    console.log('Game does not exist');
    console.log('creating a game')
    dispatch(setCreator(true))
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
  const newGameSnapshot = await getDoc(gameRef);
  if (newGameSnapshot.exists()) { // you are joining somebodies game
    const lobbyRef = doc(db, 'games', gameCode, 'lobby', 'lobby');
    const lobbySnapshot = await getDoc(lobbyRef);
    if (lobbySnapshot.exists()) {
      const lobbyData = lobbySnapshot.data();
      if (lobbyData.createdBy === id) {
        console.log('You are the creator of this game');
        dispatch(setCreatedBy(true));
      }
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
      const players: [string] = lobbyData.playersByUID;
      players.concat(id);
      dispatch(setPlayers(players));
      const playersByName = {...lobbyData.playersByName, [name]: id};
      dispatch(setPlayersByName(playersByName));

      const gameGameRef = doc(db, 'games', gameCode, 'game', 'game');
      const gameGameSnapshot = await getDoc(gameGameRef);
      if (gameGameSnapshot.exists()) {
        const gameData = gameGameSnapshot.data();

        const doctorRef = doc(db, 'games', gameCode, 'game', 'doctor');
        const doctorSnapshot = await getDoc(doctorRef);
        if (doctorSnapshot.exists()) {
          console.log(doctorSnapshot.data());

          const mafiaRef = doc(db, 'games', gameCode, 'game', 'mafia');
          const mafiaSnapshot = await getDoc(mafiaRef);
          if (mafiaSnapshot.exists()) {
            console.log(mafiaSnapshot.data());

            const jackalRef = doc(db, 'games', gameCode, 'game', 'jackal');
            const jackalSnapshot = await getDoc(jackalRef);
            if (jackalSnapshot.exists()) {
              console.log(jackalSnapshot.data());
              dispatch(setLoading(false));
            } else {
              console.log('Jackal does not exist');
            }
          } else {
            console.log('Mafia does not exist');
          }
        } else {
          console.log('Doctor does not exist');
        }
      } else {
        console.log('GameGame does not exist');
      }
    } else {
      console.log('Lobby does not exist');
    }
  } else {
    console.log('Game does not exist');
  }
}


const LobbyPage = () => {
  const {gameCode} = useParams();
  const user = useSelector((state: any) => state.user)
  const game = useSelector((state: any) => state.game);
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
  if (game.loading) {
    createGame(gameCode);
  }

  const handleClick = () => {
    console.log('clicked');
    console.log(game)
  }
  

  if (game.loading) {
    return (
      <div className='app'>
        <div className='container'>
          <div className='item'>
            <strong>Loading</strong>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='app'>
        <div className='container'>
          <div className='item'>
            <button onClick={handleClick}>{gameCode}</button>
          </div>
        </div>
      </div>
    );
  }
}


export default LobbyPage;