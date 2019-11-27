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
import { Box, TextField, Divider } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
// import ToolbarBtn from "../../components/ToolbarBtn/index.js";

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
    width: "75%",
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
    console.log(event.target.getAttribute("data-sectiontype"));
    const entry = {
      sectionType: event.target.getAttribute("data-sectiontype"),
      content: ""
    };

    const sections = [...this.state.sections, entry];

    this.setState({
      sections
    });
  };

  sectionInput = event => {
    const index = event.target.getAttribute("data-index");
    const content = event.target.value;

    let sections = [...this.state.sections];

    const sectionType = sections[index].sectionType;

    sections[index] = {
      sectionType,
      content
    };

    this.setState({
      sections
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    API.newPage(this.state)
      .then(res => {
        return <Redirect to={"/pages/" + res.data._id} />;
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
<div class="wrapper">
    <div class="content">
<TextField
            InputProps={{
              classes: {
                root: this.props.classes.textField
              }
            }}
            InputLabelProps={{
              style: { color: "white", padding: "0px 0px 5px 15px" }
            }}
            id="outlined-basic"
            // className={this.props.classes.textField}
            label="Title"
            placeholder="Required*"
            margin="normal"
            variant="outlined"
            name="title"
            value={this.state.title}
            onChange={this.handleInput}
            fullWidth
          />
          <TextField
            id="outlined-basic"
            InputProps={{
              classes: {
                root: this.props.classes.textField
              }
            }}
            InputLabelProps={{
              style: { color: "white", padding: "0px 0px 5px 15px" }
            }}
            fullWidth
            multiline={true}
            rows={1}
            rowsMax={10}
            label="Blurb"
            placeholder="Required*"
            margin="normal"
            variant="outlined"
            name="blurb"
            padding="10px"
            value={this.state.blurb}
            onChange={this.handleInput}
          />
          <Divider style={{ backgroundColor: "#f4f4f4", width: "500px" }} />

          <div>
          {this.state.sections.map((section, index) => {
            switch (section.sectionType) {
              case "HEADING":
                console.log("heading hit");
                return (
                  <div className="background" id="heading" key={index}>
                  <TextField
            InputProps={{
              classes: {
                root: this.props.classes.textField
              }
            }}
            InputLabelProps={{
              style: { color: "white", padding: "0px 0px 5px 15px" }
            }}
            id="outlined-basic"
            label="Heading"
            margin="normal"
            variant="outlined"
            name="heading"
            value={this.state.heading}
            onChange={this.handleInput}
            fullWidth
          />
                  </div>
                );
              case "IMAGE":
                return (
                  <div className="background" key={index}>
                  <TextField
            InputProps={{
              classes: {
                root: this.props.classes.textField
              }
            }}
            InputLabelProps={{
              style: { color: "white", padding: "0px 0px 5px 15px" }
            }}
            id="outlined-basic"
            label="Image"
            margin="normal"
            variant="outlined"
            name="image"
            value={this.state.image}
            onChange={this.handleInput}
            fullWidth
          />
                  </div>
                );
              default:
                return (
                  <div className="background" key={index}>
                  <TextField
            id="outlined-basic"
            InputProps={{
              classes: {
                root: this.props.classes.textField
              }
            }}
            InputLabelProps={{
              style: { color: "white", padding: "0px 0px 5px 15px" }
            }}
            fullWidth
            multiline={true}
            rows={1}
            rowsMax={10}
            label="Paragraph"
            margin="normal"
            variant="outlined"
            name="paragraph"
            padding="10px"
            value={this.state.paragraph}
            onChange={this.handleInput}
          />
          
                  </div>
                  
                );
            }
          })}
          <input
          className="submit"
          type="submit"
          value="Submit"
          onClick={this.handleSubmit}
        ></input>
        </div>
    </div>
    <div class="toolbar">
    <div className="fullbox">
          <Box className="toolbarbox" bgcolor="#2f3640">
            <BuilderToolbar newClass="toolbar" onClick={this.newSection} />
          </Box>
        </div>
    </div>
</div>
);
}
}
export default withStyles(styles)(PageBuilder);