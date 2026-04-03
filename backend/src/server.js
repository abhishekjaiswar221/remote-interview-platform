import { app } from "./app.js";
import { connectMongoDB } from "./config/db.js";
import { ENV } from "./lib/env.js";
import { logger } from "./lib/utils.js";

const startServer = async () => {
  try {
    await connectMongoDB();
    app.listen(ENV.PORT, () =>
      logger.info("Server is running on port:", { port: ENV.PORT }),
    );
  } catch (error) {
    logger.error("💥 Error starting the server:", { error: error.stack });
  }
};

startServer();
