import postgres from "serverless-postgres";

const ServerlessClient = require("serverless-postgres");

export const conn = new ServerlessClient({
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  ssl: true,
});
