const express = require("express");
const webRoute = require("./routes/webRoute");
const connectDB = require("./database/connectDB");
var cors = require("cors");

require("dotenv").config();
connectDB();
const app = express();
const port = process.env.PORT || 8080;
app.use(express.static("public"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

webRoute.initApiRoute(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
