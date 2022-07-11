import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import store from '../../reducers/store';
import './start.css';

export const Start = () => {
  const user = store.getState().user;
  const [active, setActive] = useState(user.active);
  store.subscribe(() => {
    const user = store.getState().user;
    setActive(user.active);
  }, );
  if (user.active) {
    return (
      <div className='start'>
        <div className='start-container'>
          <div className='start-item'>
            <Link to='/menu'>
              <button>
                Start Game
              </button>
            </Link>
          </div>
        </div>
      </div>
    ); 
  } else {
    return (
      <div className='start'>
        <div className='start-container'>
          <div className='start-item'>
            <Link to='/login'>
              <button>
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

