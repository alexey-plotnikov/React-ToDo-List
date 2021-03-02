import { ACTIONS } from "common/action-types";

let toDoId = 0;

export const addTodo = (message) => {
  return {
    type: ACTIONS.ADD_TODO,
    id: toDoId++,
    message
  };
};

export const toggleTodo = (id) => {
  return {
    type: ACTIONS.TOGGLE_TODO,
    id
  }
}
