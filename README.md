# markab-j

[markab-j.com](https://markab-j.com)의 개인 홈페이지입니다.

## 설치와 실행

Node.js `22.23.4` 이상과 Bun이 필요합니다.

```sh
bun install --frozen-lockfile
bun run dev --background
```

개발 서버: `http://localhost:4321`

| 명령 | 설명 |
| --- | --- |
| `bun install --frozen-lockfile` | 의존성 설치 |
| `bun run dev --background` | 백그라운드 개발 서버 시작 |
| `bun run astro dev status` | 서버 상태 확인 |
| `bun run astro dev logs` | 서버 로그 확인 |
| `bun run astro dev stop` | 서버 종료 |
| `bun run build` | 정적 사이트를 `dist/`에 빌드 |
| `bun run preview` | 빌드 결과 미리보기 |

## Work 추가하기

`src/content/work/`에 프로젝트마다 Markdown 파일을 하나 만듭니다. 예를 들어 `my-project.md`를 추가하면 `/work/my-project/` 상세 페이지가 자동으로 생깁니다.

```md
---
title: My Project
publishDate: 2026-10-22
description: 프로젝트를 설명하는 한 줄 소개입니다.
tags: [JavaScript, Tauri]
---

프로젝트의 목적과 주요 기능을 적습니다.

## 주요 기능

- 첫 번째 기능
- 두 번째 기능

[프로젝트 방문하기](https://example.com)
```

- `title`: 프로젝트 이름
- `publishDate`: 공개일. 최신 날짜부터 목록에 표시합니다.
- `description`: 카드와 상세 페이지에 표시할 한 줄 소개
- `tags`: 사용 기술이나 키워드. 없으면 `[]`로 둡니다.
- `---` 아래 본문: 상세 페이지에 표시할 Markdown 내용

사진 없이도 추가할 수 있습니다. 이미지를 넣으려면 `public/images/`에 파일을 저장하고 위 메타데이터에 다음 두 항목을 추가하세요.

```yaml
img: /images/my-project.webp
img_alt: 프로젝트 화면 설명
```

`public` 아래 파일은 `/public` 없이 경로를 적습니다. 본문에도 `![화면 설명](/images/my-project.webp)`처럼 이미지를 넣을 수 있습니다.

홈의 **Selected Work**에는 최신 프로젝트 4개가 표시되고, **Work** 페이지에는 전체 프로젝트가 표시됩니다. 프로젝트가 하나여도 사용할 수 있습니다. 삭제할 때는 해당 프로젝트의 Markdown 파일을 삭제하면 됩니다.

현재 등록된 프로젝트는 `src/content/work/idlerama.md`입니다. 이 파일을 참고하거나 내용을 채워 넣으세요.

## 다른 콘텐츠 수정하기

| 바꿀 내용 | 파일 |
| --- | --- |
| 홈 로고·`I like…` 문구 | `src/pages/index.astro` |
| 소개 페이지 | `src/pages/about.astro` |
| 메뉴·소셜 링크 | `src/components/Nav.astro` |
| 푸터·소셜 링크 | `src/components/Footer.astro` |
| 연락처 이메일 | `src/components/ContactCTA.astro`, `src/pages/about.astro` |
| 기본 페이지 제목·설명 | `src/components/MainHead.astro` |

내용을 수정한 뒤 `bun run build`로 빌드 오류가 없는지 확인하세요.
