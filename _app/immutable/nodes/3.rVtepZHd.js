import"../chunks/DsnmJJEf.js";import"../chunks/BSaoW0-a.js";import{p as y,ah as H,ai as E,aj as T,ak as U,a as x,b as w,f as p,an as n,al as t,am as e,ao as k,ap as u,q as h,af as N}from"../chunks/BS4WBKuF.js";import{e as M,i as q}from"../chunks/CortzV7x.js";import{s as D,r as K,i as R}from"../chunks/CQ0ombqT.js";import{c as V}from"../chunks/BhmZ4PrW.js";import{s as _}from"../chunks/CdUd5Unv.js";import{G as Y,M as A}from"../chunks/gBUmYNWV.js";import{I as B}from"../chunks/ikFikokw.js";function F(v,r){y(r,!0);/**
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
 */let s=K(r,["$$slots","$$events","$$legacy"]);const l=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"}],["path",{d:"M22 10v6"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5"}]];B(v,D({name:"graduation-cap"},()=>s,{get iconNode(){return l},children:(m,i)=>{var c=H(),a=E(c);T(a,()=>r.children??U),x(m,c)},$$slots:{default:!0}})),w()}var O=p('<span class="rounded-md border border-gray-200 px-2 py-0.5 text-sm font-medium"> </span>'),Q=p('<span class="rounded-md border border-dashed border-gray-200 px-2 py-0.5 text-sm font-medium"> </span>'),W=p('<section class="border-border bg-card/50 space-y-6 rounded-xl border p-8 lg:col-span-2"><h2 class="text-2xl font-bold tracking-tight">Skills</h2> <div><h3 class="text-accent-foreground/80 text-base font-semibold">Proficient</h3> <div class="mt-3 flex flex-wrap gap-2"></div></div> <div><h3 class="text-accent-foreground/80 text-base font-semibold">Learning</h3> <div class="mt-3 flex flex-wrap gap-2"></div></div></section>');function X(v,r){y(r,!0);var s=W(),l=n(t(s),2),m=n(t(l),2);M(m,20,()=>r.skillInfo.proficient,a=>a,(a,d)=>{var o=O(),f=t(o,!0);e(o),k(()=>u(f,d)),x(a,o)}),e(m),e(l);var i=n(l,2),c=n(t(i),2);M(c,20,()=>r.skillInfo.learning,a=>a,(a,d)=>{var o=Q(),f=t(o,!0);e(o),k(()=>u(f,d)),x(a,o)}),e(c),e(i),e(s),x(v,s),w()}var Z=p('<div class="bg-border w-0.5 flex-grow"></div>'),$=p('<li class="flex gap-4"><div class="relative flex flex-col items-center"><div class="bg-background z-10 flex size-8 items-center justify-center rounded-full"><!></div> <!></div> <div class="flex-grow pb-8"><p class="text-muted-foreground text-xs font-medium"> </p> <p class="mt-0.5 text-base font-semibold"> </p> <p class="text-muted-foreground mt-1 text-sm"> </p></div></li>'),ee=p('<section class="mb-4"><h2 class="mb-4 text-center text-2xl font-bold tracking-tight lg:text-left">My Journey</h2> <ul class="flow-root"></ul></section>');function te(v,r){y(r,!0);var s=ee(),l=n(t(s),2);M(l,21,()=>r.timeline,q,(m,i,c)=>{var a=$(),d=t(a),o=t(d),f=t(o);V(f,()=>h(i).icon,(b,z)=>{z(b,{})}),e(o);var g=n(o,2);{var I=b=>{var z=Z();x(b,z)};R(g,b=>{c!==r.timeline.length-1&&b(I)})}e(d);var G=n(d,2),j=t(G),L=t(j,!0);e(j);var S=n(j,2),P=t(S,!0);e(S);var J=n(S,2),C=t(J,!0);e(J),e(G),e(a),k(()=>{u(L,h(i).date),u(P,h(i).title),u(C,h(i).description)}),x(m,a)}),e(l),e(s),x(v,s),w()}var re=p(`<div class="flex flex-col items-center text-center md:flex-row md:items-start md:space-x-12 md:text-left lg:px-8"><div class="flex-shrink-0"><img class="border-foreground/10 size-36 rounded-full border-4 object-cover shadow-lg"/></div> <div class="mt-6 md:mt-0"><h1 class="mt-1 text-4xl font-extrabold tracking-tight sm:text-5xl"> </h1> <p class="text-muted-foreground mt-4 max-w-xl text-lg">만들고 그 결과를 보여주는 순간을 가장 좋아합니다.</p> <div class="mt-6 flex flex-wrap justify-center gap-3 md:justify-start"><a target="_blank" rel="noopener noreferrer external" class="border-input hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center
								 rounded-md border
								 bg-transparent px-4 py-2 text-sm
								 font-medium
								 shadow-sm transition-all hover:shadow-md"><!> GitHub</a> <a rel="external" class="border-input hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center
								 rounded-md border
								 bg-transparent px-4 py-2 text-sm
								 font-medium
								 shadow-sm transition-all hover:shadow-md"><!> Contact</a></div></div></div>`);function ae(v,r){y(r,!0);var s=re(),l=t(s),m=t(l);e(l);var i=n(l,2),c=t(i),a=t(c,!0);e(c);var d=n(c,4),o=t(d),f=t(o);Y(f,{class:"size-icon mr-2"}),N(),e(o);var g=n(o,2),I=t(g);A(I,{class:"size-icon mr-2"}),N(),e(g),e(d),e(i),e(s),k(()=>{_(m,"src",`https://github.com/${r.userInfo.githubId??""}.png`),_(m,"alt",`Profile of ${r.userInfo.nickname??""}`),u(a,r.userInfo.name),_(o,"href",`https://github.com/${r.userInfo.githubId??""}`),_(g,"href",`mailto:${r.userInfo.email??""}`)}),x(v,s),w()}var oe=p('<div class="mt-header"></div> <section class="border-border bg-card/50 mx-auto max-w-5xl border-b px-4 py-10 sm:px-6"><!></section> <section class="mx-auto grid max-w-5xl grid-cols-1 gap-16 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8"><div class="lg:col-span-1"><!></div> <!></section>',1);function xe(v){const r={nickname:"markab-j",name:"Jeong Yehwan",githubId:"markab-j",email:"markab.j.nn@gmail.com"},s={proficient:["TypeScript","JavaScript","Express.js","NestJS"],learning:["React","Svelte","SvelteKit"]},l=[{icon:F,date:"2020 - 2025 (Expected)",title:"Hanbat National University",description:"Dept. of Information and Communication Engineering"}];var m=oe(),i=n(E(m),2),c=t(i);ae(c,{get userInfo(){return r}}),e(i);var a=n(i,2),d=t(a),o=t(d);te(o,{get timeline(){return l}}),e(d);var f=n(d,2);X(f,{get skillInfo(){return s}}),e(a),x(v,m)}export{xe as component};
