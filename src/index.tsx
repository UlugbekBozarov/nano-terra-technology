import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import ReduxProvider from "redux/provider";
import { Spinner } from "components/common";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Suspense fallback={<Spinner size="large" width="100%" height="100vh" />}>
      <ReduxProvider>
        <App />
      </ReduxProvider>
    </Suspense>
  </React.StrictMode>
);
