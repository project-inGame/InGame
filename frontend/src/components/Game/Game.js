import React,{useState, useEffect} from 'react';
import './Game.css';
const Game = (props) => {

    // fetch single game ( just add the right ID from insomnia )
    const [game, setGame] = useState({});
    useEffect (() => {
        const getter = async () => {
        const response = await fetch(`http://localhost:5000/games/${props.id}`);
        const data = await response.json();
        setGame(data);
    }
    getter();
    },[props.id])



    return (

        <>
            <div className="gameWrapper">
                <div className="gameBasicInfo">
                <p>{game.title} </p>
                <p>{game.genre} </p>
                <p>{game.platfrom} </p>
                <p>{game.gameDeveloper} </p>
                <p>{game.releaseDate} </p>
                <p>{game.score} </p>
                <p>{game.summary} </p>

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