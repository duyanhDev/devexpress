const mongoose = require("mongoose");

// create row
const kittySchema = new mongoose.Schema({
  name: String,
});

// create table or model , name đối tượng
const kitten = mongoose.model("Kitten", kittySchema);

// create data

module.exports = kitten;
