const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  desc: { type: String, required: true },
});

module.exports = mongoose.model("CategorySchema", CategorySchema);
