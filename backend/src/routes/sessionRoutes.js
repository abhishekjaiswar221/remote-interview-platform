import express from "express";
import {
  createSession,
  endSession,
  getActiveSessions,
  getRecentSessions,
  getSessionById,
  joinSession,
} from "../controllers/sessionController.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/", protectRoute, createSession);
router.get("/active", protectRoute, getActiveSessions);
router.get("/recent-sessions", protectRoute, getRecentSessions);

router.get("/:id", protectRoute, getSessionById);
router.post("/:id/join", protectRoute, joinSession);
router.get("/:id/end", protectRoute, endSession);

export default router;
