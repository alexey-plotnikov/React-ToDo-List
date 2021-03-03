import React from "react";

import "./TodoItem.scss";

const TodoItemComponent = (props) => {
  const { message, completed, handleTodoToggling, handleTodoDeleting } = props;

  return (
    <div className="to-do-item-component">
      <div
        className={
          completed ? "is-completed to-do-item-message" : "not-completed to-do-item-message"
        }
        onClick={handleTodoToggling}
      >
        {message}
      </div>
      <div className="to-do-item-delete-button" onClick={handleTodoDeleting}>
        ×
      </div>
    </div>
  );
};

export default TodoItemComponent;
