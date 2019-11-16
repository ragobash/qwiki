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
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";
import QwikiBuilder from "../src/pages/QwikiBuilder";

class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedIn: false,
      userID: ""
    };
  }

  render() {
    return (
      <Router>
        <div className="background">
          <Navbar />
        </div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/QwikiBuilder" component={QwikiBuilder} />
        </Switch>
      </Router>
    );
  }
}

export default App;
