import"./DsnmJJEf.js";import"./CfFnPjZS.js";import{aj as f,ak as B,ae as r,ad as d,aF as l,aG as t,aH as C,aI as y,aJ as v,af as k}from"./AXlEUnx1.js";import{i as w}from"./DnYoE1xT.js";import{a as u,s as o,b as A}from"./Du_6b2bp.js";import{p as T}from"./2LXh4rER.js";var P=d('<figure class="not-prose flex flex-col items-center px-2"><div><img class="mt-0 mb-0 max-w-full" loading="lazy"/></div> <figcaption class="w-full text-center text-sm text-gray-500"> </figcaption></figure>'),_=d('<div><img class="max-w-full" loading="lazy"/></div>');function H(i,a){let p=T(a,"align",3,"center");const D={left:"justify-start",center:"justify-center",right:"justify-end"};var E=f(),b=B(E);{var g=e=>{var n=P(),s=l(n),c=l(s);t(s);var m=C(s,2),x=l(m,!0);t(m),t(n),y(()=>{u(s,1,`flex ${D[p()]} w-full`),o(c,"src",a.src),o(c,"alt",a.alt),A(c,a.width?`width: ${a.width}`:""),v(x,a.caption)}),r(e,n)},h=e=>{var n=_(),s=l(n);t(n),y(()=>{u(n,1,`flex px-2 ${D[p()]} w-full`),o(s,"src",a.src),o(s,"alt",a.alt),A(s,a.width?`width: ${a.width}`:"")}),r(e,n)};w(b,e=>{a.caption?e(g):e(h,!1)})}r(i,E)}const S={title:"Nginx에선 502 Bad Gateway, 프록시 서버 로그에선 200 OK...?",description:"Nginx와 Express로 구성된 프록시 환경에서 특정 Spring 서버에만 502 에러가 발생하는 현상을 분석하고, 헤더 중복 문제와 해결 과정을 공유한다.",date:"2025-09-09",categories:["Troubleshooting","Backend"],tags:["Nginx","Express","Proxy","Spring","transfer-encoding"]},{title:L,description:I,date:M,categories:z,tags:J}=S;var j=d(`<nav class="toc"><ol class="toc-level toc-level-1"><li class="toc-item toc-item-h1"><a class="toc-link toc-link-h1" href="#문제-상황">문제 상황</a></li><li class="toc-item toc-item-h1"><a class="toc-link toc-link-h1" href="#원인-분석">원인 분석</a><ol class="toc-level toc-level-2"><li class="toc-item toc-item-h3"><a class="toc-link toc-link-h3" href="#알아낸-정보들">알아낸 정보들</a></li><li class="toc-item toc-item-h2"><a class="toc-link toc-link-h2" href="#근본적인-문제-확인">근본적인 문제 확인</a></li></ol></li><li class="toc-item toc-item-h1"><a class="toc-link toc-link-h1" href="#해결">해결</a></li><li class="toc-item toc-item-h1"><a class="toc-link toc-link-h1" href="#관련-이슈-github">관련 이슈: Github</a></li><li class="toc-item toc-item-h1"><a class="toc-link toc-link-h1" href="#관련-게시글">관련 게시글</a></li></ol></nav> <h1 id="문제-상황"><a aria-hidden="true" tabindex="-1" href="#문제-상황"><span class="icon icon-link"></span></a>문제 상황</h1> <!> <p>아주 단순한 아키텍처 구조에서 서비스 A, B, C, D가 존재할때 프록시 서버요청을 보내면 포트만 변경하여 localhost로 배분하는 단순한 역할을 하고 있었다.</p> <p>의도대로 A, B서버는 원하는 엔드포인트에 도달하여 응답을 반환하지만, C, D는 502를 반환하는 상황이다.</p> <p>이때, 서비스 A, B는 Nestjs로 동작하고 서비스 C, D는 자바 스프링으로 동작하고 있다.</p> <h1 id="원인-분석"><a aria-hidden="true" tabindex="-1" href="#원인-분석"><span class="icon icon-link"></span></a>원인 분석</h1> <p>가장 먼저, 응답이 502로 오는 것을 확인하기 위해 게이트웨이 서버에 로그를 작성했다.</p> <p>게이트웨이 서버는 Express로 작성되었으며 <a href="https://github.com/chimurai/http-proxy-middleware" rel="nofollow">http-proxy-middleware</a>를 사용했다.</p> <p>proxy-middleware에 존재하는 이벤트를 통해 아래와 같은 정보를 로깅했다.</p> <ol><li>Proxy 서버로 들어온 요청의 정보</li> <li>Proxy 서버가 각 서비스로 보내는 요청의 정보</li> <li>Proxy 서버가 서비스로부터 받은 응답의 정보</li></ol> <p>로그를 확인한 결과 이상한 점을 찾을 수 있었다.</p> <p>분명 자바로 작성된 C, D 서버도 A, B와 동일한 로그가 찍히고 있었다.</p> <p>3번 로그에서, A, B, C, D 서비스가 모두 200을 반환하는 것을 똑똑히 확인할 수 있었다.</p> <p>그렇다는 것은 프록시 서버에서 각 서비스 사이에는 정확하게 매핑되어 문제가 없다.</p> <p>문제는 프록시 서버 -> nginx 사이간의 에러가 발생한다는 것임을 파악했다.</p> <h3 id="알아낸-정보들"><a aria-hidden="true" tabindex="-1" href="#알아낸-정보들"><span class="icon icon-link"></span></a>알아낸 정보들</h3> <p>그렇다면 왜 프록시 서버 -> nginx에서 에러가 발생하는걸까?</p> <p>여기서 이상한 점은 <code>[서비스 서버 -&gt; 프록시 서버]</code>에서 <code>200 OK</code>가 반환되면 <code>502 BadGateway</code>가 nginx로부터 발생하지만 에러가 발생하면 서비스 서버로부터 400이 제대로 반환된다는 점이었다.</p> <p>나는 여기서 문제 해결을 위해 더 이상 어떤 것을 해야할지 갈피를 잡지 못했기에 Gemini를 사용했다.</p> <p>Gemini에게 아래와 같은 프롬프트를 작성했다.</p> <pre><code><span data-line-number="1"><span style="color: #DBD7CAEE">nginx와 Express Proxy Server, 그리고 동일한 컴퓨터에서 동작하는 서비스 서버들 간의 네트워크 오류가 발생하고 있습니다.</span></span>
<span data-line-number="2"></span>
<span data-line-number="3"><span style="color: #DBD7CAEE">서버의 종류는 이렇게 지칭하겠습니다.</span></span>
<span data-line-number="4"><span style="color: #DBD7CAEE">A: nginx</span></span>
<span data-line-number="5"><span style="color: #DBD7CAEE">B: Express Proxy Server 단순 매핑만 지원합니다. 추후 인증 기능을 추가하기 위한 레이어입니다.</span></span>
<span data-line-number="6"><span style="color: #DBD7CAEE">C: 여러 서비스들이 존재합니다.</span></span>
<span data-line-number="7"><span style="color: #DBD7CAEE">Place 서비스 (자바 스프링)</span></span>
<span data-line-number="8"><span style="color: #DBD7CAEE">Notice 서비스 (Nest.js)</span></span>
<span data-line-number="9"><span style="color: #DBD7CAEE">Home 서비스 (자바 스프링)</span></span>
<span data-line-number="10"><span style="color: #DBD7CAEE">Project 서비스 (Nest.js)</span></span>
<span data-line-number="11"></span>
<span data-line-number="12"><span style="color: #DBD7CAEE">매핑은 잘 동작하는 것처럼 보입니다. Notice와 Project서비스는 정확히 매핑되어 의도한 uri를 통해 접근할 수 있습니다.</span></span>
<span data-line-number="13"><span style="color: #DBD7CAEE">하지만 Place서비스는 조금 이상합니다.</span></span>
<span data-line-number="14"><span style="color: #DBD7CAEE">B에서 로그를 확인한 결과 정확히 매핑되어 값을 반환하고 있습니다. 다른 Notice, Project와 같이 200 OK, 동일한 로깅이 찍히고 있습니다.</span></span>
<span data-line-number="15"><span style="color: #DBD7CAEE">하지만 실제 요청화면에서는 502 nginx에러가 발생하고 있습니다.</span></span>
<span data-line-number="16"><span style="color: #DBD7CAEE">더 이상한점은 400을 일부러 발생시키기 위한 요청을 보내면 스프링 기본 400페이지가 노출됩니다.</span></span>
<span data-line-number="17"><span style="color: #DBD7CAEE">문제 이유를 파악하고 필요한 정보가 있다면 더 요청해주세요.</span></span>
</code></pre> <p>그리고 아래와 같은 응답을 받았다.</p> <pre><code><span data-line-number="1"><span style="color: #DBD7CAEE">네트워크 구성과 증상을 바탕으로 문제의 원인을 진단하고 해결 방안을 제시해 드리겠습니다.</span></span>
<span data-line-number="2"></span>
<span data-line-number="3"><span style="color: #DBD7CAEE">결론부터 말씀드리면</span></span>
<span data-line-number="4"><span style="color: #DBD7CAEE">가장 유력한 원인은 B(Express Proxy Server)가 C(Place Service, Spring)로부터 받은 HTTP 응답(Response)을 A(nginx)로 전달하는 과정에서 발생하는 문제입니다.</span></span>
<span data-line-number="5"></span>
<span data-line-number="6"><span style="color: #DBD7CAEE">특히, HTTP 헤더(Header) 처리 또는 응답 스트림(Stream) 처리의 문제일 가능성이 매우 높습니다.</span></span>
<span data-line-number="7"></span>
<span data-line-number="8"><span style="color: #DBD7CAEE">🧐 문제 분석 및 추론</span></span>
<span data-line-number="9"><span style="color: #DBD7CAEE">요청 흐름 (Client -&gt; A -&gt; B -&gt; C)은 정상입니다.</span></span>
<span data-line-number="10"></span>
<span data-line-number="11"><span style="color: #DBD7CAEE">B의 로그에 C로부터 200 OK 응답을 받았다는 기록이 있다는 것은 A -&gt; B -&gt; C 까지의 요청 전달 및 C의 비즈니스 로직 처리가 성공적으로 완료되었음을 의미합니다.</span></span>
<span data-line-number="12"></span>
<span data-line-number="13"><span style="color: #DBD7CAEE">문제는 응답 흐름 (C -&gt; B -&gt; A -&gt; Client)에 있습니다.</span></span>
<span data-line-number="14"></span>
<span data-line-number="15"><span style="color: #DBD7CAEE">A(nginx)에서 502 Bad Gateway 오류가 발생했다는 것은, A가 자신의 업스트림(upstream) 서버인 B로부터 비정상적인 응답을 받았거나 응답을 받지 못했다는 뜻입니다.</span></span>
<span data-line-number="16"></span>
<span data-line-number="17"><span style="color: #DBD7CAEE">B는 C로부터 정상 응답(200 OK)을 받았으므로, 문제는 B가 이 응답을 A에게 전달하는 과정에서 발생합니다.</span></span>
<span data-line-number="18"></span>
<span data-line-number="19"><span style="color: #DBD7CAEE">결정적인 단서: 400 에러는 정상적으로 보입니다.</span></span>
<span data-line-number="20"></span>
<span data-line-number="21"><span style="color: #DBD7CAEE">400 에러 발생 시 스프링 기본 에러 페이지가 노출된다는 것은, 해당 응답(HTML 본문과 헤더)은 C -&gt; B -&gt; A -&gt; Client 흐름을 문제없이 통과한다는 의미입니다.</span></span>
<span data-line-number="22"></span>
<span data-line-number="23"><span style="color: #DBD7CAEE">이는 네트워크 연결 자체의 문제가 아님을 시사합니다. 성공적인 200 OK 응답과 실패한 400 Bad Request 응답 사이에 존재하는 차이점이 문제의 핵심입니다.</span></span>
<span data-line-number="24"></span>
<span data-line-number="25"><span style="color: #DBD7CAEE">네트워크 구성과 증상을 바탕으로 문제의 원인을 진단하고 해결 방안을 제시해 드리겠습니다.</span></span>
<span data-line-number="26"></span>
<span data-line-number="27"><span style="color: #DBD7CAEE">결론부터 말씀드리면</span></span>
<span data-line-number="28"><span style="color: #DBD7CAEE">가장 유력한 원인은 B(Express Proxy Server)가 C(Place Service, Spring)로부터 받은 HTTP 응답(Response)을 A(nginx)로 전달하는 과정에서 발생하는 문제입니다.</span></span>
<span data-line-number="29"></span>
<span data-line-number="30"><span style="color: #DBD7CAEE">특히, HTTP 헤더(Header) 처리 또는 응답 스트림(Stream) 처리의 문제일 가능성이 매우 높습니다.</span></span>
<span data-line-number="31"></span>
<span data-line-number="32"><span style="color: #DBD7CAEE">🧐 문제 분석 및 추론</span></span>
<span data-line-number="33"><span style="color: #DBD7CAEE">요청 흐름 (Client -&gt; A -&gt; B -&gt; C)은 정상입니다.</span></span>
<span data-line-number="34"></span>
<span data-line-number="35"><span style="color: #DBD7CAEE">B의 로그에 C로부터 200 OK 응답을 받았다는 기록이 있다는 것은 A -&gt; B -&gt; C 까지의 요청 전달 및 C의 비즈니스 로직 처리가 성공적으로 완료되었음을 의미합니다.</span></span>
<span data-line-number="36"></span>
<span data-line-number="37"><span style="color: #DBD7CAEE">문제는 응답 흐름 (C -&gt; B -&gt; A -&gt; Client)에 있습니다.</span></span>
<span data-line-number="38"></span>
<span data-line-number="39"><span style="color: #DBD7CAEE">A(nginx)에서 502 Bad Gateway 오류가 발생했다는 것은, A가 자신의 업스트림(upstream) 서버인 B로부터 비정상적인 응답을 받았거나 응답을 받지 못했다는 뜻입니다.</span></span>
<span data-line-number="40"></span>
<span data-line-number="41"><span style="color: #DBD7CAEE">B는 C로부터 정상 응답(200 OK)을 받았으므로, 문제는 B가 이 응답을 A에게 전달하는 과정에서 발생합니다.</span></span>
<span data-line-number="42"></span>
<span data-line-number="43"><span style="color: #DBD7CAEE">결정적인 단서: 400 에러는 정상적으로 보입니다.</span></span>
<span data-line-number="44"></span>
<span data-line-number="45"><span style="color: #DBD7CAEE">400 에러 발생 시 스프링 기본 에러 페이지가 노출된다는 것은, 해당 응답(HTML 본문과 헤더)은 C -&gt; B -&gt; A -&gt; Client 흐름을 문제없이 통과한다는 의미입니다.</span></span>
<span data-line-number="46"></span>
<span data-line-number="47"><span style="color: #DBD7CAEE">이는 네트워크 연결 자체의 문제가 아님을 시사합니다. 성공적인 200 OK 응답과 실패한 400 Bad Request 응답 사이에 존재하는 차이점이 문제의 핵심입니다.</span></span>
<span data-line-number="48"></span>
<span data-line-number="49"><span style="color: #DBD7CAEE">🎯 예상 원인</span></span>
<span data-line-number="50"><span style="color: #DBD7CAEE">성공(200) 응답과 실패(400) 응답의 가장 큰 차이는 보통 응답 본문(Response Body)의 크기나 종류, 그리고 특정 HTTP 헤더에 있습니다.</span></span>
<span data-line-number="51"></span>
<span data-line-number="52"><span style="color: #D4976C">1.</span><span style="color: #DBD7CAEE"> HTTP 헤더 불일치 또는 누락 (가장 유력)</span></span>
<span data-line-number="53"><span style="color: #DBD7CAEE">   Content-Length vs Transfer-Encoding: chunked: Nest.js 서비스는 응답 크기를 명시하는 Content-Length 헤더를 사용할 수 있지만, Spring 애플리케이션은 기본적으로 응답을 조각내서 보내는 Transfer-Encoding: chunked 방식을 사용하는 경우가 많습니다. Express 프록시 서버(B)의 프록시 미들웨어(예: http-proxy-middleware)가 이 chunked 인코딩을 제대로 처리하지 못하고 연결을 조기에 종료하면, nginx(A)는 불완전한 응답을 받게 되어 502 오류를 발생시킬 수 있습니다.</span></span>
<span data-line-number="54"></span>
<span data-line-number="55"><span style="color: #DBD7CAEE">Connection 또는 Keep-Alive 헤더: B가 C로부터 받은 Connection 관련 헤더를 A로 전달하는 과정에서 문제가 생겨 연결이 비정상적으로 종료될 수 있습니다.</span></span>
<span data-line-number="56"></span>
<span data-line-number="57"><span style="color: #DBD7CAEE">... 답변이 길어 생략함</span></span>
</code></pre> <p>답변을 보고 실제 로컬 호스트에서 <code>curl</code>을 이용하여 동일한 엔드포인트에 각각 요청을 보냈다.</p> <h2 id="근본적인-문제-확인"><a aria-hidden="true" tabindex="-1" href="#근본적인-문제-확인"><span class="icon icon-link"></span></a>근본적인 문제 확인</h2> <p>이어서 C 서비스와 프록시 서버로 요청한 것의 로그의 헤더를 GEMINI에게 제공했고, 문제의 원인을 알아냈다.</p> <pre data-code-title="C 서버로 직접 요청"><code><span data-line-number="1"><span style="color: #DBD7CAEE">HTTP/1.1 200</span></span>
<span data-line-number="2"><span style="color: #DBD7CAEE">...</span></span>
<span data-line-number="3"><span style="color: #DBD7CAEE">Transfer-Encoding: chunked</span></span>
<span data-line-number="4"><span style="color: #DBD7CAEE">...</span></span>
</code></pre> <pre data-code-title="프록시 서버로 요청"><code><span data-line-number="1"><span style="color: #DBD7CAEE">HTTP/1.1 200 OK</span></span>
<span data-line-number="2"><span style="color: #DBD7CAEE">...</span></span>
<span data-line-number="3"><span style="color: #DBD7CAEE">Transfer-Encoding: chunked // </span><span style="color: #CB7676">&lt;</span><span style="color: #DBD7CAEE">-- C로부터 받은 원본 헤더</span></span>
<span data-line-number="4"><span style="color: #DBD7CAEE">...</span></span>
<span data-line-number="5"><span style="color: #DBD7CAEE">Connection: close</span></span>
<span data-line-number="6"><span style="color: #DBD7CAEE">X-Powered-By: Express</span></span>
<span data-line-number="7"><span style="color: #DBD7CAEE">Transfer-Encoding: chunked // </span><span style="color: #CB7676">&lt;</span><span style="color: #DBD7CAEE">-- Express가 추가한 것으로 추정되는 중복 헤더</span></span>
</code></pre> <p>nginx가 잘못된 헤더로 인해 502 에러를 발생시키는 것이 확실해졌다.</p> <h1 id="해결"><a aria-hidden="true" tabindex="-1" href="#해결"><span class="icon icon-link"></span></a>해결</h1> <p>문제 해결을 위해 내가 한 작업은 단순했다.</p> <p>중복헤더를 방지하기 위해서 프록시 서버에서 관련 헤더를 제거하는 작업을 진행했다.</p> <p>자바 스프링으로 만들어진 서버에만 적용하면 되므로, 각 엔드포인트마다 적용해주었다.</p> <pre><code><span data-line-number="1"><span style="color: #BD976A">proxyRouter</span><span style="color: #666666">.</span><span style="color: #80A665">use</span><span style="color: #666666">(</span></span>
<span data-line-number="2"><span style="color: #DBD7CAEE">  </span><span style="color: #C98A7DAA">&quot;</span><span style="color: #C98A7D">/place</span><span style="color: #C98A7DAA">&quot;</span><span style="color: #666666">,</span></span>
<span data-line-number="3"><span style="color: #DBD7CAEE">  </span><span style="color: #80A665">createProxyMiddleware</span><span style="color: #666666">&lt;</span><span style="color: #5DA9A7">Request</span><span style="color: #666666">,</span><span style="color: #DBD7CAEE"> </span><span style="color: #5DA9A7">Response</span><span style="color: #666666">&gt;(&#123;</span></span>
<span data-line-number="4"><span style="color: #DBD7CAEE">    </span><span style="color: #B8A965">target</span><span style="color: #666666">:</span><span style="color: #DBD7CAEE"> </span><span style="color: #BD976A">PLACE_BASE_URL</span><span style="color: #666666">,</span></span>
<span data-line-number="5"><span style="color: #DBD7CAEE">    </span><span style="color: #B8A965">logger</span><span style="color: #666666">:</span><span style="color: #DBD7CAEE"> </span><span style="color: #BD976A">console</span><span style="color: #666666">,</span></span>
<span data-line-number="6"><span style="color: #DBD7CAEE">    </span><span style="color: #B8A965">on</span><span style="color: #666666">:</span><span style="color: #DBD7CAEE"> </span><span style="color: #666666">&#123;</span></span>
<span data-line-number="7"><span style="color: #DBD7CAEE">      </span><span style="color: #80A665">proxyRes</span><span style="color: #666666">:</span><span style="color: #DBD7CAEE"> </span><span style="color: #666666">(</span><span style="color: #BD976A">proxyRes</span><span style="color: #666666">,</span><span style="color: #DBD7CAEE"> </span><span style="color: #BD976A">req</span><span style="color: #666666">,</span><span style="color: #DBD7CAEE"> </span><span style="color: #BD976A">res</span><span style="color: #666666">)</span><span style="color: #DBD7CAEE"> </span><span style="color: #666666">=&gt;</span><span style="color: #DBD7CAEE"> </span><span style="color: #666666">&#123;</span></span>
<span data-line-number="8"><span style="color: #DBD7CAEE">        </span><span style="color: #CB7676">delete</span><span style="color: #DBD7CAEE"> </span><span style="color: #BD976A">proxyRes</span><span style="color: #666666">.</span><span style="color: #BD976A">headers</span><span style="color: #666666">[</span><span style="color: #C98A7DAA">&quot;</span><span style="color: #C98A7D">transfer-encoding</span><span style="color: #C98A7DAA">&quot;</span><span style="color: #666666">];</span></span>
<span data-line-number="9"><span style="color: #DBD7CAEE">      </span><span style="color: #666666">&#125;,</span></span>
<span data-line-number="10"><span style="color: #DBD7CAEE">    </span><span style="color: #666666">&#125;,</span></span>
<span data-line-number="11"><span style="color: #DBD7CAEE">  </span><span style="color: #666666">&#125;)</span></span>
<span data-line-number="12"><span style="color: #666666">);</span></span>
</code></pre> <h1 id="관련-이슈-github"><a aria-hidden="true" tabindex="-1" href="#관련-이슈-github"><span class="icon icon-link"></span></a>관련 이슈: Github</h1> <p><a href="https://github.com/chimurai/http-proxy-middleware" rel="nofollow">http-proxy-middleware</a></p> <p>비슷한 이슈가 있는지 찾아보기 위해 <code>transfer-encoding</code>이라는 키워드로 검색을 해봤다.</p> <p>동일한 이슈와 토론이 존재했다.</p> <p><a href="https://github.com/chimurai/http-proxy-middleware/discussions/574" rel="nofollow">Transfer-Encoding chunked and routing seems to cause a problem #574</a> <a href="https://github.com/chimurai/http-proxy-middleware/issues/324" rel="nofollow">Transfer-Encoding chunked and routing seems to cause a problem #324</a></p> <h1 id="관련-게시글"><a aria-hidden="true" tabindex="-1" href="#관련-게시글"><span class="icon icon-link"></span></a>관련 게시글</h1> <p>작성 예정: HTTP Header: transfer-encoding란 무엇일까? - Nestjs(Express)와 Java Spring에서의 헤더</p>`,1);function F(i){var a=j(),p=C(B(a),4);H(p,{src:"/images/resolving-nginx-express-proxy-502-error-image-1.jpeg",caption:"아주 간단한 서버 아키텍처"}),k(78),r(i,a)}export{F as default,S as metadata};
