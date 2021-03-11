import "./App.css";
import "./index.css";
import React, {Component} from "react";
import './App.css';
import EditorPicks from "./components/editor-picks/EditorPicks"
import TopGames from './components/TopGames/TopGames';
import Navbar from './components/navbar/navbar.js';
import Advert from './components/Adverts/Adverts.js';
import Platforms from './components/platforms/Platforms.js';

import Footer from './components/footer/Footer'
import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <div className="App">

      <Navbar />
      <EditorPicks />
      <TopGames />
      <Advert />
      <Platforms />
      <Footer />
    </div>
  );
}

export default App;