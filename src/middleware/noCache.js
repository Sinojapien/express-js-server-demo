module.exports = (req, res, next) => {
  res.set("Cache-Control", `no-store`);
  // Call next middleware
  next();
};
