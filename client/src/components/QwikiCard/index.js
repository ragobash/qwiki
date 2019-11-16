import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardActionArea, CardMedia, CardContent, Typography,CardActions } from "@material-ui/core";
import "./QwikiCard.css";

class QwikiCard extends Component {
  render() {
    return (
      <div className="cardBackground">
        <Card className="card">
          <CardActionArea className="card">
            <CardMedia
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>

            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default QwikiCard;
