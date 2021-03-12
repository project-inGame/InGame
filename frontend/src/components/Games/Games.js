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
            <div className="gameContainer containerStyle" key={index}>
              
              <div className="gameBasicInfo">
                <div className="titleAndPlatform">
                    <h1>{game.title}</h1>
                    <h3>· {game.platform} ·</h3>
                </div>
                
                <div className="gameData">
                    <p className="secText"><span className="thiccc"> Made by: </span> {game.gameDeveloper} </p>
                    <p className="secText"><span className="thiccc"> Release date: </span> {game.releaseDate} </p>
                    <p className="secText"><span className="thiccc"> See on different platforms: </span> INSERT A LINK TO PLATFORMS </p>
                </div>

                <div className="gameMainContainer">
                    {/* <img src={here insert the link from databse}></img> */}
                </div>


                <div className="gameTrailer">
                    <
                </div>
                <h3>{game.genre}</h3>
                <h3>{game.score}</h3>
              </div>

              <p>{game.score} </p>
              <p>{game.summary} </p>
            </div>
          ))}
          ;
        </div>

        

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
