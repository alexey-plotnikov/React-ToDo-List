import React from "react";

import { connect } from "react-redux";
import { toggleTodo, deleteTodo } from "actions/actions";

import TodoListComponent from "components/TodoList/TodoList";

const mapStateToProps = (state) => {
  return { todos: state.todos };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: (todo) => dispatch(toggleTodo(todo.id)),
    deleteTodo: (todo) => dispatch(deleteTodo(todo.id)),
  };
};

class TodoListContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  handleTodoToggling = (id) => {
    const { toggleTodo } = this.props;
    toggleTodo({ id });
  };

  handleTodoDeleting = (id) => {
    const { deleteTodo } = this.props;
    deleteTodo({ id });
  };

  render() {
    const { todos } = this.props;

    return (
      <TodoListComponent
        todos={todos}
        handleTodoToggling={this.handleTodoToggling}
        handleTodoDeleting={this.handleTodoDeleting}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
