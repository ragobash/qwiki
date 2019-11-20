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
import BuilderToolbar from "../../components/BuilderToolbar";
import API from "../../util/API";
import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

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
      qwikiID: props.qwikiID,
      title: "",
      blurb: "",
      public: true,
      sections: []
    };
  }

  // TODO
  handleInput(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  // TODO
  switchPublic(event) {
    this.setState({
      public: event.target.checked
    });
  }

  // TODO
  newSection(event) {
    event.preventDefault();

    const type = event.target.sectionType;
    const sections = [...this.state.sections];

    sections.push({
      type,
      content: ""
    });

    this.setState({
      sections
    });
  }

  // TODO
  sectionInput(event) {
    const index = event.target.index;
    const content = event.target.value;
    const sections = [...this.state.sections];

    sections[index].content = content;

    this.setState({
      sections
    });
  }

  // TODO
  handleSubmit(event) {
    event.preventDefault();

    API.newPage(this.state)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  // TODO
  render() {
    return (
      <div>
        <BuilderToolbar onClick={this.newSection} />
        <div>
          {this.state.sections.map((section, index) => {
            switch (section.type) {
              case "HEADING":
                return (
                  <input
                    index={index}
                    value={section.content}
                    onChange={this.sectionInput}
                  />
                );
              case "PARAGRAPH":
                return (
                  <textarea
                    index={index}
                    value={section.content}
                    onChange={this.sectionInput}
                  />
                );
              case "IMAGE":
                return (
                  <input
                    index={index}
                    value={section.content}
                    onChange={this.sectionInput}
                  />
                );
            }
          })}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PageBuilder);
