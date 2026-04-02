import winston from "winston";
import { ENV } from "./env.js";

const devFormat =
  ENV.ENVIRONMENT !== "prod"
    ? winston.format.combine(winston.format.colorize(), winston.format.simple())
    : winston.format.json();

export const logger = winston.createLogger({
  level: ENV.ENVIRONMENT !== "prod" ? "debug" : "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    devFormat,
  ),
  transports: [new winston.transports.Console()],
});
