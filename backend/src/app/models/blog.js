const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  content: { type: String, required: true },
  header: { type: String, required: true },
  footer: { type: String },
});

module.exports = mongoose.model("Blog", BlogSchema);
