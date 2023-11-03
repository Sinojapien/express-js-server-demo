const WebSocket = require("ws");
const crypto = require("crypto");

const onOpen = require("./handlers/OpenHandler");
const onMessage = require("./handlers/MessageHandler");
const onClose = require("./handlers/CloseHandler");

const app = require("express")();
const server = require("http").createServer(app);
const { WEBSOCKET_PORT } = require("../config");

module.exports = () => {
  const wsServer = new WebSocket.Server({
    server,
    // port: WEBSOCKET_PORT,
  });

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

  server.listen(WEBSOCKET_PORT, () => {
    console.log(`WebSocket: Listen on the port ${WEBSOCKET_PORT}...`);
  });
};
