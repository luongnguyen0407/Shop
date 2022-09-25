const express = require("express");
const apiController = require("../controller/apiController");
const apiAuth = require("../controller/auth");
const verifyMiddle = require("../middleware/auth");
const route = express.Router();

const initApiRoute = (app) => {
  route.get("/getproduct", apiController.getProduct);
  route.get("/getcategory", apiController.getCategory);
  route.post("/addcart", verifyMiddle.verifyToken, apiController.addCart);
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
  route.post("/connect", apiAuth.connect);
  route.post("/logout", verifyMiddle.verifyToken, apiAuth.logOut);
  route.post("/token", apiAuth.createNewToken);
  route.delete(
    "/deleleUser",
    verifyMiddle.verifyToken,
    verifyMiddle.verifyTokenAdmin,
    apiAuth.DeleteUser
  );
  return app.use("/api/auth", route);
};

module.exports = { initApiRoute, authRoute };
