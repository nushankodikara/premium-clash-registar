const se=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}};se();function g(){}function R(e){return e()}function F(){return Object.create(null)}function z(e){e.forEach(R)}function oe(e){return typeof e=="function"}function B(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let q;function W(e,t){return q||(q=document.createElement("a")),q.href=t,e===q.href}function le(e){return Object.keys(e).length===0}function u(e,t){e.appendChild(t)}function w(e,t,n){e.insertBefore(t,n||null)}function $(e){e.parentNode.removeChild(e)}function h(e){return document.createElement(e)}function k(e){return document.createTextNode(e)}function b(){return k(" ")}function ie(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function p(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ce(e){return Array.from(e.childNodes)}function U(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let K;function C(e){K=e}const A=[],G=[],T=[],J=[],ue=Promise.resolve();let I=!1;function fe(){I||(I=!0,ue.then(X))}function P(e){T.push(e)}const H=new Set;let N=0;function X(){const e=K;do{for(;N<A.length;){const t=A[N];N++,C(t),ae(t.$$)}for(C(null),A.length=0,N=0;G.length;)G.pop()();for(let t=0;t<T.length;t+=1){const n=T[t];H.has(n)||(H.add(n),n())}T.length=0}while(A.length);for(;J.length;)J.pop()();I=!1,H.clear(),C(e)}function ae(e){if(e.fragment!==null){e.update(),z(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(P)}}const M=new Set;let de;function Y(e,t){e&&e.i&&(M.delete(e),e.i(t))}function pe(e,t,n,s){if(e&&e.o){if(M.has(e))return;M.add(e),de.c.push(()=>{M.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}}function me(e){e&&e.c()}function Z(e,t,n,s){const{fragment:r,on_mount:l,on_destroy:i,after_update:c}=e.$$;r&&r.m(t,n),s||P(()=>{const f=l.map(R).filter(oe);i?i.push(...f):z(f),e.$$.on_mount=[]}),c.forEach(P)}function ee(e,t){const n=e.$$;n.fragment!==null&&(z(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function _e(e,t){e.$$.dirty[0]===-1&&(A.push(e),fe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function te(e,t,n,s,r,l,i,c=[-1]){const f=K;C(e);const o=e.$$={fragment:null,ctx:null,props:l,update:g,not_equal:r,bound:F(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:F(),dirty:c,skip_bound:!1,root:t.target||f.$$.root};i&&i(o.root);let x=!1;if(o.ctx=n?n(e,t.props||{},(a,E,...y)=>{const L=y.length?y[0]:E;return o.ctx&&r(o.ctx[a],o.ctx[a]=L)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](L),x&&_e(e,a)),E}):[],o.update(),x=!0,z(o.before_update),o.fragment=s?s(o.ctx):!1,t.target){if(t.hydrate){const a=ce(t.target);o.fragment&&o.fragment.l(a),a.forEach($)}else o.fragment&&o.fragment.c();t.intro&&Y(e.$$.fragment),Z(e,t.target,t.anchor,t.customElement),X()}C(f)}class ne{$destroy(){ee(this,1),this.$destroy=g}$on(t,n){const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(t){this.$$set&&!le(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const v=[];function re(e,t=g){let n;const s=new Set;function r(c){if(B(e,c)&&(e=c,n)){const f=!v.length;for(const o of s)o[1](),v.push(o,e);if(f){for(let o=0;o<v.length;o+=2)v[o][0](v[o+1]);v.length=0}}}function l(c){r(c(e))}function i(c,f=g){const o=[c,f];return s.add(o),s.size===1&&(n=t(r)||g),c(e),()=>{s.delete(o),s.size===0&&(n(),n=null)}}return{set:r,update:l,subscribe:i}}var he="/assets/svelte.d72399d3.png";function ge(e){let t,n,s,r,l;return{c(){t=h("button"),n=k("Clicks: "),s=k(e[0]),p(t,"class","svelte-1c7643s")},m(i,c){w(i,t,c),u(t,n),u(t,s),r||(l=ie(t,"click",e[1]),r=!0)},p(i,[c]){c&1&&U(s,i[0])},i:g,o:g,d(i){i&&$(t),r=!1,l()}}}function ye(e,t,n){let s=0;return[s,()=>{n(0,s+=1)}]}class be extends ne{constructor(t){super(),te(this,t,ye,ge,B,{})}}let Q=re(0);function $e(e){let t,n;return{c(){t=h("span"),t.textContent="World",n=b()},m(s,r){w(s,t,r),w(s,n,r)},p:g,d(s){s&&$(t),s&&$(n)}}}function ve(e){let t,n,s;return{c(){t=h("span"),n=k(e[0]),s=b()},m(r,l){w(r,t,l),u(t,n),w(r,s,l)},p(r,l){l&1&&U(n,r[0])},d(r){r&&$(t),r&&$(s)}}}function we(e){let t,n,s,r,l,i,c,f,o,x,a,E,y,L,_,V,S;function D(d,O){return d[0]?ve:$e}let j=D(e),m=j(e);return o=new be({}),{c(){t=h("main"),n=h("img"),r=b(),l=h("h1"),i=k("Hello "),m.c(),c=k("!"),f=b(),me(o.$$.fragment),x=b(),a=h("p"),a.innerHTML=`Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
        apps.`,E=b(),y=h("p"),y.innerHTML=`Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a>
        for the officially supported framework, also powered by Vite!`,L=b(),_=h("script"),W(n.src,s=he)||p(n,"src",s),p(n,"alt","Svelte Logo"),p(n,"class","svelte-or13oe"),p(l,"class","svelte-or13oe"),p(a,"class","svelte-or13oe"),p(y,"class","svelte-or13oe"),_.async=!0,W(_.src,V="https://telegram.org/js/telegram-widget.js?19")||p(_,"src",V),p(_,"data-telegram-login","nk_premium_telegram_bot"),p(_,"data-size","large"),p(_,"data-onauth","onTelegramAuth(user)"),p(_,"data-request-access","write"),p(t,"class","svelte-or13oe")},m(d,O){w(d,t,O),u(t,n),u(t,r),u(t,l),u(l,i),m.m(l,null),u(l,c),u(t,f),Z(o,t,null),u(t,x),u(t,a),u(t,E),u(t,y),u(t,L),u(t,_),S=!0},p(d,[O]){j===(j=D(d))&&m?m.p(d,O):(m.d(1),m=j(d),m&&(m.c(),m.m(l,c)))},i(d){S||(Y(o.$$.fragment,d),S=!0)},o(d){pe(o.$$.fragment,d),S=!1},d(d){d&&$(t),m.d(),ee(o)}}}function ke(e,t,n){let s=re(0);return Q.subscribe(r=>n(0,s=Q)),[s]}class xe extends ne{constructor(t){super(),te(this,t,ke,we,B,{})}}new xe({target:document.getElementById("app")});
