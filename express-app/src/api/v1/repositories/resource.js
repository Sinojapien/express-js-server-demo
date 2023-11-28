const client = require("../../../databases/postgres");

const table = "resources";

const createData = async (data) => {
  const result = await client.query(
    `INSERT INTO ${table} (${Object.keys(data).join(
      ", "
    )}) VALUES (${Object.keys(data)
      .map((key, index) => `$${index + 1}`)
      .join(", ")}) RETURNING (id)`,
    Object.keys(data).map((key) => data[key])
  );
  return result.rows[0];
};

const getData = async (id) => {
  const result = await client.query(`SELECT * FROM ${table} WHERE id = $1`, [
    id,
  ]);
  return result.rows[0];
};

const updateData = async (id, data) => {
  const result = await client.query(
    `UPDATE ${table} SET ${Object.keys(data)
      .map((key, index) => `${key} = $${index + 2}`)
      .join(", ")} WHERE id = $1 RETURNING (id)`,
    [id, ...Object.keys(data).map((key) => data[key])]
  );
  return result.rows[0];
};

const deleteData = async (id) => {
  await client.query(`DELETE FROM ${table} WHERE id = $1`, [id]);
};

module.exports = {
  createData,
  getData,
  updateData,
  deleteData,
};
