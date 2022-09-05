const getUserCart = async (req, res) => {
  return res.status(200).jsonp({
    message: "get done",
  });
};

module.exports = {
  getUserCart,
};
