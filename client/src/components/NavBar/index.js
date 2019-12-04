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

import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import "./Navbar.css";
import Logo from "../Logo";
import "../NavMenu";
import NavMenu from "../NavMenu";
import NavLinks from "../NavLinks/index";

function Navbar(props) {
  return (
    <div>
      <AppBar position="static">
        <Toolbar className="navbar">
          <div className="components">
            <Logo />
            <NavLinks />
          </div>
          <div className="tools">
            <div className="search-box">
              <input
                type="text"
                placeholder="Type to search..."
                className="search-txt"
                onSubmit={props.search}
              ></input>
              <a href="/" className="search-btn">
                <SearchIcon />
              </a>
            </div>
            <NavMenu {...props} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
