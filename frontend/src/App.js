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

      <Navbar />
      <EditorPicks />
      <TopGames />
      <Advert />

    </div>
  );
}

export default App;