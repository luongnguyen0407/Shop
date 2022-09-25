const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
});

module.exports = mongoose.model("Cart", CartSchema);
