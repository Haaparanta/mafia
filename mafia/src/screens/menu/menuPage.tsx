import React from "react";
import { Link } from "react-router-dom";

import { signOutUser } from "../../components/firebase/logOut";

import './menuPage.css';

export const MenuPage = () => {
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
          <button 
            onClick={signOutUser}>
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

