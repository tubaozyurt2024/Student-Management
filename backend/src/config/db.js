const sql = require("mssql/msnodesqlv8");

let pool;

async function getPool() {
  if (pool) return pool;

  const connectionString =
    "Driver={ODBC Driver 17 for SQL Server};" +
    `Server=${process.env.DB_SERVER};` +
    `Database=${process.env.DB_DATABASE};` +
    "Trusted_Connection=Yes;" +
    "TrustServerCertificate=Yes;";


  pool = await sql.connect({ connectionString });

  console.log("✅ SQL Server connected");
  return pool;
}

module.exports = { sql, getPool };
