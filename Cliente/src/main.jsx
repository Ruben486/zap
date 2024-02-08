import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import LoaderBarras from "../src/ui/loaderbarras/LoaderBarras.jsx";
import { ThemeProvider } from "./contextoTema/ContextoTema.jsx";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <Suspense fallback={<LoaderBarras />}>
          <App />
        </Suspense>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
