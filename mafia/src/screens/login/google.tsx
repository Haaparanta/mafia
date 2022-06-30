import React from 'react';
import { googleSignIn } from '../../components/firebase/auth';
import { auth, db } from '../../components/firebase/firebase';
import { getDoc, doc } from 'firebase/firestore';
import { user } from '../../components/user/user';

export const SignWithGoogle = () => {

  const signInWithGoogle = () => {
    googleSignIn()
      .then( async () => {
        const userAuth = auth.currentUser;
        if (userAuth) {
          const userRef = doc(db, 'user', userAuth.uid.toString());  // get user doc
          const userSnapshot = await getDoc(userRef);
          if (userSnapshot.exists()) {
            console.log('User already exists');
          } else {
            console.log('User does not exist');
          }
          user.setUser(userSnapshot.data());
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className='app'>
      <div className='container'>
        <div className='item'></div>
          <button onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
      </div>
    
  );
}