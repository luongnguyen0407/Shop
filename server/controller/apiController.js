const User = require("../models/User");
const { cloudinary } = require("../ultis/cloudinary");

const getUserCart = async (req, res) => {
  const userList = await User.find();
  console.log(userList);
  return res.status(200).jsonp({
    message: "get done",
  });
};

const addNewProduct = async (req, res) => {
  try {
    const data = req.body.img;
    const uploadResponse = await cloudinary.uploader.upload(data, {
      upload_preset: "jqheseq7",
    });
    const { secure_url } = uploadResponse;
    return res.status(200).jsonp({
      success: true,
      message: "Create new product successfully",
      secure_url,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: "Something went wrong" });
  }
};

module.exports = {
  getUserCart,
  addNewProduct,
};
