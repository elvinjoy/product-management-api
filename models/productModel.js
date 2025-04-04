const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a product name"],
    trim: true
  },
  description: {
    type: String,
    required: [true, "Please add a description"]
  },
  price: {
    type: Number,
    required: [true, "Please add a price"]
  },
  category: {
    type: String,
    required: [true, "Please specify category"]
  },
  image: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Product", productSchema);
