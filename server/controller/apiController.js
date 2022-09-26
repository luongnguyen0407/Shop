const { cloudinary } = require("../ultis/cloudinary");
const Product = require("../models/Product");
const Category = require("../models/Category");

//public
const getProduct = async (req, res) => {
  let { limit = 9, page = 1, categories = null, search } = req.query;
  try {
    if (search && search.length > 0) {
      const query = search.replace(/['"]+/g, "");
      let replace = `${query}`;
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
const addNewProduct = async (req, res) => {
  const productData = req.body;
  try {
    const { category, price, title, imgUpload, slug, describe } = productData;
    if (!title || !category || !imgUpload || !price || !slug || !describe)
      return res.status(401).json({ success: false, message: "Missing data" });

    const uploadResponse = await cloudinary.uploader.upload(imgUpload, {
      upload_preset: "jqheseq7",
    });
    const { secure_url } = uploadResponse;
    const newProductData = {
      title,
      desc: describe,
      img: secure_url,
      slug,
      price,
      categories: category,
      brand: category,
    };
    const newProduct = new Product({ ...newProductData });
    newProduct.save();
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
const getDetailProduct = async (req, res) => {
  const { slug } = req.query;
  try {
    if (!slug)
      return res.status(401).json({ success: false, message: "Missing data" });
    const product = await Product.findOne({ slug });
    return res.status(200).jsonp({
      success: true,
      message: "successfully",
      product,
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
  getDetailProduct,
};
