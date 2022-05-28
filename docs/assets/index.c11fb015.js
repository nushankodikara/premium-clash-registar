const ee=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};ee();function y(){}function W(e){return e()}function D(){return Object.create(null)}function I(e){e.forEach(W)}function te(e){return typeof e=="function"}function P(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let O;function ne(e,t){return O||(O=document.createElement("a")),O.href=t,e===O.href}function re(e){return Object.keys(e).length===0}function d(e,t){e.appendChild(t)}function k(e,t,n){e.insertBefore(t,n||null)}function $(e){e.parentNode.removeChild(e)}function m(e){return document.createElement(e)}function w(e){return document.createTextNode(e)}function v(){return w(" ")}function oe(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function _(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function se(e){return Array.from(e.childNodes)}function U(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let z;function A(e){z=e}const L=[],F=[],j=[],K=[],ie=Promise.resolve();let T=!1;function le(){T||(T=!0,ie.then(G))}function H(e){j.push(e)}const M=new Set;let N=0;function G(){const e=z;do{for(;N<L.length;){const t=L[N];N++,A(t),ce(t.$$)}for(A(null),L.length=0,N=0;F.length;)F.pop()();for(let t=0;t<j.length;t+=1){const n=j[t];M.has(n)||(M.add(n),n())}j.length=0}while(L.length);for(;K.length;)K.pop()();T=!1,M.clear(),A(e)}function ce(e){if(e.fragment!==null){e.update(),I(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(H)}}const q=new Set;let ue;function J(e,t){e&&e.i&&(q.delete(e),e.i(t))}function fe(e,t,n,o){if(e&&e.o){if(q.has(e))return;q.add(e),ue.c.push(()=>{q.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}}function ae(e){e&&e.c()}function Q(e,t,n,o){const{fragment:r,on_mount:i,on_destroy:l,after_update:c}=e.$$;r&&r.m(t,n),o||H(()=>{const u=i.map(W).filter(te);l?l.push(...u):I(u),e.$$.on_mount=[]}),c.forEach(H)}function R(e,t){const n=e.$$;n.fragment!==null&&(I(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function de(e,t){e.$$.dirty[0]===-1&&(L.push(e),le(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function X(e,t,n,o,r,i,l,c=[-1]){const u=z;A(e);const s=e.$$={fragment:null,ctx:null,props:i,update:y,not_equal:r,bound:D(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:D(),dirty:c,skip_bound:!1,root:t.target||u.$$.root};l&&l(s.root);let x=!1;if(s.ctx=n?n(e,t.props||{},(f,E,...h)=>{const g=h.length?h[0]:E;return s.ctx&&r(s.ctx[f],s.ctx[f]=g)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](g),x&&de(e,f)),E}):[],s.update(),x=!0,I(s.before_update),s.fragment=o?o(s.ctx):!1,t.target){if(t.hydrate){const f=se(t.target);s.fragment&&s.fragment.l(f),f.forEach($)}else s.fragment&&s.fragment.c();t.intro&&J(e.$$.fragment),Q(e,t.target,t.anchor,t.customElement),G()}A(u)}class Y{$destroy(){R(this,1),this.$destroy=y}$on(t,n){const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!re(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const b=[];function pe(e,t=y){let n;const o=new Set;function r(c){if(P(e,c)&&(e=c,n)){const u=!b.length;for(const s of o)s[1](),b.push(s,e);if(u){for(let s=0;s<b.length;s+=2)b[s][0](b[s+1]);b.length=0}}}function i(c){r(c(e))}function l(c,u){const s=[c,u];return o.add(s),o.size===1&&(n=t(r)||y),c(e),()=>{o.delete(s),o.size===0&&(n(),n=null)}}return{set:r,update:i,subscribe:l}}var _e="/assets/svelte.d72399d3.png";function me(e){let t,n,o,r,i;return{c(){t=m("button"),n=w("Clicks: "),o=w(e[0]),_(t,"class","svelte-1c7643s")},m(l,c){k(l,t,c),d(t,n),d(t,o),r||(i=oe(t,"click",e[1]),r=!0)},p(l,[c]){c&1&&U(o,l[0])},i:y,o:y,d(l){l&&$(t),r=!1,i()}}}function he(e,t,n){let o=0;return[o,()=>{n(0,o+=1)}]}class ge extends Y{constructor(t){super(),X(this,t,he,me,P,{})}}let Z=pe(0);function ye(e){let t,n;return{c(){t=m("span"),t.textContent="World",n=v()},m(o,r){k(o,t,r),k(o,n,r)},p:y,d(o){o&&$(t),o&&$(n)}}}function $e(e){let t,n,o;return{c(){t=m("span"),n=w(e[0]),o=v()},m(r,i){k(r,t,i),d(t,n),k(r,o,i)},p(r,i){i&1&&U(n,r[0])},d(r){r&&$(t),r&&$(o)}}}function be(e){let t,n,o,r,i,l,c,u,s,x,f,E,h,g;function B(a,S){return a[0]?$e:ye}let C=B(e),p=C(e);return s=new ge({}),{c(){t=m("main"),n=m("img"),r=v(),i=m("h1"),l=w("Hello "),p.c(),c=w("!"),u=v(),ae(s.$$.fragment),x=v(),f=m("p"),f.innerHTML=`Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
        apps.`,E=v(),h=m("p"),h.innerHTML=`Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a>
        for the officially supported framework, also powered by Vite!`,ne(n.src,o=_e)||_(n,"src",o),_(n,"alt","Svelte Logo"),_(n,"class","svelte-or13oe"),_(i,"class","svelte-or13oe"),_(f,"class","svelte-or13oe"),_(h,"class","svelte-or13oe"),_(t,"class","svelte-or13oe")},m(a,S){k(a,t,S),d(t,n),d(t,r),d(t,i),d(i,l),p.m(i,null),d(i,c),d(t,u),Q(s,t,null),d(t,x),d(t,f),d(t,E),d(t,h),g=!0},p(a,[S]){C===(C=B(a))&&p?p.p(a,S):(p.d(1),p=C(a),p&&(p.c(),p.m(i,c)))},i(a){g||(J(s.$$.fragment,a),g=!0)},o(a){fe(s.$$.fragment,a),g=!1},d(a){a&&$(t),p.d(),R(s)}}}function ve(e,t,n){let o;return Z.subscribe(r=>{n(0,o=r)}),console.log("UID From App: ",o),[o]}class ke extends Y{constructor(t){super(),X(this,t,ve,be,P,{})}}new ke({target:document.getElementById("app")});let V=document.cookie.split("; ");if(V.includes("telegram_user_id")){let e=parseInt(V.find(t=>t.startsWith("telegram_user_id=")).split("=")[1]);Z.set(e)}
