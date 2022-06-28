import React, { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { Link, Navigate } from "react-router-dom";

import { auth } from "../../components/firebase/firebase";
import { signOutUser } from "../../components/firebase/logOut";

import './menuPage.css';

export const MenuPage = () => {
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
      {user ? <Menu /> : <Navigate to="/login" />}
    </>
  );
};

const Menu = () => {
  return (
    <div className='app'>
      <div className='container'>
        <div className='item'>
          <Link to='/create'>
            <button>
              Create Game
            </button>
          </Link>
        </div>
        <div className='item'>
          <Link to='/join'>
            <button>
              Join Game
            </button>
          </Link>
        </div>
        <div className='item'>
          <Link to='/store'>
            <button>
              Store
            </button>
          </Link>
        </div>
        <div className='item'>
          <Link to='/statistics'>
            <button>
              Statistics
            </button>
          </Link>
        </div>
        <div className='item'>
          <Link to='/settings'>
            <button>
              Settings
            </button>
          </Link>
        </div>
        <div className='item'>
          <Link to='/'>
            <button 
              onClick={signOutUser}>
              Sign Out
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

