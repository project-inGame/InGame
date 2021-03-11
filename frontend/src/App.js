import './App.css';
import Game from './components/Game/Game'
import "./App.css";
import "./index.css";
import React, {Component} from "react";
import './App.css';
import EditorPicks from "./components/editor-picks/EditorPicks"
import TopGames from './components/TopGames/TopGames';
import Navbar from './components/navbar/navbar.js';
import Advert from './components/Adverts/Adverts.js';


function App() {
  return (
    <div className="App">
// to be removed later! 
      <Game /> 
     

      <Navbar />
      <EditorPicks />
      <TopGames />
      <Advert />

    </div>
  );
}

export default App;