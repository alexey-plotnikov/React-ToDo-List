import React from "react";

import HeaderContainer from "containers/HeaderContainer/HeaderContainer";
import TodoListContainer from "containers/TodoListContainer/TodoListContainer";
import FooterContainer from "containers/FooterContainer/FooterContainer";
import "./Content.scss";

const ContentComponent = (props) => {
  return (
    <div className="content-component">
      <HeaderContainer />
      <TodoListContainer />
      <FooterContainer />
    </div>
  );
};

export default ContentComponent;
