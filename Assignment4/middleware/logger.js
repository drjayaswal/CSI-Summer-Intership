function logger(req, res, next) {
  const time = new Date().toISOString();
  console.log(`[${time}] ${req.method} ${req.url}`);
  next(); // Proceed to next middleware or route handler
}

module.exports = logger;
