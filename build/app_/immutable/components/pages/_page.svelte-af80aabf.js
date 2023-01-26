import{S as se,i as ne,s as ae,e as le,b as j,B as ie,h as d,I as N,J as T,m as w,n as l,G as v,k as L,w as F,a as P,l as I,x as H,c as R,p as ce,K as S,y as O,L as J,M as ee,N as K,O as ve,f as Q,t as U,z as G,P as he,H as de,o as me,A as ge,Q as _e}from"../../chunks/index-e7fb4a95.js";import{w as we}from"../../chunks/index-ab783ea0.js";function be(a,e){const t=window.matchMedia(a),s=t.matches,n=we(s,o=>{n.matches=s,n.recalc=function(){o(t.matches),n.matches=t.matches};const c=_=>{console.info(a,_),n.recalc()};return t.addEventListener("change",c),()=>t.removeEventListener("change",c)});return n}const te=["#fff","#f00","#0f0","#00f","#f0f","#ff0","#0ff"],fe=2;class ke{constructor(){this.el=null,this.interval=null,this.lastTap=null,this.accum=.1,this.held=!1,this.pw=.5,this.wave=0,this.colourIndex=0}numWaves(){return fe}accumulate(e){if(!this.interval)return!1;let t=this.accum+e/this.interval;return t>1&&(t-=1),this.accum=t,!0}update(){let e,t=this.wave%fe;const s=this.pw,n=this.accum;switch(t){case 0:e=n>=s?1-(n-s)/(1-s):n/s;break;case 1:e=this.accum<this.pw?1:0;break;case 2:e=n>=s?1-(n-s)/(1-s):n/s,e=e*e;break}this.el.style.opacity=e}tapped(e){this.lastTap&&(this.interval=e-this.lastTap),this.lastTap=e}colourChange(e){this.colourIndex+=e,this.el&&(this.el.style.backgroundColor=this.colour(),this.el.style.opacity=this.accum)}colour(){let e=this.colourIndex%te.length;return e<0&&(e+=te.length),te[e]}bind(e){e&&(e.length>=1?this.el=e[0]:this.el=e,this.el&&(this.el.style.backgroundColor=this.colour(),this.el.style.opacity=this.accum))}}function ue(a,e,t,s){let n=0,o=s?a.clientX-t.left:a.clientY-t.top;const c=s?a.clientY-t.top:a.clientX-t.left,p=(s?e.clientWidth:e.clientHeight)/2;o>p&&(n=2,o-=p);const b=o/p,u=c/(s?e.clientHeight:e.clientWidth);return b>1-u&&++n,n}function pe(a,e,t){for(const s in e){const n=e[s];n&&a.addEventListener(s,n,t)}}function Z(a,e,t){for(const s in e){const n=e[s];n&&a.removeEventListener(s,n,t)}}function Ee(a,{callback:e,clamped:t}){let s=t!==void 0?!!t:!0,n=e,o,c,_;function p(r,m,h,k){const A=r.clientWidth,C=r.clientHeight;m=m/(A-1),h=h/(C-1),s&&(m=m<0?0:m>1?1:m,h=h<0?0:h>1?1:h),n&&(m!==o||h!==c||k!==_)&&(n(m,h,k),o=m,c=h,_=k)}const b={pointermove(r){r.preventDefault(),r.stopPropagation(),p(r.target,r.offsetX,r.offsetY,"move")},pointerup(r){r.preventDefault(),r.stopPropagation(),Z(a,b,!0),p(r.target,r.offsetX,r.offsetY,"up")},pointercancel(r){r.stopPropagation(),Z(a,b,!0),a.releasePointerCapture(r.pointerId),p(r.target,r.offsetX,r.offsetY,"cancel")}},u={pointerdown(r){r.preventDefault(),r.stopPropagation(),a.setPointerCapture(r.pointerId),p(r.target,r.offsetX,r.offsetY,"down"),pe(a,b,!0)}};return pe(a,u,!0),{update({callback:r,clamped:m}){n=r,s=m!==void 0?!!m:!0},destroy(){Z(a,b,!0),Z(a,u,!0)}}}function Le(a){let e,t,s;return{c(){e=N("svg"),t=N("path"),this.h()},l(n){e=T(n,"svg",{viewBox:!0,preserveAspectRatio:!0});var o=w(e);t=T(o,"path",{fill:!0,"vector-effect":!0,d:!0}),w(t).forEach(d),o.forEach(d),this.h()},h(){l(t,"fill","none"),l(t,"vector-effect","non-scaling-stroke"),l(t,"d",s="M0 10L0 0L"+a[1]*10+" 0L"+a[1]*10+" 10L10 10"),l(e,"viewBox","-2 -2 14 14"),l(e,"preserveAspectRatio","none")},m(n,o){j(n,e,o),v(e,t)},p(n,o){o&2&&s!==(s="M0 10L0 0L"+n[1]*10+" 0L"+n[1]*10+" 10L10 10")&&l(t,"d",s)},d(n){n&&d(e)}}}function Ie(a){let e,t,s;return{c(){e=N("svg"),t=N("path"),this.h()},l(n){e=T(n,"svg",{viewBox:!0,preserveAspectRatio:!0});var o=w(e);t=T(o,"path",{fill:!0,"vector-effect":!0,d:!0}),w(t).forEach(d),o.forEach(d),this.h()},h(){l(t,"fill","none"),l(t,"vector-effect","non-scaling-stroke"),l(t,"d",s="M0 10L"+a[1]*10+" 0L10 10"),l(e,"viewBox","-2 -2 14 14"),l(e,"preserveAspectRatio","none")},m(n,o){j(n,e,o),v(e,t)},p(n,o){o&2&&s!==(s="M0 10L"+n[1]*10+" 0L10 10")&&l(t,"d",s)},d(n){n&&d(e)}}}function $e(a){let e;function t(o,c){if(o[0]===0)return Ie;if(o[0]===1)return Le}let s=t(a),n=s&&s(a);return{c(){n&&n.c(),e=le()},l(o){n&&n.l(o),e=le()},m(o,c){n&&n.m(o,c),j(o,e,c)},p(o,[c]){s===(s=t(o))&&n?n.p(o,c):(n&&n.d(1),n=s&&s(o),n&&(n.c(),n.m(e.parentNode,e)))},i:ie,o:ie,d(o){n&&n.d(o),o&&d(e)}}}function Ae(a,e,t){let{wave:s}=e,{pw:n}=e;return a.$$set=o=>{"wave"in o&&t(0,s=o.wave),"pw"in o&&t(1,n=o.pw)},[s,n]}class Ce extends se{constructor(e){super(),ne(this,e,Ae,$e,ae,{wave:0,pw:1})}}function De(a){let e,t,s,n,o,c,_,p,b,u,r,m,h,k,A,C,V;return s=new Ce({props:{wave:a[1],pw:a[2]}}),{c(){e=L("section"),t=L("div"),F(s.$$.fragment),n=P(),o=L("div"),c=L("div"),_=P(),p=L("div"),b=N("svg"),u=N("path"),r=P(),m=L("div"),h=N("svg"),k=N("path"),this.h()},l(i){e=I(i,"SECTION",{class:!0});var f=w(e);t=I(f,"DIV",{class:!0});var $=w(t);H(s.$$.fragment,$),$.forEach(d),n=R(f),o=I(f,"DIV",{class:!0});var D=w(o);c=I(D,"DIV",{class:!0}),w(c).forEach(d),D.forEach(d),_=R(f),p=I(f,"DIV",{class:!0});var M=w(p);b=T(M,"svg",{viewBox:!0,preserveAspectRatio:!0});var y=w(b);u=T(y,"path",{fill:!0,"vector-effect":!0,d:!0}),w(u).forEach(d),y.forEach(d),M.forEach(d),r=R(f),m=I(f,"DIV",{class:!0});var W=w(m);h=T(W,"svg",{viewBox:!0,preserveAspectRatio:!0});var Y=w(h);k=T(Y,"path",{fill:!0,"vector-effect":!0,d:!0}),w(k).forEach(d),Y.forEach(d),W.forEach(d),f.forEach(d),this.h()},h(){l(t,"class","button svelte-2fe54"),l(c,"class","thumb svelte-2fe54"),l(o,"class","fader svelte-2fe54"),ce(o,"--th",`${a[2]*100}%`),l(u,"fill","none"),l(u,"vector-effect","non-scaling-stroke"),l(u,"d","M8 0L2 5L8 10"),l(b,"viewBox","-4 -4 18 18"),l(b,"preserveAspectRatio","none"),l(p,"class","button svelte-2fe54"),l(k,"fill","none"),l(k,"vector-effect","non-scaling-stroke"),l(k,"d","M2 0L8 5L2 10"),l(h,"viewBox","-4 -4 18 18"),l(h,"preserveAspectRatio","none"),l(m,"class","button svelte-2fe54"),l(e,"class","svelte-2fe54"),S(e,"landscape",a[0]),S(e,"portrait",!a[0])},m(i,f){j(i,e,f),v(e,t),O(s,t,null),v(e,n),v(e,o),v(o,c),v(e,_),v(e,p),v(p,b),v(b,u),v(e,r),v(e,m),v(m,h),v(h,k),A=!0,C||(V=[J(t,"pointerdown",ee(K(a[3]))),ve(Ee.call(null,o,a[6])),J(p,"pointerdown",ee(K(a[4]))),J(m,"pointerdown",ee(K(a[5])))],C=!0)},p(i,[f]){const $={};f&2&&($.wave=i[1]),f&4&&($.pw=i[2]),s.$set($),f&4&&ce(o,"--th",`${i[2]*100}%`),(!A||f&1)&&S(e,"landscape",i[0]),(!A||f&1)&&S(e,"portrait",!i[0])},i(i){A||(Q(s.$$.fragment,i),A=!0)},o(i){U(s.$$.fragment,i),A=!1},d(i){i&&d(e),G(s),C=!1,he(V)}}}function qe(a,e,t){let{flasher:s}=e,{landscape:n}=e,o=s.wave;function c(){t(1,o=t(7,s.wave=(s.wave+1)%s.numWaves(),s))}function _(){s.colourChange(-1)}function p(){s.colourChange(1)}let b=s.pw;const u={callback(r){t(2,b=t(7,s.pw=r,s))},clamped:!0};return a.$$set=r=>{"flasher"in r&&t(7,s=r.flasher),"landscape"in r&&t(0,n=r.landscape)},[n,o,b,c,_,p,u,s]}class x extends se{constructor(e){super(),ne(this,e,qe,De,ae,{flasher:7,landscape:0})}}function Be(a){let e,t,s,n,o,c,_,p,b,u,r,m,h,k,A,C,V,i,f,$,D,M,y,W,Y;return p=new x({props:{flasher:a[0][0],landscape:a[2]}}),r=new x({props:{flasher:a[0][1],landscape:a[2]}}),f=new x({props:{flasher:a[0][2],landscape:a[2]}}),M=new x({props:{flasher:a[0][3],landscape:a[2]}}),{c(){e=L("main"),t=L("div"),s=L("div"),n=P(),o=L("div"),c=P(),_=L("span"),F(p.$$.fragment),b=P(),u=L("span"),F(r.$$.fragment),m=P(),h=L("div"),k=L("div"),A=P(),C=L("div"),V=P(),i=L("span"),F(f.$$.fragment),$=P(),D=L("span"),F(M.$$.fragment),this.h()},l(g){e=I(g,"MAIN",{class:!0});var E=w(e);t=I(E,"DIV",{class:!0});var q=w(t);s=I(q,"DIV",{class:!0}),w(s).forEach(d),n=R(q),o=I(q,"DIV",{class:!0}),w(o).forEach(d),c=R(q),_=I(q,"SPAN",{class:!0});var z=w(_);H(p.$$.fragment,z),z.forEach(d),b=R(q),u=I(q,"SPAN",{class:!0});var X=w(u);H(r.$$.fragment,X),X.forEach(d),q.forEach(d),m=R(E),h=I(E,"DIV",{class:!0});var B=w(h);k=I(B,"DIV",{class:!0}),w(k).forEach(d),A=R(B),C=I(B,"DIV",{class:!0}),w(C).forEach(d),V=R(B),i=I(B,"SPAN",{class:!0});var oe=w(i);H(f.$$.fragment,oe),oe.forEach(d),$=R(B),D=I(B,"SPAN",{class:!0});var re=w(D);H(M.$$.fragment,re),re.forEach(d),B.forEach(d),E.forEach(d),this.h()},h(){l(s,"class","a back svelte-ibtpqk"),l(o,"class","b lower svelte-ibtpqk"),l(_,"class","controls up svelte-ibtpqk"),l(u,"class","controls low svelte-ibtpqk"),l(t,"class","upper svelte-ibtpqk"),l(k,"class","c back svelte-ibtpqk"),l(C,"class","d lower svelte-ibtpqk"),l(i,"class","controls up svelte-ibtpqk"),l(D,"class","controls low svelte-ibtpqk"),l(h,"class","upper svelte-ibtpqk"),l(e,"class","svelte-ibtpqk"),S(e,"landscape",a[2]),S(e,"portrait",!a[2])},m(g,E){j(g,e,E),v(e,t),v(t,s),v(t,n),v(t,o),v(t,c),v(t,_),O(p,_,null),v(t,b),v(t,u),O(r,u,null),v(e,m),v(e,h),v(h,k),v(h,A),v(h,C),v(h,V),v(h,i),O(f,i,null),v(h,$),v(h,D),O(M,D,null),a[7](e),y=!0,W||(Y=[J(e,"pointerdown",K(a[4])),J(e,"pointerup",K(a[5]))],W=!0)},p(g,[E]){const q={};E&1&&(q.flasher=g[0][0]),E&4&&(q.landscape=g[2]),p.$set(q);const z={};E&1&&(z.flasher=g[0][1]),E&4&&(z.landscape=g[2]),r.$set(z);const X={};E&1&&(X.flasher=g[0][2]),E&4&&(X.landscape=g[2]),f.$set(X);const B={};E&1&&(B.flasher=g[0][3]),E&4&&(B.landscape=g[2]),M.$set(B),(!y||E&4)&&S(e,"landscape",g[2]),(!y||E&4)&&S(e,"portrait",!g[2])},i(g){y||(Q(p.$$.fragment,g),Q(r.$$.fragment,g),Q(f.$$.fragment,g),Q(M.$$.fragment,g),y=!0)},o(g){U(p.$$.fragment,g),U(r.$$.fragment,g),U(f.$$.fragment,g),U(M.$$.fragment,g),y=!1},d(g){g&&d(e),G(p),G(r),G(f),G(M),a[7](null),W=!1,he(Y)}}}const Me=200;function Pe(a,e,t){let s,n;const o=be("(orientation: landscape)");de(a,o,i=>t(6,n=i));const c=Array.from({length:4},()=>new ke);let _,p;function b(i){if(_=null,p){const f=i-p;let $=0;for(const D of c)D.held?++$:D.accumulate(f)&&D.update();if($>=4){p=null;return}}p=i,_=window.requestAnimationFrame(b)}let u,r;function m(i){const f=performance.now();!r&&u&&(r=u.getBoundingClientRect());const $=ue(i,u,r,s);t(0,c[$].held=!0,c),c[$].tapped(f)}function h(i){!r&&u&&(r=u.getBoundingClientRect());const f=ue(i,u,r,s);t(0,c[f].held=!1,c),_||(_=window.requestAnimationFrame(b))}let k;function A(){o.recalc(),r=u.getBoundingClientRect(),k=null}function C(){k||(k=setTimeout(A,Me))}me(async function(){window.addEventListener("resize",C),await ge();const i="abcd";for(const f in i)c[f].bind(u.getElementsByClassName(i[f]));return function(){window.removeEventListener("resize",C),_&&window.cancelAnimationFrame(_),k&&clearTimeout(k)}});function V(i){_e[i?"unshift":"push"](()=>{u=i,t(1,u)})}return a.$$.update=()=>{a.$$.dirty&64&&t(2,s=n)},[c,u,s,o,m,h,n,V]}class Ve extends se{constructor(e){super(),ne(this,e,Pe,Be,ae,{})}}export{Ve as default};
