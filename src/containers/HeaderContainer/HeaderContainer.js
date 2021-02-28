import React from "react";

import HeaderComponent from "components/Header/Header";

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

export default HeaderContainer;
