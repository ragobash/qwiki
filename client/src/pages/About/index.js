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
import "../About/about.css";
import { Paper, Typography, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const classes = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > * + *': {
      margin: theme.spacing(1),
    },
  },
  circle: {
    width: 500,
    height: 500,
  },
}));

class About extends React.Component {
  
  render() {
        return (
      <div id="aboutwrapper">
        <div id="aboutcontent">
        <Grid
          container
          spacing={0}
          alignItems="center"
          justify="center"
          style={{ minHeight: "20vh" }}
        >
          <Paper
             square="true"
             style={{
                    background: "#191919",
                    color: "white",
                    padding: "20px",
                    }}>
          <Typography 
            variant="h1"
            component="h3"
            align="center"
            style={{
                fontWeight:"bold"
                }}
                >
                Meet The Developers!
              </Typography>
              <div>
                  <Typography
                  id="blurb"
                  variant="p"
                  component="h3"
                  align="center"
                  style={{
                    color:"white"
                        }}>
                  qWiki is a platform that provides a quick and easy way to host your own scalable Wiki. With the Builder Tool, you can easily generate dynamic informative Wikis and publish them for others to read or contribute.
                  </Typography>
                </div>
              <div id="photogrid">
                <Avatar
                  id="photo"
                  alt="Ryan Harris" 
                  src="https://via.placeholder.com/150"
                  className={classes.photo}/>
                <Avatar 
                  id="photo"
                  alt="Andrew Brookings" 
                  src="https://via.placeholder.com/150"
                  className={classes.photo}/>
                <Avatar
                  id="photo"
                  alt="Joshua Munoz"
                  src="https://via.placeholder.com/150"
                  className={classes.photo}/>
                </div>
                  </Paper>
            </Grid>
            <div class="information">
                  <Paper 
                  id="aboutinfo"
                  square="true"
                  style={{
                    background: "#191919",
                    color: "white",
                    }}>
                  <Typography
                    id="names"
                    display="inline"
                    variant="p">
                    Ryan Harris
                  </Typography>
                  <Typography
                    id="names"
                    display="inline"
                    variant="p">
                    Andrew Brookings
                  </Typography>
                  <Typography
                    id="names"
                    display="inline"
                    variant="p">
                    Joshua Munoz
                  </Typography>
            </Paper>
            </div>
          );}
        </div>
      </div>
    );
  }
}

export default (About);