import React from "react";

import { VISIBILITY_FILTERS } from "common/constants";
import { FOOTER_CONSTANTS } from "common/constants";
import "./Footer.scss";

const FooterComponent = (props) => {
  const { filter, handleVisibilityFilter } = props;

  return (
    <div className="footer-component">
      <div
        className={
          filter === VISIBILITY_FILTERS.SHOW_ALL
            ? "visibility-filter-button is-active"
            : "visibility-filter-button not-active"
        }
        onClick={() => handleVisibilityFilter(VISIBILITY_FILTERS.SHOW_ALL)}
      >
        {FOOTER_CONSTANTS.ALL}
      </div>
      <div
        className={
          filter === VISIBILITY_FILTERS.SHOW_COMPLETED
            ? "visibility-filter-button is-active"
            : "visibility-filter-button not-active"
        }
        onClick={() => handleVisibilityFilter(VISIBILITY_FILTERS.SHOW_COMPLETED)}
      >
        {FOOTER_CONSTANTS.COMPLETED}
      </div>
      <div
        className={
          filter === VISIBILITY_FILTERS.SHOW_ACTIVE
            ? "visibility-filter-button is-active"
            : "visibility-filter-button not-active"
        }
        onClick={() => handleVisibilityFilter(VISIBILITY_FILTERS.SHOW_ACTIVE)}
      >
        {FOOTER_CONSTANTS.ACTIVE}
      </div>
    </div>
  );
};

export default FooterComponent;
