import React from "react";

import { connect } from "react-redux";
import { toggleTodo } from "actions/actions";

import TodoListComponent from "components/TodoList/TodoList";

const mapStateToProps = (state) => {
  return { todos: state.todos };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: (todo) => dispatch(toggleTodo(todo.id)),
  };
};

class TodoListContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = (id) => {
    const { toggleTodo } = this.props;
    toggleTodo({ id });
  };

  render() {
    const { todos } = this.props;

    return <TodoListComponent todos={todos} handleClick={this.handleClick} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
