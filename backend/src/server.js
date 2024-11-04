const express = require("express");
const route = require("./routes");
const cors = require("cors");
const cookies = require("cookie-parser");
require("dotenv").config("backend/.env");
const connectDB = require("./config/db");
const app = express();

// Connect to Database
connectDB();

//Enable Cookie - JWT
app.use(cookies());

// Enable JSON and HTML Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routing app
route(app);

// Hosting website
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
