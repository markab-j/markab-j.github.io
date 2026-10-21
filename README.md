# markab-j

Astro로 만든 markab-j의 개인 홈페이지입니다. `#9CDBD9` 민트를 중심으로 연두·피치·코랄을 조합한 파스텔 테마와 라이트·다크 모드를 사용합니다.

- 대표 주소: [markab-j.com](https://markab-j.com)
- GitHub Pages 주소: [markab-j.github.io](https://markab-j.github.io)
- 이메일: [contact@markab-j.com](mailto:contact@markab-j.com)
- 소셜: [X](https://x.com/markab_j) · [GitHub](https://github.com/markab-j)

## 로컬 개발

Node.js `22.23.4` 이상과 Bun이 필요합니다. 배포 워크플로는 Node.js 24와 Bun 1.4.3을 사용합니다.

```sh
bun install --frozen-lockfile
bun run dev --background
```

개발 서버의 기본 주소는 `http://localhost:4321`입니다.

| 명령 | 설명 |
| --- | --- |
| `bun run astro dev status` | 백그라운드 서버 상태 확인 |
| `bun run astro dev logs` | 개발 서버 로그 확인 |
| `bun run astro dev stop` | 개발 서버 종료 |
| `bun run build` | 정적 사이트를 `dist/`에 빌드 |
| `bun run preview` | 빌드 결과 미리보기 |

## 프로젝트 구조

```text
.github/workflows/deploy.yml  GitHub Pages 빌드·배포
public/favicon.svg           제공된 markab-j SVG 아이콘
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

- 주요 버튼: 피치 → 코랄 그라데이션
- 소개 문구: TextType으로 `I like developing / writing / planning`을 순환 표시
- Skills: 중립 배경과 서로 다른 아이콘 색상
- 기술 로고 영역: 중립 배경·테두리와 기본 본문색
- 연락처 영역: 페이지와 이어지는 배경, 피치·코랄 버튼
- GooeyNav: 민트 선택 표시와 연두·피치·코랄 물방울
- StaggeredMenu: 피치·코랄 전환 레이어
- 상단 Particles·ClickSpark: 네 가지 팔레트 색상

Canvas·WebGL 효과에는 계산된 CSS 토큰 값을 전달합니다. ClickSpark의 색상 배열에 `--color-mint`처럼 토큰 이름을 전달하면 클릭 시점에 실제 색상으로 변환합니다. 새로운 효과 색상은 원본 컴포넌트에 직접 하드코딩하지 않습니다.

제공된 SVG 로고의 원래 색상은 보존했습니다. 글자 크기·글꼴·그림자·전환 시간은 기존 공통 토큰을 유지하며, 테마 선택은 브라우저에 저장합니다.

## React Bits 사용

React, React DOM, `@astrojs/react`와 TypeScript 타입이 설치되어 있습니다. Astro 설정에 React 통합과 JSX 변환을 등록했으므로 `.tsx` 컴포넌트를 사용할 수 있습니다.

React Bits는 전체 라이브러리를 설치하는 방식이 아니라 필요한 컴포넌트의 소스를 프로젝트로 가져오는 방식입니다. 현재 사이트는 일반 CSS를 사용하므로 **TypeScript + CSS (`TS-CSS`)** 버전을 선택하세요. Tailwind 버전을 쓰려면 별도로 Tailwind 설정이 필요합니다.

1. [React Bits](https://reactbits.dev)의 원하는 컴포넌트에서 **Code → TypeScript → CSS**를 선택합니다.
2. 소스와 CSS를 `src/components/react-bits/` 아래에 함께 저장합니다. 예를 들어 `StarBorder.tsx`와 `StarBorder.css`를 같은 폴더에 둡니다.
3. 해당 컴포넌트에 표시된 의존성만 `bun add 패키지명`으로 설치합니다. CSS import 경로는 저장한 위치에 맞춥니다.
4. Astro 페이지에서 컴포넌트를 import하고 클라이언트 지시어와 함께 사용합니다.

예를 들어 Star Border 소스를 추가한 뒤 다음처럼 사용할 수 있습니다.

```astro
---
import StarBorder from '../components/react-bits/StarBorder';
---

<StarBorder client:load color="#9CDBD9">
  markab-j
</StarBorder>
```

- `client:load`: 페이지 로드 시 실행합니다. 첫 화면의 애니메이션에 사용합니다.
- `client:visible`: 화면에 보일 때 실행합니다. 아래쪽 섹션에 적합합니다.
- `client:only="react"`: 렌더링 시점에 `window`, `document`, WebGL 등 브라우저 환경을 요구하는 컴포넌트에 사용합니다.

지시어가 없으면 정적 HTML만 렌더링되므로 상호작용과 애니메이션이 실행되지 않습니다. 함수 형태의 이벤트 핸들러가 필요하면 `.tsx` 래퍼 안에서 정의하세요. Astro에서 전달하는 props는 직렬화 가능한 값으로 유지합니다.

컴포넌트 CSS에서는 `var(--brand-200)` 등 기존 디자인 토큰을 사용할 수 있습니다. JavaScript에서 계산하는 색상이나 WebGL 색상에는 컴포넌트가 지원하는 실제 색상값을 전달하세요. 홈의 **Technologies** 섹션에는 첨부된 JavaScript + CSS 버전의 LogoLoop를 적용했습니다. 원본 소스는 `src/components/react-bits/LogoLoop.jsx`와 `LogoLoop.css`에 있으며, 표시할 기술 로고와 속도는 `src/components/TechLogoLoop.jsx`에서 수정합니다. 아이콘은 `react-icons`를 사용합니다. 화면에 보이면 실행되며, 마우스 호버·키보드 포커스 시 일시정지하고 시스템의 모션 줄이기 설정을 따릅니다.

데스크톱 메뉴에는 React Bits의 GooeyNav를, `50em` 미만의 모바일 화면에서는 GSAP 기반 StaggeredMenu를 사용합니다. 모바일 메뉴의 링크·소셜·테마 버튼과 민트 색상은 `src/components/Nav.astro`에서 연결하고, 사이트용 스타일은 `src/components/MobileMenu.css`에서 조정합니다. `src/components/SiteGooeyNav.jsx`에서 현재 경로·테마·디자인 토큰을 연결하며, 메뉴 링크는 `src/components/Nav.astro`에서 수정합니다. 메뉴와 클릭 효과는 내부 페이지 이동 중에도 유지됩니다.

공식 문서: [React Bits 설치](https://reactbits.dev/get-started/installation) · [Astro React 통합](https://docs.astro.build/en/guides/integrations-guide/react/)

## 콘텐츠 수정

- 홈: `src/pages/index.astro`
- 소개: `src/pages/about.astro`
- 소셜 프로필: `src/components/Nav.astro`, `src/components/Footer.astro`
- 이메일: `src/components/ContactCTA.astro`, `src/pages/about.astro`
- 페이지 기본 메타데이터: `src/components/MainHead.astro`
- 프로젝트: `src/content/work/`의 Markdown 파일

프로젝트 데이터, 홈의 Skills에는 Astro 포트폴리오 템플릿의 예시가 남아 있습니다. 공개 전에 실제 이력과 프로젝트로 교체하세요.

## GitHub Pages 배포

1. GitHub 계정 `markab-j`에 `markab-j.github.io` 저장소를 준비하고 이 프로젝트를 올립니다. 현재 로컬 저장소에 원격 주소가 없다면 먼저 해당 저장소를 원격으로 연결합니다.
2. 저장소 **Settings → Pages → Build and deployment → Source**에서 **GitHub Actions**를 선택합니다.
3. `main` 브랜치에 푸시하거나 **Actions → Deploy to GitHub Pages → Run workflow**를 실행합니다.
4. 워크플로가 의존성 설치, Astro 빌드, 정적 파일 업로드와 Pages 배포를 수행합니다.

`markab-j.github.io`는 사용자 사이트이므로 경로 접두사 `base`를 추가하지 않습니다. 현재 `astro.config.mjs`의 `site`는 최종 대표 주소인 `https://markab-j.com`으로 설정되어 있습니다. 도메인 연결 전 GitHub Pages 주소를 대표 주소로 운영하려면 일시적으로 `site`를 `https://markab-j.github.io`로 변경하고 `public/CNAME`도 그 단계에 맞게 조정하세요.

### markab-j.com 연결

1. 저장소 **Settings → Pages → Custom domain**에 `markab-j.com`을 입력합니다. `public/CNAME`에도 같은 도메인이 들어 있습니다. GitHub Actions 배포에서는 CNAME 파일만으로 Pages 설정이 변경되지 않으므로 이 설정을 직접 완료해야 합니다.
2. 도메인 제공업체에서 루트 도메인의 `A` 레코드를 [GitHub 공식 문서의 Pages IP 주소](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain)에 연결합니다. 제공업체가 지원한다면 `ALIAS` 또는 `ANAME`을 `markab-j.github.io`로 연결할 수도 있습니다.
3. DNS 확인과 인증서 발급이 끝나면 Pages에서 **Enforce HTTPS**를 활성화합니다.

커스텀 도메인 연결이 완료되면 `markab-j.github.io` 접속은 `markab-j.com`으로 리디렉션됩니다. 두 주소를 별도 사이트로 배포하는 구성은 아닙니다.

이 프로젝트의 설정 파일과 워크플로는 배포 준비 상태입니다. GitHub 저장소 설정과 실제 DNS 변경은 별도로 진행해야 합니다.

## 참고

- [Astro 컴포넌트](https://docs.astro.build/en/basics/astro-components/)
- [Astro 스타일 가이드](https://docs.astro.build/en/guides/styling/)
- [Astro의 GitHub Pages 배포 가이드](https://docs.astro.build/en/guides/deploy/github/)
- [GitHub 커스텀 도메인 설정](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
