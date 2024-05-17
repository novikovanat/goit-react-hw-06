import React from "react";
import ReactDOM from "react-dom/client";
import "modern-normalize";
import App from "./components/App/App";
import "./index.css";
import { persistor } from "./redux/store";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading="wait... for it" persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
