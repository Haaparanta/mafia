import React from 'react';
import { googleSignIn } from '../../components/firebase/auth';

export const SignWithGoogle = () => {

  const signInWithGoogle = () => {
    googleSignIn();
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