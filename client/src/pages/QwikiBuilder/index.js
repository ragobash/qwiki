import React from "react";
import API from "../../util/API";
import Navbar from "../../components/NavBar";
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
          />
          {/* blrb input */}
          <div className="background">
            <TextField
              id="outlined-basic"
              className={this.props.classes.textField}
              label="Blrb"
              margin="normal"
              variant="outlined"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(QwikiBuilder);
