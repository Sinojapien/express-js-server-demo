const { Client } = require("pg");

const port = process.env.POSTGRES_PORT || 5432;

const client = new Client({
  port,
  database: process.env.POSTGRES_DB || "",

  user: process.env.POSTGRES_USER || "",
  password: process.env.POSTGRES_PASSWORD || "",
});

// Initialization
client.on("connect", async () => {
  await client
    .query(
      "CREATE TABLE IF NOT EXISTS resources( id SERIAL PRIMARY KEY, username VARCHAR(50) NOT NULL, password VARCHAR(50) NOT NULL )"
    )
    .then(() =>
      console.log(`Connected to postgres database successfully on port ${port}`)
    )
    .catch((err) => console.error(err));
});

// Connect
client.connect();

module.exports = client;
