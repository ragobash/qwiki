import React, { Component } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import LoginModal from "../LoginModal/index";
import SignupModal from "../SignupModal/index";
import { Button, Menu, MenuItem } from "@material-ui/core";
import "./NavMenu.css";

class NavMenu extends Component {
  constructor() {
    super();
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

  render() {
    return (
      <div className="background">
        <Button
          id="menuIcon"
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={this.handleOpen}
        >
          <MenuIcon />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={document.getElementById("menuIcon")}
          keepMounted
          open={this.state.open}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>
            {" "}
            <LoginModal />{" "}
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            {" "}
            <SignupModal />{" "}
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default NavMenu;
