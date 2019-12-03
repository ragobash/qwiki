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
import {Redirect} from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import "./Navbar.css";
import Logo from "../Logo";
import "../NavMenu";
import NavMenu from "../NavMenu";
import API from "../../util/API";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: ""
    };
  }

  search = term => {
    API.searchQwikis(term)
      .then(qwikis => {
        this.setState({
          redirect: ("/search/" + term)
        })
      })
      .catch(err => console.log(err));
  }

  render() {
    // if (this.state.redirect.length > 0) {
    //   return <Redirect to={this.state.redirect} />
    // }

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
                  placeholder="Type to search..."
                  className="search-txt"
                  onSubmit={this.search}
                ></input>
                <a href="/" className="search-btn">
                  <SearchIcon />
                </a>
              </div>
              <NavMenu {...this.props} />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Navbar;
