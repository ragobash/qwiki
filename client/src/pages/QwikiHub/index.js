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
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import Image from "../../components/Image";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import "./QwikiHub.css";

class QwikiHub extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: "",
      title: "",
      blurb: "",
      img: "",
      owner: "",
      pages: []
    };
  }

  componentDidMount() {
    let path = window.location.href.split("/");
    const id = path[path.length - 1];

    API.getQwikiByID(id)
      .then(res => {
        this.setState({
          _id: res.data.qwiki._id,
          title: res.data.qwiki.title,
          blurb: res.data.qwiki.blurb,
          img: res.data.qwiki.img,
          owner: res.data.qwiki.owner,
          pages: res.data.qwiki.pages
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  newPageButton = () => {
    if (this.props.uuid.length > 0) {
      return (
        <div id="qwikifab">
          <Fab
            color="primary"
            aria-label="add"
            href={"/pages/builder/" + this.state._id}
          >
            <AddIcon />
          </Fab>
        </div>
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <div id="HubWrapper">
          <div id="SideTools">
            <SimpleExpansionPanel pages={this.state.pages} />
          <div className="btn2">{this.newPageButton()}</div>
          </div>
          <div id="HubInfo">
          <div className="hub-title">
            <Heading content={this.state.title} />
          </div>
          <div className="hub-blurb">
            <Paragraph content={this.state.blurb} />
          </div>
          <div className="hub-pic">
            <Image
              content={this.state.img}
              style={{ maxWidth: "400px", maxHeight: "400px" }}
            />
            </div>
          </div>
      </div>
    );
  }
}

export default QwikiHub;
