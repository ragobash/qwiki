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
import API from "../../util/API";
import { Button, Modal } from "@material-ui/core";
import "./LoginModal.css";

class LoginModal extends Component {
  // This handles the state of the modal
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      email: "",
      password: ""
    };
  }

  // opens modal
  handleOpen = () => {
    this.setState({ open: true });
  };

  // closes modal
  handleClose = () => {
    this.setState({
      open: false,
      email: "",
      password: ""
    });
  };

  handleInput = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    API.login(this.state)
      .then(res => {
        document.cookie = res.data.sessUser;
        this.props.userLoggedIn(res.data.uuid);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        {/* login btn */}
        <Button variant="contained" onClick={this.handleOpen} id="btn">
          Login
        </Button>

        {/* login modal */}
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div>
            <form className="modal-box">
              <h2>Login</h2>
              <div>
                <input
                  autoFocus="true"
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInput}
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInput}
                />
                <input
                  type="submit"
                  value="Login"
                  onClick={this.handleSubmit}
                ></input>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;
