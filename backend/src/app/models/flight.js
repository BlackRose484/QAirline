const mongoose = require("mongoose");

const FlightSchema = new mongoose.Schema({
  time_start: { type: Number, required: true },
  time_end: { type: Number, required: true },
  departure: { type: String, required: true },
  destination: { type: String, required: true },
  revenue: { type: Number },
  nums_seat_avail: { type: Number, required: true },
});

module.exports = mongoose.model("Flight", FlightSchema);
