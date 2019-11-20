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
import { AppBar, Toolbar } from "@material-ui/core";
import LoginModal from "../LoginModal";
import SignupModal from "../SignupModal";
import SearchIcon from "@material-ui/icons/Search";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <AppBar position="static" className="navbar">
          <Toolbar className="navbar">
            <div className="btns">
              <LoginModal />
              <SignupModal />
            </div>
            <div className="search-box">
              <input
                type="text"
                placeholder="Type to search"
                className="search-txt"
              ></input>
              <a href="/" className="search-btn">
                <SearchIcon />
              </a>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Navbar;
