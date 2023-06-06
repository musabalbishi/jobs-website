import React from "react";
import { ColorModeScript } from "@chakra-ui/color-mode";

import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./components/Theme";

import "./main.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />

      <App />
    </ChakraProvider>
  </React.StrictMode>
);
