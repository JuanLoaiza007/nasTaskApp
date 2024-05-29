import postgres from "serverless-postgres";

const ServerlessClient = require("serverless-postgres");

export const conn = new ServerlessClient({
  host: "localhost",
  user: "postgres",
  password: "postgres",
  database: "nastaskapp",
  port: 5432,
});
