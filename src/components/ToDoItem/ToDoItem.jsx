import React from "react";

import "./TodoItem.scss";

const TodoItemComponent = (props) => {
  const { message } = props;

  return (
    <div className="to-do-item-component">
      <div className="to-do-item-message">{message}</div>
      <div className="to-do-button">redact</div>
    </div>
  );
};

export default TodoItemComponent;
