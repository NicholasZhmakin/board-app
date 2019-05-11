import React from "react";
import Todo from "./Todo";
import Typography from "@material-ui/core/Typography";

const TodoList = ({ todos, dayId }) => {
  const daylytodos = todos.length ? (
    todos.map(todo => {
      return <Todo todo={todo} dayId={dayId} key={todo.todoId} />;
    })
  ) : (
    <Typography variant="subtitle1" align="center" gutterBottom>
      You have no todos on this day.
    </Typography>
  );
  return <div style={{ marginTop: "1.5rem" }}>{daylytodos}</div>;
};

export default TodoList;
