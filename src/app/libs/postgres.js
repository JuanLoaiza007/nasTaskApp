import postgres from "postgres";

export const conn = postgres(process.env.POSTGRES_URL);
