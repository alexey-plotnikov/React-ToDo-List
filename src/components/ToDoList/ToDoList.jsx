import React from "react";
import { connect } from "react-redux";

import TodoItemComponent from "components/TodoItem/TodoItem";
import "./TodoList.scss";

const mapStateToProps = (state) => {
  return { todos: state.todos };
};

const TodoListComponent = (props) => {
  const { todos } = props;

  return (
    <div className="to-do-list-component">
      {todos.map((todo) => (
        <div className="to-do-item" key={todo.id}>
          <TodoItemComponent message={todo.message} />
        </div>
      ))}
    </div>
  );
};

export default connect(mapStateToProps)(TodoListComponent);
