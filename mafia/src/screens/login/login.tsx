import React from "react";
import { SignWithGoogle } from "./google";
import './login.css';

export const Login = () => {
  return (
    <div className='app'>
      <div className='container'>
        <div className='item'>
          <SignWithGoogle />
        </div>
      </div>
    </div>
  )
}
