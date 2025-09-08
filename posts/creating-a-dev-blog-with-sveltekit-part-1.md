---
title: "SvelteKit으로 정적 블로그 만들기"
description: "Svelte 5을 사용하여 개발 블로그를 만드는 과정을 기록한다."
date: "2025-09-08"
categories:
  - "SvelteKit"
tags:
  - "SvelteKit"
  - "Svelte"
  - "Blog"
---

# 프롤로그

## 왜 블로그 플랫폼을 사용하지 않고?

블로그를 만들어야겠다고 마음먹었을 때, 당연히 velog나 Medium 같은 플랫폼을 가장 먼저 떠올렸다. 이미 수많은 개발자가 쓰고 있고, 글쓰기에만 집중할 수 있도록 모든 환경이 갖춰져 있으니 어찌 보면 가장 합리적인 선택지였다.

하지만 나는 플랫폼에 종속되지 않은 나만의 블로그가 가지고 싶었다.

나는 평소 e-book보다 종이책을 고집하는 편인데, e-book은 서비스가 종료되면 다시는 볼 수 없기 때문이다. 블로그에 쓰는 내 글도 똑같다고 생각했다. 
지금 당장 호스팅이 망가져도 모든 글은 내 컴퓨터 안에 그대로 남아있으니까. 이 생각은 최근 한 도서 플랫폼의 이슈를 보며 이 생각은 더욱 확고해졌다.

## Svelte Kit을 선택한 이유

물론 플랫폼을 사용하지 않는다고 해서 모든 걸 처음부터 만들어야 하는 것은 아니다. 마음에 드는 템플릿을 골라 원하는 프레임워크로 시작할 수도 있다.

사실 정적 블로그를 만드는 건 이번이 처음은 아니다. 이전에 Next.js로 한번 만들어본 경험이 있다. 그때 Next.js를 선택했던 이유는 거대한 생태계를 경험해보고 싶다는 마음이 가장 컸다. 다른 이유는 없었다. 당시에는 블로그 설계는커녕 어디서부터 시작해야 할지 감도 못 잡아서, Jekyll로 만들어진 블로그 템플릿의 구조를 뜯어보면서 거의 클론 코딩하듯 진행했었다.

그래서 이번엔 왜 스벨트 킷을 선택했냐면, 먼저 러닝커브가 거의 없을 것 같았기 때문이다.

기본 Svelte 문법은 바닐라 자바스크립트와 매우 유사하기 때문이다. 비록 Svelte 5에서 룬(Rune) 문법이 생겨 React와 비슷한 형태가 되었지만, 오히려 내게는 적응이 더 쉬웠다.

그리고 무엇보다, 그냥 여러 가지 새로운 도구들을 직접 사용해보고 싶었다.

# SvelteKit 프로젝트 초기 설정
## 개발 환경
- `bun 1.2.21`
- `Svelte ^5.0.0`
- `Svelte Kit ^2.22.0`
- `Typescript ^5.0.0`

스벨트 킷 미니멀 템플릿을 사용했다.
```bash
bunx sv create <프로젝트 이름>
```

프로젝트 세부 설정에서는 아래와 같은 옵션을 활성화 했다.
- Typescript Syntax 사용
- Tailwind, Tailwind/typography
- ESLint, Prettier

## 필수 설정
정적 블로그를 만들기 위해서는 Svelte Kit에게 정적 빌드 환경임을 알려주어야 한다.

두가지 작업이 필요하다.

1. **어댑터 변경**

