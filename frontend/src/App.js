import React, {Component} from "react";
import EditorPicks from "./components/editor-picks/EditorPicks"
import TopGames from './components/top-games/TopGames';
import PlatformPage from './components/platforms/PlatformPage.js'
import Navbar from './components/navbar/navbar.js';
import Adverts from './components/adverts/Adverts.js';
import Platforms from './components/platforms/Platforms.js';
import Game from './components/Game/Game.js';
import Login from './components/login/Login';
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

      <Login />
      <Navbar />
      <EditorPicks />
    
      <Game id="604a3dc57f5b873069486cb5"/>
    
      <TopGames />
      <Advert />
      <Platforms data={games.filter((game) => game.platform === "PlayStation4")} />


        <div className="sideBar">
          <TopGames />
          <Platforms />
          <Adverts />
        </div>
        <PlatformPage />
      <Footer />
    </div>
  );
}

export default App;
