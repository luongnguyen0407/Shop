const { cloudinary } = require("../ultis/cloudinary");
const Product = require("../models/Product");
const Category = require("../models/Category");

//public
const getProduct = async (req, res) => {
  const getLimit = Number(req.query.limit);
  let productList;
  try {
    if (getLimit) {
      productList = await Product.find().limit(getLimit);
    } else {
      productList = await Product.find();
    }
    console.log(productList);
    return res.status(200).jsonp({
      success: true,
      message: "get done",
    });
  } catch (error) {
    return res.status(200).jsonp({
      success: false,
      message: "get done",
    });
  }
};

// need role admin
const addNewProduct = (req, res) => {
  const productData = req.body;
  console.log(productData);
  try {
    const { title, desc, img, color, price } = productData;
    if (!title || !desc || !img || !color || !price)
      return res.status(401).json({ success: false, message: "Missing data" });
    const newProduct = new Product({ ...productData });
    newProduct.save();

    // const data = req.body.img;
    // const uploadResponse = await cloudinary.uploader.upload(data, {
    //   upload_preset: "jqheseq7",
    // });
    // const { secure_url } = uploadResponse;

    return res.status(200).jsonp({
      success: true,
      message: "Create new product successfully",
      newProduct,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: "Something went wrong" });
  }
};

// need role admin

const addNewCategory = async (req, res) => {
  const categoryData = req.body;
  try {
    const { name, desc } = categoryData;
    if (!name || !desc)
      return res.status(401).json({ success: false, message: "Missing data" });
    const newCategory = new Category({ ...categoryData });
    newCategory.save();
    return res.status(200).jsonp({
      success: true,
      message: "Create new category successfully",
      newCategory,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: "Something went wrong" });
  }
};

module.exports = {
  getProduct,
  addNewProduct,
  addNewCategory,
};
