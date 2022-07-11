import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import store from "../../reducers/store";
import { SignWithGoogle } from "./google";
import './login.css';


export const Login = () => {
  const user = useSelector((state: any) => state.user);
  const [active, setActive] = useState(user.active);
  store.subscribe(() => {
    const user = store.getState().user;
    setActive(user.active);
  }, );

  return (
    <>
      { active ? <Navigate to="/" /> : <SignWithGoogle/>}
    </>
  );
}
