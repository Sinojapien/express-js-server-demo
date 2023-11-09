require("dotenv").config({ path: ".env" });

const express = require("express");
const { PORT } = require("./config");

const app = express();
// Middleware, highest priority
app.use(express.json());
// Public
app.use("/", require("./routes"));
// REST APIs
app.use("/api", require("./routes/ResourceRoutes"));
// WebSocket
require("./web-socket")();

app.listen(PORT, () => {
  console.log(`Listen on the port ${PORT}...`);
});
