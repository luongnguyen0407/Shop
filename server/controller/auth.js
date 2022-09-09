const User = require("../models/User");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

//Generate access token
const creacteAccessToken = (payload) => {
  return jwt.sign(
    { userId: payload._id, isAdmin: payload.isAdmin },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "1d",
    }
  );
};

//Generate refresh token

const creacteRefreshToken = (payload) => {
  return jwt.sign({ userId: payload._id }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "30d",
  });
};

//Update token
const updateToken = async (payload, refreshToken) => {
  await User.updateOne({ _id: payload._id }, { $set: { refreshToken } });
};

//route register
const register = async (req, res) => {
  const { username, password } = req.body;
  //check has pass
  if (!username || !password) {
    return res.status(400).jsonp({
      success: false,
      Message: "Missing username and/or password",
    });
  }
  try {
    //check username
    const user = await User.findOne({ username });
    if (user)
      return res
        .status(400)
        .jsonp({ success: false, message: "Username already" });
    //hashed pass
    const hashedPass = await argon2.hash(password);
    const newUser = new User({ username, password: hashedPass });
    await newUser.save();
    const refreshToken = creacteRefreshToken(newUser);
    const accessToken = creacteAccessToken(newUser);
    updateToken(newUser, refreshToken);
    res.cookie("ref", refreshToken, {
      httpOnly: true,
      secure: false,
      path: "/",
      sameSite: "strict",
    });
    return res.status(200).jsonp({
      username: newUser.username,
      id: newUser._id,
      isAdmin: newUser.isAdmin,
      accessToken,
    });
  } catch (error) {
    console.log(error);
    res.status(500).jsonp({
      success: false,
      message: "Internal server error",
    });
  }
};

//route login

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).jsonp({
      success: false,
      Message: "Missing username and/or password",
    });
  }
  try {
    //check username
    const user = await User.findOne({ username });
    if (!user)
      return res
        .status(400)
        .jsonp({ success: false, message: "Incorrect username or password" });
    const passwordValid = await argon2.verify(user.password, password);

    //check pass
    if (!passwordValid)
      return res
        .status(400)
        .jsonp({ success: false, message: "Incorrect username or password" });

    //return token
    const accessToken = creacteAccessToken(user);
    const refreshToken = creacteRefreshToken(user);
    updateToken(user, refreshToken);
    res.cookie("ref", refreshToken, {
      httpOnly: true,
      secure: false,
      path: "/",
      sameSite: "strict",
    });
    return res.status(200).jsonp({
      username: user.username,
      id: user._id,
      isAdmin: user.isAdmin,
      accessToken,
    });
  } catch (error) {
    return res.status(403).jsonp({
      success: false,
      message: "Token invalid",
    });
  }
};
// route logOut
const logOut = async (req, res) => {
  const { userId } = req.user;
  try {
    await User.updateOne({ _id: userId }, { $set: { refreshToken: null } });
    res.clearCookie("ref");
    res.status(200).json({
      success: true,
      message: "Logged out successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Logged out error!",
    });
  }
};

const createNewToken = async (req, res) => {
  const refreshToken = req.cookies?.ref;
  if (!refreshToken)
    return res.status(400).jsonp({
      success: false,
      message: "Missing refreshToken",
    });
  try {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    const user = await User.findOne({
      $or: [{ _id: decoded.userId }, { refreshToken }],
    });
    if (!user)
      return res.status(403).jsonp({
        success: false,
        message: "Token invalid",
      });
    const newAccessToken = creacteAccessToken(user);
    const newRefreshToken = creacteRefreshToken(user);
    updateToken(user, newRefreshToken);
    res.cookie("ref", newRefreshToken, {
      httpOnly: true,
      secure: false,
      path: "/",
      sameSite: "strict",
    });
    return res.status(200).jsonp({
      success: true,
      newAccessToken,
    });
  } catch (error) {
    console.log(error);
    return res.status(403).jsonp({
      success: false,
      message: "Token invalid",
    });
  }
};

const connect = async (req, res) => {
  const refreshToken = req.cookies?.ref;
  if (!refreshToken) {
    return res.status(403).jsonp({
      success: false,
      message: "User not login",
    });
  }
  try {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    const user = await User.findOne({
      $or: [{ _id: decoded.userId }, { refreshToken }],
    });
    const accessToken = creacteAccessToken(user);
    return res.status(200).jsonp({
      username: user.username,
      id: user._id,
      isAdmin: user.isAdmin,
      accessToken,
    });
  } catch (error) {
    console.log(error);
    return res.status(403).jsonp({
      success: false,
      message: "User not login",
    });
  }
};

module.exports = {
  register,
  login,
  createNewToken,
  logOut,
  connect,
};
