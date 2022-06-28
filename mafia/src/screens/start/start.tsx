import React from 'react';
import { Link } from 'react-router-dom';
import './start.css';

export const Start = () => {
  return (
    <div className='start'>
      <div className='start-container'>
        <div className='start-item'>
          <Link to='/login'>
            <button>
              Start Game
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

