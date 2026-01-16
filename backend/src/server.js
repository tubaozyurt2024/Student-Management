require("dotenv").config();

const app = require("./app");
const { getPool } = require("./config/db");

const PORT = process.env.PORT || 5000;

console.log("⏳ Trying DB connection...");

getPool()
  .then(() => {
    console.log("✅ DB OK, starting server...");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Server failed to start:", err);
    process.exit(1);
  });
