const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/qxxXB_YK.js","../chunks/DsnmJJEf.js","../chunks/BKK0jMZx.js","../chunks/Bnp0l1rp.js","../chunks/z-bQpRcx.js","../chunks/CXjft6v8.js","../chunks/D8iWDPq2.js","../chunks/D29xPeYc.js","../chunks/CUAmxqjn.js"])))=>i.map(i=>d[i]);
import{_ as L}from"../chunks/D9Z9MdNV.js";import{H as et}from"../chunks/D0iwhpLH.js";import{P as rt,f as at}from"../chunks/BAnjKx80.js";import"../chunks/DsnmJJEf.js";import{Z as T,_ as A,$ as ot,a0 as F,a1 as st,W as _,a2 as nt,V as w,aq as d,ar as i,at as y,au as P,av as it,as as s,aw as ct,w as U}from"../chunks/Bnp0l1rp.js";import{i as lt}from"../chunks/CXjft6v8.js";import{I as mt,a as W,i as Z}from"../chunks/M84yQVy7.js";import{a as n,b as dt}from"../chunks/D8iWDPq2.js";import"../chunks/BKK0jMZx.js";import{o as pt,a as vt}from"../chunks/kdTHykGj.js";import{i as gt}from"../chunks/BR7wxYWc.js";import{s as ut,r as ht}from"../chunks/D29xPeYc.js";function ft(a,t){T(t,!0);/**
 * @license @lucide/svelte v0.555.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let e=ht(t,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}]];mt(a,ut({name:"calendar"},()=>e,{get iconNode(){return r},children:(c,p)=>{var v=ot(),g=F(v);st(g,()=>t.children??nt),_(c,v)},$$slots:{default:!0}})),A()}const _t=(a,t,e)=>{const r=a[t];return r?typeof r=="function"?r():Promise.resolve(r):new Promise((c,p)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(p.bind(null,new Error("Unknown variable dynamic import: "+t+(t.split("/").length!==e?". Note that variables only represent file names one level deep.":""))))})};function B(a,t){throw new et(a,t)}const xt=async({params:a})=>{try{const t=await _t(Object.assign({"../../../../posts/creating-a-dev-blog-with-sveltekit-part-1.md":()=>L(()=>import("../chunks/qxxXB_YK.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),"../../../../posts/resolving-nginx-express-proxy-502-error.md":()=>L(()=>import("../chunks/z-bQpRcx.js"),__vite__mapDeps([4,1,2,3,5,6,7]),import.meta.url),"../../../../posts/using-bitmachina-highlighter-with-mdsvex.md":()=>L(()=>import("../chunks/CUAmxqjn.js"),__vite__mapDeps([8,1,2,3]),import.meta.url)}),`../../../../posts/${a.slug}.md`,6),e=rt.parse(t.metadata);return{PostContent:t.default,meta:{...e,slug:a.slug}}}catch(t){t instanceof Error&&B(404,{message:"The post does not exist."}),B(500,t)}},Vt=Object.freeze(Object.defineProperty({__proto__:null,load:xt},Symbol.toStringTag,{value:"Module"}));function bt(a,t){T(t,!1);function e(){const c=document.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]"),p=document.querySelectorAll(".toc .toc-link");if(c.length===0||p.length===0)return{destroy:()=>{}};const v=new Map;p.forEach(l=>{const h=l.getAttribute("href");h&&v.set(h.substring(1),l)});let g=null;const u=new IntersectionObserver(l=>{l.forEach(h=>{if(h.isIntersecting){const x=h.target.id,f=v.get(x);f&&(g?.classList.remove("highlight"),f.classList.add("highlight"),g=f)}})},{rootMargin:"-50px 0px -75% 0px"});return c.forEach(l=>u.observe(l)),{destroy:()=>u.disconnect()}}let r;pt(()=>{r=e()}),vt(()=>{r&&r.destroy()}),gt(),A()}var yt=w('<a class="text-primary/50 hover:text-primary border-border hover:bg-accent flex items-center rounded-xl border px-1 text-sm transition-colors duration-200"> </a>');function wt(a,t){var e=yt(),r=d(e);i(e),y(c=>{n(e,"href",c),P(r,`#${t.tag??""}`)},[()=>`/blog?tag=${encodeURIComponent(t.tag)}`]),_(a,e)}var kt=w('<div class="border-border rounded-xl border px-1.5 py-0.5"><a class="text-primary/70 hover:text-primary text-sm transition-colors duration-200"> </a></div>');function Pt(a,t){var e=kt(),r=d(e),c=d(r,!0);i(r),i(e),y(p=>{n(r,"href",p),P(c,t.category)},[()=>`/blog?category=${encodeURIComponent(t.category)}`]),_(a,e)}var Mt=w('<meta data-key="description" name="description"/> <meta property="og:type" content="article"/> <meta property="og:title"/> <meta name="twitter:title"/> <meta property="og:description"/> <meta name="twitter:description"/> <meta property="og:image:width"/> <meta property="og:image:height"/>',1),Et=w('<img class="mb-8 size-full object-cover"/>'),It=w('<article class="mt-header mx-auto w-full max-w-3xl px-4 pb-36"><header class="mb-8 text-center md:mb-12"><!> <section class="mb-4 flex flex-wrap justify-center gap-2"></section> <h1 class="mb-4 text-3xl font-bold break-words break-keep md:text-5xl"> </h1> <section class="flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400"><div class="flex items-center space-x-1"><!> <span> </span></div></section></header> <section class="prose dark:prose-invert prose-lime max-w-none"><!> <!></section> <footer class="border-t-border mt-24 border-t py-4"><section class="flex flex-wrap gap-2"></section></footer></article>');function zt(a,t){T(t,!0);const{title:e,description:r,date:c,tags:p,categories:v,coverImage:g,coverWidth:u,coverHeight:l}=t.data.meta,{PostContent:h}=t.data;var x=It();it(m=>{var o=Mt(),b=F(o),k=s(b,4),H=s(k,2),V=s(H,2),z=s(V,2),N=s(z,2),X=s(N,2);y((Y,tt)=>{ct.title=e,n(b,"content",r),n(k,"content",e),n(H,"content",e),n(V,"content",r),n(z,"content",r),n(N,"content",Y),n(X,"content",tt)},[()=>String(u),()=>String(l)]),_(m,o)});var f=d(x),O=d(f);{var G=m=>{var o=Et();let b;y(k=>{n(o,"src",g),n(o,"alt",e),n(o,"width",u),n(o,"height",l),b=dt(o,"",b,k)},[()=>({"aspect-ratio":u&&l&&u/l})]),_(m,o)};lt(O,m=>{g&&m(G)})}var M=s(O,2);W(M,21,()=>v,Z,(m,o)=>{Pt(m,{get category(){return U(o)}})}),i(M);var E=s(M,2),J=d(E,!0);i(E);var S=s(E,2),$=d(S),j=d($);ft(j,{class:"size-4"});var D=s(j,2),K=d(D,!0);i(D),i($),i(S),i(f);var I=s(f,2),R=d(I);bt(R,{});var Q=s(R,2);h(Q,{}),i(I);var q=s(I,2),C=d(q);W(C,21,()=>p,Z,(m,o)=>{wt(m,{get tag(){return U(o)}})}),i(C),i(q),i(x),y(m=>{P(J,e),P(K,m)},[()=>at(c)]),_(a,x),A()}export{zt as component,Vt as universal};
