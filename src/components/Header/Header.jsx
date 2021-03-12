import React from "react";

import { HEADER_CONSTANTS } from "common/constants";
import "./Header.scss";

const HeaderComponent = (props) => {
  const { message, handleChange, handleSubmit } = props;

  return (
    <div className="header-component">
      <input
        className="todo-input"
        type="text"
        name="message"
        placeholder={HEADER_CONSTANTS.NEW_TASK}
        value={message}
        onChange={handleChange}
      />
      <div className="add-todo-button" onClick={handleSubmit}>
        {HEADER_CONSTANTS.ADD_TODO}
      </div>
    </div>
  );
};

export default HeaderComponent;
