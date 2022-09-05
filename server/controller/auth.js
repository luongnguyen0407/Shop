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
    await User.updateOne({ _id: newUser._id }, { $set: { refreshToken } });
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
    await User.updateOne({ _id: user._id }, { $set: { refreshToken } });
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
  } catch (error) {}
};

const refreshToken = async (req, res) => {};

module.exports = {
  register,
  login,
  refreshToken,
};
