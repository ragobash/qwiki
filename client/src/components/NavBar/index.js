import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, AppBar, Toolbar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import "../NavMenu";
import NavMenu from "../NavMenu";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <AppBar position="static" className="navbar">
          <Toolbar className="navbar">
            <div>
              <Logo />
            </div>
            <div className="tools">
            <div className="search-box">
              <input
                type="text"
                placeholder="Type to search"
                className="search-txt"
              ></input>
              <a className="search-btn">
                <SearchIcon />
              </a>
            </div>
            <NavMenu />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Navbar;
