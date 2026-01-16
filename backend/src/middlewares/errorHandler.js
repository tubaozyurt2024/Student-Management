const ApiError = require("../utils/ApiError");

module.exports = (err, req, res, next) => {
  // ApiError ise
 const errorHandler = (err, req, res, next) => {
  console.error("❌ Error:", err);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Sunucu hatası oluştu"
  });
};

  const msg = err?.message || "Internal Server Error";

  return res.status(500).json({
    success: false,
    message: msg,
  });
};
