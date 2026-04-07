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
    return `[${level}] ${timestamp}: ${message}${stackTrace}${metaTrace}`;
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

export const LANGUAGE_VERSIONS = {
  javascript: { language: "javascript", version: "18.15.0" },
  java: { language: "java", version: "15.0.2" },
  python: { language: "python", version: "3.10.0" },
};
