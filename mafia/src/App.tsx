import React from 'react';
import { Login } from './screens/login/login';
import { MenuPage } from './screens/menu/menuPage';
import { Start } from './screens/start/start';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="login" element={<Login />} />
      <Route path="menu" element={<MenuPage />} />
    </Routes>
  );
}


export default App;
