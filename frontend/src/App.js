import React, { Component } from "react";
import './App.css';

import EditorPicks from "./components/editor-picks/EditorPicks"
import TopGames from './components/TopGames/TopGames';
import Navbar from './components/navbar/navbar.js';


function App() {
  return (
    <div className="App">
      <Navbar />
      <EditorPicks />
      <TopGames />
    </div>
  );
}

export default App;