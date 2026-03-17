import dotenv from "dotenv";

dotenv.config();

export const ENV = {
  PORT: process.env.PORT,
  ENVIRONMENT: process.env.ENVIRONMENT,
  MONGO_DB_URI: process.env.MONGO_DB_URI,
  DATABASE_NAME: process.env.DATABASE_NAME,
};
