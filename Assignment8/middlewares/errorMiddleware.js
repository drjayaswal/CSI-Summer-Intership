module.exports = (err, req, res, next) => {
  console.error(err.stack);

  const statusCode = err.response?.status || 500;
  const message = err.response?.data?.message || err.message || "Server Error";

  res.status(statusCode).json({ error: message });
};
