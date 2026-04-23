import { chatClient, streamClient } from "../config/stream.js";
import { logger } from "../lib/logger.js";
import Session from "../models/Session.js";

export async function createSession(req, res) {
  try {
    const { problem, difficulty } = req.body;
    const userId = req.user._id;
    const clerkId = req.user.clerkId;

    if (!problem || !difficulty) {
      res.status(400).json({ message: "Problem and Difficulty are required" });
    }

    // Generate a unique call id for stream video calls
    const callId = `session_${Date.now()}_${Math.random().toString(36).substring(7)}`;

    // Create session in db
    const session = await Session.create({
      problem,
      difficulty,
      host: userId,
      callId,
    });

    // Create stream video call
    await streamClient.video.call("default", callId).getOrCreate({
      data: {
        created_by_id: clerkId,
        custom: { problem, difficulty, sessionId: session._id.toString() },
      },
    });

    // Chat messaging
    const channel = chatClient.channel("messaging", callId, {
      name: `${problem} Session`,
      created_by_id: clerkId,
      members: [clerkId],
    });

    await channel.create();

    res.status(201).json({ session });
  } catch (error) {
    logger.error("Error in createSession controller", {
      stack: error.stack,
    });
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}

export async function getActiveSessions(_, res) {
  try {
    const sessions = await Session.find({ status: "active" })
      .populate("host", "name profileImage email clerkId")
      .populate("participant", "name profileImage email clerkId")
      .sort({ createdAt: -1 })
      .limit(20);

    res.status(200).json({ sessions });
  } catch (error) {
    logger.error("Error in getActiveSessions controller", {
      stack: error.stack,
    });
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}

export async function getRecentSessions(req, res) {
  try {
    const userId = req.user._id;

    // Get sessions where user is either host or participant
    const sessions = await Session.find({
      status: "completed",
      $or: [{ host: userId }, { participants: userId }],
    })
      .sort({ createdAt: -1 })
      .limit(20);

    res.status(200).json({ sessions });
  } catch (error) {
    logger.error("Error in getRecentSessions controller", {
      stack: error.stack,
    });
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}

export async function getSessionById(req, res) {
  try {
    const { id } = req.params;

    const session = await Session.findById(id)
      .populate("host", "name email profileImage clerkId")
      .populate("participant", "name email profileImage clerkId");

    if (!session) return res.status(404).json({ message: "Session not found" });

    res.status(200).json({ session });
  } catch (error) {
    logger.error("Error in getSessionById controller", {
      stack: error.stack,
    });
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}

export async function joinSession(req, res) {
  try {
    const { id } = req.params;
    const userId = req.user._id;
    const clerkId = req.user.clerkId;

    const session = await Session.findById(id);

    if (!session) return res.status(404).json({ message: "Session not found" });

    if (session.status !== "active")
      return res
        .status(400)
        .json({ message: "Cannot join a completed session" });

    if (session.host.toString() === userId.toString())
      return res.status(400).json({
        message: "Host cannot join their own session as a participant",
      });

    // Check if session is already full - has a participant
    if (session.participant)
      return res.status(409).json({ message: "Session is full" });

    session.participant = userId;
    await session.save();

    const channel = chatClient.channel("messaging", session.callId);
    await channel.addMembers([clerkId]);

    res.status(200).json({ session });
  } catch (error) {
    logger.error("Error in joinSession controller", {
      stack: error.stack,
    });
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}

export async function endSession(req, res) {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const session = await Session.findById(id);

    if (!session) return res.status(404).json({ message: "Session not found" });

    // Check if the user is the host
    if (session.host.toString() !== userId.toString())
      return res.status(403).json({ message: "Only host can end the session" });

    // Check if the session is already completed
    if (session.status === "completed")
      return res.status(400).json({ message: "Session is already completed" });

    // Delete stream video call
    const call = streamClient.video.call("default", session.callId);
    call.delete({ hard: true });

    // Delete stream chat channel
    const channel = chatClient.channel("messaging", session.callId);
    channel.delete();

    session.status = "completed";
    await session.save();

    res.status(200).json({ session, message: "Session ended successfully" });
  } catch (error) {
    logger.error("Error in endSession controller", {
      stack: error.stack,
    });
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}
