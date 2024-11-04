const express = require("express");
const route = express.Router();
const UserController = require("../app/controllers/user");

route.put("/update/:id", UserController.updateInformation);

module.exports = route;
