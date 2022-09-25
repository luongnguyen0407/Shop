const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const OrderSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
  products: [
    {
      productId: {
        type: String,
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
  amount: { type: Number, required: true },
  address: { type: Object, required: true },
  status: { type: String, default: "pending" },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", OrderSchema);
