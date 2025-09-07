import type { PageLoad, PageLoadEvent } from "./$types";
import { error } from "@sveltejs/kit";
import type { PostMetaData } from "$lib/schema/post-metadata.schema";

export const load: PageLoad = async ({ params }: PageLoadEvent) => {
  try {
    const post = await import(`../../../../posts/${params.slug}.md`);

    return {
      PostContent: post.default,
      meta: { ...post.metadata, slug: params.slug } as PostMetaData,
    };
  } catch (err) {
    if (err instanceof Error)
      error(404, {
        message: "The post does not exist.",
      });
    error(500, err as Error);
  }
};
