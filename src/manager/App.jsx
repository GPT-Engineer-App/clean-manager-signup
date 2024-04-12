import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import SignUp from "./pages/SignUp.jsx";
import Home from "./pages/Home.jsx";
import MySchedule from "./pages/MySchedule.jsx";
import ReservationManagement from "./pages/ReservationManagement.jsx";
import SubmitQuote from "./pages/SubmitQuote.jsx";
import Payment from "./pages/Payment.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/my-schedule" element={<MySchedule />} />
        <Route path="/reservation-management" element={<ReservationManagement />} />
        <Route path="/submit-quote" element={<SubmitQuote />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
