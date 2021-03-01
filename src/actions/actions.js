import { ACTIONS } from "common/constants";

let toDoId = 0;

export const addTodo = (todoText) => {
  return {
    type: ACTIONS.ADD_TODO,
    id: toDoId++,
    text: todoText,
  };
};
