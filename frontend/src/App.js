import "./App.css";
import "./index.css";
import React,{useState, useEffect} from "react";
import './App.css';
import EditorPicks from "./components/editor-picks/EditorPicks"
import TopGames from './components/TopGames/TopGames';
import Navbar from './components/navbar/navbar.js';
import Advert from './components/Adverts/Adverts.js';
import Platforms from './components/platforms/Platforms.js';
import Game from './components/Game/Game.js';
import Footer from './components/footer/Footer'
import 'font-awesome/css/font-awesome.min.css';


function App() {

  const [games, setGames] = useState([]);
  useEffect (() => {
      const getter = async () => {
      const response = await fetch(`http://localhost:5000/games`);
      const data = await response.json();
      setGames(data);
  }
  getter();
  },[])


  return (
    <div className="App">
      <Game id="604a3dc57f5b873069486cb5"/>
      <Navbar />
      <EditorPicks />
      <TopGames />
      <Advert />
      <Platforms data={games.filter((game) => game.platform === "PlayStation4")} />
      <Footer />
    </div>
  );
}

export default App;