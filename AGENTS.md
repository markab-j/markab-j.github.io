## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Repository working context

README.md는 사람이 설치·실행하고 콘텐츠를 채우는 안내로 유지합니다. 에이전트용 구현 지침, 디자인 정책, 기술 구성과 배포 맥락은 이 파일에 기록합니다. 문서에 현재 상태를 기록할 때는 소스와 설정을 확인하고, 과거의 준비 단계 설명을 그대로 남기지 마세요.

- 사용자가 명시적으로 요청했을 때만 커밋합니다. 커밋 요청은 푸시 허락을 포함하지 않습니다.
- 원격은 `markab-j/markab-j.github.io`, 기본 작업 브랜치는 `main`입니다. 작업 시작 시 실제 상태를 확인합니다.
- 이전 블로그를 교체하기 위한 강제 푸시는 한 번만 허용되어 완료했습니다. 이를 이후 강제 푸시 허락으로 재사용하지 않습니다.
- 사이트는 Astro 정적 출력과 React islands를 사용합니다. 불필요한 의존성과 구조 변경을 피합니다.

## 사이트 정보

- 대표 주소: https://markab-j.com
- GitHub Pages 주소: https://markab-j.github.io (커스텀 도메인으로 리디렉션)
- 이메일: contact@markab-j.com
- 소셜은 X(https://x.com/markab_j)와 GitHub(https://github.com/markab-j)만 표시합니다.
- 제공된 SVG 로고를 사용하고 원래 색상을 보존합니다. `public/favicon.ico`도 같은 로고의 다중 해상도 아이콘입니다.


## 프로젝트 구조

```text
.github/workflows/deploy.yml  GitHub Pages 빌드·배포
public/favicon.svg           제공된 markab-j SVG 아이콘
public/favicon.ico           같은 로고의 다중 해상도 ICO 아이콘
public/CNAME                 커스텀 도메인
src/components/              내비게이션, 연락처, 푸터 등
src/content/work/            프로젝트 Markdown 콘텐츠
src/layouts/BaseLayout.astro 공통 레이아웃과 배경
src/pages/                   홈, 소개, 프로젝트, 404 페이지
src/styles/global.css        디자인 토큰과 공통 스타일
astro.config.mjs             대표 사이트 주소
```

## 디자인 토큰

색상은 `src/styles/global.css`에서 관리합니다. 고정 브랜드 팔레트와 테마에 따라 바뀌는 의미별 토큰을 나눠 사용합니다.

[Color Hunt 팔레트](https://colorhunt.co/palette/a8e6cfdcedc1ffd3b6ffaaa5)의 민트 `#A8E6CF`는 사용하지 않고 기존 `#9CDBD9`를 유지합니다.

| 팔레트 토큰 | 값 | 역할 |
| --- | --- | --- |
| `--color-mint` | `#9CDBD9` (`--brand-200`) | 브랜드, 선택 메뉴, 파티클 |
| `--color-lime` | `#DCEDC1` | 메뉴 물방울, 파티클 |
| `--color-peach` | `#FFD3B6` | 버튼 시작색, 따뜻한 상단 배경 |
| `--color-coral` | `#FFAAA5` | 버튼 끝색, 연락처 영역, 메뉴 전환 |

기존 `--brand-50`부터 `--brand-900`까지의 민트 명도 팔레트도 유지합니다. `--surface-mint/lime/peach/coral`은 카드와 영역 배경에 쓰는 테마별 색상이고, `--glow-mint`와 `--glow-peach`는 페이지 상단의 배경 그라데이션에 사용합니다. 중간·하단과 섹션별 배경 그라데이션은 사용하지 않습니다. `--ink-lime/peach/coral`은 라이트 모드에서는 어두운 파생색, 다크 모드에서는 해당 파스텔 색으로 글자와 아이콘의 대비를 확보합니다. `--text-on-pastel`은 밝은 버튼과 배지 위의 어두운 글자색입니다.

라이트 모드는 기존 토큰 값을 유지하며 페이지·Work 카드·모바일 메뉴의 배경에 `--gray-999`를 사용합니다. 홈 로고의 그림자를 생략하고 nav 별빛·파티클의 광량만 낮춥니다. 다크 모드는 기존 상단 그라데이션과 장식 강도를 유지합니다. 이 정돈을 위해 팔레트나 의미별 토큰 값을 재정의하지 않습니다.

- 주요 버튼: 피치 → 코랄 그라데이션
- 소개 문구: TextType으로 `I like developing / writing / planning`을 순환 표시
- 홈 본문은 히어로와 Work만 표시합니다. Work 제목 아래 설명은 두지 않으며, 오른쪽 View All은 배경 없는 작은 텍스트 링크입니다. 밑줄은 호버·키보드 포커스 시 왼쪽에서 오른쪽으로 부드럽게 펼쳐집니다. 별도 연락처 영역은 About 페이지에만 표시하며, Work 목록·상세 페이지에는 넣지 않습니다.
- GooeyNav: 민트 선택 표시와 연두·피치·코랄 물방울. 바깥쪽 StarBorder 배경과 글자는 테마별 회색 토큰을, 별빛은 `--link-color`, 잔상은 `--ink-coral`을 사용해 라이트·다크 모드에 맞춰 변경합니다 (6초 주기, sparkle, hover 없음).
- StaggeredMenu: 피치·코랄 전환 레이어
- 상단 Particles·ClickSpark: 네 가지 팔레트 색상
- 히어로 파티클은 컨테이너 가로 비율에 맞춰 분포를 확대합니다. 점의 WebGL 투영과 연결선의 CPU 투영에 같은 가로 보정을 적용해 위치를 일치시킵니다.

Canvas·WebGL 효과에는 계산된 CSS 토큰 값을 전달합니다. ClickSpark의 색상 배열에 `--color-mint`처럼 토큰 이름을 전달하면 클릭 시점에 실제 색상으로 변환합니다. 새로운 효과 색상은 원본 컴포넌트에 직접 하드코딩하지 않습니다.

제공된 SVG 로고의 원래 색상은 보존했습니다. 글자 크기·글꼴·그림자·전환 시간은 기존 공통 토큰을 유지하며, 테마 선택은 브라우저에 저장합니다.

## React Bits 사용

React, React DOM, `@astrojs/react`와 TypeScript 타입이 설치되어 있습니다. Astro 설정에 React 통합과 JSX 변환을 등록했으므로 `.tsx` 컴포넌트를 사용할 수 있습니다.

React Bits는 전체 라이브러리를 설치하는 방식이 아니라 필요한 컴포넌트의 소스를 프로젝트로 가져오는 방식입니다. 현재 사이트는 일반 CSS와 `.jsx` 소스를 사용합니다. 기존 방식에 맞춰 JavaScript + CSS 버전을 우선 사용하고, 제공된 소스가 TypeScript인 경우 `.tsx`도 사용할 수 있습니다. Tailwind용 소스를 그대로 추가하지 마세요.

1. [React Bits](https://reactbits.dev)의 원하는 컴포넌트에서 **Code → JavaScript → CSS**를 선택합니다.
2. 소스와 CSS를 `src/components/react-bits/` 아래에 함께 저장합니다. 예를 들어 `StarBorder.jsx`와 `StarBorder.css`를 같은 폴더에 둡니다.
3. 해당 컴포넌트에 표시된 의존성만 `bun add 패키지명`으로 설치합니다. CSS import 경로는 저장한 위치에 맞춥니다.
4. Astro 페이지에서 컴포넌트를 import하고 클라이언트 지시어와 함께 사용합니다.

새 효과도 기존 디자인 토큰을 연결해야 합니다. Astro에서 React 컴포넌트를 사용하는 기본 형태는 다음과 같습니다.

```astro
---
import StarBorder from '../components/react-bits/StarBorder';
---

<StarBorder client:load backgroundColor="var(--surface-mint)">
  markab-j
</StarBorder>
```

- `client:load`: 페이지 로드 시 실행합니다. 첫 화면의 애니메이션에 사용합니다.
- `client:visible`: 화면에 보일 때 실행합니다. 아래쪽 섹션에 적합합니다.
- `client:only="react"`: 렌더링 시점에 `window`, `document`, WebGL 등 브라우저 환경을 요구하는 컴포넌트에 사용합니다.

지시어가 없으면 정적 HTML만 렌더링되므로 상호작용과 애니메이션이 실행되지 않습니다. 함수 형태의 이벤트 핸들러가 필요하면 `.tsx` 래퍼 안에서 정의하세요. Astro에서 전달하는 props는 직렬화 가능한 값으로 유지합니다.

컴포넌트 CSS에서는 `var(--brand-200)` 등 기존 디자인 토큰을 사용할 수 있습니다. JavaScript에서 계산하는 색상이나 WebGL 색상에는 컴포넌트가 지원하는 실제 색상값을 전달하세요.

데스크톱 메뉴에는 React Bits의 GooeyNav를, `50em` 미만의 모바일 화면에서는 GSAP 기반 StaggeredMenu를 사용합니다. 모바일 메뉴의 링크·소셜·테마 버튼과 민트 색상은 `src/components/Nav.astro`에서 연결하고, 사이트용 스타일은 `src/components/MobileMenu.css`에서 조정합니다. `src/components/SiteGooeyNav.jsx`에서 현재 경로·테마·디자인 토큰을 연결하며, 메뉴 링크는 `src/components/Nav.astro`에서 수정합니다. 메뉴와 클릭 효과는 내부 페이지 이동 중에도 유지됩니다.

공식 문서: [React Bits 설치](https://reactbits.dev/get-started/installation) · [Astro React 통합](https://docs.astro.build/en/guides/integrations-guide/react/)

## 폰트

본문·제목·메뉴는 **Pretendard Variable v1.3.9**로 통일합니다. 외부 CDN 대신 `public/fonts/pretendard/v1.3.9/`에서 웹폰트를 직접 서빙합니다. 기존 Google Fonts 요청은 제거했습니다.

- 공식 가변 다이나믹 서브셋 CSS와 WOFF2 92개를 포함합니다. 글꼴 파일의 총 크기는 약 2.82 MiB지만, 브라우저는 `unicode-range`에 따라 페이지에 필요한 문자 파일만 요청합니다.
- 가변 굵기 `45–920`을 지원하므로 굵기별 파일을 따로 추가하지 않습니다.
- `font-display: swap`으로 폰트 로딩 중에도 시스템 글꼴로 텍스트를 표시합니다.
- `--font-body`와 `--font-brand`가 같은 폰트 토큰을 사용합니다.
- SIL Open Font License 1.1과 저작권 고지를 `public/fonts/pretendard/v1.3.9/LICENSE.txt` 및 원본 CSS에 보존했습니다.

이 구성은 GitHub Pages에서 다른 정적 파일과 함께 배포되며, 별도의 폰트 CDN 연결이나 운영체제 폰트 설치가 필요하지 않습니다.

출처: [제작자 소개](https://cactus.tistory.com/306) · [Pretendard 공식 저장소](https://github.com/orioncactus/pretendard)

## 콘텐츠와 상호작용 유지 조건

- Work 스키마는 `src/content.config.ts`가 기준입니다. `img`, `img_dark`, `img_alt`는 선택 항목입니다. `img_dark`가 있는 로고는 라이트·다크 테마에 맞춰 전환하며, 원본 비율과 색상을 보존합니다.
- Idlerama SVG는 라이트용에 `#FFFFFF`, 다크용에 `#242220` 배경을 포함합니다. 홈에서는 `WorkMasonry.jsx`가 현재 테마에 맞춰 이미지 경로를 원본 Masonry에 전달합니다.
- `img_width`·`img_height`는 선택 이미지 치수입니다. Idlerama는 SVG viewBox의 `268 × 84.5`를 사용합니다. 단일 프로젝트 갤러리는 이 비율로 서버 렌더링부터 공간을 확보하고 Masonry에도 치수를 전달합니다. 페이지 배경의 `overflow: clip`은 등장 효과의 시각적 넘침이 문서 높이를 늘리지 않도록 하며, 실제 콘텐츠 높이와 페이지 스크롤은 유지합니다.
- 홈은 최신 프로젝트 4개를 제공받은 TypeScript + CSS 버전의 React Bits `Masonry.tsx`로 표시합니다. 카드가 하나면 가운데 정렬합니다. 원본 카드 디자인과 드래그·호버 동작을 유지하고, 카드별 제목·이미지·이동 주소는 `items` props로 전달합니다. `lightbox={false}`로 카드 전체를 클릭하면 해당 Work 상세 페이지로 같은 탭에서 이동합니다. 추가 이동 버튼, 커스텀 카드 렌더러와 Masonry 디자인 덮어쓰기를 넣지 않습니다. 원본은 클라이언트에서 카드를 생성하므로 홈에서 `client:load`로 실행합니다. 원본의 드래그 재정렬을 기본값으로 유지합니다. 드래그 직후에는 링크 이동을 억제하는 원본 동작을 유지합니다. Work 목록은 기존 `PortfolioPreview.astro`를 사용합니다.
- Work 상세 본문은 확인된 사실 중심으로 간결하게 작성합니다. 한글 줄바꿈은 `word-break: keep-all`, `overflow-wrap: anywhere`, `line-break: strict`를 적용합니다.
- Work 태그는 기존 팔레트를 10% 섞은 배경과 얇은 테두리, `--text-sm` 글씨를 사용합니다. 각 Pill은 공통 리빌로 하나씩 나타나며, 좁은 화면에서는 태그 목록이 줄바꿈합니다.
- 현재 Work 콘텐츠는 Idlerama입니다. `description`은 `Desktop Pet Application`만 사용합니다. Work 본문에는 영어 한 줄 소개와 홈페이지 링크(https://idlerama.markab-j.com), Steam 출시 예정 표시만 둡니다. Steam 스토어 주소는 아직 없으므로 링크를 만들지 않습니다. 실제 내용은 Markdown을 기준으로 확인합니다.
- 홈 히어로는 원본 SVG 로고를 모바일 128px·데스크톱 160px로 중앙 정렬하고 아래에 TextType의 `I like developing / writing / planning`만 표시합니다. 로고와 문구는 순서대로 아래에서 올라오며, 모션 줄이기 설정에서는 진입 애니메이션을 생략합니다. 다른 페이지의 제목·소개에는 공용 `Hero.astro`를 사용합니다.
- 공통 진입 효과는 `ScrollReveal.astro`의 GSAP ScrollTrigger와 타임라인을 사용합니다. `data-reveal` 요소를 화면의 위→아래, 같은 행은 왼쪽→오른쪽 순으로 배치하고 1.05초·220ms 간격으로 부드럽게 표시합니다. 내부 이동 전과 모션 줄이기·화면 크기 변경 시 GSAP matchMedia로 정리합니다. 홈 Masonry는 `animateFrom="none"`으로 중복 진입 효과를 끄고 갤러리를 공통 리빌로 표시하며, 원본 드래그·호버·링크 동작은 유지합니다.
- 데스크톱 nav는 큰 크기의 GooeyNav와 캡슐 형태 StarBorder를 사용합니다. 별 효과 경로와 배경 모서리를 함께 유지합니다.
- `BaseLayout.astro`의 ClientRouter와 persistent islands로 내부 이동 중 nav와 ClickSpark를 유지합니다. 페이지 이동과 테마 전환 후에도 효과·현재 메뉴 표시가 정상인지 확인합니다.
- 글자 선택과 이미지·링크 드래그, 컨텍스트 메뉴 방지를 유지합니다. 입력 가능한 요소는 예외로 처리합니다.

## 배포와 도메인

- `.github/workflows/deploy.yml`은 `main` 푸시 또는 수동 실행으로 빌드·배포합니다. Node.js 24와 Bun 1.4.3을 사용합니다.
- GitHub Pages Source는 GitHub Actions로 전환했고 첫 Actions 배포도 성공했습니다. 외부 설정은 변경될 수 있으므로 필요할 때 다시 조회합니다.
- `astro.config.mjs`의 `site`는 `https://markab-j.com`입니다. 사용자 사이트이므로 경로 접두사 `base`를 추가하지 않습니다.
- `public/CNAME`은 `markab-j.com`입니다. Actions 배포에서는 이 파일만으로 GitHub Pages의 Custom domain 설정이 변경되지 않습니다.
- 사용자가 설정한 Cloudflare DNS는 `@`와 `www` 모두 `markab-j.github.io`를 가리키는 CNAME, DNS only, TTL Auto입니다. 루트 CNAME은 Cloudflare의 flattening을 사용하므로 A 레코드를 함께 추가하지 않습니다.
- 마지막 확인 시 공개 DNS와 HTTP 응답은 정상이었으나 GitHub DNS 검사와 HTTPS 인증서에는 문제가 있었습니다. 해결 완료로 단정하지 말고 현재 상태를 조회합니다. 도메인 삭제·재등록을 반복하도록 안내하지 않습니다.
- GitHub 저장소 설정과 DNS는 명시적인 요청 없이 변경하지 않습니다. 이메일용 MX·TXT 레코드를 보존합니다.

참고: [GitHub Pages 배포](https://docs.astro.build/en/guides/deploy/github/) · [GitHub 커스텀 도메인](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) · [Cloudflare 루트 CNAME](https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-zone-apex/)
