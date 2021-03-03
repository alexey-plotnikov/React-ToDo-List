import React from "react";
import { connect } from "react-redux";

import TodoItemComponent from "components/TodoItem/TodoItem";
import "./TodoList.scss";

const TodoListComponent = (props) => {
  const { todos, handleTodoToggling, handleTodoDeleting } = props;

  return (
    <div className="to-do-list-component">
      {todos.map((todo) => (
        <div className="to-do-item" key={todo.id}>
          <TodoItemComponent
            {...todo}
            handleTodoToggling={() => handleTodoToggling(todo.id)}
            handleTodoDeleting={() => handleTodoDeleting(todo.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default connect()(TodoListComponent);
