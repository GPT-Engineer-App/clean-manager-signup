const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost/cleaning-service", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const customerRoutes = require("./routes/customer");
const cleanerRoutes = require("./routes/cleaner");
const reservationRoutes = require("./routes/reservation");
const paymentRoutes = require("./routes/payment");

app.use("/api/customers", customerRoutes);
app.use("/api/cleaners", cleanerRoutes);
app.use("/api/reservations", reservationRoutes);
app.use("/api/payments", paymentRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Server error" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
