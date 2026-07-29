import { drizzleDb } from "../drizzle";
import { postsTable } from "../drizzle/schemas";
import postsJson from "./posts.json";

// Reimporta o posts.json para o SQLite. Apaga tudo antes, então rodar duas
// vezes seguidas não duplica nada: npm run db:seed
async function seed() {
  const { posts } = postsJson;

  await drizzleDb.delete(postsTable);
  await drizzleDb.insert(postsTable).values(posts);

  console.log(`${posts.length} posts inseridos.`);
}

seed();
