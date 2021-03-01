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
      todoMessage: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    const { todoMessage } = this.state;
    const { addTodo } = this.props;
    addTodo({ todoMessage });
    this.setState({ todoMessage: "" });
  };

  render() {
    const { todoMessage } = this.state;

    return (
      <HeaderComponent
        todoMessage={todoMessage}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default connect(null, mapDispatchToProps)(HeaderContainer);
