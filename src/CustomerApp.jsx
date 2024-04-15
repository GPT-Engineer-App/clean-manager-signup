import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CustomerIndex from "./pages/CustomerIndex.jsx";
import CustomerSignUp from "./pages/CustomerSignUp.jsx";
import CustomerHome from "./pages/CustomerHome.jsx";
import MyReservations from "./pages/MyReservations.jsx";
import MovingCleaningReservation from "./pages/MovingCleaningReservation.jsx";
import SpecialCleaningReservation from "./pages/SpecialCleaningReservation.jsx";
import CommercialCleaningReservation from "./pages/CommercialCleaningReservation.jsx";
import OfficeCleaningReservation from "./pages/OfficeCleaningReservation.jsx";
import ApplianceCleaningReservation from "./pages/ApplianceCleaningReservation.jsx";
import Chat from "./pages/Chat.jsx";
import UsageHistory from "./pages/UsageHistory.jsx";
import Settings from "./pages/Settings.jsx";

function CustomerApp() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<CustomerIndex />} />
        <Route path="/signup" element={<CustomerSignUp />} />
        <Route path="/home" element={<CustomerHome />} />
        <Route path="/my-reservations" element={<MyReservations />} />
        <Route path="/moving-cleaning-reservation" element={<MovingCleaningReservation />} />
        <Route path="/special-cleaning-reservation" element={<SpecialCleaningReservation />} />
        <Route path="/commercial-cleaning-reservation" element={<CommercialCleaningReservation />} />
        <Route path="/office-cleaning-reservation" element={<OfficeCleaningReservation />} />
        <Route path="/appliance-cleaning-reservation" element={<ApplianceCleaningReservation />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/usage-history" element={<UsageHistory />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default CustomerApp;
