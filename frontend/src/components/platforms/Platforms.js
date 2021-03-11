import { platform } from 'os';
import React from 'react';
import './Platforms.css';



const Platforms = () => {
    return (
        <div className="ptfContainer">
            <div className="pt1Container">
            <h1 id="ptgif">PLATFORMS</h1>
            <PlOne />
            <PlTwo />
            <PlThree />
            <PlFour />
            <PlFive />
            <PlSix />
            </div>
        </div>
    )
}

const PlOne = () => {
    return (
        <div className="platOne">
            <div className="plAOne">
                <img id="plGif1" src="./../../images/xboxXpl.jpg" alt="alt1"/> 
                <h1 id="plText1">XBOX X/S</h1> 
            </div>

           
        </div>
    )
}
const PlTwo = () => {
    return (
        <div className="platTwo">
            <div className="plATwo">
                <img id="plGif2" src="./../../images/ps5pl.jpg" alt="alt2"/> 
                <h1 id="plText2">PLAYSTATION 5</h1> 
            </div>

           
        </div>
    )
}
const PlThree = () => {
    return (
        <div className="platThree">
            <div className="plAThree">
                <img id="plGif3" src="./../../images/xbox1pl.jpg" alt="alt3"/> 
                <h1 id="plText3">XBOX ONE</h1> 
            </div>
        </div>
    )
}
const PlFour = () => {
    return (
        <div className="platFour">
            <div className="plAFour">
                <img id="plGif4" src="./../../images/switchpl.jpg" alt="alt4"/> 
                <h1 id="plText4">NINTENDO SWITCH</h1> 
            </div>
        </div>
    )
}
const PlFive = () => {
    return (
        <div className="platFive">
            <div className="plAFive">
                <img id="plGif5" src="./../../images/psvrPl.jpg" alt="alt5"/> 
                <h1 id="AdText5">PSVR</h1> 
            </div>
        </div>
    )
}
const PlSix = () => {
    return (
        <div className="platSix">
            <div className="plASix">
                <img id="plGif6" src="./../../images/ps4pl.jpg" alt="alt6"/> 
                <h1 id="AdText6">PLAYSTATION 4</h1> 
            </div>
        </div>
    )
}
export default Platforms;