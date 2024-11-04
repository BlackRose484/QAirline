const jwt = require("jsonwebtoken");
const User = require("../models/user");

const verifyToken = (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    return res.status(401).send("Access Denied");
  }
  try {
    jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
      if (error) {
        res.status(400).send("Invalid Token");
      }
      next();
    });
  } catch (error) {
    res.status(400).send("Invalid Token");
  }
};

module.exports = { verifyToken };
