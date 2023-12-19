require("dotenv").config({ path: "./.env" });

const express = require("express");
const { PORT } = require("./config");

const app = express();
// Plugins
app.use(require("helmet")());
// Middleware, highest priority
app.use(express.json());
// Public
app.use("/public", express.static(require("path").resolve("./public")));
// Page
app.use("/", require("./routes"));
// REST APIs
app.use("/api/v1", require("./api/v1/routes"));

app.listen(PORT, () => {
  console.log(`Listen on the port ${PORT}...`);
});
