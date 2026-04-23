import winston from "winston";
import { ENV } from "./env.js";

const devFormat =
  ENV.ENVIRONMENT !== "prod"
    ? winston.format.combine(winston.format.colorize(), winston.format.simple())
    : winston.format.json();

// Custom format for structured logging
const logFormat = winston.format.printf(
  ({ timestamp, level, message, stack, ...meta }) => {
    // Include stack trace if error is provided
    const stackTrace = stack ? `\n${stack}` : "";
    const metaTrace = Object.keys(meta).length ? `${JSON.stringify(meta)}` : "";
    return `${timestamp} [${level}]: ${message}${stackTrace}${metaTrace}`;
  },
);

export const logger = winston.createLogger({
  level: ENV.ENVIRONMENT !== "prod" ? "debug" : "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }), // Ensures stack trace for errors
    devFormat, // Dev-specific or Prod-specific format
    logFormat, // Add custom log format
  ),
  transports: [
    new winston.transports.Console(), // Output logs to the console
    // Output logs to a file
    // new winston.transports.File({ filename: "logs/combined.log" }), // For general logs
    // new winston.transports.File({ filename: "logs/error.log", level: "error" }), // For error-specific logs
  ],
});
