import React, {Component} from "react";
import { Link } from "react-router-dom";
import {Button, AppBar, Toolbar} from '@material-ui/core';
import LoginModal from "../LoginModal/LoginModal";
import SignupModal from "../SignupModal/SignupModal";
import SearchIcon from '@material-ui/icons/Search';




class Navbar extends Component {
    

    render() {
        return (
            <div>
            <AppBar position="static">
            <Toolbar>
                <LoginModal />
                <SignupModal />
                <div className="search-box">
                    <input type="text" placeholder="Type to search" className="search-txt"></input>
                    <a className="search-btn">
                        <SearchIcon />
                    </a>
                </div>
            </Toolbar>
            </AppBar>
            </div>
        );
    }
}

export default Navbar;