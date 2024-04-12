import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CustomerIndex from "./pages/CustomerIndex.jsx";
import CustomerSignUp from "./pages/CustomerSignUp.jsx";
import CustomerHome from "./pages/CustomerHome.jsx";
import RequestCleaning from "./pages/RequestCleaning.jsx";
import MyReservations from "./pages/MyReservations.jsx";
import MovingCleaningReservation from "./pages/MovingCleaningReservation.jsx";
import SpecialCleaningReservation from "./pages/SpecialCleaningReservation.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<CustomerIndex />} />
        <Route path="/signup" element={<CustomerSignUp />} />
        <Route path="/home" element={<CustomerHome />} />
        <Route path="/request-cleaning" element={<RequestCleaning />} />
        <Route path="/my-reservations" element={<MyReservations />} />
        <Route path="/moving-cleaning-reservation" element={<MovingCleaningReservation />} />
        <Route path="/special-cleaning-reservation" element={<SpecialCleaningReservation />} />
      </Routes>
    </Router>
  );
}

export default App;
