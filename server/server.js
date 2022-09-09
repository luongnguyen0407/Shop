const express = require("express");
const webRoute = require("./routes/webRoute");
const connectDB = require("./database/connectDB");
const compression = require("compression");
const cors = require("cors");
const cookies = require("cookie-parser");
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  })
);
app.use(
  compression({
    level: 6,
    threshold: 100 * 1000,
  })
);
require("dotenv").config();
connectDB();
const port = process.env.PORT || 8080;
app.use(express.static("public"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookies());

webRoute.initApiRoute(app);
webRoute.authRoute(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
