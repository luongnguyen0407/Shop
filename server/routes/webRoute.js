const express = require("express");
const apiController = require("../controller/apiController");
const apiAuth = require("../controller/auth");
const verifyMiddle = require("../middleware/auth");
const route = express.Router();

const initApiRoute = (app) => {
  route.get("/getProduct", apiController.getProduct);
  route.post(
    "/addproduct",
    verifyMiddle.verifyToken,
    verifyMiddle.verifyTokenAdmin,
    apiController.addNewProduct
  );
  route.post(
    "/addcategory",
    verifyMiddle.verifyToken,
    verifyMiddle.verifyTokenAdmin,
    apiController.addNewCategory
  );
  return app.use("/api/v1", route);
};
const authRoute = (app) => {
  route.post("/register", apiAuth.register);
  route.post("/login", apiAuth.login);
  route.post("/logout", verifyMiddle.verifyToken, apiAuth.logOut);
  route.post("/token", apiAuth.createNewToken);
  return app.use("/api/auth", route);
};

module.exports = { initApiRoute, authRoute };
