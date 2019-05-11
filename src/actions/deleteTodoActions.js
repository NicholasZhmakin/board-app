export const deleteTodo = (dayId, todoId) => {
  return {
    type: "DELETE_TODO",
    dayId,
    todoId
  };
};
