import React, { useState, useEffect } from "react";
import "./Games.css";
const Games = () => {

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


  return (
    <>
      <div className="gameWrapper">
        <p>{games.title} </p>


        <div className="testingGames">
            {/* map to get the data */}
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

export default Games;
