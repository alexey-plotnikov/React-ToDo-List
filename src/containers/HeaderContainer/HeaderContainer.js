import React from "react";

import { connect } from "react-redux";
import { addTodo } from "actions/actions";

import HeaderComponent from "components/Header/Header";

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo.message)),
  };
};

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    const { message } = this.state;
    const { addTodo } = this.props;
    if (!message.trim()) {
      return;
    }
    addTodo({ message });
    this.setState({ message: "" });
  };

  render() {
    const { message } = this.state;

    return (
      <HeaderComponent
        message={message}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default connect(null, mapDispatchToProps)(HeaderContainer);
