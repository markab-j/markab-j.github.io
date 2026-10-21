# markab-j

Astro로 만든 markab-j의 개인 홈페이지입니다. `#9CDBD9`를 기준으로 한 민트 테마와 라이트·다크 모드를 사용합니다.

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

| 브랜드 토큰 | 값 | 용도 |
| --- | --- | --- |
| `--brand-50` | `#F1FBFA` | 가장 밝은 민트 |
| `--brand-100` | `#D5EFED` | 그라데이션 시작색 |
| `--brand-200` | `#9CDBD9` | 기준 브랜드 색상, 선택 메뉴·배지·버튼 |
| `--brand-300` | `#74C5C2` | 버튼 그라데이션 끝색 |
| `--brand-500` | `#318783` | 다크 모드 그라데이션·배경 |
| `--brand-700` | `#205E5B` | 라이트 모드 링크·강조 |
| `--brand-900` | `#123735` | 민트 배경 위 텍스트 |

`--accent-*`, `--link-color`, `--gradient-*`, `--background-glow`가 실제 컴포넌트에 적용됩니다. `--gray-*`는 민트와 어울리는 중립색이며 다크 모드에서 명도가 반전됩니다. 글자 크기, 글꼴, 그림자, 전환 시간도 같은 파일의 공통 토큰으로 관리합니다.

제공된 SVG의 원래 색상은 보존했습니다. 버튼과 선택 메뉴에는 밝은 민트 배경과 어두운 글자를 조합합니다. 테마 전환은 시스템 설정을 기본값으로 사용하며 사용자의 선택을 브라우저에 저장합니다.

## 콘텐츠 수정

- 홈: `src/pages/index.astro`
- 소개: `src/pages/about.astro`
- 소셜 프로필: `src/components/Nav.astro`, `src/components/Footer.astro`
- 이메일: `src/components/ContactCTA.astro`, `src/pages/about.astro`
- 페이지 기본 메타데이터: `src/components/MainHead.astro`
- 프로젝트: `src/content/work/`의 Markdown 파일

프로젝트 데이터, 홈의 역할·Skills·Mentions에는 Astro 포트폴리오 템플릿의 예시가 남아 있습니다. 공개 전에 실제 이력과 프로젝트로 교체하세요.

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
