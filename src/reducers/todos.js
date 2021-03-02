import { ACTIONS } from "common/action-types";

const todos = (state = [], action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          message: action.message,
          completed: false,
        },
      ];
    case ACTIONS.TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id !== action.id) {
          return todo;
        }

        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    default:
      return state;
  }
};

export default todos;
