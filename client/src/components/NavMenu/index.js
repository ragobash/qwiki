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

import React, { Component } from "react";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LoginModal from "../LoginModal/index";
import SignupModal from "../SignupModal/index";
import { Button, Menu, MenuItem } from "@material-ui/core";
import "./NavMenu.css";

class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  menuItems = () => {
    if (this.props.loggedIn) {
      return (
        <MenuItem onClick={this.handleClose}>
          {" "}
          <Button
            variant="contained"
            onClick={this.props.userLoggedOut}
            id="btn"
          >
            Logout
          </Button>
        </MenuItem>
      );
    } else {
      return (
        <div>
          <MenuItem onClick={this.handleClose}>
            {" "}
            <LoginModal {...this.props} />{" "}
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            {" "}
            <SignupModal {...this.props} />{" "}
          </MenuItem>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="background">
        <Button
          id="menuIcon"
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={this.handleOpen}
        >
          <AccountCircleIcon style={{color: "#3498db", fontSize: 45}} />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={document.getElementById("menuIcon")}
          keepMounted
          open={this.state.open}
          onClose={this.handleClose}
        >
          {this.menuItems()}
        </Menu>
      </div>
    );
  }
}

export default NavMenu;
