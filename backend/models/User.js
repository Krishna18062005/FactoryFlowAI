const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ["Admin", "Manager", "Operator"], default: "Operator" }
});

module.exports = mongoose.model("User", userSchema);
