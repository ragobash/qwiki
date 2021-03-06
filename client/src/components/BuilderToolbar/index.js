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
import Button from "@material-ui/core/Button";
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import TitleIcon from '@material-ui/icons/Title';
import NotesIcon from '@material-ui/icons/Notes';
import "../BuilderToolbar/buildertoolbar.css";

const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed"
  },
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

function BuilderToolbar(props) {
  const classes = useStyles();

  return (
    <div className="buttonbox">
      <p className="heading">TOOLBAR</p>
      <Button
        onClick={props.onClick}
        data-sectiontype="HEADING"
        variant="outlined"
        color="primary"
        className={`${classes.button} i-am-class`}
      >
        <span onClick={props.onClick} data-sectiontype="HEADING">
          <TitleIcon onClick={props.onClick} data-sectiontype="HEADING" />
        </span>
      </Button>
      <Button
        onClick={props.onClick}
        data-sectiontype="PARAGRAPH"
        variant="outlined"
        color="primary"
        className={`${classes.button} i-am-class`}
      >
        <span onClick={props.onClick} data-sectiontype="PARAGRAPH">
          <NotesIcon onClick={props.onClick} data-sectiontype="PARAGRAPH" />
        </span>
      </Button>
      <Button
        onClick={props.onClick}
        data-sectiontype="IMAGE"
        variant="outlined"
        color="primary"
        className={`${classes.button} i-am-class`}
      >
        <span onClick={props.onClick} data-sectiontype="IMAGE">
          <AddPhotoAlternateIcon onClick={props.onClick} data-sectiontype="IMAGE" />
        </span>
      </Button>
    </div>
  );
}

export default BuilderToolbar;
