const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
    req.userId = decoded.id
    next()
  } catch {
    res.send({ success: false, message: "Invalid token" })
  }
}