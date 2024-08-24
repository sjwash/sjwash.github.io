import "@mantine/core/styles.css";
import "./main.css";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { Home } from "./pages/home";
import { theme } from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <Home />
    </MantineProvider>
  </StrictMode>
);
