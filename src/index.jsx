import React from "react";
import ReactDOM from "react-dom/client"; // Import from 'react-dom/client'
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { analytics } from "./firebase";
import { logEvent } from "firebase/analytics";

// Example usage
logEvent(analytics, "page_view", { page_title: "Home Page" });

// Use createRoot API for React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
