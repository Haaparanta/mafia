import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './start.css';
import { auth } from '../../components/firebase/firebase';

export const Start = () => {
  const [user, setUser] = useState(auth.currentUser);
  if (user !== null) {
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

