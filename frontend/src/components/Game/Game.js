import React,{useState, useEffect} from 'react';
import './Game.css';
const Game = () => {

    // fetch single game ( just add the right ID from insomnia )
    const [games, setGames] = useState({});
    useEffect (() => {
        const getter = async () => {
        const response = await fetch("http://localhost:5000/games/604a3dc57f5b873069486cb5");
        const data = await response.json();
        setGames(data);
    }
    getter();
    },[])

    return (

        <>
            <div className="gameWrapper">
                <div className="gameBasicInfo">
                <p>{games.title} </p>
                <p>{games.genre} </p>
                <p>{games.platfrom} </p>
                <p>{games.gameDeveloper} </p>
                <p>{games.releaseDate} </p>
                <p>{games.score} </p>
                <p>{games.summary} </p>

                </div>
                
                <div className="gameDescription">
                    <div className="gameImg">
                       
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
};

export default Game;