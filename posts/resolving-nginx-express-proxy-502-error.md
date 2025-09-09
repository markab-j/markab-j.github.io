---
title: "Nginx에선 502 Bad Gateway, 프록시 서버 로그에선 200 OK...?"
description: "Nginx와 Express로 구성된 프록시 환경에서 특정 Spring 서버에만 502 에러가 발생하는 현상을 분석하고, 헤더 중복 문제와 해결 과정을 공유한다."
date: "2025-09-09"
categories:
  - "Troubleshooting"
  - "Backend"
tags:
  - "Nginx"
  - "Express"
  - "Proxy"
  - "Spring"
  - "transfer-encoding"
---

<script>
    import Image from "$lib/components/post/image.svelte";
</script>

# 문제 상황

<Image 
    src="/images/resolving-nginx-express-proxy-502-error-image-1.jpeg"
    caption="아주 간단한 서버 아키텍처"
/>

아주 단순한 아키텍처 구조에서 서비스 A, B, C, D가 존재할때 프록시 서버요청을 보내면 포트만 변경하여 localhost로 배분하는 단순한 역할을 하고 있었다.

의도대로 A, B서버는 원하는 엔드포인트에 도달하여 응답을 반환하지만, C, D는 502를 반환하는 상황이다.

이때, 서비스 A, B는 Nestjs로 동작하고 서비스 C, D는 자바 스프링으로 동작하고 있다.

# 원인 분석

가장 먼저, 응답이 502로 오는 것을 확인하기 위해 게이트웨이 서버에 로그를 작성했다.

게이트웨이 서버는 Express로 작성되었으며 [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware)를 사용했다.

proxy-middleware에 존재하는 이벤트를 통해 아래와 같은 정보를 로깅했다.

1. Proxy 서버로 들어온 요청의 정보
2. Proxy 서버가 각 서비스로 보내는 요청의 정보
3. Proxy 서버가 서비스로부터 받은 응답의 정보

로그를 확인한 결과 이상한 점을 찾을 수 있었다.

분명 자바로 작성된 C, D 서버도 A, B와 동일한 로그가 찍히고 있었다.

3번 로그에서, A, B, C, D 서비스가 모두 200을 반환하는 것을 똑똑히 확인할 수 있었다.

그렇다는 것은 프록시 서버에서 각 서비스 사이에는 정확하게 매핑되어 문제가 없다.

문제는 프록시 서버 -> nginx 사이간의 에러가 발생한다는 것임을 파악했다.

### 알아낸 정보들

그렇다면 왜 프록시 서버 -> nginx에서 에러가 발생하는걸까?

여기서 이상한 점은 `[서비스 서버 -> 프록시 서버]`에서 `200 OK`가 반환되면 `502 BadGateway`가 nginx로부터 발생하지만 에러가 발생하면 서비스 서버로부터 400이 제대로 반환된다는 점이었다.

나는 여기서 문제 해결을 위해 더 이상 어떤 것을 해야할지 갈피를 잡지 못했기에 Gemini를 사용했다.

Gemini에게 아래와 같은 프롬프트를 작성했다.

```markdown
nginx와 Express Proxy Server, 그리고 동일한 컴퓨터에서 동작하는 서비스 서버들 간의 네트워크 오류가 발생하고 있습니다.

서버의 종류는 이렇게 지칭하겠습니다.
A: nginx
B: Express Proxy Server 단순 매핑만 지원합니다. 추후 인증 기능을 추가하기 위한 레이어입니다.
C: 여러 서비스들이 존재합니다.
Place 서비스 (자바 스프링)
Notice 서비스 (Nest.js)
Home 서비스 (자바 스프링)
Project 서비스 (Nest.js)

매핑은 잘 동작하는 것처럼 보입니다. Notice와 Project서비스는 정확히 매핑되어 의도한 uri를 통해 접근할 수 있습니다.
하지만 Place서비스는 조금 이상합니다.
B에서 로그를 확인한 결과 정확히 매핑되어 값을 반환하고 있습니다. 다른 Notice, Project와 같이 200 OK, 동일한 로깅이 찍히고 있습니다.
하지만 실제 요청화면에서는 502 nginx에러가 발생하고 있습니다.
더 이상한점은 400을 일부러 발생시키기 위한 요청을 보내면 스프링 기본 400페이지가 노출됩니다.
문제 이유를 파악하고 필요한 정보가 있다면 더 요청해주세요.
```

그리고 아래와 같은 응답을 받았다.

