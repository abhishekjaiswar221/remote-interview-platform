import { chatClient } from "../config/stream.js";
import { logger } from "../lib/utils.js";

export async function getStreamToken(req, res) {
  try {
    // Use clerkId for Stream (not mongodb _id)=> it should match the id we have in the stream dashboard
    const token = chatClient.createToken(req.user.clerkId);

    res.status(200).json({
      token,
      userId: req.user.clerkId,
      userName: req.user.name,
      userImage: req.user.image,
    });
  } catch (error) {
    logger.error("Error in getStreamToken controller:", { error: error.stack });
    res.status(500).json({ message: "Internal Server Error" });
  }
}
