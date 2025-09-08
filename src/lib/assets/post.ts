import { PostMetadataSchema } from "$lib/schema/post-metadata.schema";
import { getSlug } from "$lib/utils/file";
import dayjs from "dayjs";

interface MarkdownData {
  metadata: unknown;
  default: unknown;
}

export async function fetchPosts() {
  const posts = await Promise.all(
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

  return posts.sort((a, b) => dayjs(b.date).diff(dayjs(a.date)));
}
