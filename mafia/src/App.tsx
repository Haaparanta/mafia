import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Error } from './screens/error/error';
import { Start } from './screens/start/start';
import { Login } from './screens/login/login';
import { MenuPage } from './screens/menu/menuPage';
import { CreateGamePage } from './screens/menu/createGamePage';
import { JoinGamePage } from './screens/menu/joinGamePage';
import { StorePage } from './screens/menu/storePage';
import { StatisticsPage } from './screens/menu/statisticsPage';
import { SettingsPage } from './screens/menu/settingsPage';
import PreLobbyPage from './screens/lobby/preLobbyPage';
import LobbyPage from './screens/lobby/lobbyPage';
import GamePage from './screens/game/gamePage';
import GameEndPage from './screens/game/gameEndPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Start/>} />
      <Route path="login" element={<Login/>} />
      <Route path="menu" element={<MenuPage/>} />
      <Route path="create" element={<CreateGamePage />} />
      <Route path="join" element={<JoinGamePage />} />
      <Route path="store" element={<StorePage />} />
      <Route path="statistics" element={<StatisticsPage />} />
      <Route path="settings" element={<SettingsPage />} />
      <Route path="preLobby/:gameCode" element={<PreLobbyPage />} />
      <Route path="lobby/:gameCode" element={<LobbyPage />} />
      <Route path="game/:gameCode" element={<GamePage />} />
      <Route path="gameEndPage" element={<GameEndPage />} />
      <Route path="error" element={<Error />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}


export default App;
