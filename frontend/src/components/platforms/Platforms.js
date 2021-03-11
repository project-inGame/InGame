import { platform } from 'os';
import React from 'react';
import './Platforms.css';



const Platforms = () => {
    return (
        <div className="ptfContainer">
            <h1 id="ptgif">Platforms</h1>
            <div className="pt1Container">
            <PlOne />
            <PlTwo />
            <PlThree />
            </div>

            <div className="pt2Container">
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
                <h1 id="plText1">XBox Series X/S</h1> 
            </div>

           
        </div>
    )
}
const PlTwo = () => {
    return (
        <div className="platTwo">
            <div className="plATwo">
                <img id="plGif2" src="./../../images/ps5pl.jpg" alt="alt2"/> 
                <h1 id="plText2">PlayStation 5</h1> 
            </div>

           
        </div>
    )
}
const PlThree = () => {
    return (
        <div className="platThree">
            <div className="plAThree">
                <img id="plGif3" src="./../../images/xbox1pl.jpg" alt="alt3"/> 
                <h1 id="plText3">Xbox One S</h1> 
            </div>
        </div>
    )
}
const PlFour = () => {
    return (
        <div className="platFour">
            <div className="plAFour">
                <img id="plGif4" src="./../../images/switchpl.jpg" alt="alt4"/> 
                <h1 id="plText4">Nintendo Switch</h1> 
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
                <h1 id="AdText6">PlayStation 4</h1> 
            </div>
        </div>
    )
}
export default Platforms;