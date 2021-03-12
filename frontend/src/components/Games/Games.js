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
                    <h2>· {game.platform} ·</h2>
                </div>
                
                <div className="gameData">

                    <img src={game.poster} width="200px" alt="poster"></img>

                    <div className="gameDetails">
                        <h2><span className="thiccc"> Score: </span> <span className="gameScore"> {game.score}</span> </h2>
                        <p><span className="thiccc lightGreen "> Genre: </span> {game.genre} </p>
                        <p><span className="thiccc lightPink"> Made by: </span> {game.gameDeveloper} </p>
                        <p><span className="thiccc lightPurple"> Release date: </span> {game.releaseDate} </p>
                        <p><span className="thiccc lightOrange"> See on different platforms: </span> INSERT A LINK TO PLATFORMS </p>
                    </div>                    
                </div>

                <div className="gameSummary">
                    <h2>Summary:</h2>
                    <p>{game.summary}</p>
                </div>

                <div className="gameTrailer">
                    <h3>Game Trailer:</h3>
                    <iframe title="title" width="560" height="315" src={game.trailer} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

              </div>
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
