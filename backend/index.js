const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost/cleaning-service", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/api/reservations", (req, res) => {});

app.post("/api/reservations", (req, res) => {});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
