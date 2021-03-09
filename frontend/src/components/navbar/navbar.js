import React from "react";
import SearchBar from "./searchBar";
import Genre from "./genre";
import TopGames from "./topgames";
import Newreleases from "./newreleases";


const Navbar = () => {
  return (
    <div className="navcss">
      
      <Genre />
      <TopGames />
      <Newreleases />
      <SearchBar />
    </div>
  );
};

export default Navbar;