```markdown
네트워크 구성과 증상을 바탕으로 문제의 원인을 진단하고 해결 방안을 제시해 드리겠습니다.

결론부터 말씀드리면
가장 유력한 원인은 B(Express Proxy Server)가 C(Place Service, Spring)로부터 받은 HTTP 응답(Response)을 A(nginx)로 전달하는 과정에서 발생하는 문제입니다.

특히, HTTP 헤더(Header) 처리 또는 응답 스트림(Stream) 처리의 문제일 가능성이 매우 높습니다.

🧐 문제 분석 및 추론
요청 흐름 (Client -> A -> B -> C)은 정상입니다.

B의 로그에 C로부터 200 OK 응답을 받았다는 기록이 있다는 것은 A -> B -> C 까지의 요청 전달 및 C의 비즈니스 로직 처리가 성공적으로 완료되었음을 의미합니다.

문제는 응답 흐름 (C -> B -> A -> Client)에 있습니다.

A(nginx)에서 502 Bad Gateway 오류가 발생했다는 것은, A가 자신의 업스트림(upstream) 서버인 B로부터 비정상적인 응답을 받았거나 응답을 받지 못했다는 뜻입니다.

B는 C로부터 정상 응답(200 OK)을 받았으므로, 문제는 B가 이 응답을 A에게 전달하는 과정에서 발생합니다.

결정적인 단서: 400 에러는 정상적으로 보입니다.

400 에러 발생 시 스프링 기본 에러 페이지가 노출된다는 것은, 해당 응답(HTML 본문과 헤더)은 C -> B -> A -> Client 흐름을 문제없이 통과한다는 의미입니다.

이는 네트워크 연결 자체의 문제가 아님을 시사합니다. 성공적인 200 OK 응답과 실패한 400 Bad Request 응답 사이에 존재하는 차이점이 문제의 핵심입니다.

네트워크 구성과 증상을 바탕으로 문제의 원인을 진단하고 해결 방안을 제시해 드리겠습니다.

결론부터 말씀드리면
가장 유력한 원인은 B(Express Proxy Server)가 C(Place Service, Spring)로부터 받은 HTTP 응답(Response)을 A(nginx)로 전달하는 과정에서 발생하는 문제입니다.

특히, HTTP 헤더(Header) 처리 또는 응답 스트림(Stream) 처리의 문제일 가능성이 매우 높습니다.

🧐 문제 분석 및 추론
요청 흐름 (Client -> A -> B -> C)은 정상입니다.

B의 로그에 C로부터 200 OK 응답을 받았다는 기록이 있다는 것은 A -> B -> C 까지의 요청 전달 및 C의 비즈니스 로직 처리가 성공적으로 완료되었음을 의미합니다.

문제는 응답 흐름 (C -> B -> A -> Client)에 있습니다.

A(nginx)에서 502 Bad Gateway 오류가 발생했다는 것은, A가 자신의 업스트림(upstream) 서버인 B로부터 비정상적인 응답을 받았거나 응답을 받지 못했다는 뜻입니다.

B는 C로부터 정상 응답(200 OK)을 받았으므로, 문제는 B가 이 응답을 A에게 전달하는 과정에서 발생합니다.

결정적인 단서: 400 에러는 정상적으로 보입니다.

400 에러 발생 시 스프링 기본 에러 페이지가 노출된다는 것은, 해당 응답(HTML 본문과 헤더)은 C -> B -> A -> Client 흐름을 문제없이 통과한다는 의미입니다.

이는 네트워크 연결 자체의 문제가 아님을 시사합니다. 성공적인 200 OK 응답과 실패한 400 Bad Request 응답 사이에 존재하는 차이점이 문제의 핵심입니다.

🎯 예상 원인
성공(200) 응답과 실패(400) 응답의 가장 큰 차이는 보통 응답 본문(Response Body)의 크기나 종류, 그리고 특정 HTTP 헤더에 있습니다.

1. HTTP 헤더 불일치 또는 누락 (가장 유력)
   Content-Length vs Transfer-Encoding: chunked: Nest.js 서비스는 응답 크기를 명시하는 Content-Length 헤더를 사용할 수 있지만, Spring 애플리케이션은 기본적으로 응답을 조각내서 보내는 Transfer-Encoding: chunked 방식을 사용하는 경우가 많습니다. Express 프록시 서버(B)의 프록시 미들웨어(예: http-proxy-middleware)가 이 chunked 인코딩을 제대로 처리하지 못하고 연결을 조기에 종료하면, nginx(A)는 불완전한 응답을 받게 되어 502 오류를 발생시킬 수 있습니다.

Connection 또는 Keep-Alive 헤더: B가 C로부터 받은 Connection 관련 헤더를 A로 전달하는 과정에서 문제가 생겨 연결이 비정상적으로 종료될 수 있습니다.

... 답변이 길어 생략함
```

답변을 보고 실제 로컬 호스트에서 `curl`을 이용하여 동일한 엔드포인트에 각각 요청을 보냈다.

## 근본적인 문제 확인

이어서 C 서비스와 프록시 서버로 요청한 것의 로그의 헤더를 GEMINI에게 제공했고, 문제의 원인을 알아냈다.

```bash title="C 서버로 직접 요청"
HTTP/1.1 200
...
Transfer-Encoding: chunked
...
```

```bash title="프록시 서버로 요청"
HTTP/1.1 200 OK
...
Transfer-Encoding: chunked // <-- C로부터 받은 원본 헤더
...
Connection: close
X-Powered-By: Express
Transfer-Encoding: chunked // <-- Express가 추가한 것으로 추정되는 중복 헤더
```

nginx가 잘못된 헤더로 인해 502 에러를 발생시키는 것이 확실해졌다.

# 해결

문제 해결을 위해 내가 한 작업은 단순했다.

중복헤더를 방지하기 위해서 프록시 서버에서 관련 헤더를 제거하는 작업을 진행했다.

자바 스프링으로 만들어진 서버에만 적용하면 되므로, 각 엔드포인트마다 적용해주었다.

```typescript
proxyRouter.use(
  "/place",
  createProxyMiddleware<Request, Response>({
    target: PLACE_BASE_URL,
    logger: console,
    on: {
      proxyRes: (proxyRes, req, res) => {
        delete proxyRes.headers["transfer-encoding"];
      },
    },
  })
);
```

# 관련 이슈: Github

[http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware)

비슷한 이슈가 있는지 찾아보기 위해 `transfer-encoding`이라는 키워드로 검색을 해봤다.

동일한 이슈와 토론이 존재했다.

[Transfer-Encoding chunked and routing seems to cause a problem #574](https://github.com/chimurai/http-proxy-middleware/discussions/574)
[Transfer-Encoding chunked and routing seems to cause a problem #324](https://github.com/chimurai/http-proxy-middleware/issues/324)

# 관련 게시글

작성 예정: HTTP Header: transfer-encoding란 무엇일까? - Nestjs(Express)와 Java Spring에서의 헤더
