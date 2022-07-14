import { doc, getDoc, setDoc} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { db } from '../../components/firebase/firebase';
import { validCode } from '../../components/gameCode/gameCode';
import { setCreatedBy, setCreator, setDayTime, setDelay, setDetectiveNumbers, setDoctorNumbers, setGameStage, setJackalNumbers, setLoading, setLobbyName, setMafiaNumbers, setNarrator, setNightTime, setPlayers, setPlayersByName, setPrivate, setShowRoles, setShowVotes, setVoteTime } from '../../reducers/gameReducer';


const PreLobbyPage = () => {
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

  if (game.gameStage === 'createGame') {
    useEffect(() => {
      const createGame = async () => {
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
        return (
          <>
            <Navigate to='/join' />
          </>
        );
      }
      createGame();
    }, []);
  }

  if (game.gameStage === 'joinGame') {
    useEffect(() => {
      const joinGame = async () => {
        const gameRef = doc(db, 'games', gameCode);
        const newGameSnapshot = await getDoc(gameRef);
        if (newGameSnapshot.exists()) {
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
            const players = lobbyData.playersByUID;
            if (!players.includes(id)) {
              players.push(id);
            }
            dispatch(setPlayers(players));

            const playersByName = {...lobbyData.playersByName, [name]: id};
            dispatch(setPlayersByName(playersByName));
            await setDoc(lobbyRef, {
              createdBy: lobbyData.createdBy,
              dayTime: lobbyData.dayTime,
              nightTime: lobbyData.nightTime,
              delay: lobbyData.delay,
              voteTime: lobbyData.voteTime,
              detectiveNumbers: lobbyData.detectiveNumbers,
              doctorNumbers: lobbyData.doctorNumbers,
              jackalNumbers: lobbyData.jackalNumbers,
              mafiaNumbers: lobbyData.mafiaNumbers,
              narrator: lobbyData.narrator,
              private: lobbyData.private,
              showRoles: lobbyData.showRoles,
              showVotes: lobbyData.showVotes,
              playersByName: playersByName,
              playersByUID: players,
            });
            const gameGameRef = doc(db, 'games', gameCode, 'game', 'game');
            const gameGameSnapshot = await getDoc(gameGameRef);
            if (gameGameSnapshot.exists()) {
              const gameData = gameGameSnapshot.data();
              const doctorRef = doc(db, 'games', gameCode, 'game', 'doctor');
              const doctorSnapshot = await getDoc(doctorRef);
              if (doctorSnapshot.exists()) {
                const mafiaRef = doc(db, 'games', gameCode, 'game', 'mafia');
                const mafiaSnapshot = await getDoc(mafiaRef);
                if (mafiaSnapshot.exists()) {
                  const jackalRef = doc(db, 'games', gameCode, 'game', 'jackal');
                  const jackalSnapshot = await getDoc(jackalRef);
                  if (jackalSnapshot.exists()) {
                    return (
                      <>
                        <Navigate to={{pathname: `/lobby/${gameCode}`}} />
                      </>
                    );
                  }
                }
              }
            }
          }
        }
      }
      joinGame();
    }, []);
  }
  

  return (
    <div className='app'>
      <div className='container'>
        <div className='item'>
          <strong>Loading</strong>
        </div>
      </div>
    </div>
  );
}


export default PreLobbyPage;