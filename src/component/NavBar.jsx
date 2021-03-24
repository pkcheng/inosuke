import React from "react";
import logo from "../img/logo.png";

const NavBar = ({ handleSearch, setSearch, search }) => {
  return (
    <nav className="navbar sticky-top navbar-light">
      <div className="nav-logo ml-5 float-sm-left">
        <a href=".">
          <img src={logo} alt="logo" />
        </a>
        <span className="nav-slogan ml-2">Anime Engine</span>
      </div>
      <div className="nav-search mr-5 float-sm-right">
        <form className="form-inline" onSubmit={handleSearch}>
          <input
            className="form-control search-box"
            type="search"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            required
          />
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
