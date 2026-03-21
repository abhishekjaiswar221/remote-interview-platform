import cors from "cors";
import express from "express";
import { serve } from "inngest/express";
import path from "path";
import { inngest, functions } from "./config/inngest.js";
import { ENV } from "./lib/env.js";

export const app = express();

// Middleware
app.use(express.json());
// Credentials: true meaning?? => server allows a browser to include cookies on request
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));

app.get("/api", (_, res) => {
  res.status(200).json({ msg: "Success from Backend API" });
});

app.get("/api/inngest", serve({ client: inngest, functions }));

const __dirname = path.resolve();

// Used in production when deployed
if (ENV.ENVIRONMENT === "prod") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/{*any}", (_, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}
