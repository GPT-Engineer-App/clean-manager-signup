import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CustomerIndex from "./pages/CustomerIndex.jsx";
import CustomerSignUp from "./pages/CustomerSignUp.jsx";
import CustomerHome from "./pages/CustomerHome.jsx";
import RequestCleaning from "./pages/RequestCleaning.jsx";
import MyReservations from "./pages/MyReservations.jsx";
import MovingCleaningReservation from "./pages/MovingCleaningReservation.jsx";
import SpecialCleaningReservation from "./pages/SpecialCleaningReservation.jsx";
import CommercialCleaningReservation from "./pages/CommercialCleaningReservation.jsx";
import OfficeCleaningReservation from "./pages/OfficeCleaningReservation.jsx";
import ApplianceCleaningReservation from "./pages/ApplianceCleaningReservation.jsx";
import UsageHistory from "./pages/UsageHistory.jsx";
import Chat from "./pages/Chat.jsx";
import Payment from "./pages/Payment.jsx";
import EditProfile from "./pages/EditProfile.jsx";
import Notices from "./pages/Notices.jsx";
import FAQ from "./pages/FAQ.jsx";
import Inquiry from "./pages/Inquiry.jsx";
import Feedback from "./pages/Feedback.jsx";
import Terms from "./pages/Terms.jsx";
import Privacy from "./pages/Privacy.jsx";
import Notifications from "./pages/Notifications.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<CustomerIndex />} />
        <Route path="/signup" element={<CustomerSignUp />} />
        <Route path="/customer-home" element={<CustomerHome />} />
        <Route path="/request-cleaning" element={<RequestCleaning />} />
        <Route path="/my-reservations" element={<MyReservations />} />
        <Route path="/moving-cleaning-reservation" element={<MovingCleaningReservation />} />
        <Route path="/special-cleaning-reservation" element={<SpecialCleaningReservation />} />
        <Route path="/commercial-cleaning-reservation" element={<CommercialCleaningReservation />} />
        <Route path="/office-cleaning-reservation" element={<OfficeCleaningReservation />} />
        <Route path="/appliance-cleaning-reservation" element={<ApplianceCleaningReservation />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/usage-history" element={<UsageHistory />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </Router>
  );
}

export default App;
