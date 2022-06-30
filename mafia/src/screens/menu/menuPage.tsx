import React, { useState } from "react";
import { Link } from "react-router-dom";

import { signOutUser } from "../../components/firebase/logOut";

import './menuPage.css';
import { user } from "../../components/user/user";

export const MenuPage = () => {
  const [userData, setUserData] = useState(user.getUser());

  return (
    <div className='app'>
      <div className='container'>
        <div className='item'>
          <button>
            {userData.name}
          </button>
        </div>
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
};


