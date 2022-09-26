const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  img: { type: String, required: true },
  slug: { type: String, required: true },
  price: { type: Number, required: true },
  imgSlider: { type: Object, required: true },
  categories: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Brand",
  },
});

module.exports = mongoose.model("Product", ProductSchema);
