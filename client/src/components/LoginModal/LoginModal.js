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

import React, {Component} from "react";
// import { Link } from "react-router-dom";
import {Button, Modal,} from '@material-ui/core';
import "./LoginModal.css";

class LoginModal extends Component {
    constructor () {
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
       return(
        <div>
        <Button variant="contained"  onClick={this.handleOpen} id="btn">
            Login
        </Button>

        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
        >
            <div>
              <form className="box">
              <h2>Login</h2>
                  <div>
                    <input type="text" placeholder="Username"></input>
                    <input type="password" placeholder="Password"></input>
                    <input type="submit" value="Login"></input>
                  </div>
              </form>
            </div>
        </Modal>
    </div>
    );
  }
}

export default LoginModal;