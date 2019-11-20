/**
 * 
 * qWiki
 * Copyright (C) 2019  Andrew Brooking, Josh Munoz, and Ryan Harris
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 * 
 */

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
