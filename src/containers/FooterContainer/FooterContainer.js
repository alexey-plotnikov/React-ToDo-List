import React from "react";

import { connect } from "react-redux";
import { addTodo } from "actions/actions";

import FooterComponent from "components/FooterComponent/FooterComponent";

const mapDispatchToProps = (dispatch) => {
  // return {
  //   addTodo: (todo) => dispatch(addTodo(todo.message)),
  // };
};

class FooterContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  handleVisibilityFilter = (filter) => {
    console.log(filter);
  }

  render() {
    return <FooterComponent handleVisibilityFilter={this.handleVisibilityFilter}/>;
  }
}

export default connect(null, mapDispatchToProps)(FooterContainer);
