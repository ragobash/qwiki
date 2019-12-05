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
    heigth: "300",
    background: "#2f3640",
    color: "white !important",
    borderColor: "#3498db !important"
  },
  background: {
    background: "white"
  },
  label: {
    color: "white"
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
      owner: "",
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

  // switchPublic = event => {
  //   this.setState({
  //     public: event.target.checked
  //   });
  // };

  handleSubmit = event => {
    event.preventDefault();

    this.setState(
      {
        owner: this.props.uuid
      },
      () => {
        API.newQwiki(this.state)
          .then(res => {
            const redirect = "/qwikis/" + res.data.qwiki._id;

            this.setState({
              redirect
            });
          })
          .catch(err => console.log(err));
      }
    );
  };

  render() {
    if (this.state.redirect.length > 0) {
      return <Redirect to={this.state.redirect} />;
    }

    return (
      <div id="qwikiwrapper">
        <div id="qwikicontent">
          <TextField
            InputProps={{
              classes: {
                root: this.props.classes.textField
              }
            }}
            InputLabelProps={{
              style: { color: "white", padding: "0px 0px 5px 15px" }
            }}
            id="filled-basic"
            // className={this.props.classes.textField}
            label="Title"
            placeholder="Required*"
            margin="normal"
            variant="filled"
            name="title"
            value={this.state.title}
            onChange={this.handleInput}
            fullWidth
          />
          <TextField
            id="filled-basic"
            InputProps={{
              classes: {
                root: this.props.classes.textField
              }
            }}
            InputLabelProps={{
              style: {
                color: "white",
                padding: "0px 0px 5px 15px",
                width: "100%"
              }
            }}
            fullWidth
            multiline={true}
            rows={1}
            rowsMax={10}
            label="Blurb"
            placeholder="Required*"
            margin="normal"
            variant="filled"
            name="blurb"
            padding="10px"
            value={this.state.blurb}
            onChange={this.handleInput}
          />
          <TextField
            InputProps={{
              classes: {
                root: this.props.classes.textField
              }
            }}
            InputLabelProps={{
              style: { color: "white", padding: "0px 0px 5px 15px" }
            }}
            id="filled-basic"
            // className={this.props.classes.textField}
            label="Image"
            placeholder="Please submit a link"
            margin="normal"
            variant="filled"
            name="image"
            value={this.state.image}
            onChange={this.handleInput}
            fullWidth
          />
          <div>
            <div id="submit">
              <input
                className="submit"
                type="submit"
                value="Submit"
                onClick={this.handleSubmit}
              ></input>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(QwikiBuilder);
