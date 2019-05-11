import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewTodo } from "../actions/addTodoActions";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";

class AddTodo extends Component {
  state = {
    todoName: "",
    todoId: "",
    isEdit: false
  };

  handelChange = e => {
    let todoId = Date.now().toString();
    this.setState({
      todoName: e.target.value,
      todoId
    });
  };

  handelSubmit = e => {
    e.preventDefault();
    if (this.state.todoName !== "") {
      this.props.addNewTodo(this.props.dayId, this.state);
      this.setState({
        todoName: "",
        todoId: ""
      });
    } else {
      alert("The field can not be empty!");
      return false;
    }
  };

  handelClick = e => {
    if (this.state.todoName !== "") {
      this.props.addNewTodo(this.props.dayId, this.state);
      this.setState({
        todoName: "",
        todoId: ""
      });
    } else {
      alert("The field can not be empty!");
      return false;
    }
  };

  render() {
    return (
      <Grid container justify="center" alignItems="center" spacing={16}>
        <Grid item>
          <form onSubmit={this.handelSubmit}>
            <TextField
              label="Add todo"
              onChange={this.handelChange}
              value={this.state.todoName}
            />
          </form>
        </Grid>
        <Grid item>
          <Fab
            onClick={this.handelClick}
            size="medium"
            color="primary"
            aria-label="Add"
          >
            <AddIcon />
          </Fab>
        </Grid>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewTodo: (id, newTodo) => dispatch(addNewTodo(id, newTodo))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
