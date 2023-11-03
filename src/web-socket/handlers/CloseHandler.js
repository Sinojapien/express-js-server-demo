const WebSocket = require("ws");

module.exports = ({ wsServer, socket, sessionId }) => {
  console.log(`Client ${sessionId} has been disconnected`);
  wsServer.clients.forEach((client) => {
    if (client !== socket && client.readyState === WebSocket.OPEN) {
      client.send(
        JSON.stringify({
          type: "message",
          data: `Client ${sessionId} has been disconnected`,
        })
      );
    }
  });
};
