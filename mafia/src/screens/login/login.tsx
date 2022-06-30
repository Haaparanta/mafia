import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { SignWithGoogle } from "./google";
import { auth } from "../../components/firebase/firebase";
import { onAuthStateChanged } from 'firebase/auth';
import './login.css';

export const Login = () => {
  const [user, setUser] = useState(false);
   onAuthStateChanged(auth, (user) => {
     if (user) {
       setUser(true);
     } else {
       setUser(false);
     }
   });
  return (
    <>
      {user ? <Navigate to="/" /> : <SignWithGoogle />}
    </>
  );
}
