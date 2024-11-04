const moongose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new moongose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullname: { type: String },
  sex: { type: String },
  address: { type: String },
  phone: { type: String },
  passport: { type: String },
  role: { type: String, enum: ["Customer", "Admin"], required: true },
});

UserSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  user.password = await bcrypt.hash(user.password, 10);
  next();
});

UserSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });

  if (user == null) {
    throw new Error("User not found");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Password is incorrect");
  }
  return user;
};

module.exports = moongose.model("User", UserSchema);
