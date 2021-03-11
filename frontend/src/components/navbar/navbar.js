import React from "react";


const Navbar = () => {
  return (
    <div>
      <ul className="navcss">
        <input className="inputBox"type="text" placeholder="Search..."></input>
       <img id="logo" src="../images/gamelogo.png" alt="logotop"/>
        <div className="linkList">
        <li><a href="/genre">Genre</a></li>
        <li><a href="/topgames">Top Games</a></li>
        <li><a href="/newreleases">New Releases</a></li>
        <li><a href="/about">About</a></li>
     
        </div>
      </ul>
  
    </div>
  );
};

export default Navbar;
