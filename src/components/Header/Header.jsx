import React from "react";

import "./Header.scss";

const HeaderComponent = (props) => {
  const { message, handleChange, handleSubmit } = props;

  return (
    <div className="header-component">
      <input
        className="todo-input"
        type="text"
        name="message"
        value={message}
        onChange={handleChange}
      />
      <div className="add-todo-button" onClick={handleSubmit}>
        ADD TODO
      </div>
    </div>
  );
};

export default HeaderComponent;
