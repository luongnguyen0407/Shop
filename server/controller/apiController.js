const { cloudinary } = require("../ultis/cloudinary");
const Product = require("../models/Product");
const Category = require("../models/Category");

//public
const getProduct = async (req, res) => {
  let { limit = 9, page = 1, categories = null, search } = req.query;
  try {
    if (search && search.length > 0) {
      const query = search.replace(/['"]+/g, "");
      let replace = `^${query}`;
      let re = new RegExp(replace, "i");
      const productList = await Product.find({ title: { $in: re } });
      return res.status(200).jsonp({
        success: true,
        message: `Good job`,
        productList,
      });
    }
    const productList = await Product.find(categories && { categories })
      .skip((+page - 1) * +limit)
      .limit(limit);
    const totalProduct = await Product.count(categories && { categories });
    const totalPage = Math.ceil(totalProduct / +limit);
    return res.status(200).jsonp({
      success: true,
      message: "Good job",
      productList,
      totalPage,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).jsonp({
      success: false,
      message: "Missing data",
    });
  }
};
//routes public
const getCategory = async (req, res) => {
  const { limit = null } = req.query;
  try {
    const categoryList = await Category.find().limit(+limit);
    return res.status(200).jsonp({
      success: true,
      message: "Good job",
      categoryList,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).jsonp({
      success: false,
      message: "Error",
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

//need user
const addCart = async (req, res) => {
  const data = req.body;
  console.log(data);
};

module.exports = {
  getProduct,
  addNewProduct,
  addNewCategory,
  getCategory,
  addCart,
};
