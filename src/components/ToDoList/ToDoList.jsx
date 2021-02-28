import React from "react";

import ToDoItemComponent from "components/ToDoItem/ToDoItem";
import "./ToDoList.scss";

const ToDoListComponent = (props) => {
  return (
    <div className="to-do-list-component">
      <ToDoItemComponent />
      <ToDoItemComponent />
    </div>
  );
};

export default ToDoListComponent;
