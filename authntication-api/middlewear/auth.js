const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.header("token");
  if (!token) return res.status(401).send("No token provided");

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).send("Invalid Token");
  }
}

module.exports = auth;
