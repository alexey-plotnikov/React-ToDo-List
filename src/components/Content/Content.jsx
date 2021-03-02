import React from "react";

import HeaderContainer from "containers/HeaderContainer/HeaderContainer";
import TodoListContainer from "containers/TodoListContainer/TodoListContainer";
import "./Content.scss";

const ContentComponent = (props) => {
  return (
    <div className="content-component">
      <HeaderContainer />
      <TodoListContainer />
    </div>
  );
};

export default ContentComponent;
