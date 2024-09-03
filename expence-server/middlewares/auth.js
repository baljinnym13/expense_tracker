const jwt = require("jsonwebtoken");
export const auth = (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(401).json({ message: " newterne vv" });
  }
  const token = req.headers.authorization.split(" ")[1];
  const user = jwt.verify(token, "JWT_TOKEN_PASS@123");
  req.user = user;
  next();
};
module.exports = { auth };
