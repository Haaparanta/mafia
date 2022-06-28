import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Start } from './screens/start/start';
import { Login } from './screens/login/login';
import { MenuPage } from './screens/menu/menuPage';
import { CreateGamePage } from './screens/menu/createGamePage';
import { JoinGamePage } from './screens/menu/joinGamePage';
import { StorePage } from './screens/menu/storePage';
import { StatisticsPage } from './screens/menu/statisticsPage';
import { SettingsPage } from './screens/menu/settingsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="login" element={<Login />} />
      <Route path="menu" element={<MenuPage />} />
      <Route path="create" element={<CreateGamePage />} />
      <Route path="join" element={<JoinGamePage />} />
      <Route path="store" element={<StorePage />} />
      <Route path="statistics" element={<StatisticsPage />} />
      <Route path="settings" element={<SettingsPage />} />
    </Routes>
  );
}


export default App;
