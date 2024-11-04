import mongoose from "mongoose";
import flightSchema from "./flight";

const planeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: Number, required: true },
  nums_seat: { type: Number, required: true },
  total_revenue: { type: Number },
  flights: [flightSchema],
});

module.exports = mongoose.model("Plane", planeSchema);
