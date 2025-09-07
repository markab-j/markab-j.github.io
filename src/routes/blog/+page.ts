import type { PageLoad } from "./$types";
import { PostMetadataSchema } from "$lib/schema/post-metadata.schema";
import dayjs from "dayjs";
import type { Tag } from "$lib/types/blog";

interface MarkdownData {
  metadata: unknown;
  default: unknown;
}

export const load: PageLoad = async () => {
  const allPosts = await Promise.all(
    Object.entries(import.meta.glob("/posts/*.md")).map(async ([path, resolver]) => {
      const mdData = (await resolver()) as MarkdownData;

      const metadata = PostMetadataSchema.parse(mdData.metadata);

      const slug = path.split("/").pop()?.slice(0, -3);
      return {
        ...metadata,
        slug,
      };
    })
  );

  const allCategories: Set<string> = new Set();
  const allTagsCountMap: Map<string, number> = new Map();

  for (const post of allPosts) {
    post.categories.forEach((category) => {
      allCategories.add(category);
    });
    post.tags.forEach((tag) => {
      allTagsCountMap.set(tag, allTagsCountMap.get(tag) || 1);
    });
  }

  const sortedPosts = allPosts.sort((a, b) => dayjs(b.date).diff(dayjs(a.date)));
  const sortedAllCategories = Array.from(allCategories).sort();
  const sortedAllTags: Tag[] = Array.from(allTagsCountMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort();

  return {
    posts: sortedPosts,
    allCategories: sortedAllCategories,
    allTags: sortedAllTags,
  };
};
