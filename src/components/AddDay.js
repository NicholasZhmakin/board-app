import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewDay } from "../actions/addDayActions";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

class AddDay extends Component {
  state = {
    dayId: "",
    dayName: "",
    todos: []
  };

  handelChange = e => {
    let id = Date.now().toString();
    this.setState({
      dayId: id,
      dayName: e.target.value,
      todos: []
    });
  };

  handelClick = () => {
    if (this.state.dayName !== "") {
      this.props.addNewDay(this.state);
      this.setState({
        dayId: "",
        dayName: "",
        todos: []
      });
    } else {
      alert("The field can not be empty!");
      return false;
    }
  };

  handelSubmit = e => {
    e.preventDefault();
    if (this.state.dayName !== "") {
      this.props.addNewDay(this.state);
      this.setState({
        dayId: "",
        dayName: "",
        todos: []
      });
    } else {
      alert("The field cannot be empty!");
      return false;
    }
  };

  render() {
    return (
      <Paper elevation={8} style={addDayStyle}>
        <form onSubmit={this.handelSubmit}>
          <Grid container justify="center" alignItems="center" spacing={16}>
            <Grid item>
              <TextField
                label="Add day"
                onChange={this.handelChange}
                value={this.state.dayName}
                margin="normal"
              />
            </Grid>
            <Grid item>
              <Fab onClick={this.handelClick} color="primary" aria-label="Add">
                <AddIcon />
              </Fab>
            </Grid>
          </Grid>
        </form>
      </Paper>
    );
  }
}

const addDayStyle = {
  margin: "auto",
  padding: "2rem",
  width: "28rem"
};

const mapDispatchToProps = dispatch => {
  return {
    addNewDay: newDay => dispatch(addNewDay(newDay))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddDay);
