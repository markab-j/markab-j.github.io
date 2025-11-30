const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/Cc9E4W5Q.js","../chunks/DsnmJJEf.js","../chunks/CfFnPjZS.js","../chunks/AXlEUnx1.js","../chunks/CswxgdGL.js","../chunks/DnYoE1xT.js","../chunks/Du_6b2bp.js","../chunks/2LXh4rER.js","../chunks/BL3WVm2h.js","../chunks/B6wQRewR.js"])))=>i.map(i=>d[i]);
import{_ as L}from"../chunks/D9Z9MdNV.js";import{H as et}from"../chunks/D0iwhpLH.js";import{P as rt,f as at}from"../chunks/BAnjKx80.js";import"../chunks/DsnmJJEf.js";import{ah as T,ai as A,aj as ot,ak as K,al as st,ae as _,am as nt,ad as w,aF as d,aG as i,aI as y,aJ as P,aK as it,aH as s,aL as ct,w as V}from"../chunks/AXlEUnx1.js";import{i as lt}from"../chunks/DnYoE1xT.js";import{e as F,i as G}from"../chunks/xuJAD5g0.js";import{s as n,b as mt}from"../chunks/Du_6b2bp.js";import"../chunks/CfFnPjZS.js";import{o as dt,a as pt}from"../chunks/BsZspOYE.js";import{i as vt}from"../chunks/34I35vC5.js";import{s as gt,r as ht}from"../chunks/2LXh4rER.js";import{I as ut}from"../chunks/a_N2iMjy.js";function ft(a,t){T(t,!0);/**
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
 */let e=ht(t,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}]];ut(a,gt({name:"calendar"},()=>e,{get iconNode(){return r},children:(c,p)=>{var v=ot(),g=K(v);st(g,()=>t.children??nt),_(c,v)},$$slots:{default:!0}})),A()}const _t=(a,t,e)=>{const r=a[t];return r?typeof r=="function"?r():Promise.resolve(r):new Promise((c,p)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(p.bind(null,new Error("Unknown variable dynamic import: "+t+(t.split("/").length!==e?". Note that variables only represent file names one level deep.":""))))})};function J(a,t){throw new et(a,t)}const xt=async({params:a})=>{try{const t=await _t(Object.assign({"../../../../posts/creating-a-dev-blog-with-sveltekit-part-1.md":()=>L(()=>import("../chunks/Cc9E4W5Q.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),"../../../../posts/resolving-nginx-express-proxy-502-error.md":()=>L(()=>import("../chunks/CswxgdGL.js"),__vite__mapDeps([4,1,2,3,5,6,7,8]),import.meta.url),"../../../../posts/using-bitmachina-highlighter-with-mdsvex.md":()=>L(()=>import("../chunks/B6wQRewR.js"),__vite__mapDeps([9,1,2,3]),import.meta.url)}),`../../../../posts/${a.slug}.md`,6),e=rt.parse(t.metadata);return{PostContent:t.default,meta:{...e,slug:a.slug}}}catch(t){t instanceof Error&&J(404,{message:"The post does not exist."}),J(500,t)}},Nt=Object.freeze(Object.defineProperty({__proto__:null,load:xt},Symbol.toStringTag,{value:"Module"}));function bt(a,t){T(t,!1);function e(){const c=document.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]"),p=document.querySelectorAll(".toc .toc-link");if(c.length===0||p.length===0)return{destroy:()=>{}};const v=new Map;p.forEach(l=>{const u=l.getAttribute("href");u&&v.set(u.substring(1),l)});let g=null;const h=new IntersectionObserver(l=>{l.forEach(u=>{if(u.isIntersecting){const x=u.target.id,f=v.get(x);f&&(g?.classList.remove("highlight"),f.classList.add("highlight"),g=f)}})},{rootMargin:"-50px 0px -75% 0px"});return c.forEach(l=>h.observe(l)),{destroy:()=>h.disconnect()}}let r;dt(()=>{r=e()}),pt(()=>{r&&r.destroy()}),vt(),A()}var yt=w('<a class="text-primary/50 hover:text-primary border-border hover:bg-accent flex items-center rounded-xl border px-1 text-sm transition-colors duration-200"> </a>');function wt(a,t){var e=yt(),r=d(e);i(e),y(c=>{n(e,"href",c),P(r,`#${t.tag??""}`)},[()=>`/blog?tag=${encodeURIComponent(t.tag)}`]),_(a,e)}var kt=w('<div class="border-border rounded-xl border px-1.5 py-0.5"><a class="text-primary/70 hover:text-primary text-sm transition-colors duration-200"> </a></div>');function Pt(a,t){var e=kt(),r=d(e),c=d(r,!0);i(r),i(e),y(p=>{n(r,"href",p),P(c,t.category)},[()=>`/blog?category=${encodeURIComponent(t.category)}`]),_(a,e)}var It=w('<meta data-key="description" name="description"/> <meta property="og:type" content="article"/> <meta property="og:title"/> <meta name="twitter:title"/> <meta property="og:description"/> <meta name="twitter:description"/> <meta property="og:image:width"/> <meta property="og:image:height"/>',1),Mt=w('<img class="mb-8 size-full object-cover"/>'),Et=w('<article class="mt-header mx-auto w-full max-w-3xl px-4 pb-36"><header class="mb-8 text-center md:mb-12"><!> <section class="mb-4 flex flex-wrap justify-center gap-2"></section> <h1 class="mb-4 text-3xl font-bold break-words break-keep md:text-5xl"> </h1> <section class="flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400"><div class="flex items-center space-x-1"><!> <span> </span></div></section></header> <section class="prose dark:prose-invert prose-lime max-w-none"><!> <!></section> <footer class="border-t-border mt-24 border-t py-4"><section class="flex flex-wrap gap-2"></section></footer></article>');function Ut(a,t){T(t,!0);const{title:e,description:r,date:c,tags:p,categories:v,coverImage:g,coverWidth:h,coverHeight:l}=t.data.meta,{PostContent:u}=t.data;var x=Et();it(m=>{var o=It(),b=K(o),k=s(b,4),q=s(k,2),z=s(q,2),N=s(z,2),U=s(N,2),Y=s(U,2);y((Z,tt)=>{ct.title=e,n(b,"content",r),n(k,"content",e),n(q,"content",e),n(z,"content",r),n(N,"content",r),n(U,"content",Z),n(Y,"content",tt)},[()=>String(h),()=>String(l)]),_(m,o)});var f=d(x),O=d(f);{var W=m=>{var o=Mt();let b;y(k=>{n(o,"src",g),n(o,"alt",e),n(o,"width",h),n(o,"height",l),b=mt(o,"",b,k)},[()=>({"aspect-ratio":h&&l&&h/l})]),_(m,o)};lt(O,m=>{g&&m(W)})}var I=s(O,2);F(I,21,()=>v,G,(m,o)=>{Pt(m,{get category(){return V(o)}})}),i(I);var M=s(I,2),B=d(M,!0);i(M);var j=s(M,2),S=d(j),D=d(S);ft(D,{class:"size-4"});var R=s(D,2),Q=d(R,!0);i(R),i(S),i(j),i(f);var E=s(f,2),$=d(E);bt($,{});var X=s($,2);u(X,{}),i(E);var C=s(E,2),H=d(C);F(H,21,()=>p,G,(m,o)=>{wt(m,{get tag(){return V(o)}})}),i(H),i(C),i(x),y(m=>{P(B,e),P(Q,m)},[()=>at(c)]),_(a,x),A()}export{Ut as component,Nt as universal};
