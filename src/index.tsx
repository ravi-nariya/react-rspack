import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./admin/Dashboard";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

const rootEl = document.getElementById("root");
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Routes>
              <Route path="/" element={<App />}></Route>
              <Route path="/Dashboard" element={<Dashboard />} />
            </Routes>
          </Router>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
}
