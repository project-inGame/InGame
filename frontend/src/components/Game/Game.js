import React,{useState, useEffect} from 'react';
import './Game.css';

const Game = () => {

    const [game, setGame] = useState({});
    useEffect (() => {
        const getter = async () => {
        const response = await fetch("http://localhost:5000/game/6048f1a48c43339abde3ebc2");
        const data = await response.json();
        setGame(data);
    }
    getter();
    },[])


    return (
        <>

        {/* The "some game, some title" etc to be removed 
        when we pull data from database */}

            <div className="gameWrapper">
                <div className="gameBasicInfo">
                    <h1>{game.title} </h1>
                    <h2>{game.genre} </h2>
                    <h3>{game.releaseYear} </h3>
                </div>
                
                <div className="gameDescription">
                    <div className="gameImg">
                        <img src="./../../../public/Images/detroit.png" alt="gamePoster"></img>
                    </div>
                    <div className="scoreAndSummary">
                        <div className="gameScore"></div>
                        <div className="gameSummary"></div>
                    </div>

                    <div className="UserScore">
                    </div>

                </div>
               
                <div className="gameTailer"></div>
                
                <div className="GameReviews">
                    <div className="criticReviews"></div>
                    <div className="userReviews"></div>
                </div>

                <div className="seeRealtedGames">

                </div>
            </div>

            <div className="sideBar"></div>
        </>
    )
}

export default Game;