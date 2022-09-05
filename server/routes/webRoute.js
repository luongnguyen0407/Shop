const express = require("express");
const apiController = require("../controller/apiController");
const apiAuth = require("../controller/auth");
const verifyMiddle = require("../middleware/auth");
const route = express.Router();

const initApiRoute = (app) => {
  route.get(
    "/getCart",
    verifyMiddle.verifyToken,
    verifyMiddle.verifyTokenAdmin,
    apiController.getUserCart
  );
  route.post(
    "/addproduct",
    verifyMiddle.verifyToken,
    verifyMiddle.verifyTokenAdmin,
    apiController.addNewProduct
  );
  return app.use("/api/v1", route);
};
const authRoute = (app) => {
  route.post("/register", apiAuth.register);
  route.post("/login", apiAuth.login);
  route.post("/token", apiAuth.createNewToken);
  return app.use("/api/auth", route);
};

module.exports = { initApiRoute, authRoute };
