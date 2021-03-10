import React from 'react';
import './TopGames.css';

const TopGames = () => {
    return (
        <div className="topGamesContainer">
            <h1 id="tgTitle">TOP GAMES</h1>
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
            <div className="tgimgRating">
                <img id="tgimg" src="../images/tgimg1.png" alt="rdr2"/> 
                <h1 id="topGameRating">95</h1> 
            </div>

            <div className="topGameText">
                <h1 id="topGamesTitle">RED DEAD REDEMPTION 2</h1>
                <h2 id="releaseYear">Released 2018</h2>
                <p id="topGameBlurb">After eight years in the making, Rockstar delivered the vast and highly-polished game everyone hoped for.</p>
                <a href="" id="tgLinks">Read More..</a>
            </div>
        </div>
    )
}

const TopGameTwo = () => {
    return (
        <div className="topGameTwo">
            <div className="tgimgRating">
                <img id="tgimg" src="../images/tgimg2.png" alt="halo"/>
                <h1 id="topGameRating">92</h1>
            </div>

            <div className="topGameText">
                <h1 id="topGamesTitle">HALO: COMBAT EVOLVED</h1>
                <h2 id="releaseYear">Released 2001</h2>
                <p id="topGameBlurb">Hailed as the the most important launch game for any console ever, it's easily one of the best shooters ever, on any platform.</p>
                <a href="" id="tgLinks">Read More..</a>
            </div>  
        </div>
    )
}

const TopGameThree = () => {
    return (
        <div className="topGameThree">
            <div className="tgimgRating">
                <img id="tgimg" src="../images/tgimg3.png" alt="pokemon"/>
                <h1 id="topGameRating">89</h1>
            </div>

            <div className="topGameText">
                <h1 id="topGamesTitle">POKEMON YELLOW</h1>
                <h2 id="releaseYear">Released 1998</h2>
                <p id="topGameBlurb">Pokémon Yellow is simply one of the best ways to experience the Pokémon universe – it's as simple as that.</p>
                <a href="" id="tgLinks">Read More..</a>
            </div>  
        </div>
    )
}

const TopGameFour = () => {
    return (
        <div className="topGameFour">
            <div className="tgimgRating">
                <img id="tgimg" src="../images/tgimg4.png" alt="wow"/>
                <h1 id="topGameRating">87</h1>
            </div>

            <div className="topGameText">
                <h1 id="topGamesTitle">WORLD OF WARCRAFT</h1>
                <h2 id="releaseYear">Released 2004</h2>
                <p id="topGameBlurb">Blizzard's groundbreaking MMO is one of the most successful games ever.</p>
                <a href="" id="tgLinks">Read More..</a>
            </div>  
        </div>
    )
}

export default TopGames;