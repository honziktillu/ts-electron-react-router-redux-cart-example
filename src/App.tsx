import { createRoot } from "react-dom/client";
import AppRoutes from "./pages/AppRoutes";
import { Provider } from "react-redux";
import store from "./store";

const root = createRoot(document.getElementById("content"));
root.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);
