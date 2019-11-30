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
import SimpleExpansionPanel from "../../components/qWikiPagePopOut";
// import Heading from "../../components/Heading";
// import Paragraph from "../../components/Paragraph";
import Image from "../../components/Image";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core/styles";
// import { display } from "@material-ui/system";
import "./QwikiHub.css";

const styles = () => ({
  //   heading: {
  //     color: "white",
  //     fontSize: 100,
  //     display: "flex",
  //     justifyContent: "space-evenly"
  //   },
  blurb: {
    color: "white"
  }
});

class QwikiHub extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: "",
      title: "",
      blurb: "",
      img: "",
      pages: []
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    API.getQwikiByID(id)
      .then(res => {
        console.log(res.data.qwiki);
        this.setState({
          _id: res.data.qwiki._id,
          title: res.data.qwiki.title,
          blurb: res.data.qwiki.blurb,
          img: res.data.qwiki.img,
          pages: res.data.qwiki.pages
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="gridContainer">
        <div>
          <div className="btn1">
            <SimpleExpansionPanel pages={this.state.pages} />
          </div>
          <div className="btn2">
            <Fab
              color="primary"
              aria-label="add"
              href={"/pages/builder/" + this.state._id}
            >
              <AddIcon />
            </Fab>
          </div>
        </div>
        <div className="title">
          <h1 className={this.props.classes.heading}>{this.state.title}</h1>
        </div>
        <div className="pic">
          <Image content={this.state.img} />
        </div>
        <div className="blurb">
          <p className={this.props.classes.blurb}>{this.state.blurb}</p>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(QwikiHub);
