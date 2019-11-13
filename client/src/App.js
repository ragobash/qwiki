import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Button, AppBar, Toolbar} from '@material-ui/core';
import Navbar from "./components/NavBar/Navbar";



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
        </div>
      </Router>      
    );
  }
}

export default App;
