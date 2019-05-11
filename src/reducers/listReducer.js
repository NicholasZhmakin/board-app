const initState = {
  days: []
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    //change days
    case "ADD_DAY":
      let newDays = [...state.days, action.newDay];
      return {
        ...state,
        days: newDays
      };

    case "DELETE_DAY":
      newDays = [...state.days];
      newDays = newDays.filter(day => day.dayId !== action.dayId);
      return {
        ...state,
        days: newDays
      };

    case "EDIT_DAY":
      newDays = [...state.days];
      let needDay = newDays.find(day => day.dayId === action.dayId);
      needDay.dayName = action.newDayName;
      return {
        ...state,
        days: newDays
      };

    //change todos
    case "ADD_TODO":
      newDays = [...state.days];
      needDay = newDays.find(day => day.dayId === action.id);
      needDay.todos = [...needDay.todos, action.newTodo];
      return {
        ...state,
        days: newDays
      };

    case "DELETE_TODO":
      newDays = [...state.days];
      needDay = newDays.find(day => day.dayId === action.dayId);
      needDay.todos = [
        ...needDay.todos.filter(todo => todo.todoId !== action.todoId)
      ];
      return {
        ...state,
        days: newDays
      };

    case "EDIT_TODO":
      newDays = [...state.days];
      needDay = newDays.find(day => day.dayId === action.dayId);
      let needTodo = needDay.todos.find(todo => todo.todoId === action.todoId);
      needTodo.todoName = action.newTodoName;
      return {
        ...state,
        days: newDays
      };

    default:
      return state;
  }
};

export default rootReducer;
