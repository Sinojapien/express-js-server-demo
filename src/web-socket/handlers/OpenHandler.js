const WebSocket = require("ws");

module.exports = ({ wsServer, socket, sessionId }) => {
  console.log(`Client ${sessionId} has been connected.`);
  // Send message to each client except current client
  wsServer.clients.forEach((client) => {
    if (client !== socket && client.readyState === WebSocket.OPEN) {
      client.send(
        JSON.stringify({
          type: "message",
          data: `Client ${sessionId} has been connected.`,
        })
      );
    }
  });
};
