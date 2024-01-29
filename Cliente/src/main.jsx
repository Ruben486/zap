import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App.jsx"
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import LoaderBarras from "../src/ui/loaderbarras/LoaderBarras.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<LoaderBarras/>}>
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode>
);
