import React from "react";
import "./aboutPage.css";

const AboutPage = () => {

  return(
  <div className="aboutPageArea">
    <h1 id="aboutTitle">About INGAME</h1>
    <img id="logo" src="../images/gamelogo.png" a href="https://github.com/project-inGame/InGame" alt="logotop" />
    <p>
      Created by <a href="https://github.com/Riley142">Riley</a><a href="https://github.com/mafromist">Muge</a><a href="https://github.com/JoeFoster-cn">Joe</a>and<a href="https://github.com/phiddle">Phil</a>
      {" "}
    </p>
  </div>
  )
};

export default AboutPage;
