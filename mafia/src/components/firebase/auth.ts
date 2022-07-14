import { auth } from './firebase';
import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth';

const provider = new GoogleAuthProvider();

export const googleSignIn = async () => {
  await signInWithPopup(auth, provider)
    .catch((error) => {
      console.log(error);
    });
};