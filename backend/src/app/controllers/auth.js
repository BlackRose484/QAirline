const User = require("../models/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const MAX_AGE = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: MAX_AGE,
  });
};

class AuthController {
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.login(email, password);
      // Create JWT Token
      const token = createToken(user._id);
      res.cookie("jwt", token, {
        httpOnly: true,
        maxAge: MAX_AGE * 1000,
      });
      res.send(user);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  async register(req, res) {
    try {
      const new_user = await User.create(req.body);
      const token = createToken(new_user._id);
      res.cookie("jwt", token, {
        httpOnly: true,
        maxAge: MAX_AGE * 1000,
      });
      res.send(new_user);
    } catch (error) {
      res.status(400).send(error);
    }
  }
}

module.exports = new AuthController();