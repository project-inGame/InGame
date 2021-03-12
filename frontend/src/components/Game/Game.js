import React, { useState, useEffect } from "react";
import "./Game.css";

const Game = (props) => {

  //fetch single game - just change the id - use insomnia or compass or game._id
  const [game, setGame] = useState([]);
  useEffect(() => {
    const getter = async () => {
      const response = await fetch(
        `http://localhost:5000/games/${props.id}`
      );
      const data = await response.json();
      setGame(data);
    };
    getter();
  }, [props.id]);

  return (
    <>
      <div className="gameWrapper2">
        <div className="testingGames">
       
            <div className="gameContainer2 containerStyle" >
              <div className="gameBasicInfo">
                <div className="titleAndPlatform2">
                    <h1>{game.title}</h1>
                    <div className="platformAndScore">
                      <h2>· {game.platform} ·</h2>
                      <h3>
                        <span className="thiccc"> Score: </span>{" "}
                        <span className="gameScore2"> {game.score}</span>{" "}
                      </h3>
                  </div>
                  
                </div>
                <img src={game.poster} width="150px" alt="poster"></img>

                {/* Extra data if we want it later? */}
                {/* <div className="gameData2">
                  <img src={game.poster} width="200px" alt="poster"></img>

                  <div className="gameDetails">
                    <p>
                      <span className="thiccc lightGreen "> Genre: </span>{" "}
                      {game.genre}{" "}
                    </p>
                    <p>
                      <span className="thiccc lightPink"> Made by: </span>{" "}
                      {game.gameDeveloper}{" "}
                    </p>
                    <p>
                      <span className="thiccc lightPurple">
                        {" "}
                        Release date:{" "}
                      </span>{" "}
                      {game.releaseDate}{" "}
                    </p>
                    <p>
                      <span className="thiccc lightOrange">
                        {" "}
                        See on different platforms:{" "}
                      </span>{" "}
                      INSERT A LINK TO PLATFORMS{" "}
                    </p>
                  </div>
                </div> */}

                <div className="gameSummary">
                  <h2>Summary:</h2>
                  <p>{game.summary}</p>
                </div>

                
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Game;
