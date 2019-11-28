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
import "../404/404.css";
import { Paper, Typography, Grid } from "@material-ui/core";
// import Box from "@material-ui/core/Box"
// import { withStyles } from "@material-ui/core/styles";

class ErrorPage extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <div id="content">
        <Grid
  container
  spacing={0}
  alignItems="center"
  justify="center"
  style={{ minHeight: "100vh" }}
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
                404 <span role="img" aria-label="emoji">🙄</span>
              </Typography>
              <Typography component="p">
                Why'd you break our beautiful app?
                Hit "back" to go back or... you know what? Just leave.
              </Typography>
            </Paper>
            </Grid>
          ); }
        </div>
      </div>
    );
  }
}

export default ErrorPage;
