import { ChakraProvider } from "@chakra-ui/react";
import { createRoot } from "react-dom/client";

import App from "./App";
import AppContextProvider from "./context/AppContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <AppContextProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </AppContextProvider>
);
