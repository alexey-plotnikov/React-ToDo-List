import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "store/store";
import ContentContainer from "containers/Content/Content";

import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ContentContainer />
    </React.StrictMode>
  </Provider>,

  document.getElementById("root")
);
