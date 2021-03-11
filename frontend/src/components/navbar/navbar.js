import React from "react";
import "./navbar.css";


const Navbar = () => {
  return (
    <div>
      <ul className="navcss">
        
       <img id="logo" src="../images/gamelogo.png" alt="logotop"/>
        <div className="linkList">
        <li><a href="/genre">Genre</a></li>
        &nbsp;
        <li><a href="/topgames">Top Games</a></li>
        &nbsp;
        <li><a href="/newreleases">New Releases</a></li>
        &nbsp;
        <li><a href="/about">About</a></li>
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        <input className="inputBox"type="text" placeholder="Search..."></input>
        </div>
      </ul>
  
    </div>
  );
};

export default Navbar;
