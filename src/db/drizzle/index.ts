import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

import * as schema from "./schemas";

// O vídeo usa better-sqlite3 (new Database(caminho)). Aqui o driver é o
// @libsql/client, então o caminho do arquivo vai na url, com prefixo "file:".
const sqliteDatabase = createClient({
  url: process.env.DATABASE_URL ?? "file:./db.sqlite3",
});

export const drizzleDb = drizzle(sqliteDatabase, {
  schema:{
    posts:schema.postsTable
  },
  logger: false,
});
