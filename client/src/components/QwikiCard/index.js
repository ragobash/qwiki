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
import {
  Button,
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions
} from "@material-ui/core";
import "./QwikiCard.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { withStyles } from "@material-ui/core/styles";
import API from "../../util/API";

const styles = () => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%"
  },
  avatar: {
    backgroundColor: "red"
  }
});

class QwikiCard extends Component {

  follow = event => {
    event.preventDefault();

    API.followQwiki(this.props.uuid, this.props.qwiki._id)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="cardBackground">
        <Card className={this.props.classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={this.props.classes.avatar}>
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={this.props.qwiki.title}
            subheader={this.props.qwiki.created}
          />
          <CardMedia
            className={this.props.classes.media}
            image={this.props.qwiki.img}
            title=""
          />
          <CardContent>
            <Typography>{this.props.qwiki.blurb}</Typography>
          </CardContent>
          <CardActions>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <Button
              variant="outlined"
              size="small"
              color="primary"
              href={"/qwikis/" + this.props.qwiki._id}
            >
              Read more
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(QwikiCard);
