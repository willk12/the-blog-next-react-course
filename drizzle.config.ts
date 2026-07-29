import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "sqlite",
  schema: "./src/db/drizzle/schemas/index.ts",
  out: "./src/db/drizzle/migrations",
  dbCredentials: {
    url: process.env.DATABASE_URL ?? "file:./db.sqlite3",
  },
});
