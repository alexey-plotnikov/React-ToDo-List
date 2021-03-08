import React from "react";

import { connect } from "react-redux";
import { setVisibilityFilter } from "actions/actions";

import FooterComponent from "components/FooterComponent/FooterComponent";

const mapDispatchToProps = (dispatch) => {
  return {
    setVisibilityFilter: (filter) => dispatch(setVisibilityFilter(filter)),
  };
};

class FooterContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  handleVisibilityFilter = (filter) => {
    const { setVisibilityFilter } = this.props;
    setVisibilityFilter(filter);
  };

  render() {
    return <FooterComponent handleVisibilityFilter={this.handleVisibilityFilter} />;
  }
}

export default connect(null, mapDispatchToProps)(FooterContainer);
