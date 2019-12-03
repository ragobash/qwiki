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
import { Box, TextField, Divider, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";

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

class PageBuilder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      qwikiID: "",
      title: "",
      blurb: "",
      public: true,
      editor: this.props.uuid,
      sections: [],
      redirect: ""
    };
  }

  componentDidMount() {
    let path = window.location.href.split("/");
    const id = path[path.length - 1];

    this.setState({
      qwikiID: id
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
      sectionType: event.target.getAttribute("data-sectiontype"),
      content: ""
    };

    const sections = [...this.state.sections, entry];

    this.setState({
      sections
    });
  };

  removeSection = event => {
    event.preventDefault();

    const index = event.target.getAttribute("data-index") || event.target.parentNode.getAttribute("data-index");

    let sections = [...this.state.sections];
    sections.splice(index, 1);

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
        const redirect = "/pages/" + res.data.page._id;

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
      <div id="wrapper">
        <div id="content">
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
          <Divider variant="middle" style={{ backgroundColor: "#f4f4f4" }} />

          <div>
            {this.state.sections.map((section, index) => {
              switch (section.sectionType) {
                case "HEADING":
                  return (
                    <div className="background" className="heading" key={index}>
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
                        label="Heading"
                        margin="normal"
                        variant="filled"
                        name="heading"
                        value={this.state.heading}
                        onChange={this.handleInput}
                        fullWidth
                      />
                      <div className="deleteButton">
                        <Button data-index={index} onClick={this.removeSection} style={{ backgroundColor: 'transparent' }}>
                          <DeleteRoundedIcon data-index={index} color="error" />
                        </Button>
                      </div>
                    </div>
                  );
                case "IMAGE":
                  return (
                    <div className="background" className="image" key={index}>
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
                        label="Image"
                        margin="normal"
                        variant="filled"
                        name="image"
                        value={this.state.image}
                        onChange={this.handleInput}
                        fullWidth
                      />
                      <div className="deleteButton">
                        <Button data-index={index} onClick={this.removeSection} style={{ backgroundColor: 'transparent' }}>
                          <DeleteRoundedIcon data-index={index} color="error" />
                        </Button>
                      </div>{" "}
                    </div>
                  );
                default:
                  return (
                    <div className="background" className="paragraph" key={index}>
                      <TextField
                        id="filled-basic"
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
                        variant="filled"
                        name="paragraph"
                        padding="10px"
                        value={this.state.paragraph}
                        onChange={this.handleInput}
                      />
                      <div className="deleteButton">
                        <Button data-index={index} onClick={this.removeSection} style={{ backgroundColor: 'transparent' }}>
                          <DeleteRoundedIcon data-index={index} color="error" />
                        </Button>
                      </div>
                    </div>
                  );
              }
            })}
            <div id="submit">
              <input
                className="submit"
                type="submit"
                value="SUBMIT"
                onClick={this.handleSubmit}
              ></input>
            </div>
          </div>
        </div>

        <div id="toolbar">
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
