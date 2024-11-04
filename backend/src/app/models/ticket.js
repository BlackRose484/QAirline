import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
  id_user: { type: String, required: true },
  id_flight: { type: String, required: true },
  idx_seat: { type: Number, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model("Ticket", ticketSchema);
