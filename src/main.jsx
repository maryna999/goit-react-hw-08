import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "modern-normalize";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
