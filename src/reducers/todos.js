import { ACTIONS } from "common/constants";

const todos = (state = [], action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, {
          id: action.id,
          text: action.text,
        },
      ];

    default:
      return state;
  }
};

export default todos;
