import React, { Component } from "react";
import TodoBox from "./TodoBox";
import { connect } from "react-redux";
import { deleteDay } from "../actions/deleteDayActions";
import { editDay } from "../actions/editDayActions";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
import Create from "@material-ui/icons/Create";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";

class Day extends Component {
  state = {
    isEdit: false,
    newDayName: ""
  };

  handelChange = e => {
    this.setState({
      newDayName: e.target.value
    });
  };

  handelClick = () => {
    if (this.state.newDayName !== "") {
      this.props.editDay(this.props.day.dayId, this.state.newDayName);
      this.setState({
        isEdit: false,
        newDayName: ""
      });
    } else {
      alert("The field can not be empty!");
      return false;
    }
  };

  handelSubmit = e => {
    e.preventDefault();
    if (this.state.newDayName !== "") {
      this.props.editDay(this.props.day.dayId, this.state.newDayName);
      this.setState({
        isEdit: false,
        newDayName: ""
      });
    } else {
      alert("The field can not be empty!");
      return false;
    }
  };

  render() {
    const { day } = this.props;
    return (
      <Grid item xs={12} sm={6} md={4}>
        <Paper style={{ padding: "2rem" }}>
          {this.state.isEdit ? (
            <form onSubmit={this.handelSubmit}>
              <Grid container justify="center" alignItems="center" spacing={32}>
                <Grid item xs={8}>
                  <TextField
                    label="New day name"
                    placeholder={day.dayName}
                    onChange={this.handelChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={4}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="medium"
                    onClick={this.handelClick}
                    style={{ padding: "0.9rem 1.4rem" }}
                  >
                    <SaveIcon />
                    Save
                  </Button>
                </Grid>
              </Grid>
            </form>
          ) : (
            <Grid container justify="center" alignItems="center" spacing={16}>
              <Grid item xs={8}>
                <Typography variant="h4" gutterBottom>
                  {day.dayName}
                </Typography>
              </Grid>
              <Grid item>
                <Fab
                  color="secondary"
                  aria-label="Edit"
                  size="medium"
                  onClick={() => this.setState({ isEdit: true })}
                >
                  <Create />
                </Fab>
              </Grid>
              <Grid item>
                <Fab
                  aria-label="Delete"
                  size="medium"
                  onClick={() => this.props.deleteDay(day.dayId)}
                >
                  <DeleteIcon />
                </Fab>
              </Grid>
            </Grid>
          )}
          <TodoBox dayId={day.dayId} todos={day.todos} />
        </Paper>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteDay: dayId => dispatch(deleteDay(dayId)),
    editDay: (dayId, newDayName) => dispatch(editDay(dayId, newDayName))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Day);
