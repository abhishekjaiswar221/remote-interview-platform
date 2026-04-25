import mongoose from "mongoose";
import { ENV } from "../lib/env.js";
import { logger } from "../lib/logger.js";

// Enable mongo query logging
if (ENV.NODE_ENV !== "production") {
  mongoose.set("debug", (collectionName, method, query, doc) => {
    logger.info("Mongo Query:", {
      collection: collectionName,
      method,
      query,
      doc,
    });
  });
}

export const connectMongoDB = async () => {
  try {
    if (!ENV.MONGO_DB_URI) {
      throw new Error(
        "MongoDB URI in not defined in the environment variables",
      );
    }
    const connect = await mongoose.connect(ENV.MONGO_DB_URI);
    logger.info("✅ Connected to MongoDB Successfully:", {
      host: connect.connection.host,
    });
  } catch (error) {
    logger.error("❌ Error connecting MongoDB:", { error: error.stack });
    process.exit(1); // 0 means success, 1 means failure
  }
};
