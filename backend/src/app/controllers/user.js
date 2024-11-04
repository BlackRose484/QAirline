const User = require("../models/user");

class UserController {
  async updateInformation(req, res) {
    try {
      const new_user_information = req.body;
      const user = await User.findByIdAndUpdate(
        req.params.id,
        new_user_information,
        { new: true }
      );
      res.send(user);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
}

module.exports = new UserController();
