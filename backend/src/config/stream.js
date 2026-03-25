import { StreamClient } from "@stream-io/node-sdk";
import { StreamChat } from "stream-chat";
import { ENV } from "../lib/env.js";

const apiKey = ENV.STREAM_API_KEY;
const apiSecret = ENV.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
  console.error("STREAM API KEY or STREAM API SECRET is missing");
}

export const chatClient = StreamChat.getInstance(apiKey, apiSecret); // Will be used for chat features
export const streamClient = new StreamClient(apiKey, apiSecret); // Will be used for video calls

export const upsertStreamUser = async (userData) => {
  try {
    await chatClient.upsertUser(userData);
    console.log("Stream user upserted successfully:", userData);
  } catch (error) {
    console.error("Error upserting Stream user:", error);
  }
};

export const deleteStreamUser = async (userId) => {
  try {
    await chatClient.deleteUser(userId);
    console.log("Stream user deleted successfully:", userId);
  } catch (error) {
    console.error("Error deleting the Stream user:", error);
  }
};
