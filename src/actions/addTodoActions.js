export const addNewTodo = (id, newTodo) => {
  return {
    type: "ADD_TODO",
    id,
    newTodo
  };
};
