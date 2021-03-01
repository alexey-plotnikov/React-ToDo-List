import React from "react";

import "./Header.scss";

const HeaderComponent = (props) => {
  const { todoMessage, handleChange, handleSubmit } = props;

  return (
    <div className="header-component">
      <input
        className="todo-input"
        type="text"
        name="todoMessage"
        value={todoMessage}
        onChange={handleChange}
      />
      <div className="add-todo-button" onClick={handleSubmit}>
        ADD TODO
      </div>
    </div>
  );
};

export default HeaderComponent;
