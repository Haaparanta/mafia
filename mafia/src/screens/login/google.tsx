import React, { useState } from 'react';
import { googleSignIn } from '../../components/firebase/auth';
import { auth, db } from '../../components/firebase/firebase';
import { getDoc, doc } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { setActive, setAddFree, setGamesLostAsEvil, setGamesLostAsGood, setGamesLostAsNeutral, setGamesNarrated, setGamesWonAsEvil, setGamesWonAsGood, setGamesWonAsNeutral, setItems, setLastGame, setName } from '../../reducers/userReducer';

export const SignWithGoogle = () => {
  const dispatch = useDispatch();
  const signInWithGoogle = () => {
    googleSignIn()
      .then( async () => {
        const userAuth = auth.currentUser;
        if (userAuth) {
          const userRef = doc(db, 'user', userAuth.uid.toString());  // get user doc
          const userSnapshot = await getDoc(userRef);
          if (userSnapshot.exists()) {
            console.log('User already exists');
            dispatch(setName(userSnapshot.data().name));
            dispatch(setLastGame(userSnapshot.data().lastGame));
            dispatch(setActive(true));
            dispatch(setAddFree(userSnapshot.data().addFree));
            dispatch(setItems(userSnapshot.data().items));
            dispatch(setGamesNarrated(userSnapshot.data().gamesNarrated));
            dispatch(setGamesWonAsGood(userSnapshot.data().gamesWonAsGood));
            dispatch(setGamesWonAsEvil(userSnapshot.data().gamesWonAsEvil));
            dispatch(setGamesWonAsNeutral(userSnapshot.data().gamesWonAsNeutral));
            dispatch(setGamesLostAsGood(userSnapshot.data().gamesLostAsGood));
            dispatch(setGamesLostAsEvil(userSnapshot.data().gamesLostAsEvil));
            dispatch(setGamesLostAsNeutral(userSnapshot.data().gamesLostAsNeutral));
          } else {
            console.log('User does not exist');
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className='app'>
      <div className='container'>
        <div className='item'>
          <button onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
      </div>
    </div>
  );
}