import { serve } from "inngest/express";
import { app } from "./app.js";
import { connectMongoDB } from "./config/db.js";
import { inngest, functions } from "./config/inngest.js";
import { ENV } from "./lib/env.js";

const startServer = async () => {
  try {
    await connectMongoDB();
    app.listen(ENV.PORT, () =>
      console.log("Server is running on port:", ENV.PORT),
    );
  } catch (error) {
    console.error("💥 Error starting the server:", error);
  }
};

startServer();

app.get("/api", (_, res) => {
  res.status(200).json({ msg: "Success from Backend API" });
});

app.get("/api/inngest", serve({ client: inngest, functions }));
