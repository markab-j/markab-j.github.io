const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/BOunBc9J.js","../chunks/DsnmJJEf.js","../chunks/BSaoW0-a.js","../chunks/BS4WBKuF.js","../chunks/DE_kKLXU.js","../chunks/CQ0ombqT.js","../chunks/_jRDplJJ.js","../chunks/DeKqOyES.js"])))=>i.map(i=>d[i]);
import{_ as L}from"../chunks/D9Z9MdNV.js";import{H as et}from"../chunks/D0iwhpLH.js";import{P as rt,f as at}from"../chunks/BAnjKx80.js";import"../chunks/DsnmJJEf.js";import{p as T,b as A,ah as ot,ai as G,aj as st,a as _,ak as nt,f as w,al as d,am as i,ao as y,ap as P,h as it,an as s,$ as ct,q as V}from"../chunks/BS4WBKuF.js";import{s as lt,r as mt,i as dt}from"../chunks/CQ0ombqT.js";import{e as W,i as B}from"../chunks/CortzV7x.js";import{s as n,b as pt}from"../chunks/_jRDplJJ.js";import"../chunks/BSaoW0-a.js";import{o as vt,a as gt}from"../chunks/rxk-gnaZ.js";import{i as ht}from"../chunks/ChMG5RYr.js";import{I as ut}from"../chunks/pGKrqhOt.js";function ft(a,t){T(t,!0);/**
 * @license @lucide/svelte v0.542.0 - ISC
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
 */let e=mt(t,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}]];ut(a,lt({name:"calendar"},()=>e,{get iconNode(){return r},children:(c,p)=>{var v=ot(),g=G(v);st(g,()=>t.children??nt),_(c,v)},$$slots:{default:!0}})),A()}const _t=(a,t,e)=>{const r=a[t];return r?typeof r=="function"?r():Promise.resolve(r):new Promise((c,p)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(p.bind(null,new Error("Unknown variable dynamic import: "+t+(t.split("/").length!==e?". Note that variables only represent file names one level deep.":""))))})};function F(a,t){throw new et(a,t)}const xt=async({params:a})=>{try{const t=await _t(Object.assign({"../../../../posts/creating-a-dev-blog-with-sveltekit-part-1.md":()=>L(()=>import("../chunks/BOunBc9J.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),"../../../../posts/resolving-nginx-express-proxy-502-error.md":()=>L(()=>import("../chunks/DE_kKLXU.js"),__vite__mapDeps([4,1,2,3,5,6]),import.meta.url),"../../../../posts/using-bitmachina-highlighter-with-mdsvex.md":()=>L(()=>import("../chunks/DeKqOyES.js"),__vite__mapDeps([7,1,2,3]),import.meta.url)}),`../../../../posts/${a.slug}.md`,6),e=rt.parse(t.metadata);return{PostContent:t.default,meta:{...e,slug:a.slug}}}catch(t){t instanceof Error&&F(404,{message:"The post does not exist."}),F(500,t)}},zt=Object.freeze(Object.defineProperty({__proto__:null,load:xt},Symbol.toStringTag,{value:"Module"}));function bt(a,t){T(t,!1);function e(){const c=document.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]"),p=document.querySelectorAll(".toc .toc-link");if(c.length===0||p.length===0)return{destroy:()=>{}};const v=new Map;p.forEach(l=>{const u=l.getAttribute("href");u&&v.set(u.substring(1),l)});let g=null;const h=new IntersectionObserver(l=>{l.forEach(u=>{if(u.isIntersecting){const x=u.target.id,f=v.get(x);f&&(g?.classList.remove("highlight"),f.classList.add("highlight"),g=f)}})},{rootMargin:"-50px 0px -75% 0px"});return c.forEach(l=>h.observe(l)),{destroy:()=>h.disconnect()}}let r;vt(()=>{r=e()}),gt(()=>{r&&r.destroy()}),ht(),A()}var yt=w('<a class="text-primary/50 hover:text-primary border-border hover:bg-accent flex items-center rounded-xl border px-1 text-sm transition-colors duration-200"> </a>');function wt(a,t){var e=yt(),r=d(e);i(e),y(c=>{n(e,"href",c),P(r,`#${t.tag??""}`)},[()=>`/blog?tag=${encodeURIComponent(t.tag)}`]),_(a,e)}var kt=w('<div class="border-border rounded-xl border px-1.5 py-0.5"><a class="text-primary/70 hover:text-primary text-sm transition-colors duration-200"> </a></div>');function Pt(a,t){var e=kt(),r=d(e),c=d(r,!0);i(r),i(e),y(p=>{n(r,"href",p),P(c,t.category)},[()=>`/blog?category=${encodeURIComponent(t.category)}`]),_(a,e)}var Mt=w('<meta data-key="description" name="description"/> <meta property="og:type" content="article"/> <meta property="og:title"/> <meta name="twitter:title"/> <meta property="og:description"/> <meta name="twitter:description"/> <meta property="og:image:width"/> <meta property="og:image:height"/>',1),Et=w('<img class="mb-8 size-full object-cover"/>'),It=w('<article class="mt-header mx-auto w-full max-w-3xl px-4 pb-36"><header class="mb-8 text-center md:mb-12"><!> <section class="mb-4 flex flex-wrap justify-center gap-2"></section> <h1 class="mb-4 text-3xl font-bold md:text-5xl break-words break-keep"> </h1> <section class="flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400"><div class="flex items-center space-x-1"><!> <span> </span></div></section></header> <section class="prose dark:prose-invert prose-lime max-w-none"><!> <!></section> <footer class="border-t-border mt-24 border-t py-4"><section class="flex flex-wrap gap-2"></section></footer></article>');function Nt(a,t){T(t,!0);const{title:e,description:r,date:c,tags:p,categories:v,coverImage:g,coverWidth:h,coverHeight:l}=t.data.meta,{PostContent:u}=t.data;var x=It();it(m=>{var o=Mt(),b=G(o),k=s(b,4),H=s(k,2),z=s(H,2),N=s(z,2),U=s(N,2),Y=s(U,2);y((Z,tt)=>{ct.title=e,n(b,"content",r),n(k,"content",e),n(H,"content",e),n(z,"content",r),n(N,"content",r),n(U,"content",Z),n(Y,"content",tt)},[()=>String(h),()=>String(l)]),_(m,o)});var f=d(x),O=d(f);{var J=m=>{var o=Et();let b;y(k=>{n(o,"src",g),n(o,"alt",e),n(o,"width",h),n(o,"height",l),b=pt(o,"",b,k)},[()=>({"aspect-ratio":h&&l&&h/l})]),_(m,o)};dt(O,m=>{g&&m(J)})}var M=s(O,2);W(M,21,()=>v,B,(m,o)=>{Pt(m,{get category(){return V(o)}})}),i(M);var E=s(M,2),K=d(E,!0);i(E);var j=s(E,2),S=d(j),$=d(S);ft($,{class:"size-4"});var D=s($,2),Q=d(D,!0);i(D),i(S),i(j),i(f);var I=s(f,2),R=d(I);bt(R,{});var X=s(R,2);u(X,{}),i(I);var q=s(I,2),C=d(q);W(C,21,()=>p,B,(m,o)=>{wt(m,{get tag(){return V(o)}})}),i(C),i(q),i(x),y(m=>{P(K,e),P(Q,m)},[()=>at(c)]),_(a,x),A()}export{Nt as component,zt as universal};
