import { Server } from "ws";

export const start = (host: string = "localhost", port: number = 8888) => {
  const ws = new Server({ host, port });
  console.log(`Listening for browser logs on ws://${host}:${port}`);

  ws.on("connection", ws => {
    ws.on("message", (wsMessage: string) => {
      try {
        const { timestamp, logLevel, message } = JSON.parse(wsMessage);
        logger(logLevel)(logLevel, new Date(timestamp), "browser 🌐", ...message);
      } catch (e) {
        console.error(`Invalid message '${wsMessage}':`, e);
      }
    });
  });
};

const logger = (logLevel: string) => {
  switch (logLevel) {
    case "INFO":
      return console.log;
    case "WARN":
      return console.warn;
    case "ERROR":
      return console.error;
    default:
      return console.log;
  }
};
