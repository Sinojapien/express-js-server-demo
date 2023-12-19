const WebSocket = require("ws");
const crypto = require("crypto");

const onOpen = require("./handlers/open-handler");
const onMessage = require("./handlers/message-handler");
const onClose = require("./handlers/close-handler");

const app = require("express")();
// Express Plugins
app.use(require("helmet")());

const server = require("http").createServer(app);
const { PORT } = require("./config");

const wsServer = new WebSocket.Server({ server });

wsServer.on("connection", (socket) => {
  const sessionId = crypto.randomUUID();

  onOpen({
    wsServer,
    socket,
    sessionId,
  });

  // Listen to messages
  socket.on("message", (message) => {
    onMessage({
      wsServer,
      socket,
      sessionId,
      message,
    });
  });

  // Connection closed
  socket.on("close", () => {
    onClose({
      wsServer,
      socket,
      sessionId,
    });
  });

  socket.on("error", console.error);
});

server.listen(PORT, () => {
  console.log(`WebSocket: Listen on the port ${PORT}...`);
});
