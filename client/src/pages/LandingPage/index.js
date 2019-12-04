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
// import Grid from '@material-ui/core/Grid';
// import Fab from "@material-ui/core/Fab";
// import AddIcon from "@material-ui/icons/Add";
// import "./landingpage.css";
// import Logo404 from "../../components/Logo404/index";
// import PublicBtn from "../../components/PublicBtn/index";
// import ProgressBar from "../../components/ProgressBar/index";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.mounted = false;

    this.state = {
      qwikis: []
    };
  }

  componentDidMount() {
    this.mounted = true;

    API.getAllQwikis()
      .then(res => {
        if (this.mounted) {
          this.setState(
            {
              qwikis: res.data.qwikis
            }
          );
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div>
        {this.state.qwikis.length > 0 ? this.state.qwikis.map(
            qwiki => { return <QwikiCard key={qwiki._id} qwiki={qwiki} uuid={this.props.uuid} /> }
        ): <div />}
      </div>
    );
  }
}

export default LandingPage;
