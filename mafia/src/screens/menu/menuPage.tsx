import React from "react";


import { signOutUser } from "../../components/firebase/logOut";


export const MenuPage = () => {
  return (
    <div className='app'>
      <div className='container'>
        <div className='item'>
          <h1>Menu</h1>
          <button onClick={signOutUser}>Sign Out</button>
        </div>
      </div>
    </div>
  )
}






