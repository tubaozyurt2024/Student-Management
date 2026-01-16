const { sql, getPool } = require("../config/db");

async function getAll() {
  const pool = await getPool();
  const result = await pool.request().query(`
    SELECT StudentId AS studentId, Name AS name, Email AS email, Phone AS phone,
           Department AS department, CreatedDate AS createdDate
    FROM dbo.Students
    ORDER BY StudentId DESC
  `);
  return result.recordset;
}

async function getById(id) {
  const pool = await getPool();
  const result = await pool
    .request()
    .input("id", sql.Int, id)
    .query(`
      SELECT StudentId AS studentId, Name AS name, Email AS email, Phone AS phone,
             Department AS department, CreatedDate AS createdDate
      FROM dbo.Students
      WHERE StudentId = @id
    `);

  return result.recordset[0] || null;
}

async function create({ name, email, phone = null, department = null }) {
  const pool = await getPool();
  const result = await pool
    .request()
    .input("name", sql.NVarChar(100), name)
    .input("email", sql.NVarChar(100), email)
    .input("phone", sql.NVarChar(20), phone)
    .input("department", sql.NVarChar(50), department)
    .query(`
      INSERT INTO dbo.Students (Name, Email, Phone, Department, CreatedDate)
      OUTPUT INSERTED.StudentId AS studentId,
             INSERTED.Name AS name,
             INSERTED.Email AS email,
             INSERTED.Phone AS phone,
             INSERTED.Department AS department,
             INSERTED.CreatedDate AS createdDate
      VALUES (@name, @email, @phone, @department, GETDATE())
    `);

  return result.recordset[0];
}

async function update(id, { name, email, phone = null, department = null }) {
  const pool = await getPool();
  const result = await pool
    .request()
    .input("id", sql.Int, id)
    .input("name", sql.NVarChar(100), name)
    .input("email", sql.NVarChar(100), email)
    .input("phone", sql.NVarChar(20), phone)
    .input("department", sql.NVarChar(50), department)
    .query(`
      UPDATE dbo.Students
      SET Name=@name, Email=@email, Phone=@phone, Department=@department
      OUTPUT INSERTED.StudentId AS studentId,
             INSERTED.Name AS name,
             INSERTED.Email AS email,
             INSERTED.Phone AS phone,
             INSERTED.Department AS department,
             INSERTED.CreatedDate AS createdDate
      WHERE StudentId=@id
    `);

  return result.recordset[0] || null;
}

async function remove(id) {
  const pool = await getPool();
  const result = await pool
    .request()
    .input("id", sql.Int, id)
    .query(`DELETE FROM dbo.Students OUTPUT DELETED.StudentId AS studentId WHERE StudentId=@id`);

  return result.recordset[0] || null;
}

module.exports = { getAll, getById, create, update, remove };
