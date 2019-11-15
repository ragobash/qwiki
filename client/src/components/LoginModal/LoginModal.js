import React, {Component} from "react";

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