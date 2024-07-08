import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Components/redux/store";
const index = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default index;
