import React from "react";

import TodoItemComponent from "components/TodoItem/TodoItem";
import "./ToDoList.scss";

const TodoListComponent = (props) => {
  return (
    <div className="to-do-list-component">
      <TodoItemComponent />
      <TodoItemComponent />
    </div>
  );
};

export default TodoListComponent;
