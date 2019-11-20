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
import API from "../../util/API";
import QwikiCard from "../../components/QwikiCard";

class LandingPage extends React.Component {
  constructor() {
    super();

    this.state = {
      qwikis: []
    };
  }

  componentDidMount() {
    API.getAllQwikis()
      .then(res => {
        this.setState(
          {
            qwikis: res.data.qwikis
          }
        );
      })
      .catch(err => {
        console.log(err);
      });
  }

  // TODO: user login stuff

  render() {
    return (
      <div>
        {this.state.length > 0 ? this.state.qwikis.map(
            qwiki => { return <QwikiCard qwiki={qwiki} /> }
        ): <div />}
      </div>
    );
  }
}

export default LandingPage;
