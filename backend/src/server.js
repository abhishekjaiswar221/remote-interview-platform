import path from "path";
import express from "express";
import { ENV } from "./lib/env.js";

const app = express();

const __dirname = path.resolve();

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Success from Backend API" });
});

// Used in production when deployed
if (ENV.ENVIRONMENT === "prod") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

app.listen(ENV.PORT, () => console.log("Server is running on port:", ENV.PORT));
