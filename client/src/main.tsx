import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import { store } from "./redux/store";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
      <Toaster position="top-center" />
    </BrowserRouter>
  </ThemeProvider>,
);
