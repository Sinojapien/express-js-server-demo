const cachePeriod = 604800;

module.exports = (req, res, next) => {
  res.set("Cache-Control", `public, max-age=${cachePeriod}`);
  // Call next middleware
  next();
};
