import "./App.css";
import "./index.css";
import "./components/login/Login.css";
import React, {Component} from "react";
import EditorPicks from "./components/editor-picks/EditorPicks"
import TopGames from './components/top-games/TopGames';
import Navbar from './components/navbar/navbar.js';
import Advert from './components/Adverts/Adverts.js';
import Platforms from './components/platforms/Platforms.js';
import Login from './components/login/Login';
import Footer from './components/footer/Footer'
import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
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