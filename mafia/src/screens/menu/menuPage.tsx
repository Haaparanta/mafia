import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { signOutUser } from "../../components/firebase/logOut";
import store from "../../reducers/store";
import './menuPage.css';

export const MenuPage = () => {

  const user = useSelector((state: any) => state.user);
  const [active, setActive] = useState(user.active);
  store.subscribe(() => {
    const user = store.getState().user;
    setActive(user.active);
    console.log('Menu subs active: ', active);
  }, );
  console.log('Menu subs user: ', user);

  if (!user.active) {
    return (
      <>
        <Navigate to="/" />
      </>
    );
  } else {
    return (
      <div className='app'>
        <div className='container'>
          <div className='item'>
            <button>
              {user.name}
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
};


