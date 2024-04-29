const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is Requires"],
    },
    quantity: {
      type: Number,
      requireed: [true, "Quantity is Required"],
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "Price is Required"],
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product",ProductSchema)

module.exports = Product