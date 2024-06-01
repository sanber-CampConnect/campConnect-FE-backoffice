import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "antd";
import "bootstrap-icons/font/bootstrap-icons.css";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import store, { Persistor } from "./redux/store";
import RouteComponent from "./routes/RouteComponent";
import PageLoading from "./components/organism/PageLoading";
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={Persistor}>
      <Suspense fallback={<PageLoading />}>
        <RouteComponent />
      </Suspense>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
