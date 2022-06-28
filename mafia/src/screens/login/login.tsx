import React from "react";
import { Navigate } from "react-router-dom";
import { SignWithGoogle } from "./google";
import { auth } from "../../components/firebase/firebase";
import './login.css';

export const Login = () => {
  const user = auth.currentUser;
  return (
    <>
    {(user !== null) ? <SignWithGoogle /> : <Navigate replace to="/menu" />}
    </>
  );
}
