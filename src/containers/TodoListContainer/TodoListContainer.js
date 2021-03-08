import React from "react";

import { connect } from "react-redux";
import { toggleTodo, deleteTodo } from "actions/actions";
import { VISIBILITY_FILTERS } from "common/constants";
import TodoListComponent from "components/TodoList/TodoList";

const mapStateToProps = (state) => {
  return { todos: state.todos, filter: state.visibilityFilter };
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

  getVisibleTodos(todos, filter) {
    switch (filter) {
      case VISIBILITY_FILTERS.SHOW_ALL:
        return todos;
      case VISIBILITY_FILTERS.SHOW_COMPLETED:
        return todos.filter((t) => t.completed);
      case VISIBILITY_FILTERS.SHOW_ACTIVE:
        return todos.filter((t) => !t.completed);
      default:
        break;
    }
  }

  render() {
    const visibleTodos = this.getVisibleTodos(this.props.todos, this.props.filter);

    return (
      <TodoListComponent
        todos={visibleTodos}
        handleTodoToggling={this.handleTodoToggling}
        handleTodoDeleting={this.handleTodoDeleting}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
