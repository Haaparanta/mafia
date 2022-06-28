import React from 'react';
import { Link } from 'react-router-dom';
import './error.css';

export const Error = () => {
  return (
    <div className='error'>
      <div className='error-container'>
        <div className='error-item'>
          <Link to='/'>
            <button>
              Back to start
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}