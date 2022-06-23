import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDNyvYCXlCrPeMep2ZcYwQ55Lt62qwwGI0",
  authDomain: "mafiaprojekti.firebaseapp.com",
  projectId: "mafiaprojekti",
  storageBucket: "mafiaprojekti.appspot.com",
  messagingSenderId: "464801459193",
  appId: "1:464801459193:web:a47e07f3ad4d117a5b2b28",
  measurementId: "G-VZJY6HVLVZ"
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);

export default firebaseApp;