import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../actions/deleteTodoActions";
import { editTodo } from "../actions/editTodoActions";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import Clear from "@material-ui/icons/Clear";
import Create from "@material-ui/icons/Create";
import SaveIcon from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Todo extends Component {
  state = {
    isEdit: false,
    newTodoName: ""
  };

  handelChange = e => {
    this.setState({
      newTodoName: e.target.value
    });
  };

  handelClick = () => {
    if (this.state.newTodoName !== "") {
      this.props.editTodo(
        this.props.dayId,
        this.props.todo.todoId,
        this.state.newTodoName
      );
      this.setState({
        isEdit: false,
        newTodoName: ""
      });
    } else {
      alert("The field can not be empty!");
      return false;
    }
  };

  handelSubmit = e => {
    e.preventDefault();
    if (this.state.newTodoName !== "") {
      this.props.editTodo(
        this.props.dayId,
        this.props.todo.todoId,
        this.state.newTodoName
      );
      this.setState({
        isEdit: false,
        newTodoName: ""
      });
    } else {
      alert("The field can not be empty!");
      return false;
    }
  };

  render() {
    const { todo, dayId } = this.props;
    return this.state.isEdit ? (
      <div style={{ marginTop: "0.8rem" }}>
        <form onSubmit={this.handelSubmit}>
          <Grid container justify="center" alignItems="center" spacing={32}>
            <Grid item xs={8}>
              <TextField
                label="New todo name"
                placeholder={todo.todoName}
                onChange={this.handelChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                color="secondary"
                size="small"
                style={{ padding: "0.7rem 1.2rem" }}
                onClick={this.handelClick}
              >
                <SaveIcon />
                Save
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    ) : (
      <div style={{ marginTop: "0.8rem", borderLeft: "0.4rem solid grey" }}>
        <Grid container justify="center" alignItems="center" spacing={16}>
          <Grid item xs={8}>
            <Typography
              variant="h5"
              gutterBottom
              style={{ margin: "0.4rem 0 0 0.4rem" }}
            >
              {todo.todoName}
            </Typography>
          </Grid>
          <Grid item>
            <Fab
              color="secondary"
              aria-label="Edit"
              size="small"
              onClick={() => {
                this.setState({ isEdit: true });
              }}
            >
              <Create />
            </Fab>
          </Grid>
          <Grid item>
            <Fab
              color="default"
              aria-label="Edit"
              size="small"
              onClick={() => {
                this.props.deleteTodo(dayId, todo.todoId);
              }}
            >
              <Clear />
            </Fab>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: (dayId, todoId) => dispatch(deleteTodo(dayId, todoId)),
    editTodo: (dayId, todoId, newTodoName) =>
      dispatch(editTodo(dayId, todoId, newTodoName))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Todo);
