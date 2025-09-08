---
title: "마크다운 코드 테스트 페이지입니다."
description: "마크다운 코드 렌더링 테스트 페이지입니다."
date: "2025-09-07"
categories:
  - "markdown"
tags:
  - "development"
  - "code"
  - "blog"
coverImage: "/images/test-image.png"
coverWidth: 16
coverHeight: 9
---

https://github.com/rehype-pretty/rehype-pretty-code/issues/73

```ts title="타이틀 테스트" showLineNumbers
import type { PageLoad, PageLoadEvent } from "./$types";
import { error } from "@sveltejs/kit";
import { PostMetadataSchema } from "$lib/schema/post-metadata.schema";

export const load: PageLoad = async ({ params }: PageLoadEvent) => {
  try {
    const post = await import(`../../../../posts/${params.slug}.md`);
    const postMetadata = PostMetadataSchema.parse(post.metadata);

    return {
      PostContent: post.default,
      meta: { ...postMetadata, slug: params.slug },
    };
  } catch (err) {
    if (err instanceof Error)
      error(404, {
        message: "The post does not exist.",
      });
    error(500, err as Error);
  }
};
```
