import React from 'react';
import './TopGames.css';

const TopGames = () => {
    return (
        <div className="topGamesContainer">
            <h1 id="topGamesTitle">TOP GAMES</h1>
            <TopGameOne />
            <TopGameTwo />
            <TopGameThree />
            <TopGameFour />
        </div>
    )
}

const TopGameOne = () => {
    return (
        <div className="topGameOne">
                <div className="topGameText">
                    <h1 id="topGamesTitle">1. Red Dead Redemption</h1>
                    <h2 id="releaseYear">Released 2018</h2>
                    <p id="topGameBlurb">lorem ipsum</p>
                    <button id="topGameRating">79</button>
                </div>
            <img id="tgimg" src="../images/tgimg1.png" alt="rdr2"/>
        </div>
    )
}

const TopGameTwo = () => {
    return (
        <div className="topGameTwo">
                <div className="topGameText">
                    <h1 id="topGamesTitle">2. Halo</h1>
                    <h2 id="releaseYear">Released 2001</h2>
                    <p id="topGameBlurb">lorem ipsum</p>
                    <button id="topGameRating">79</button>
                </div>
            <img id="tgimg" src="../images/tgimg2.png" alt="halo"/>
        </div>
    )
}

const TopGameThree = () => {
    return (
        <div className="topGameThree">
                <div className="topGameText">
                    <h1 id="topGamesTitle">3. Skyrim</h1>
                    <h2 id="releaseYear">Released 2011</h2>
                    <p id="topGameBlurb">lorem ipsum</p>
                    <button id="topGameRating">79</button>
                </div>
            <img id="tgimg" src="../images/tgimg3.png" alt="skyrim"/>
        </div>
    )
}

const TopGameFour = () => {
    return (
        <div className="topGameFour">
                <div className="topGameText">
                    <h1 id="topGamesTitle">4. Portal </h1>
                    <h2 id="releaseYear">Released 2007</h2>
                    <p id="topGameBlurb">lorem ipsum</p>
                    <button id="topGameRating">79</button>
                </div>
            <img id="tgimg" src="../images/tgimg4.png" alt="portal"/>
        </div>
    )
}

export default TopGames;