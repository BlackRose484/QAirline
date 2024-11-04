const AuthController = require("./auth");
const UserController = require("./user");
const { verifyToken } = require("../app/middlewares/auth");

function route(app) {
  app.use("/me", verifyToken, UserController);
  app.use("/auth", AuthController);
  app.use("/", (req, res) => {
    res.send("Hello World");
  });
}

module.exports = route;
