import React, { useState } from "react";

import { CreateGamePage } from "./createGamePage";
import { JoinGamePage } from "./joinGamePage";
import { StorePage } from "./storePage";
import { StatisticsPage } from "./statisticsPage";
import { SettingsPage } from "./settingsPage";
import { signOutUser } from "../../components/firebase/logOut";

import './menuPage.css';

export const MenuPage = () => {
  const [page, setPage] = useState("menu");
  if (page === "menu") {
    return (
      <div className='app'>
        <div className='container'>
          <div className='item'>
            <button onClick={() => setPage("create")}>Create Game</button>
          </div>
          <div className='item'>
            <button onClick={() => setPage("join")}>Join Game</button>
          </div>
          <div className='item'>
            <button onClick={() => setPage("store")}>Store</button>
          </div>
          <div className='item'>
            <button onClick={() => setPage("statistics")}>Statistics</button>
          </div>
          <div className='item'>
            <button onClick={() => setPage("settings")}>Settings</button>
          </div>
          <div className='item'>
            <button onClick={signOutUser}>Sign Out</button>
          </div>
        </div>
      </div>
    )
  } else if (page === "create") {
    return (
      <CreateGamePage />
    )
  } else if (page === "join") {
    return (
      <JoinGamePage />
    )
  } else if (page === "store") {
    return (
      <StorePage />
    )
  } else if (page === "statistics") {
    return (
     <StatisticsPage />
    )
  } else if (page === "settings") {
    return (
      <SettingsPage />
    )
  } else {
    return (
      <div className='app'>
        <h1>Error</h1>
      </div>
    )
  }
}






