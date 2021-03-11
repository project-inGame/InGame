import React from 'react';
import './Adverts.css';



const Adverts = () => {
    return (
        <div className="AdContainer">
            <h1 id="offersTitle">LATEST OFFERS</h1>
            <AdvertOne />
            <AdvertTwo />
            <AdvertThree />
            <AdvertFour />
            <AdvertFive />
            <AdvertSix />
            <AdvertSeven />
        </div>
    )
}

const AdvertOne = () => {
    return (
        <div className="AdGameOne">
            <div className="AdOne">
                <img id="Agif1" src="./../../images/xboxad.webp" alt="alt1"/> 
                <h1 id="AdText1">Xbox takes you anywhere!!!</h1> 
            </div>

           
        </div>
    )
}


const AdvertTwo = () => {
    return (
        <div className="AdGameTwo">
            <div className="AdTwo">
                <img id="Agif2" src="./../../images/forza.webp" alt="alt2"/> 
                <h1 id="AdText2">Forza Series</h1> 
            </div>

           
        </div>
    )
}
const AdvertThree = () => {
    return (
        <div className="AdGameThree">
            <div className="AdThree">
                <img id="Agif3" src="./../../images/fifalfc.webp" alt="alt3"/> 
                <h1 id="AdText3">FIFA 21... Play Like Champions</h1> 
            </div>
        </div>
    )
}
const AdvertFour = () => {
    return (
        <div className="AdGameFour">
            <div className="AdFour">
                <img id="Agif4" src="./../../images/ps5.webp" alt="alt4"/> 
                <h1 id="AdText4">Secure a PS5 today! Credit Available</h1> 
            </div>
        </div>
    )
}
const AdvertFive = () => {
    return (
        <div className="AdGameFive">
            <div className="Five">
                <img id="Agif5" src="./../../images/skyrim.webp" alt="alt5"/> 
                <h1 id="AdText5">Skyrim 20% off</h1> 
            </div>
        </div>
    )
}
const AdvertSix = () => {
    return (
        <div className="AdGameSix">
            <div className="Six">
                <img id="Agif6" src="./../../images/fortnite.webp" alt="alt6"/> 
                <h1 id="AdText6">Get 10% off V-Bucks when you sign up</h1> 
            </div>
        </div>
    )
}
const AdvertSeven = () => {
    return (
        <div className="AdGameSeven">
            <div className="Seven">
                <img id="Agif7" src="./../../images/giphy.webp" alt="alt7"/> 
                <h1 id="AdText7">Huge discounts on graphics cards</h1> 
            </div>
        </div>
    )
}

export default Adverts;