export const editTodo = (dayId, todoId, newTodoName) => {
  return {
    type: "EDIT_TODO",
    dayId,
    todoId,
    newTodoName
  };
};
