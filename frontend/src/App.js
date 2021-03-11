import "./App.css";
import "./index.css";
import "./components/login/Login.css";
import React, {Component} from "react";
import EditorPicks from "./components/editor-picks/EditorPicks"
import TopGames from './components/top-games/TopGames';
import PlatformPage from './components/platforms/PlatformPage.js'
import Navbar from './components/navbar/navbar.js';
import Adverts from './components/adverts/Adverts.js';
import Platforms from './components/platforms/Platforms.js';
import Game from './components/Game/Game.js';
import Login from './components/login/Login';
import Footer from './components/footer/Footer'
import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <div className="App">
      <Game />
      <Login />
      <Navbar />
      <EditorPicks />
        <div className="sideBar">
          <TopGames />
          <Platforms />
          <Adverts />
        </div>
        <PlatformPage />
      <Footer />
    </div>
  );
}

export default App;