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
import { withCookies } from "react-cookie";
import Navbar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";
import QwikiBuilder from "./pages/QwikiBuilder";
import QwikiHub from "./pages/QwikiHub";
import PageBuilder from "./pages/PageBuilder";
import QwikiPage from "./pages/QwikiHub";

class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedIn: false,
      uuid: ""
    };
  }

  componentDidMount() {
    const uuid = this.props.cookies.get("qwiki.sid");

    if (uuid) {
      this.setState({
        loggedIn: true,
        uuid
      });
    }
  }

  userLoggedIn = uuid => {
    this.props.cookies.set("qwiki.sid", uuid);

    this.setState({
      loggedIn: true,
      uuid
    });
  }

  render() {
    return (
      <Router>
        <div className="background">
          <Navbar userLoggedIn={this.userLoggedIn} />
        </div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/qwikis/builder" component={QwikiBuilder} />
          <Route path="/qwikis/:id" component={QwikiHub} />
          <Route exact path="/pages/builder/:id" component={PageBuilder} />
          <Route path="/pages/:id" component={QwikiPage} />
        </Switch>
      </Router>
    );
  }
}

export default withCookies(App);
