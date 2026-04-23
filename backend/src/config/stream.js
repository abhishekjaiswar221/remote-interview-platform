import { StreamClient } from "@stream-io/node-sdk";
import { StreamChat } from "stream-chat";
import { ENV } from "../lib/env.js";
import { logger } from "../lib/logger.js";

const apiKey = ENV.STREAM_API_KEY;
const apiSecret = ENV.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
  logger.error("STREAM API KEY or STREAM API SECRET is missing");
}

export const chatClient = StreamChat.getInstance(apiKey, apiSecret); // Will be used for chat features
export const streamClient = new StreamClient(apiKey, apiSecret); // Will be used for video calls

export const upsertStreamUser = async (userData) => {
  try {
    await chatClient.upsertUser(userData);
    logger.info("Stream user upserted successfully:", { userData });
  } catch (error) {
    logger.error("Error upserting Stream user:", { error: error.stack });
  }
};

export const deleteStreamUser = async (userId) => {
  try {
    await chatClient.deleteUser(userId);
    logger.info("Stream user deleted successfully:", { userId });
  } catch (error) {
    logger.error("Error deleting the Stream user:", { error: error.stack });
  }
};
