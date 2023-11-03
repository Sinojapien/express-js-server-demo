const WebSocket = require("ws");

module.exports = ({ wsServer, socket, sessionId, message }) => {
  const parsedMessage = JSON.parse(message);
  console.log(`Message from client ${sessionId}: ${message}`);

  if (parsedMessage?.type === "message" && parsedMessage?.data) {
    wsServer.clients.forEach((client) => {
      if (client !== socket && client.readyState === WebSocket.OPEN) {
        client.send(
          JSON.stringify({
            type: "message",
            data: `Message from client ${sessionId} ${parsedMessage.data}`,
          })
        );
      }
    });
  }

  // Actions for other types...
};
