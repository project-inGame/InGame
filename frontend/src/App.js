
import testImg from "./65.jpg";
import "./App.css";
import "./index.css";
import React, { Component } from "react";
import './App.css';
import EditorPicks from "./components/editor-picks/EditorPicks"
import TopGames from './components/TopGames/TopGames';
import Navbar from './components/navbar/navbar.js';
import Advert from './components/Adverts/Adverts.js';
import Platforms from './components/platforms/Platforms.js';

function App() {
  return (
    <div className="App">


      <div className="JUSTTESTINGCOLORS">
      {/* delete this lateeeer */}
      <p> Just some test to see CSS, delete later</p>

      <button className="blueBtn">test</button> <br></br>
      <button className="purpleBtn">Another test</button>
      
      <div className="containerStyle">
        <h1>Test</h1>
        <h2>testing again</h2>
        <h3>and testing again</h3>
        <h4>and again</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod laudantium modi placeat consectetur architecto sed distinctio harum inventore molestias. Quisquam dolor sunt aut? Provident architecto corrupti deserunt perferendis reprehenderit libero dicta exercitationem nisi, totam veritatis vel perspiciatis voluptatum dolor sapiente!</p>
      </div>

      <img className="imgStyle" src={testImg} alt="test" width="300px"/>

      <p className="secText">That's some secondary text<br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellat minima quas odio dolore fugiat voluptatibus deleniti. Sapiente, obcaecati dignissimos similique aperiam expedita voluptatem corporis, voluptates eum suscipit, alias ducimus?</p>

      <h3 className="lightGreen">And there's some light accents</h3>
      <h3 className="lightPink">And there's some more</h3>
      <h3 className="lightOrange">And one more</h3>
      <h3 className="lightPurple">That's last one :)</h3>
      </div>


      <Navbar />
      <EditorPicks />
      <TopGames />
      <Advert />
      <Platforms />

    </div>
  );
}

export default App;