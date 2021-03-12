import React from "react";

import { TODO_ITEM_CONSTANTS } from "common/constants";
import "./TodoItem.scss";

const TodoItemComponent = (props) => {
  const { message, completed, handleTodoToggling, handleTodoDeleting } = props;

  return (
    <div className="to-do-item-component">
      <input
        className="to-do-item-checkbox"
        type="checkbox"
        onClick={handleTodoToggling}
        defaultChecked={completed ? true : false}
      ></input>
      <div
        className={
          completed ? "is-completed to-do-item-message" : "not-completed to-do-item-message"
        }
      >
        {message}
      </div>
      <div className="to-do-item-delete-button" onClick={handleTodoDeleting}>
        {TODO_ITEM_CONSTANTS.DELETE_SIGN}
      </div>
    </div>
  );
};

export default TodoItemComponent;
