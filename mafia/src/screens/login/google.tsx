import React from 'react';
import { googleSignIn } from '../../components/firebase/auth';

export const SignWithGoogle = () => {

  const signInWithGoogle = () => {
    googleSignIn();
  }

  return (
    <div>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
}