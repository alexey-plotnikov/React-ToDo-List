import { ACTIONS } from "common/action-types";
import { VISIBILITY_FILTERS } from "common/constants";

const visibilityFilter = (state = VISIBILITY_FILTERS.SHOW_ALL, action) => {
  switch (action.type) {
    case ACTIONS.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
