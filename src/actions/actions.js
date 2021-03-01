import { ACTIONS } from "common/constants";

let toDoId = 0;

export const addTodo = (todoMessageObj) => {

  return {
    type: ACTIONS.ADD_TODO,
    id: toDoId++,
    message: todoMessageObj.todoMessage,
  };
};
