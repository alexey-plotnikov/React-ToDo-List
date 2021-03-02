import React from "react";
import { connect } from "react-redux";

import TodoItemComponent from "components/TodoItem/TodoItem";
import "./TodoList.scss";

const TodoListComponent = (props) => {
  const { todos, handleClick } = props;

  return (
    <div className="to-do-list-component">
      {todos.map((todo) => (
        <div className="to-do-item" key={todo.id}>
          <TodoItemComponent {...todo} onClick={() => handleClick(todo.id)}/>
        </div>
      ))}
    </div>
  );
};

export default connect()(TodoListComponent);
