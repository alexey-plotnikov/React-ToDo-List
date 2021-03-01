import { ACTIONS } from "common/constants";

const todos = (state = [], action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, {
          id: action.id,
          message: action.message,
        },
      ];

    default:
      return state;
  }
};

export default todos;
