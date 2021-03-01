import React from "react";

import { connect } from "react-redux";
import { addTodo } from "actions/actions";

import HeaderComponent from "components/Header/Header";

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
  };
};

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoText: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    const { todoText } = this.state;
    const { addTodo } = this.props;
    addTodo({ todoText });
    this.setState({ todoText: "" });
  };

  render() {
    const { todoText } = this.state;

    return (
      <HeaderComponent
        todoText={todoText}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default connect(null, mapDispatchToProps)(HeaderContainer);
