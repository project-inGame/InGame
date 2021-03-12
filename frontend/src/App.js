import React from "react";
import "./App.css"
import Games from "./components/Games/Games.js"; 
import Login from "./components/login/Login";
import Footer from "./components/footer/Footer";
import "font-awesome/css/font-awesome.min.css";
import EditorPicks from "./components/editor-picks/EditorPicks"
import TopGames from './components/top-games/TopGames';
import PlatformPage from './components/platforms/PlatformPage.js'
import Navbar from './components/navbar/navbar.js';
import Adverts from './components/Adverts/Adverts.js';
import Platforms from './components/platforms/Platforms.js';

function App() {

  return (
    <div className="App">
      <Login />
      <Navbar />
      <EditorPicks />

      <Games id="604a3dc57f5b873069486cb5" />

      <div className="mainArea">
        <div className="mainBar">
        <Platforms />
        <PlatformPage />
        </div>
        <div className="sideBar">
          <TopGames />
          <Adverts />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
