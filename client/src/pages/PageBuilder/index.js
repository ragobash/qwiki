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
import { Redirect } from "react-router-dom";
import "../PageBuilder/pagebuilder.css";
import BuilderToolbar from "../../components/BuilderToolbar";
import API from "../../util/API";
import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

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

class PageBuilder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      qwikiID: "",
      title: "",
      blurb: "",
      public: true,
      sections: []
    };
  }

  componentDidMount() {
    this.setState({
      qwikiID: this.props.match.params.id
    });
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

  newSection = event => {
    event.preventDefault();

    const entry = {
      type: event.target.sectiontype,
      content: ""
    };

    const sections = [...this.state.sections, entry];

    this.setState({
      sections
    });
  };

  sectionInput = event => {
    const index = event.target.index;
    const content = event.target.value;

    this.setState({});
  };

  handleSubmit = event => {
    event.preventDefault();

    API.newPage(this.state)
      .then(res => {
        return <Redirect to={"/pages/" + res.data._id} />;
      })
      .catch(err => console.log(err));
  };

  // TODO
  render() {
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
        </div>

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

        <div className="kjhjk">
          {this.state.sections.map((section, index) => {
            switch (section.type) {
              case "HEADING":
                return (
                  <input
                    key={index}
                    index={index}
                    value={section.content}
                    onChange={this.sectionInput}
                  />
                );
              case "IMAGE":
                return (
                  <input
                    key={index}
                    index={index}
                    value={section.content}
                    onChange={this.sectionInput}
                  />
                );
              default:
                return (
                  <textarea
                    key={index}
                    index={index}
                    value={section.content}
                    onChange={this.sectionInput}
                  />
                );
            }
          })}
        </div>

        <div className="fullbox">
          <Box className="toolbarbox" bgcolor="#2f3640">
            <BuilderToolbar newClass="toolbar" onClick={this.newSection} />
          </Box>
        </div>

        <input type="submit" value="Submit" onClick={this.handleSubmit}></input>
      </div>
    );
  }
}

export default withStyles(styles)(PageBuilder);
