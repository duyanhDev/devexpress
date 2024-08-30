const mongoose = require("mongoose");
const { Schema } = mongoose;

// create data
const customerSchema = new Schema(
  {
    name: { type: String, require: true },
    adress: String,
    phone: String,
    email: String,
    image: String,
    description: String,
  },
  { timestamps: true }
);

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
