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
import { Button, Card, CardActionArea, CardMedia, CardContent, Typography,CardActions } from "@material-ui/core";
import "./QwikiCard.css";

function QwikiCard(props) {
  return (
    <div className="cardBackground">
      <Card className="card">
        <CardActionArea className="card">
          <CardMedia
            image={props.qwiki.img}
            title={props.qwiki.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.qwiki.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.qwiki.blurb}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button variant="outlined" size="small" color="primary" href={"/qwikis/" + props.qwiki._id}>
            Read More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default QwikiCard;
