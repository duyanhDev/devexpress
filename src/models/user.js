const mongoose = require("mongoose");
const { Schema } = mongoose;

// create data
const userSchema = new Schema({
  email: String,
  name: String,
  city: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
