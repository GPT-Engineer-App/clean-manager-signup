import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CustomerIndex from "./pages/CustomerIndex.jsx";
import CustomerSignUp from "./pages/CustomerSignUp.jsx";
import CustomerHome from "./pages/CustomerHome.jsx";
import RequestCleaning from "./pages/RequestCleaning.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<CustomerIndex />} />
        <Route path="/signup" element={<CustomerSignUp />} />
        <Route path="/home" element={<CustomerHome />} />
        <Route path="/request-cleaning" element={<RequestCleaning />} />
      </Routes>
    </Router>
  );
}

export default App;
