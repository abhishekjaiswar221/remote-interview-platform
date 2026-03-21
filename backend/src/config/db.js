import mongoose from "mongoose";
import { ENV } from "../lib/env.js";

export const connectMongoDB = async () => {
  try {
    if (!ENV.MONGO_DB_URI) {
      throw new Error(
        "MongoDB URI in not defined in the environment variables",
      );
    }
    const connect = await mongoose.connect(
      `${ENV.MONGO_DB_URI}/${ENV.DATABASE_NAME}`,
    );
    console.log(
      "✅ Connected to MongoDB Successfully:",
      connect.connection.host,
    );
  } catch (error) {
    console.log("❌ Error connecting MongoDB:", error);
    process.exit(1); // 0 means success, 1 means failure
  }
};
