const Y=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};Y();function y(){}function F(e){return e()}function K(){return Object.create(null)}function T(e){e.forEach(F)}function Z(e){return typeof e=="function"}function P(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let O;function ee(e,t){return O||(O=document.createElement("a")),O.href=t,e===O.href}function te(e){return Object.keys(e).length===0}function d(e,t){e.appendChild(t)}function w(e,t,n){e.insertBefore(t,n||null)}function $(e){e.parentNode.removeChild(e)}function m(e){return document.createElement(e)}function x(e){return document.createTextNode(e)}function v(){return x(" ")}function ne(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function _(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function re(e){return Array.from(e.childNodes)}function G(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let z;function S(e){z=e}const L=[],V=[],j=[],D=[],oe=Promise.resolve();let H=!1;function se(){H||(H=!0,oe.then(J))}function I(e){j.push(e)}const M=new Set;let N=0;function J(){const e=z;do{for(;N<L.length;){const t=L[N];N++,S(t),ie(t.$$)}for(S(null),L.length=0,N=0;V.length;)V.pop()();for(let t=0;t<j.length;t+=1){const n=j[t];M.has(n)||(M.add(n),n())}j.length=0}while(L.length);for(;D.length;)D.pop()();H=!1,M.clear(),S(e)}function ie(e){if(e.fragment!==null){e.update(),T(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(I)}}const q=new Set;let le;function Q(e,t){e&&e.i&&(q.delete(e),e.i(t))}function ce(e,t,n,o){if(e&&e.o){if(q.has(e))return;q.add(e),le.c.push(()=>{q.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}}function ue(e){e&&e.c()}function R(e,t,n,o){const{fragment:r,on_mount:i,on_destroy:l,after_update:c}=e.$$;r&&r.m(t,n),o||I(()=>{const u=i.map(F).filter(Z);l?l.push(...u):T(u),e.$$.on_mount=[]}),c.forEach(I)}function U(e,t){const n=e.$$;n.fragment!==null&&(T(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function fe(e,t){e.$$.dirty[0]===-1&&(L.push(e),se(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function W(e,t,n,o,r,i,l,c=[-1]){const u=z;S(e);const s=e.$$={fragment:null,ctx:null,props:i,update:y,not_equal:r,bound:K(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:K(),dirty:c,skip_bound:!1,root:t.target||u.$$.root};l&&l(s.root);let k=!1;if(s.ctx=n?n(e,t.props||{},(f,E,...h)=>{const g=h.length?h[0]:E;return s.ctx&&r(s.ctx[f],s.ctx[f]=g)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](g),k&&fe(e,f)),E}):[],s.update(),k=!0,T(s.before_update),s.fragment=o?o(s.ctx):!1,t.target){if(t.hydrate){const f=re(t.target);s.fragment&&s.fragment.l(f),f.forEach($)}else s.fragment&&s.fragment.c();t.intro&&Q(e.$$.fragment),R(e,t.target,t.anchor,t.customElement),J()}S(u)}class X{$destroy(){U(this,1),this.$destroy=y}$on(t,n){const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!te(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var ae="/assets/svelte.d72399d3.png";function de(e){let t,n,o,r,i;return{c(){t=m("button"),n=x("Clicks: "),o=x(e[0]),_(t,"class","svelte-1c7643s")},m(l,c){w(l,t,c),d(t,n),d(t,o),r||(i=ne(t,"click",e[1]),r=!0)},p(l,[c]){c&1&&G(o,l[0])},i:y,o:y,d(l){l&&$(t),r=!1,i()}}}function pe(e,t,n){let o=0;return[o,()=>{n(0,o+=1)}]}class _e extends X{constructor(t){super(),W(this,t,pe,de,P,{})}}const b=[];function me(e,t=y){let n;const o=new Set;function r(c){if(P(e,c)&&(e=c,n)){const u=!b.length;for(const s of o)s[1](),b.push(s,e);if(u){for(let s=0;s<b.length;s+=2)b[s][0](b[s+1]);b.length=0}}}function i(c){r(c(e))}function l(c,u){const s=[c,u];return o.add(s),o.size===1&&(n=t(r)||y),c(e),()=>{o.delete(s),o.size===0&&(n(),n=null)}}return{set:r,update:i,subscribe:l}}let he=me(0);function ge(e){let t,n;return{c(){t=m("span"),t.textContent="TS",n=v()},m(o,r){w(o,t,r),w(o,n,r)},p:y,d(o){o&&$(t),o&&$(n)}}}function ye(e){let t,n,o;return{c(){t=m("span"),n=x(e[0]),o=v()},m(r,i){w(r,t,i),d(t,n),w(r,o,i)},p(r,i){i&1&&G(n,r[0])},d(r){r&&$(t),r&&$(o)}}}function $e(e){let t,n,o,r,i,l,c,u,s,k,f,E,h,g;function B(a,A){return a[0]?ye:ge}let C=B(e),p=C(e);return s=new _e({}),{c(){t=m("main"),n=m("img"),r=v(),i=m("h1"),l=x("Hello ["),p.c(),c=x("!]"),u=v(),ue(s.$$.fragment),k=v(),f=m("p"),f.innerHTML=`Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
        apps.`,E=v(),h=m("p"),h.innerHTML=`Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a>
        for the officially supported framework, also powered by Vite!`,ee(n.src,o=ae)||_(n,"src",o),_(n,"alt","Svelte Logo"),_(n,"class","svelte-or13oe"),_(i,"class","svelte-or13oe"),_(f,"class","svelte-or13oe"),_(h,"class","svelte-or13oe"),_(t,"class","svelte-or13oe")},m(a,A){w(a,t,A),d(t,n),d(t,r),d(t,i),d(i,l),p.m(i,null),d(i,c),d(t,u),R(s,t,null),d(t,k),d(t,f),d(t,E),d(t,h),g=!0},p(a,[A]){C===(C=B(a))&&p?p.p(a,A):(p.d(1),p=C(a),p&&(p.c(),p.m(i,c)))},i(a){g||(Q(s.$$.fragment,a),g=!0)},o(a){ce(s.$$.fragment,a),g=!1},d(a){a&&$(t),p.d(),U(s)}}}function be(e,t,n){let o=0;return he.subscribe(r=>n(0,o=r)),[o]}class ve extends X{constructor(t){super(),W(this,t,be,$e,P,{})}}new ve({target:document.getElementById("app")});