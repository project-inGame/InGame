import React from "react";
import "./App.css";
import EditorPicks from "./components/editor-picks/EditorPicks";
import TopGames from "./components/top-games/TopGames";
import PlatformPage from "./components/platforms/PlatformPage.js";
import Navbar from "./components/navbar/navbar.js";
import Adverts from "./components/adverts/Adverts.js";
import Platforms from "./components/platforms/Platforms.js";
import Game from "./components/Game/Game.js";
import Login from "./components/login/Login";
import Footer from "./components/footer/Footer";
import "font-awesome/css/font-awesome.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Login />
      <Navbar />
      <div>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/game">
            <GameLib />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="App">
      <EditorPicks />

      {/*  <Game id="604a3dc57f5b873069486cb5" /> */}

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

function About() {
  return (
    <>
      <Platforms />
    </>
  );
}

function GameLib() {
  return <Game />;
}

export default App;

//////////////////////////////////
/* function App() {
  return (
    <div className="App">
      <Login />
      <Navbar />
      <EditorPicks />

      <Game id="604a3dc57f5b873069486cb5" />

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

export default App; */
