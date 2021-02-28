import React from "react";

import "./Header.scss";

const HeaderComponent = (props) => {
  return (
    <div className="header-component">
      <input className="todo-input" />
      <div className="add-todo-button">ADD TODO</div>
    </div>
  );
};

export default HeaderComponent;
