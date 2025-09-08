import type { PostMetaData } from "$lib/schema/post-metadata.schema";

export type Tag = {
  name: string;
  count: number;
};

export type Post = PostMetaData & { slug: string };
