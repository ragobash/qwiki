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
import "../Contact/contact.css";
import { Button, ButtonGroup, Typography, Grid } from "@material-ui/core";

class Contact extends React.Component {
  render() {
    return (
      <div id="contactwrapper">
        <div id="contactcontent">
          <Grid
            container
            spacing={0}
            alignItems="center"
            justify="center"
            style={{ minHeight: "20vh" }}
          >
            <Typography
              variant="h1"
              component="h3"
              align="center"
              style={{
                fontWeight: "bold",
                color: "white"
              }}
            >
              Send Us A Message!
            </Typography>
          </Grid>
          <div id="contactbuttongroup">
            <Grid container spacing={3} justify="center">
              <Grid item xs={12} md={6}>
                <div id="contactbuttons">
                  <ButtonGroup
                    fullWidth
                    aria-label="full width outlined button group"
                    variant="contained"
                  >
                    <Button href="mailto: ragobash@gmail.com" target="#">
                      EMAIL
                    </Button>
                    <Button href="https://github.com/ragobash/qwiki" target="#">
                      GITHUB
                    </Button>
                    <Button href="tel:1-405-301-5463" target="#">
                      CALL
                    </Button>
                  </ButtonGroup>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