정적 빌드를 위한 어댑터를 설정해야 한다. 더욱 더 자세한 내용은 [Static Site Generation - Docs Svelte](https://svelte.dev/docs/kit/adapter-static)
```bash
bun add -D @sveltejs/adapter-static
```

상단의 `import`를 수정한다.

```typescript title="svelte.config.js"
import adapter from "@sveltejs/adapter-static";
```

2. **최상단 `+layout.ts` 생성**

`routes`의 최상단에 `+layout.ts`을 생성하고 아래와 같이 작성한다.

```typescript
export const prerender = true;
```

이제 기본적인 Svelte Kit 준비는 끝났다.

## MDSvex로 마크다운 환경 구축하기

정적 블로그에서는 블로그 글을 마크다운 문법으로 작성한 파일이 게시글 하나가 된다.

블로그 게시글을 관리하기 위해 프로젝트 루트 경로에 `posts` 폴더를 생성했다.
앞으로 업로드될 게시글은 전부 이곳에 작성하면 된다.

이제 마크다운 파일을 HTML로 변환해주는 작업이 필요하다.

\#\ -> h1

이런 작업을 하기 위해서 자바스크립트에서는 [unified](https://github.com/unifiedjs/unified)를 이용할 수 있다.

하지만 이런 작업은 매우 번거롭기 때문에 Wrapper 라이브러리들을 찾았고, Svelte에서는 `mdsvex`를 찾았다.

md + sve + x로 리액트 환경에서 사용했던 mdx의 이름에서 따온듯한 모습이었다.

사용법은 아주 간단했다. preprocess에 mdsvex를 제공하기만 하면 된다.

그리고 스벨트에서 md파일도 인식할 수 있도록 extensions에 각각 .md를 제공해준다.

```typescript title="svelte.config.js" showLineNumbers {13..19}
import { mdsvex } from "mdsvex";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeToc from "@jsdevtools/rehype-toc";
import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { createHighlighter } from "@bitmachina/highlighter";

/** @type {import('@sveltejs/kit').Config} */
const config = {
		preprocess: [
			vitePreprocess(),
			mdsvex({
				extensions: [".md"],
			}),
		],
		kit: {
			adapter: adapter(),
		},
		extensions: [".svelte", ".md"],
	};
```

# 동적 라우팅으로 게시글 페이지

### 서버측 작업

이제 md 파일은 mdsvex가 알아서 파싱하고 알아서 렌더링할 수 있게 도와준다.

이제 이 라우팅 경로를 잡고, 렌더링하기만 하면 된다.

`routes/blog/[slug]/+page.ts`를 생성하고 동일한 경로에 `+page.svelte`를 만든다.

먼저, 게시글 정보를 불러와서 가공하는 작업은 `+page.ts`에서 작업한다.

```typescript title="blog/[slug]/+page.ts" showLineNumbers
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

위에서 mdsvex를 적용하여 md파일을 바로 스벨트 컴포넌트처럼 불러올 수 있다.

콘솔로 찍어본 결과 아래와 같은 인터페이스를 가지고 있었다.

```typescript showLineNumbers
interface MarkdownData {
	metadata: unknown;
	default: { render: Function };
}
```

- metadata: 마크다운 파일의 파싱된 프론트 매터
- default: 렌더링 가능한 스벨트 컴포넌트

안정성을 위해 빌드 단계에서 잘못 작성된 프론트 매터를 검사하게 위해 `zod`를 이용했다.

### 렌더링측 작업

이제 `+page.ts`로부터 받은 데이터를 이용해 렌더링하면 된다.

```typescript title="blug/[slug]/+page.svelte" showLineNumbers
<script lang="ts">
  import type { PageProps } from "./$types";

  const { data }: PageProps = $props();
    
  const { title, description, date, tags, categories, coverImage, coverWidth, coverHeight } = data.meta;
  const { PostContent } = data;
</script>

<!-- 가져온 정보를 통해 렌더링 -->
<h1>{title}</h1>
...
<PostContent />
```

이제 `/blog/{마크다운 파일 이름}`을 접속하면 마크다운 파일이 렌더링되는 것을 확인할 수 있다.

# 모든 게시글 목록 가져오기

지금은 게시글의 Slug를 알고 있어야 접근할 수 있다.
블로그답게 모든 게시글을 긁어와서 보여주는 작업을 진행하자.

`/blog/+page.ts`와 `/blog/+page.svelte`를 만든다.

### 서버측 작업

```typescript title="/blog/+page.ts" showLineNumbers
export const load: PageLoad = async () => {
	const allPosts: Post[] = await Promise.all(
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
	// 필요에 따라 정렬이나 후처리 진행...
    // 나는 추가로 카테고리와 태그를 추출하여 함께 전달했지만, 이 코드에서는 간소화했다.
	return {
		posts: allPosts,
    };
}
```

- `import.meta.glob`을 이용해 모든 게시글을 가져온다.

### 렌더링측 작업

```typescript title="blog/+page.svelte" showLineNumbers
<script lang="ts">
  import type { PageProps } from "./$types";

  const { data }: PageProps = $props();
  const { posts } = data;
</script>

<!-- 가져온 정보를 통해 렌더링 -->
{#each posts as post (post.slug)}
  <a href={resolve(`/blog/${post.slug}`)}>{post.title}</a>
{/each}
```

개별 게시글 렌더링과 별 다를 건 없다.

아주 기본적인 블로그 뼈대는 완성했다. 이제 여기에 카테고리, 태그, 페이지네이션, 디자인만 적용하면 된다.

# 마치며

확실히 한번 정적 블로그를 만든 경험이 컸다. 이번에는 다른 프레임워크로 만들어봤는데 핵심 원리는 완전히 동일했다.

> **마크다운 파일을 HTML로 변환해 화면에 렌더링한다.**

심지어 위 작업은 라이브러리가 전부 해준다. 나는 만들어진 코드를 호출하기만 하면 된다.

모든 것은 `도구`다.

프레임워크, 라이브러리, 프로그래밍 언어까지도 결국 내가 원하는 결과물을 효율적으로 만들기 위한 도구다. 
특정 도구의 전문가가 되는 것도 의미 있지만, 더 중요한 것은 해결하려는 문제의 본질을 꿰뚫고 상황에 맞는 최적의 도구를 선택하고 활용하는 능력이다.

도구를 잘 사용하는 사람이 되자.

새로운 도구가 나타나도 그건 동일한 문제를 해결하기 위한 새로운 도구일 뿐이니까.
