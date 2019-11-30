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
import QwikiPage from "./pages/QwikiPage";
import UserPage from "./pages/UserPage";
import ErrorPage from "./pages/404";

const HOUR = 3600;

class App extends Component {
  constructor() {
    super();

    this.state = {
      uuid: ""
    };
  }

  componentDidMount() {
    const uuid = this.props.cookies.get("qwiki.sid");

    if (uuid) {
      this.setState({
        uuid
      });
    }
  }

  userLoggedIn = uuid => {
    this.props.cookies.set("qwiki.sid", uuid, {
      path: "/",
      maxAge: HOUR,
      sameSite: true
    });

    this.setState({
      uuid
    });
  };

  userLoggedOut = () => {
    this.props.cookies.remove("qwiki.sid", { path: "/" });

    this.setState({
      uuid: ""
    });
  };

  getHomePage = () => {
    if (this.state.uuid.length > 0) {
      return <UserPage uuid={this.state.uuid} />;
    } else {
      return <LandingPage uuid={this.state.uuid} />;
    }
  };

  getQwikiHub = () => {
    return <QwikiHub uuid={this.state.uuid} />
  }

  render() {
    return (
      <Router>
        <div className="background">
          <Navbar
            loggedIn={this.state.uuid.length > 0}
            userLoggedIn={this.userLoggedIn}
            userLoggedOut={this.userLoggedOut}
          />
        </div>
        <Switch>
          <Route exact path="/" component={this.getHomePage} />
          <Route exact path="/pages/:id" component={QwikiPage} />
          <Route exact path="/qwikis/builder" component={QwikiBuilder} />
          <Route exact path="/qwikis/:id" component={this.getQwikiHub} />
          <Route exact path="/pages/builder/:id" component={PageBuilder} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </Router>
    );
  }
}

export default withCookies(App);
