const mongoose = require("mongoose");

const BrandSchema = new mongoose.Schema({
  brandName: { type: String, required: true, unique: true },
  desc: { type: String, required: true },
});

module.exports = mongoose.model("Brand", BrandSchema);
