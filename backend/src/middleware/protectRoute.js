import { requireAuth } from "@clerk/express";
import { logger } from "../lib/utils.js";
import User from "../models/User.js";

export const protectRoute = [
  requireAuth(),
  async (req, res, next) => {
    try {
      const clerkId = req.auth().userId;

      if (!clerkId)
        return res
          .status(401)
          .json({ message: "Unauthorized - invalid auth token" });

      // Find the user in mongo db using the clerk ID
      const user = await User.findOne({ clerkId });

      if (!user) return res.status(404).json({ message: "User not found" });

      // Attach user to req
      req.user = user;

      next();
    } catch (error) {
      logger.error("Error in protectRoute middleware", { error: error.stack });
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
];
