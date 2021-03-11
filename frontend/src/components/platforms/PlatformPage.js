import "./platformPage.css";

import uncharted from "../../images/uncharted.jpg";
import doom2016 from "../../images/doom2016PC.jpg";

import PlayStation4 from "./eachPlatform/PlayStation4.js"
import PlayStation5 from "./eachPlatform/PlayStation5.js"
import Switch from "./eachPlatform/Switch";
import PC from "./eachPlatform/PC";
import XboxOne from "./eachPlatform/XboxOne";
import XboxSeriesX from "./eachPlatform/XboxSeriesX";
import WiiU from "./eachPlatform/WiiU";

const PlatformPage = () => {
  return (
   
    <div className="platformGamesBox">
         <PlayStation5 img={uncharted} img2={doom2016}/>
         <PlayStation4 img={uncharted} img2={doom2016}/>
         <PC img={uncharted} img2={doom2016}/>
         <Switch img={uncharted} img2={doom2016}/>
         <XboxOne img={uncharted} img2={doom2016}/>
         <XboxSeriesX img={uncharted} img2={doom2016}/>
         <WiiU img={uncharted} img2={doom2016}/>
      </div>
    );
};

export default PlatformPage;
