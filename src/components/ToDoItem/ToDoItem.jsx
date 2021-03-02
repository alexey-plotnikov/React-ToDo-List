import React from "react";

import "./TodoItem.scss";

const TodoItemComponent = (props) => {
  const { message, completed, onClick } = props;

  return (
    <div className="to-do-item-component">
      <div className={completed ? `is-completed` : "to-do-item-message"} onClick={onClick}>
        {message}
      </div>
    </div>
  );
};

export default TodoItemComponent;
