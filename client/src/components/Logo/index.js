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
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: 16
    }
  },
  square: {
    width: "13%",
    heigth: "10%",
    backgroundColor: "#000000"
  }
});

export default function Logo() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar
        variant="square"
        src="/images/logocolor.png"
        className={classes.square}
      ></Avatar>
    </div>
  );
}
