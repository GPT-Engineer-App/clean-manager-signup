import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import CustomerApp from "./CustomerApp.jsx";
import { ChakraProvider, extendTheme, RadioGroup, Radio } from "@chakra-ui/react";

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
  const [userType, setUserType] = useState("customer");

  return (
    <ChakraProvider theme={theme}>
      <RadioGroup value={userType} onChange={setUserType}>
        <Radio value="customer" mr={4}>
          Customer
        </Radio>
        <Radio value="cleaner">Cleaner</Radio>
      </RadioGroup>
      <CustomerApp />
    </ChakraProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
