import React, { useState, useEffect } from "react";
import "./Game.css";
const Game = (props) => {

//fetch all games + add map
  const [games, setGames] = useState([]);
  useEffect(() => {
    const getter = async () => {
      const response = await fetch(`http://localhost:5000/games`);
      const data = await response.json();
      setGames(data);
    };
    getter();
  }, []);

//fetch single game - just change the id - use insomnia or compass or game._id
  const [game, setGame] = useState([]);
  useEffect(() => {
    const getter = async () => {
      const response = await fetch(`http://localhost:5000/games/604aa6aea9074d5ee652728b`);
      const data = await response.json();
      setGame(data);
    };
    getter();
  }, [props.id]);



  return (
    <>
      <div className="gameWrapper">
        <p>{games.title} </p>


        <div className="testingGames">
          {games.map((game, index) => (
            <div key = {index}>
              <h3>{game.genre}</h3>
              <h3>{game.score}</h3>
            </div>
          ))};
        </div>

        <p>{games.genre} </p>
        <p>{games.platfrom} </p>
        <p>{games.gameDeveloper} </p>
        <p>{games.releaseDate} </p>
        <p>{games.score} </p>
        <p>{games.summary} </p>
        <div className="gameBasicInfo"></div>

        <div className="gameDescription">
          <div className="gameImg"></div>
          <div className="scoreAndSummary">
            <div className="gameScore"></div>
            <div className="gameSummary"></div>
          </div>

          <div className="UserScore"></div>
        </div>

        <div className="gameTailer"></div>

        <div className="GameReviews">
          <div className="criticReviews"></div>
          <div className="userReviews"></div>
        </div>

        <div className="seeRealtedGames"></div>
      </div>

      <div className="sideBar"></div>
    </>
  );
};

export default Game;
