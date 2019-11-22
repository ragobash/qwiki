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

function QwikiCard(props) {
  return (
    <div className="cardBackground">
      <Card className={props.classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={props.classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={props.qwiki.title}
          subheader={props.qwiki.created}
        />
        <CardMedia
          className={props.classes.media}
          image={props.qwiki.img}
          title=""
        />
        <CardContent>
          <Typography>{props.qwiki.blurb}</Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            href={"/qwikis/" + props.qwiki._id}
          >
            Read more
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default withStyles(styles)(QwikiCard);
