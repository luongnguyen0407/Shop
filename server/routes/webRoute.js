const express = require("express");
const apiController = require("../controller/apiController");
const apiAuth = require("../controller/auth");
const verifyToken = require("../middleware/auth");
const route = express.Router();

const initApiRoute = (app) => {
  route.get("/getCart", verifyToken, apiController.getUserCart);
  route.post("/auth/register", apiAuth.register);
  route.post("/auth/login", apiAuth.login);
  route.post("/token", apiAuth.refreshToken);
  return app.use("/api/v1", route);
};

module.exports = { initApiRoute };
