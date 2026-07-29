import { desc } from "drizzle-orm";

import { drizzleDb } from "@/db/drizzle";
import { postsTable } from "@/db/drizzle/schemas";
import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";

export class DrizzlePostRepository implements PostRepository {
  async findAllPublic(): Promise<PostModel[]> {
    const posts = await drizzleDb.query.posts.findMany({
      where: (posts, { eq }) => eq(posts.published, true),
      orderBy: desc(postsTable.createdAt),
    });

    return posts;
  }

  async findAll(): Promise<PostModel[]> {
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: desc(postsTable.createdAt),
    });

    return posts;
  }

  async findById(id: string): Promise<PostModel | undefined> {
    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id),
    });

    if (!post) throw new Error(`Post não encontrado para o id`);

    return post;
  }

  async findByslugPublic(slug: string): Promise<PostModel | undefined> {
    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { and, eq }) =>
        and(eq(posts.slug, slug), eq(posts.published, true)),
    });

    if (!post) throw new Error(`Post não encontrado para o slug`);

    return post;
  }
}
