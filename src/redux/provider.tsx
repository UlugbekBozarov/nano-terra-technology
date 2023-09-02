import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import { isLogin } from "./login";
import { users } from "./users";

interface IReduxProvider {
  children?: React.ReactNode;
}

const ReduxProvider: React.FC<IReduxProvider> = ({ children }) => {
  const store = configureStore({
    reducer: {
      isLogin,
      users,
    },
  });

  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
