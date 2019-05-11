import React from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import Card from "@material-ui/core/Card";

const TodoBox = ({ dayId, todos }) => {
  return (
    <Card style={todoBoxStyle}>
      <AddTodo dayId={dayId} />
      <TodoList dayId={dayId} todos={todos} />
    </Card>
  );
};

const todoBoxStyle = {
  marginTop: "2rem",
  padding: "2rem",
  background: "rgb(245, 245, 245)"
};

export default TodoBox;
