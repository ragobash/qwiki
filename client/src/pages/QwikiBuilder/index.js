import React from "react";
import { Redirect } from "react-router-dom";
import API from "../../util/API";
import "./QwikiBuilder.css";
import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

// styles for title and blrb input
const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    background: "white"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    heigth: "300",
    background: "white"
  },
  background: {
    background: "white"
  }
});

class QwikiBuilder extends React.Component {
  constructor() {
    super();

    this.state = {
      title: "",
      blurb: "",
      img: "",
      public: true,
      permissions: "OWNER",
      mods: []
    };
  }

  // TODO
  handleInput(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  // TODO
  switchPublic(event) {
    this.setState({
      public: event.target.checked
    });
  }

  // TODO
  handleSubmit(event) {
    event.preventDefault();

    API.newQwiki(this.state)
      .then(res => {
        return <Redirect to={"/qwikis/" + res.data._id} />
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        {/* title input */}
        <div className="background">
          <TextField
            id="outlined-basic"
            className={this.props.classes.textField}
            label="Title"
            margin="normal"
            variant="outlined"
            name="Title"
            value={this.state.title}
          />
          {/* blurb input */}
          <div className="background">
            <TextField
              id="outlined-basic"
              className={this.props.classes.textField}
              label="Blurb"
              margin="normal"
              variant="outlined"
              name="Blurb"
              value={this.state.blurb}
            />
          </div>
          {/* img input */}
          <div className="background">
            <TextField
              id="outlined-basic"
              className={this.props.classes.textField}
              label="img"
              margin="normal"
              variant="outlined"
              name="img"
              value={this.state.img}
            />
          </div>
        </div>
          <input type="submit" value="Submit"></input>
      </div>
    );
  }
}

export default withStyles(styles)(QwikiBuilder);
