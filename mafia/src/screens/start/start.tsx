import React from 'react';
import { Link } from 'react-router-dom';

export const Start = () => {
  return (
    <div className='start'>
      <Link to="login">Start Game</Link>
    </div>
  );
}

