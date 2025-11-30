import"./DsnmJJEf.js";import{e as K,b as ae,ax as re,s as H,h as T,ay as ne,a as Y,w as O,ac as oe,r as de,H as ve,c as X,d as W,k as b,az as ce,aA as _e,f as q,i as he,aB as y,aC as z,g as me,aD as Z,a3 as Ee,ak as j,aE as te,F as pe,j as Q,p as se,aF as we,aG as V,q as Ne,aH as U,aI as ge,aJ as Te,aK as Ae,aL as Ce,aM as Se,af as ie,aN as xe,E as Ie,aO as be,aP as ke,aQ as Me,Z as De,aR as Re,a1 as He,W as $,_ as Oe,aq as We,as as Le,a2 as Fe,ar as qe,$ as ye,a0 as ze,aS as Be,aT as Pe}from"./Bnp0l1rp.js";import{d as ee}from"./D8iWDPq2.js";import{p as R,r as Ve}from"./D29xPeYc.js";function Ge(s,a){return a}function Ye(s,a,e){for(var t=s.items,o=[],c=a.length,i=0;i<c;i++)Ae(a[i].e,o,!0);var _=c>0&&o.length===0&&e!==null;if(_){var m=e.parentNode;Ce(m),m.append(e),t.clear(),x(s,a[0].prev,a[c-1].next)}Se(o,()=>{for(var l=0;l<c;l++){var h=a[l];_||(t.delete(h.k),x(s,h.prev,h.next)),U(h.e,!_)}})}function Je(s,a,e,t,o,c=null){var i=s,_={flags:a,items:new Map,first:null},m=(a&re)!==0;if(m){var l=s;i=T?H(ne(l)):l.appendChild(K())}T&&Y();var h=null,E=!1,d=new Map,A=oe(()=>{var p=e();return pe(p)?p:p==null?[]:te(p)}),r,v;function f(){Ke(v,r,_,d,i,o,a,t,e),c!==null&&(r.length===0?h?Q(h):h=q(()=>c(i)):h!==null&&se(h,()=>{h=null}))}ae(()=>{v??=ie,r=O(A);var p=r.length;if(E&&p===0)return;E=p===0;let w=!1;if(T){var C=de(i)===ve;C!==(p===0)&&(i=X(),H(i),W(!1),w=!0)}if(T){for(var I=null,N,n=0;n<p;n++){if(b.nodeType===ce&&b.data===_e){i=b,w=!0,W(!1);break}var u=r[n],g=t(u,n);N=J(b,_,I,null,u,g,n,o,a,e),_.items.set(g,N),I=N}p>0&&H(X())}if(T)p===0&&c&&(h=q(()=>c(i)));else if(he()){var M=new Set,L=me;for(n=0;n<p;n+=1){u=r[n],g=t(u,n);var k=_.items.get(g)??d.get(g);k?(a&(y|z))!==0&&le(k,u,n,a):(N=J(null,_,null,null,u,g,n,o,a,e,!0),d.set(g,N)),M.add(g)}for(const[S,F]of _.items)M.has(S)||L.skipped_effects.add(F.e);L.add_callback(f)}else f();w&&W(!0),O(A)}),T&&(i=b)}function Ke(s,a,e,t,o,c,i,_,m){var l=(i&ge)!==0,h=(i&(y|z))!==0,E=a.length,d=e.items,A=e.first,r=A,v,f=null,p,w=[],C=[],I,N,n,u;if(l)for(u=0;u<E;u+=1)I=a[u],N=_(I,u),n=d.get(N),n!==void 0&&(n.a?.measure(),(p??=new Set).add(n));for(u=0;u<E;u+=1){if(I=a[u],N=_(I,u),n=d.get(N),n===void 0){var g=t.get(N);if(g!==void 0){t.delete(N),d.set(N,g);var M=f?f.next:r;x(e,f,g),x(e,g,M),G(g,M,o),f=g}else{var L=r?r.e.nodes_start:o;f=J(L,e,f,f===null?e.first:f.next,I,N,u,c,i,m)}d.set(N,f),w=[],C=[],r=f.next;continue}if(h&&le(n,I,u,i),(n.e.f&V)!==0&&(Q(n.e),l&&(n.a?.unfix(),(p??=new Set).delete(n))),n!==r){if(v!==void 0&&v.has(n)){if(w.length<C.length){var k=C[0],S;f=k.prev;var F=w[0],B=w[w.length-1];for(S=0;S<w.length;S+=1)G(w[S],k,o);for(S=0;S<C.length;S+=1)v.delete(C[S]);x(e,F.prev,B.next),x(e,f,F),x(e,B,k),r=k,f=B,u-=1,w=[],C=[]}else v.delete(n),G(n,r,o),x(e,n.prev,n.next),x(e,n,f===null?e.first:f.next),x(e,f,n),f=n;continue}for(w=[],C=[];r!==null&&r.k!==N;)(r.e.f&V)===0&&(v??=new Set).add(r),C.push(r),r=r.next;if(r===null)continue;n=r}w.push(n),f=n,r=n.next}if(r!==null||v!==void 0){for(var D=v===void 0?[]:te(v);r!==null;)(r.e.f&V)===0&&D.push(r),r=r.next;var P=D.length;if(P>0){var fe=(i&re)!==0&&E===0?o:null;if(l){for(u=0;u<P;u+=1)D[u].a?.measure();for(u=0;u<P;u+=1)D[u].a?.fix()}Ye(e,D,fe)}}l&&Ne(()=>{if(p!==void 0)for(n of p)n.a?.apply()}),s.first=e.first&&e.first.e,s.last=f&&f.e;for(var ue of t.values())U(ue.e);t.clear()}function le(s,a,e,t){(t&y)!==0&&Z(s.v,a),(t&z)!==0?Z(s.i,e):s.i=e}function J(s,a,e,t,o,c,i,_,m,l,h){var E=(m&y)!==0,d=(m&we)===0,A=E?d?Ee(o,!1,!1):j(o):o,r=(m&z)===0?i:j(i),v={i:r,v:A,k:c,a:null,e:null,prev:e,next:t};try{if(s===null){var f=document.createDocumentFragment();f.append(s=K())}return v.e=q(()=>_(s,A,r,l),T),v.e.prev=e&&e.e,v.e.next=t&&t.e,e===null?h||(a.first=v):(e.next=v,e.e.next=v.e),t!==null&&(t.prev=v,t.e.prev=v.e),v}finally{}}function G(s,a,e){for(var t=s.next?s.next.e.nodes_start:e,o=a?a.e.nodes_start:e,c=s.e.nodes_start;c!==null&&c!==t;){var i=Te(c);o.before(c),c=i}}function x(s,a,e){a===null?s.first=e:(a.next=e,a.e.next=e&&e.e),e!==null&&(e.prev=a,e.e.prev=a&&a.e)}function Qe(s,a,e,t,o,c){let i=T;T&&Y();var _,m,l=null;T&&b.nodeType===xe&&(l=b,Y());var h=T?b:s,E;ae(()=>{const d=a()||null;var A=e||d==="svg"?be:null;d!==_&&(E&&(d===null?se(E,()=>{E=null,m=null}):d===m?Q(E):U(E)),d&&d!==m&&(E=q(()=>{if(l=T?l:A?document.createElementNS(A,d):document.createElement(d),ke(l,l),t){T&&Me(d)&&l.append(document.createComment(""));var r=T?ne(l):l.appendChild(K());T&&(r===null?W(!1):H(r)),t(l,r)}ie.nodes_end=l,h.before(l)})),_=d,_&&(m=_))},Ie),i&&(W(!0),H(h))}/**
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
 */const Ue={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Xe=Re("<svg><!><!></svg>");function aa(s,a){De(a,!0);const e=R(a,"color",3,"currentColor"),t=R(a,"size",3,24),o=R(a,"strokeWidth",3,2),c=R(a,"absoluteStrokeWidth",3,!1),i=R(a,"iconNode",19,()=>[]),_=Ve(a,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var m=Xe();ee(m,E=>({...Ue,..._,width:t(),height:t(),stroke:e(),"stroke-width":E,class:["lucide-icon lucide",a.name&&`lucide-${a.name}`,a.class]}),[()=>c()?Number(o())*24/Number(t()):o()]);var l=We(m);Je(l,17,i,Ge,(E,d)=>{var A=Be(()=>Pe(O(d),2));let r=()=>O(A)[0],v=()=>O(A)[1];var f=ye(),p=ze(f);Qe(p,r,!0,(w,C)=>{ee(w,()=>({...v()}))}),$(E,f)});var h=Le(l);He(h,()=>a.children??Fe),qe(m),$(s,m),Oe()}export{aa as I,Je as a,Qe as e,Ge as i};
