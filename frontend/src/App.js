import React, { Component } from "react";
import './App.css';
import TopGames from './components/TopGames/TopGames';
import Navbar from './components/navbar/navbar.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <TopGames />
    </div>
  );
}

export default App;