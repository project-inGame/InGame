import { platform } from 'os';
import React from 'react';
import './Platforms.css';



const Platforms = () => {
    return (
        <div className="ptfContainer">
            <h1 id="ptgif">PLATFORMS</h1>
            <div className="pt1Container">
            <PlOne />
            <PlTwo />
            <PlThree />
            <PlFour />
            <PlFive />
            <PlSix />
            <PlSeven />
            <PlEight />
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
                <img id="plGif5" src="./../../images/wiiu.jpg" alt="alt5"/> 
                <h1 id="AdText5">Wii U</h1> 
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
const PlSeven = () => {
    return (
        <div className="platSeven">
            <div className="plASeven">
                <img id="plGif7" src="./../../images/pcgaming.jpg" alt="alt7"/> 
                <h1 id="AdText7">PC</h1> 
            </div>
        </div>
    )
}
const PlEight = () => {
    return (
        <div className="platEight">
            <div className="plAEight">
                <img id="plGif8" src="./../../images/stadia.jpg" alt="alt8"/> 
                <h1 id="AdText8">Stadia</h1> 
            </div>
        </div>
    )
}
export default Platforms;