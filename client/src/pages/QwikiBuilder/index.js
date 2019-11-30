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
import { Redirect } from "react-router";
import API from "../../util/API";
import "./QwikiBuilder.css";
import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

// styles for title and blrb input
const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    background: "white"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    heigth: "300",
    background: "white"
  },
  background: {
    background: "white"
  }
});

class QwikiBuilder extends React.Component {
  constructor() {
    super();

    this.state = {
      title: "",
      blurb: "",
      img: "",
      public: true,
      permissions: "OWNER",
      mods: [],
      redirect: ""
    };
  }

  handleInput = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  switchPublic = event => {
    this.setState({
      public: event.target.checked
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    API.newQwiki(this.state)
      .then(res => {
        const redirect = "/qwikis/" + res.data.qwiki._id;

        this.setState({
          redirect
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    if (this.state.redirect.length > 0) {
      return <Redirect to={this.state.redirect} />;
    }

    return (
      <div>
        {/* title input */}
        <div className="background">
          <TextField
            id="outlined-basic"
            className={this.props.classes.textField}
            label="Title"
            margin="normal"
            variant="outlined"
            name="title"
            value={this.state.title}
            onChange={this.handleInput}
          />
          {/* blurb input */}
          <div className="background">
            <TextField
              id="outlined-basic"
              className={this.props.classes.textField}
              label="Blurb"
              margin="normal"
              variant="outlined"
              name="blurb"
              value={this.state.blurb}
              onChange={this.handleInput}
            />
          </div>
          {/* img input */}
          <div className="background">
            <TextField
              id="outlined-basic"
              className={this.props.classes.textField}
              label="Image"
              margin="normal"
              variant="outlined"
              name="img"
              value={this.state.img}
              onChange={this.handleInput}
            />
          </div>
        </div>
        <div id="submit">
          <input
            className="submit"
            type="submit"
            value="Submit"
            onClick={this.handleSubmit}
          ></input>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(QwikiBuilder);
