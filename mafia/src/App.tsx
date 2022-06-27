import React, { useState } from 'react';
import { Login } from './screens/login/login';
import { auth } from "./components/firebase/firebase";
import { MenuPage } from './screens/menu/menuPage';

function App() {
  const user = auth.currentUser;
  return (
    <>
      {user ? <MenuPage/> : <MenuPage/>}
    </>
  );
}


export default App;
