import cors from "cors";
import express from "express";
import path from "path";
import { ENV } from "./lib/env.js";

export const app = express();

// Middleware
app.use(express.json());
// Credentials: true meaning?? => server allows a browser to include cookies on request
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));

const __dirname = path.resolve();

// Used in production when deployed
if (ENV.ENVIRONMENT === "prod") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/{*any}", (_, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}
