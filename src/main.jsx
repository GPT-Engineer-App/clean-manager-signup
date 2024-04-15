import React from "react";
import ReactDOM from "react-dom/client";
import CustomerApp from "./CustomerApp.jsx";
import ManagerApp from "./ManagerApp.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  },
  fonts: {
    heading: `'Outfit', sans-serif`,
    body: `'Outfit', sans-serif`,
  },
});

function App() {
  const userType = "manager";

  return <ChakraProvider theme={theme}>{userType === "customer" ? <CustomerApp /> : <ManagerApp />}</ChakraProvider>;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
