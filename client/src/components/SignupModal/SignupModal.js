import React, {Component} from "react";
import { Link } from "react-router-dom";
import {Button, Modal} from '@material-ui/core';


class SignupModal extends Component {
    
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
        <Button variant="contained" color="primary" onClick={this.handleOpen}>
            Sign up
        </Button>

        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
        >
            <div>
            <form className="box">
              <h2>Sign up</h2>
                  <div>
                    <input type="text" placeholder="Email"></input>
                    <input type="text" placeholder="Username"></input>
                    <input type="password" placeholder="Password"></input>
                    <input type="submit" value="Sign Up"></input>
                  </div>
              </form>
            </div>
        </Modal>
    </div>
        );
    }
}    




export default SignupModal;