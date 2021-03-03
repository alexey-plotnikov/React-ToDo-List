import React from "react";

import { VISIBILITY_FILTERS } from "common/constants";
import "./FooterComponent.scss";

const FooterComponent = (props) => {
  const { handleVisibilityFilter } = props;

  return (
    <div className="footer-component">
      <div
        className="visibility-filter-button"
        onClick={() => handleVisibilityFilter(VISIBILITY_FILTERS.SHOW_ALL)}
      >
        ALL
      </div>
      <div
        className="visibility-filter-button"
        onClick={() => handleVisibilityFilter(VISIBILITY_FILTERS.SHOW_COMPLETED)}
      >
        COMPLETED
      </div>
      <div
        className="visibility-filter-button"
        onClick={() => handleVisibilityFilter(VISIBILITY_FILTERS.SHOW_ACTIVE)}
      >
        ACTIVE
      </div>
    </div>
  );
};

export default FooterComponent;
