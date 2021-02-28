import React from "react";

import HeaderComponent from "components/Header/Header";
import ToDoListComponent from "components/ToDoList/ToDoList";
import "./Content.scss";

const ContentComponent = (props) => {
  return (
    <div className="content-component">
      <HeaderComponent />
      <ToDoListComponent />
    </div>
  );
};

export default ContentComponent;
