import type { PageLoad } from "./$types";
import { PostMetadataSchema } from "$lib/schema/post-metadata.schema";
import dayjs from "dayjs";
import type { Tag } from "$lib/types/blog";
import { getSlug } from "$lib/utils/file";

interface MarkdownData {
  metadata: unknown;
  default: unknown;
}

export const load: PageLoad = async () => {
  const allPosts = await Promise.all(
    Object.entries(import.meta.glob("/posts/*.md")).map(async ([path, resolver]) => {
      const mdData = (await resolver()) as MarkdownData;

      const metadata = PostMetadataSchema.parse(mdData.metadata);

      const slug = getSlug(path);
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
      const count = allTagsCountMap.get(tag) || 0;
      allTagsCountMap.set(tag, count + 1);
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
