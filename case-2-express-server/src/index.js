const createServer = require("./server");
const { dbConfig } = require("./config");
const { PORT } = require("./constants");

function startServer() {
  const app = createServer();
  return app.listen(PORT, async () => {
    await dbConfig.initialize();
    console.info(`Server is listening on port ${PORT}`);
  });
}

startServer();
