import React from "react";
import "./navbar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Navbar = () => {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <ul className="navcss">
        <img
          id="logo"
          src="../images/gamelogo.png"
          onClick={refreshPage}
          alt="logotop"
        />
        <div className="linkList">
          <li>
            <Link to="/">Home</Link>
          </li>
          &nbsp;
          <li>
            {" "}
            <Link to="/about">About</Link>
          </li>
          &nbsp;
          <li>
          <Link to="/game">Game Library</Link>
          </li>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <input
            className="inputBox"
            type="text"
            placeholder="Search..."
          ></input>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
