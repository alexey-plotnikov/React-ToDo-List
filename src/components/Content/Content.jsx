import React from "react";

import HeaderContainer from "containers/HeaderContainer/HeaderContainer";
import TodoListComponent from "components/TodoList/TodoList";
import "./Content.scss";

const ContentComponent = (props) => {
  return (
    <div className="content-component">
      <HeaderContainer />
      <TodoListComponent />
    </div>
  );
};

export default ContentComponent;
