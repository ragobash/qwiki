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
// import { makeStyles } from '@material-ui/core/styles';
// import Avatar from '@material-ui/core/Avatar';

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
//   bigAvatar: {
//     width: 60,
//     height: 60,
//   },
// }));

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
              <Typography component="p">
              
              </Typography>
            </Paper>
            </Grid>
          ); }
        </div>
      </div>
    );
  }
}

export default (About);