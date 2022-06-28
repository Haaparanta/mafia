import React, { useState } from 'react';
import { auth } from "./components/firebase/firebase";
import { Login } from './screens/login/login';
import { MenuPage } from './screens/menu/menuPage';
import { Start } from './screens/start/start';
import { onAuthStateChanged } from 'firebase/auth';
import { Routes, Route } from 'react-router-dom';

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
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="login" element={<Login />} />
      <Route path="menu" element={<MenuPage />} />
    </Routes>
  );
}


export default App;
