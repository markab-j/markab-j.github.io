---
title: 'mdsvex rehype-pretty-code 인코딩 문제 해결'
description: 'mdsvex에서는 rehype-pretty-code 플러그인이 동작하지 않아 다른 라이브러리를 사용하여 해결했다.'
date: '2025-09-10'
categories:
  - Svelte
  - Troubleshooting
tags:
  - SvelteKit
  - mdsvex
  - rehype
---

## 문제 상황

rehype-pretty-code를 이용하여 코드블럭에 번호와 하이라이팅을 적용하려고 했지만 rehype 처리과정에서 코드 블럭 내부의 `{`, `}`가 ```&&#8203;#123;``` ```&&#8203;#125;```로 인코딩되는 상황이었다.

rehype-pretty-code에서 관련된 이슈를 찾아보았다.

[MDsveX compatible?](https://github.com/rehype-pretty/rehype-pretty-code/issues/73)

mdsvex에서 코드 블럭을 파싱할때 인코딩을 두번하는 건지, 직접 하이라이터에서 `escapeSvelte`라는 함수를 중간에 호출하여 해결했다는 이슈였다.

이슈의 마지막에는 대체 플러그인을 추천하고 있었다.

## 대체 플러그인

해당 라이브러리의 설명은 아래와 같이 적혀있다.

> Use Shiki to highlight code blocks in MDSvex files.

References에서 rehype-pretty-code를 언급하는 것을 보아 mdsvex에서 사용하기 위한 완전한 대체 플러그인임을 알 수 있었다.

조금 아쉬운 점은 복사 버튼과 같은 추가 기능은 붙어있지 않고 단순히 코드 블럭의 디자인을 위한 데이터 슬롯 삽입과 번호, 하이라이팅 기능만 제공된다.

## 적용 과정

### 라이브러리 설치

```bash
npm install @bitmachina/highlighter@1.0.0-alpha.6
```
or using bun
```bash
bun add @bitmachina/highlighter@1.0.0-alpha.6
```

### svelte 설정
```typescript title="svelte.config.js" shouLineNumbers {9..11}
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: [".md"],
			rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypeToc],
			highlight: {
				highlighter: await createHighlighter({ theme: "vitesse-dark" }),
			},
		}),
	],
	kit: {
		adapter: adapter(),
	},
	extensions: [".svelte", ".md"],
};
```

rehype의 대부분의 플러그인은 css작업에 도움을 주는 id나 데이터 속성을 html 태그에 추가해주는 작업만 해주므로, 프로젝트의 css를 따로 작업해줘야 한다.

나는 현재 아래처럼 사용하고 있다.

```css title="app.css" showLineNumbers
pre[data-code-title]:before {
    @apply dark:border-b-muted block min-h-6 border-b border-b-gray-700 pb-1 text-xs;
    content: attr(data-code-title);
  }

pre > code {
    @apply flex flex-col;
    font-family: "D2Coding", Consolas, "Courier New", monospace;
    tab-size: 2;
    font-variant-ligatures: common-ligatures;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

code > span {
    @apply px-4;
}

code[data-line-numbers] > span[data-line-number]::before {
    @apply inline-block w-4 mx-4 text-right text-gray-500;
    content: attr(data-line-number);
}

code > span[data-highlighted] {
    background: #3b4252;
    width: 100%;
}
```

현재 블로그에서 Tailwind를 사용하고 있기 때문에 @apply를 사용하여 적용해주었다.

## 마치며

새롭게 찾은 플러그인의 마지막 업데이트는 2년전이라 적용하기 좀 껄끄러웠다.

하지만 생각해보면 shiki와 같은 종속 업데이트 또는 엣지 케이스가 나와 업데이트를 해야만하는 상황이 아니라면 굳이 업데이트할 필요가 없는 라이브러리라고 생각했다.

실제로 적용했을 때도 큰 문제는 없었으니 계속 사용할 예정이다.

코드 블럭 복사 버튼이 없는 것은 좀 많이 아쉽긴하다.