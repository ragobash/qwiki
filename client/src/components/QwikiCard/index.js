import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions
} from "@material-ui/core";
import "./QwikiCard.css";

function QwikiCard(props) {
  return (
    <div className="cardBackground" qwikiId={props.qwiki._id}>
      <Card className="card">
        <CardActionArea className="card">
          <CardMedia image={props.qwiki.img} title={props.qwiki.title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              blurb={props.qwiki.blurb}
            />
          </CardContent>
        </CardActionArea>
        <CardActions></CardActions>
      </Card>
    </div>
  );
}

export default QwikiCard;
