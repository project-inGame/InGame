import "./App.css";
import "./index.css";
import React, {Component} from "react";
import EditorPicks from "./components/editor-picks/EditorPicks"
import TopGames from './components/top-games/TopGames';
import Navbar from './components/navbar/Navbar.js';
import Advert from './components/adverts/Adverts.js';
import Platforms from './components/platforms/Platforms.js';
import Footer from './components/footer/Footer'
import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <EditorPicks />
        <div className="sideBar">
          <TopGames />
          <Platforms />
          <Advert />
        </div>
      <Footer />
    </div>
  );
}

export default App;