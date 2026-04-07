import { clerkMiddleware } from "@clerk/express";
import cors from "cors";
import express from "express";
import { serve } from "inngest/express";
import morgan from "morgan";
import path from "path";
import { functions, inngest } from "./config/inngest.js";
import { ENV } from "./lib/env.js";
import { logger } from "./lib/utils.js";
import chatRoutes from "./routes/chatRoutes.js";
import sessionRoutes from "./routes/sessionRoutes.js";
import problemRoutes from "./routes/problemRoutes.js";

export const app = express();

// Morgan request logger
const format = ENV.ENVIRONMENT === "prod" ? "combined" : "dev";

app.use(
  morgan(format, {
    stream: {
      write: (message) => logger.info(message.trim()),
    },
  }),
);

// Middleware
app.use(express.json());
const allowedOrigins = ENV.CLIENT_URL.split(",");
// Credentials: true meaning?? => server allows a browser to include cookies on request
app.use(cors({ origin: allowedOrigins, credentials: true }));
// Clerk Middleware
app.use(clerkMiddleware()); // This adds auth field to request object: req.auth()

app.get("/api", (_, res) => {
  res.status(200).json({ message: "Success from Backend API" });
});

app.use("/api/inngest", serve({ client: inngest, functions })); // Endpoint to sync Inngest with the app
app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoutes);
app.use("/api/problem", problemRoutes);

// When you pass an array of middleware to Express, it automatically flattens and executes them sequentially, one by one
// app.get("/video-calls", protectRoute, (req, res) => {
//   res.status(200).json({ message: "This is a protected route" });
// });

const __dirname = path.resolve();

// Used in production when deployed
if (ENV.ENVIRONMENT === "prod") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/{*any}", (_, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}
