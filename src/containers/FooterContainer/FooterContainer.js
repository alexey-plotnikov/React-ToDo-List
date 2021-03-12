import React from "react";

import { connect } from "react-redux";
import { setVisibilityFilter } from "actions/actions";

import FooterComponent from "components/Footer/Footer";

const mapStateToProps = (state) => {
  return { filter: state.visibilityFilter };
};

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
    const { filter } = this.props;

    return <FooterComponent handleVisibilityFilter={this.handleVisibilityFilter} filter={filter} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FooterContainer);
