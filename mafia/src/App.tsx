import React, { useState } from 'react';
import { Login } from './screens/login/login';
import { auth } from "./components/firebase/firebase";
import { MenuPage } from './screens/menu/menuPage';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [user, setUser] = useState(false);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(true);
    } else {
      setUser(false);
    }
  });
  return (
    <>
      {user ? <MenuPage /> : <Login />}
    </>
  );
}


export default App;
