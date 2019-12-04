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
import API from "../../util/API";
import { Typography, Divider } from "@material-ui/core";
import "../UserPage/userpage.css";
import QwikiCard from "../../components/QwikiCard";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

class UserPage extends Component {
  constructor() {
    super();

    this.state = {
      uuid: "",
      displayName: "",
      followed: [],
      joined: "",
      owned: [],
      recommended: []
    };
  }

  componentDidMount() {
    const uuid = this.props.uuid || this.props.match.params.uuid;

    API.getUserByID(uuid)
      .then(res => {
        this.setState({
          uuid,
          displayName: res.data.user.displayName,
          followed: res.data.user.followed,
          joined: res.data.user.joined
        });
      })
      .catch(err => console.log(err));

    API.getOwnedQwikis(uuid)
      .then(res => {
        this.setState({
          owned: res.data.owned
        });
      })
      .catch(err => console.log(err));

    API.getAllQwikis()
      .then(res => {
        if (this.mounted) {
          this.setState({
            recommended: res.data.qwikis
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div id="userPageWrapper">
        <div id="fab">
          <Fab
            color="primary"
            aria-label="add"
            href={"/qwikis/builder/"}
          >
            <AddIcon />
          </Fab>
        </div>
        <div id="owned">
          <Typography
            id="owned"
            variant="h3"
            align="center"
            style={{ color: "white", marginTop: "25px" }}
          >
            Owned:
          </Typography>
          <Divider
            variant="middle"
            style={{ background: "white", width: "200px" }}
          ></Divider>
          <div className="card-wrapper">
            {this.state.owned.map(qwiki => {
              return (
                <QwikiCard
                  key={qwiki._id}
                  qwiki={qwiki}
                  uuid={this.props.uuid}
                />
              );
            })}
          </div>
          <Typography
            id="followed"
            variant="h3"
            align="center"
            style={{ color: "white", marginTop: "25px" }}
          >
            Followed:
          </Typography>
          <Divider
            variant="middle"
            style={{ background: "white", width: "50%" }}
          ></Divider>
          <div>
            {this.state.followed.map(qwiki => {
              return (
                <QwikiCard
                  key={qwiki._id}
                  qwiki={qwiki}
                  uuid={this.props.uuid}
                />
              );
            })}
          </div>
          <Typography
            id="recommended"
            variant="h3"
            align="center"
            style={{ color: "white", marginTop: "25px" }}
          >
            Recommended:
          </Typography>
          <Divider
            variant="middle"
            style={{ background: "white", width: "200px" }}
          ></Divider>
          <div>
            {this.state.recommended.map(qwiki => {
              return (
                <QwikiCard
                  key={qwiki._id}
                  qwiki={qwiki}
                  uuid={this.props.uuid}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default UserPage;
