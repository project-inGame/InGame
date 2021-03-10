import React from 'react';
import './TopGames.css';

const TopGames = () => {
    return (
        <div className="topGamesContainer">
            <h1 id="topGamesTitle">TOP GAMES</h1>
            <TopGameOne />
            <TopGameTwo />
            <TopGameThree />
        </div>
    )
}

const TopGameOne = () => {
    return (
        <div className="topGameOne">
            <img id="tgimg1" src="../images/tgimg1.png" alt="rdr2"/>
        </div>
    )
}

const TopGameTwo = () => {
    return (
        <div className="topGameTwo">
            <img id="tgimg2" src="../images/tgimg2.png" alt="halo"/>
        </div>
    )
}

const TopGameThree = () => {
    return (
        <div className="topGameThree">
            <img id="tgimg3" src="../images/tgimg3.png" alt="skyrim"/>
        </div>
    )
}

export default TopGames;