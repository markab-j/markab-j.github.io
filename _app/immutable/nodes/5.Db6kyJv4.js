const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/BHEhJdQm.js","../chunks/DsnmJJEf.js","../chunks/BSaoW0-a.js","../chunks/BS4WBKuF.js"])))=>i.map(i=>d[i]);
import{_ as tt}from"../chunks/D9Z9MdNV.js";import{H as et}from"../chunks/D0iwhpLH.js";import{P as rt,f as at}from"../chunks/BAnjKx80.js";import"../chunks/DsnmJJEf.js";import{p as j,b as L,ah as ot,ai as F,aj as st,a as _,ak as nt,f as w,al as d,am as i,ao as y,ap as M,h as it,an as s,$ as ct,q as U}from"../chunks/BS4WBKuF.js";import{s as lt,r as mt,i as dt}from"../chunks/CQ0ombqT.js";import{e as V,i as W}from"../chunks/CortzV7x.js";import{s as n,b as pt}from"../chunks/CdUd5Unv.js";import"../chunks/BSaoW0-a.js";import{o as vt,a as gt}from"../chunks/rxk-gnaZ.js";import{i as ft}from"../chunks/ChMG5RYr.js";import{I as ht}from"../chunks/ikFikokw.js";function ut(a,t){j(t,!0);/**
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
 */let e=mt(t,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}]];ht(a,lt({name:"calendar"},()=>e,{get iconNode(){return r},children:(c,p)=>{var v=ot(),g=F(v);st(g,()=>t.children??nt),_(c,v)},$$slots:{default:!0}})),L()}const _t=(a,t,e)=>{const r=a[t];return r?typeof r=="function"?r():Promise.resolve(r):new Promise((c,p)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(p.bind(null,new Error("Unknown variable dynamic import: "+t+(t.split("/").length!==e?". Note that variables only represent file names one level deep.":""))))})};function B(a,t){throw new et(a,t)}const xt=async({params:a})=>{try{const t=await _t(Object.assign({"../../../../posts/creating-a-dev-blog-with-sveltekit-part-1.md":()=>tt(()=>import("../chunks/BHEhJdQm.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)}),`../../../../posts/${a.slug}.md`,6),e=rt.parse(t.metadata);return{PostContent:t.default,meta:{...e,slug:a.slug}}}catch(t){t instanceof Error&&B(404,{message:"The post does not exist."}),B(500,t)}},zt=Object.freeze(Object.defineProperty({__proto__:null,load:xt},Symbol.toStringTag,{value:"Module"}));function bt(a,t){j(t,!1);function e(){const c=document.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]"),p=document.querySelectorAll(".toc .toc-link");if(c.length===0||p.length===0)return{destroy:()=>{}};const v=new Map;p.forEach(l=>{const h=l.getAttribute("href");h&&v.set(h.substring(1),l)});let g=null;const f=new IntersectionObserver(l=>{l.forEach(h=>{if(h.isIntersecting){const x=h.target.id,u=v.get(x);u&&(g?.classList.remove("highlight"),u.classList.add("highlight"),g=u)}})},{rootMargin:"-50px 0px -75% 0px"});return c.forEach(l=>f.observe(l)),{destroy:()=>f.disconnect()}}let r;vt(()=>{r=e()}),gt(()=>{r&&r.destroy()}),ft(),L()}var yt=w('<a class="text-primary/50 hover:text-primary border-border hover:bg-accent flex items-center rounded-xl border px-1 text-sm transition-colors duration-200"> </a>');function wt(a,t){var e=yt(),r=d(e);i(e),y(c=>{n(e,"href",c),M(r,`#${t.tag??""}`)},[()=>`/blog?tag=${encodeURIComponent(t.tag)}`]),_(a,e)}var kt=w('<div class="border-border rounded-xl border px-1.5 py-0.5"><a class="text-primary/70 hover:text-primary text-sm transition-colors duration-200"> </a></div>');function Mt(a,t){var e=kt(),r=d(e),c=d(r,!0);i(r),i(e),y(p=>{n(r,"href",p),M(c,t.category)},[()=>`/blog?category=${encodeURIComponent(t.category)}`]),_(a,e)}var Pt=w('<meta data-key="description" name="description"/> <meta property="og:type" content="article"/> <meta property="og:title"/> <meta name="twitter:title"/> <meta property="og:description"/> <meta name="twitter:description"/> <meta property="og:image:width"/> <meta property="og:image:height"/>',1),It=w('<img class="mb-8 size-full object-cover"/>'),Et=w('<article class="mt-header mx-auto w-full max-w-3xl px-4 pb-36"><header class="mb-8 text-center md:mb-12"><!> <section class="mb-4 flex flex-wrap justify-center gap-2"></section> <h1 class="mb-4 text-3xl font-bold md:text-5xl"> </h1> <section class="flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400"><div class="flex items-center space-x-1"><!> <span> </span></div></section></header> <section class="prose dark:prose-invert max-w-none"><!> <!></section> <footer class="border-t-border mt-24 border-t py-4"><section class="flex flex-wrap gap-2"></section></footer></article>');function Nt(a,t){j(t,!0);const{title:e,description:r,date:c,tags:p,categories:v,coverImage:g,coverWidth:f,coverHeight:l}=t.data.meta,{PostContent:h}=t.data;var x=Et();it(m=>{var o=Pt(),b=F(o),k=s(b,4),H=s(k,2),R=s(H,2),z=s(R,2),N=s(z,2),X=s(N,2);y((Y,Z)=>{ct.title=e,n(b,"content",r),n(k,"content",e),n(H,"content",e),n(R,"content",r),n(z,"content",r),n(N,"content",Y),n(X,"content",Z)},[()=>String(f),()=>String(l)]),_(m,o)});var u=d(x),S=d(u);{var G=m=>{var o=It();let b;y(k=>{n(o,"src",g),n(o,"alt",e),n(o,"width",f),n(o,"height",l),b=pt(o,"",b,k)},[()=>({"aspect-ratio":f&&l&&f/l})]),_(m,o)};dt(S,m=>{g&&m(G)})}var P=s(S,2);V(P,21,()=>v,W,(m,o)=>{Mt(m,{get category(){return U(o)}})}),i(P);var I=s(P,2),J=d(I,!0);i(I);var T=s(I,2),$=d(T),A=d($);ut(A,{class:"size-4"});var O=s(A,2),K=d(O,!0);i(O),i($),i(T),i(u);var E=s(u,2),q=d(E);bt(q,{});var Q=s(q,2);h(Q,{}),i(E);var C=s(E,2),D=d(C);V(D,21,()=>p,W,(m,o)=>{wt(m,{get tag(){return U(o)}})}),i(D),i(C),i(x),y(m=>{M(J,e),M(K,m)},[()=>at(c)]),_(a,x),L()}export{Nt as component,zt as universal};
