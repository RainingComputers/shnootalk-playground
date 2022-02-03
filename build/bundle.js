var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let s,i;function l(t,n){return s||(s=document.createElement("a")),s.href=n,t===s.href}function u(n,e,o){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}function a(t,n,e,o){if(t){const r=d(t,n,e,o);return t[0](r)}}function d(t,n,e,o){return t[1]&&o?function(t,n){for(const e in n)t[e]=n[e];return t}(e.ctx.slice(),t[1](o(n))):e.ctx}function f(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}function p(t,n,e,o,r,c){if(r){const s=d(n,e,o,c);t.p(s,r)}}function $(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}function h(t,n){t.appendChild(n)}function g(t,n,e){t.insertBefore(n,e||null)}function m(t){t.parentNode.removeChild(t)}function b(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function x(t){return document.createElement(t)}function w(t){return document.createTextNode(t)}function v(){return w(" ")}function k(){return w("")}function C(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function y(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function E(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function T(t,n,e,o){null===e?t.style.removeProperty(n):t.style.setProperty(n,e,o?"important":"")}function _(t,n,e){t.classList[e?"add":"remove"](n)}function I(t){i=t}function S(){if(!i)throw new Error("Function called outside component initialization");return i}function N(t){S().$$.on_mount.push(t)}function L(t){S().$$.on_destroy.push(t)}function M(){const t=S();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const r=function(t,n,e=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,e,!1,n),o}(n,e);o.slice().forEach((n=>{n.call(t,r)}))}}}function W(t){return S().$$.context.get(t)}function O(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t.call(this,n)))}const j=[],z=[],D=[],P=[],A=Promise.resolve();let U=!1;function R(){U||(U=!0,A.then(K))}function H(t){D.push(t)}const V=new Set;let F=0;function K(){const t=i;do{for(;F<j.length;){const t=j[F];F++,I(t),G(t.$$)}for(I(null),j.length=0,F=0;z.length;)z.pop()();for(let t=0;t<D.length;t+=1){const n=D[t];V.has(n)||(V.add(n),n())}D.length=0}while(j.length);for(;P.length;)P.pop()();U=!1,V.clear(),I(t)}function G(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(H)}}const X=new Set;let B;function q(){B={r:0,c:[],p:B}}function J(){B.r||o(B.c),B=B.p}function Q(t,n){t&&t.i&&(X.delete(t),t.i(n))}function Y(t,n,e,o){if(t&&t.o){if(X.has(t))return;X.add(t),B.c.push((()=>{X.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function Z(t){t&&t.c()}function tt(t,e,c,s){const{fragment:i,on_mount:l,on_destroy:u,after_update:a}=t.$$;i&&i.m(e,c),s||H((()=>{const e=l.map(n).filter(r);u?u.push(...e):o(e),t.$$.on_mount=[]})),a.forEach(H)}function nt(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function et(n,r,c,s,l,u,a,d=[-1]){const f=i;I(n);const p=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:l,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(f?f.$$.context:[])),callbacks:e(),dirty:d,skip_bound:!1,root:r.target||f.$$.root};a&&a(p.root);let $=!1;if(p.ctx=c?c(n,r.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return p.ctx&&l(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),$&&function(t,n){-1===t.$$.dirty[0]&&(j.push(t),R(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(n,t)),e})):[],p.update(),$=!0,o(p.before_update),p.fragment=!!s&&s(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(m)}else p.fragment&&p.fragment.c();r.intro&&Q(n.$$.fragment),tt(n,r.target,r.anchor,r.customElement),K()}I(f)}class ot{$destroy(){nt(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function rt(t){let n,e;const o=t[2].default,r=a(o,t,t[1],null);return{c(){n=x("div"),r&&r.c(),y(n,"class",ct),T(n,"height",t[0]+"px")},m(t,o){g(t,n,o),r&&r.m(n,null),e=!0},p(t,[c]){r&&r.p&&(!e||2&c)&&p(r,o,t,t[1],e?f(o,t[1],c,null):$(t[1]),null),(!e||1&c)&&T(n,"height",t[0]+"px")},i(t){e||(Q(r,t),e=!0)},o(t){Y(r,t),e=!1},d(t){t&&m(n),r&&r.d(t)}}}const ct=["box","box-arrange-hor","box-width-full","background-25","box-items-center"].join(" ");function st(t,n,e){let{$$slots:o={},$$scope:r}=n,{height:c=48}=n;return t.$$set=t=>{"height"in t&&e(0,c=t.height),"$$scope"in t&&e(1,r=t.$$scope)},[c,r,o]}class it extends ot{constructor(t){super(),et(this,t,st,rt,c,{height:0})}}function lt(n){let e,o,c,s,i,u,a,d;return{c(){var t;e=x("button"),o=x("img"),i=v(),u=x("span"),u.textContent="Run",l(o.src,c="icons/play.svg")||y(o,"src","icons/play.svg"),y(o,"width",s=n[3]+"px"),y(o,"alt",""),y(u,"class","pad-left-small foreground-active"),y(e,"class",(null==(t=ut)?"":t)+" svelte-1iigbce"),e.disabled=n[1],_(e,"box-width-full",n[2])},m(t,c){g(t,e,c),h(e,o),h(e,i),h(e,u),a||(d=C(e,"click",(function(){r(n[0])&&n[0].apply(this,arguments)})),a=!0)},p(t,[r]){n=t,8&r&&s!==(s=n[3]+"px")&&y(o,"width",s),2&r&&(e.disabled=n[1]),4&r&&_(e,"box-width-full",n[2])},i:t,o:t,d(t){t&&m(e),a=!1,d()}}}const ut=["box","box-button","box-arrange-hor","box-items-center","box-height-full","pad-vert","pad-hor","box-content-center"].join(" ");function at(t,n,e){let{onClick:o}=n,{disabled:r=!1}=n,{expandWidth:c=!1}=n,{iconWidth:s=15}=n;return t.$$set=t=>{"onClick"in t&&e(0,o=t.onClick),"disabled"in t&&e(1,r=t.disabled),"expandWidth"in t&&e(2,c=t.expandWidth),"iconWidth"in t&&e(3,s=t.iconWidth)},[o,r,c,s]}class dt extends ot{constructor(t){super(),et(this,t,at,lt,c,{onClick:0,disabled:1,expandWidth:2,iconWidth:3})}}function ft(n){let e,o,c,s,i,u,a;return{c(){e=x("div"),o=x("img"),s=v(),i=x("span"),i.innerHTML='<span class="pad-left-small text-no-wrap">ShnooTalk Playground</span>',l(o.src,c="icons/logo.svg")||y(o,"src","icons/logo.svg"),y(o,"class",""),y(o,"width","50px"),y(o,"alt",""),y(i,"class","box"),y(e,"class",pt)},m(t,c){g(t,e,c),h(e,o),h(e,s),h(e,i),u||(a=C(e,"click",(function(){r(n[0])&&n[0].apply(this,arguments)})),u=!0)},p(t,[e]){n=t},i:t,o:t,d(t){t&&m(e),u=!1,a()}}}const pt=["box","box-arrange-hor","box-items-center","pad-hor","pad-vert","background-25","foreground-cc","cursor-pointer","hover-background"].join(" ");function $t(t,n,e){let{onClick:o}=n;return t.$$set=t=>{"onClick"in t&&e(0,o=t.onClick)},[o]}class ht extends ot{constructor(t){super(),et(this,t,$t,ft,c,{onClick:0})}}const gt=[];function mt(n,e=t){let o;const r=new Set;function s(t){if(c(n,t)&&(n=t,o)){const t=!gt.length;for(const t of r)t[1](),gt.push(t,n);if(t){for(let t=0;t<gt.length;t+=2)gt[t][0](gt[t+1]);gt.length=0}}}return{set:s,update:function(t){s(t(n))},subscribe:function(c,i=t){const l=[c,i];return r.add(l),1===r.size&&(o=e(s)||t),c(n),()=>{r.delete(l),0===r.size&&(o(),o=null)}}}}class bt{constructor(t){this.tabHistory=[],this.currentTab=mt(void 0),this.tabsList=mt(t)}openTab(t){this.currentTab.set(t),this.tabHistory.push(t)}closeTab(t){const n=n=>n!=t;this.tabHistory=this.tabHistory.filter(n),this.openTab(this.tabHistory.pop()),this.tabsList.update((t=>t.filter(n)))}addTab(t){this.tabsList.update((n=>[...new Set([...n,t])])),this.openTab(t)}}function xt(t){let n,e;const o=t[1].default,r=a(o,t,t[0],null);return{c(){n=x("div"),r&&r.c(),y(n,"class","box scroll-x scroll-hidden box-height-full")},m(t,o){g(t,n,o),r&&r.m(n,null),e=!0},p(t,[n]){r&&r.p&&(!e||1&n)&&p(r,o,t,t[0],e?f(o,t[0],n,null):$(t[0]),null)},i(t){e||(Q(r,t),e=!0)},o(t){Y(r,t),e=!1},d(t){t&&m(n),r&&r.d(t)}}}function wt(t,n,e){let{$$slots:o={},$$scope:r}=n;return t.$$set=t=>{"$$scope"in t&&e(0,r=t.$$scope)},[r,o]}class vt extends ot{constructor(t){super(),et(this,t,wt,xt,c,{})}}function kt(n){let e,o,c,s,i,u;return{c(){e=x("button"),o=x("img"),l(o.src,c=n[0])||y(o,"src",c),y(o,"class","box-rounded hover-background pad-vert-small pad-hor-small"),y(o,"width",s=n[2]+"px"),y(o,"alt",""),y(e,"class","box-button background-25 box-items-center box-height-full")},m(t,c){g(t,e,c),h(e,o),i||(u=C(e,"click",(function(){r(n[1])&&n[1].apply(this,arguments)})),i=!0)},p(t,[e]){n=t,1&e&&!l(o.src,c=n[0])&&y(o,"src",c),4&e&&s!==(s=n[2]+"px")&&y(o,"width",s)},i:t,o:t,d(t){t&&m(e),i=!1,u()}}}function Ct(t,n,e){let{icon:o}=n,{onClick:r}=n,{iconWidth:c=15}=n;return t.$$set=t=>{"icon"in t&&e(0,o=t.icon),"onClick"in t&&e(1,r=t.onClick),"iconWidth"in t&&e(2,c=t.iconWidth)},[o,r,c]}class yt extends ot{constructor(t){super(),et(this,t,Ct,kt,c,{icon:0,onClick:1,iconWidth:2})}}function Et(t){let n;const e=t[2].default,o=a(e,t,t[1],null);return{c(){o&&o.c()},m(t,e){o&&o.m(t,e),n=!0},p(t,[r]){o&&o.p&&(!n||2&r)&&p(o,e,t,t[1],n?f(e,t[1],r,null):$(t[1]),null)},i(t){n||(Q(o,t),n=!0)},o(t){Y(o,t),n=!1},d(t){o&&o.d(t)}}}const Tt={};function _t(t,n,e){let{$$slots:o={},$$scope:r}=n,{ctx:c}=n;var s,i;return s=Tt,i=c,S().$$.context.set(s,i),t.$$set=t=>{"ctx"in t&&e(0,c=t.ctx),"$$scope"in t&&e(1,r=t.$$scope)},[c,r,o]}class It extends ot{constructor(t){super(),et(this,t,_t,Et,c,{ctx:0})}}function St(t){let n,e,o;return{c(){n=x("img"),l(n.src,e=t[0])||y(n,"src",e),y(n,"class","box-child-float-right pad-right-small"),y(n,"width",o=t[1]+"px"),y(n,"alt","")},m(t,e){g(t,n,e)},p(t,r){1&r&&!l(n.src,e=t[0])&&y(n,"src",e),2&r&&o!==(o=t[1]+"px")&&y(n,"width",o)},d(t){t&&m(n)}}}function Nt(t){let n,e,o,r,c,s,i;return{c(){n=x("span"),e=v(),o=x("img"),y(n,"class","box-child-float-right pad-left"),l(o.src,r="icons/x.svg")||y(o,"src","icons/x.svg"),y(o,"class","box-rounded hover-background"),y(o,"width",c=t[1]+"px"),y(o,"alt","")},m(r,c){g(r,n,c),g(r,e,c),g(r,o,c),s||(i=C(o,"click",t[8]),s=!0)},p(t,n){2&n&&c!==(c=t[1]+"px")&&y(o,"width",c)},d(t){t&&m(n),t&&m(e),t&&m(o),s=!1,i()}}}function Lt(n){let e,o,r,c,s,i,l,u=n[0]&&St(n),a=n[3]&&Nt(n);return{c(){e=x("button"),u&&u.c(),o=v(),r=x("span"),c=w(n[4]),s=v(),a&&a.c(),y(r,"class","text-overflow-ellipses text-no-wrap"),y(e,"class",Mt),T(e,"min-width",n[2]+"px"),_(e,"active",n[5]==n[4])},m(t,d){var f;g(t,e,d),u&&u.m(e,null),h(e,o),h(e,r),h(r,c),h(e,s),a&&a.m(e,null),i||(l=C(e,"click",(f=n[9],function(t){return t.preventDefault(),f.call(this,t)})),i=!0)},p(t,[n]){t[0]?u?u.p(t,n):(u=St(t),u.c(),u.m(e,o)):u&&(u.d(1),u=null),16&n&&E(c,t[4]),t[3]?a?a.p(t,n):(a=Nt(t),a.c(),a.m(e,null)):a&&(a.d(1),a=null),4&n&&T(e,"min-width",t[2]+"px"),48&n&&_(e,"active",t[5]==t[4])},i:t,o:t,d(t){t&&m(e),u&&u.d(),a&&a.d(),i=!1,l()}}}const Mt=["box","box-arrange-hor","box-items-center","box-button","pad-hor","pad-vert","active-background-1e","hover-background-33","background-2d","foreground-f80","active-foreground-cc","box-height-full"].join(" ");function Wt(t,n,e){let o,{tabIcon:r}=n,{tabIconWidth:c=15}=n,{minWidth:s=120}=n,{onClose:i}=n,{tabName:l}=n;const a=W(Tt),d=a.currentTab;u(t,d,(t=>e(5,o=t))),N((()=>{a.openTab(l)})),L((()=>{a.closeTab(l)}));return t.$$set=t=>{"tabIcon"in t&&e(0,r=t.tabIcon),"tabIconWidth"in t&&e(1,c=t.tabIconWidth),"minWidth"in t&&e(2,s=t.minWidth),"onClose"in t&&e(3,i=t.onClose),"tabName"in t&&e(4,l=t.tabName)},[r,c,s,i,l,o,a,d,()=>{i(l)},()=>{a.openTab(l)}]}class Ot extends ot{constructor(t){super(),et(this,t,Wt,Lt,c,{tabIcon:0,tabIconWidth:1,minWidth:2,onClose:3,tabName:4})}}function jt(t,n,e){const o=t.slice();return o[7]=n[e],o}function zt(t){let n,e;function o(){return t[5](t[7])}return n=new Ot({props:{tabName:t[7],tabIcon:"icons/code.svg",onClose:o}}),{c(){Z(n.$$.fragment)},m(t,o){tt(n,t,o),e=!0},p(e,r){t=e;const c={};2&r&&(c.tabName=t[7]),3&r&&(c.onClose=o),n.$set(c)},i(t){e||(Q(n.$$.fragment,t),e=!0)},o(t){Y(n.$$.fragment,t),e=!1},d(t){nt(n,t)}}}function Dt(t){let n,e,o,r;e=new Ot({props:{tabName:t[1][0],tabIcon:"icons/code.svg"}});let c=t[1].slice(1),s=[];for(let n=0;n<c.length;n+=1)s[n]=zt(jt(t,c,n));const i=t=>Y(s[t],1,1,(()=>{s[t]=null}));return{c(){n=x("div"),Z(e.$$.fragment),o=v();for(let t=0;t<s.length;t+=1)s[t].c();y(n,"class","box box-arrange-hor box-height-full bax-arrange-gap")},m(t,c){g(t,n,c),tt(e,n,null),h(n,o);for(let t=0;t<s.length;t+=1)s[t].m(n,null);r=!0},p(t,o){const r={};if(2&o&&(r.tabName=t[1][0]),e.$set(r),3&o){let e;for(c=t[1].slice(1),e=0;e<c.length;e+=1){const r=jt(t,c,e);s[e]?(s[e].p(r,o),Q(s[e],1)):(s[e]=zt(r),s[e].c(),Q(s[e],1),s[e].m(n,null))}for(q(),e=c.length;e<s.length;e+=1)i(e);J()}},i(t){if(!r){Q(e.$$.fragment,t);for(let t=0;t<c.length;t+=1)Q(s[t]);r=!0}},o(t){Y(e.$$.fragment,t),s=s.filter(Boolean);for(let t=0;t<s.length;t+=1)Y(s[t]);r=!1},d(t){t&&m(n),nt(e),b(s,t)}}}function Pt(t){let n,e,o,r;return n=new vt({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}}),o=new yt({props:{icon:"icons/plus.svg",onClick:t[6]}}),{c(){Z(n.$$.fragment),e=v(),Z(o.$$.fragment)},m(t,c){tt(n,t,c),g(t,e,c),tt(o,t,c),r=!0},p(t,e){const o={};1027&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){r||(Q(n.$$.fragment,t),Q(o.$$.fragment,t),r=!0)},o(t){Y(n.$$.fragment,t),Y(o.$$.fragment,t),r=!1},d(t){nt(n,t),t&&m(e),nt(o,t)}}}function At(t){let n,e;return n=new It({props:{ctx:t[0],$$slots:{default:[Pt]},$$scope:{ctx:t}}}),{c(){Z(n.$$.fragment)},m(t,o){tt(n,t,o),e=!0},p(t,[e]){const o={};1&e&&(o.ctx=t[0]),1027&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(Q(n.$$.fragment,t),e=!0)},o(t){Y(n.$$.fragment,t),e=!1},d(t){nt(n,t)}}}function Ut(t,n,e){let o,{ctx:r}=n;const c=M(),s=r.tabsList;u(t,s,(t=>e(1,o=t)));return t.$$set=t=>{"ctx"in t&&e(0,r=t.ctx)},[r,o,c,s,function(t){r.addTab(t)},t=>r.closeTab(t),()=>c("newTab")]}class Rt extends ot{constructor(t){super(),et(this,t,Ut,At,c,{ctx:0,addTab:4})}get addTab(){return this.$$.ctx[4]}}function Ht(n){let e;return{c(){e=x("div"),y(e,"class","box-height-full box-width-full"),y(e,"id",n[0])},m(t,n){g(t,e,n)},p(t,[n]){1&n&&y(e,"id",t[0])},i:t,o:t,d(t){t&&m(e)}}}function Vt(t,n,e){let o,{fontSize:r}=n,{editorId:c}=n;return N((()=>{o=window.ace.edit(c),o.setTheme("ace/theme/vscode"),o.session.setMode("ace/mode/shnootalk"),o.setFontSize(r),o.setShowPrintMargin(!1),o.setHighlightActiveLine(!1)})),L((()=>{o&&o.destroy()})),t.$$set=t=>{"fontSize"in t&&e(1,r=t.fontSize),"editorId"in t&&e(0,c=t.editorId)},[c,r,function(){setTimeout((()=>o.focus()),1)},function(){return o.getValue()},function(t){o.setValue(t,1)}]}window.ace.config.set("basePath","/");class Ft extends ot{constructor(t){super(),et(this,t,Vt,Ht,c,{fontSize:1,editorId:0,focus:2,getValue:3,setValue:4})}get focus(){return this.$$.ctx[2]}get getValue(){return this.$$.ctx[3]}get setValue(){return this.$$.ctx[4]}}function Kt(t){let n,e;const o=t[4].default,r=a(o,t,t[3],null);return{c(){n=x("div"),r&&r.c(),y(n,"class","box-child-grow"),_(n,"box-display-none",t[1]!==t[0])},m(t,o){g(t,n,o),r&&r.m(n,null),e=!0},p(t,[c]){r&&r.p&&(!e||8&c)&&p(r,o,t,t[3],e?f(o,t[3],c,null):$(t[3]),null),3&c&&_(n,"box-display-none",t[1]!==t[0])},i(t){e||(Q(r,t),e=!0)},o(t){Y(r,t),e=!1},d(t){t&&m(n),r&&r.d(t)}}}function Gt(t,n,e){let o,{$$slots:r={},$$scope:c}=n,{tabName:s}=n;const i=M(),l=W(Tt).currentTab;var a;return u(t,l,(t=>e(1,o=t))),a=()=>{o===s&&i("appear")},S().$$.after_update.push(a),t.$$set=t=>{"tabName"in t&&e(0,s=t.tabName),"$$scope"in t&&e(3,c=t.$$scope)},[s,o,l,c,r]}class Xt extends ot{constructor(t){super(),et(this,t,Gt,Kt,c,{tabName:0})}}function Bt(t,n,e){const o=t.slice();return o[11]=n[e],o[12]=n,o[13]=e,o}function qt(t){let n,e,o,r=t[11];const c=()=>t[9](n,r),s=()=>t[9](null,r);let i={fontSize:t[0],editorId:t[11]};return n=new Ft({props:i}),c(),{c(){Z(n.$$.fragment),e=v()},m(t,r){tt(n,t,r),g(t,e,r),o=!0},p(t,e){r!==t[11]&&(s(),r=t[11],c());const o={};1&e&&(o.fontSize=t[0]),16&e&&(o.editorId=t[11]),n.$set(o)},i(t){o||(Q(n.$$.fragment,t),o=!0)},o(t){Y(n.$$.fragment,t),o=!1},d(t){s(),nt(n,t),t&&m(e)}}}function Jt(t){let n,e;return n=new Xt({props:{tabName:t[11],$$slots:{default:[qt]},$$scope:{ctx:t}}}),n.$on("appear",t[2]),{c(){Z(n.$$.fragment)},m(t,o){tt(n,t,o),e=!0},p(t,e){const o={};16&e&&(o.tabName=t[11]),16409&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(Q(n.$$.fragment,t),e=!0)},o(t){Y(n.$$.fragment,t),e=!1},d(t){nt(n,t)}}}function Qt(t){let n,e,o=t[4],r=[];for(let n=0;n<o.length;n+=1)r[n]=Jt(Bt(t,o,n));const c=t=>Y(r[t],1,1,(()=>{r[t]=null}));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();n=k()},m(t,o){for(let n=0;n<r.length;n+=1)r[n].m(t,o);g(t,n,o),e=!0},p(t,e){if(29&e){let s;for(o=t[4],s=0;s<o.length;s+=1){const c=Bt(t,o,s);r[s]?(r[s].p(c,e),Q(r[s],1)):(r[s]=Jt(c),r[s].c(),Q(r[s],1),r[s].m(n.parentNode,n))}for(q(),s=o.length;s<r.length;s+=1)c(s);J()}},i(t){if(!e){for(let t=0;t<o.length;t+=1)Q(r[t]);e=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)Y(r[t]);e=!1},d(t){b(r,t),t&&m(n)}}}function Yt(t){let n,e;return n=new It({props:{ctx:t[1],$$slots:{default:[Qt]},$$scope:{ctx:t}}}),{c(){Z(n.$$.fragment)},m(t,o){tt(n,t,o),e=!0},p(t,[e]){const o={};2&e&&(o.ctx=t[1]),16409&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(Q(n.$$.fragment,t),e=!0)},o(t){Y(n.$$.fragment,t),e=!1},d(t){nt(n,t)}}}function Zt(t,n,e){let o,r,{fontSize:c=17}=n,{ctx:s}=n;const i=s.tabsList;u(t,i,(t=>e(4,o=t)));const l=s.currentTab;u(t,l,(t=>e(10,r=t)));const a={};return t.$$set=t=>{"fontSize"in t&&e(0,c=t.fontSize),"ctx"in t&&e(1,s=t.ctx)},[c,s,function(){a[r]&&a[r].focus()},a,o,i,l,function(){const t={};for(let n of o)t[n]=a[n].getValue();return t},function(t,n){a[t].setValue(n)},function(t,n){z[t?"unshift":"push"]((()=>{a[n]=t,e(3,a)}))}]}class tn extends ot{constructor(t){super(),et(this,t,Zt,Yt,c,{fontSize:0,ctx:1,focus:2,getContents:7,setContent:8})}get focus(){return this.$$.ctx[2]}get getContents(){return this.$$.ctx[7]}get setContent(){return this.$$.ctx[8]}}function nn(n){let e;return{c(){e=x("span"),y(e,"class","box-child-grow")},m(t,n){g(t,e,n)},p:t,i:t,o:t,d(t){t&&m(e)}}}class en extends ot{constructor(t){super(),et(this,t,null,nn,c,{})}}function on(t){let n,e,r,c,s;const i=t[6].default,l=a(i,t,t[5],null);return{c(){n=x("div"),e=x("div"),l&&l.c(),y(e,"class","box box-modal-window background-25 pad-hor"),T(e,"width",t[0]+"%"),y(n,"class","box box-modal-background box-arrange-hor"),_(n,"box-display-none",!t[2])},m(o,i){var u;g(o,n,i),h(n,e),l&&l.m(e,null),r=!0,c||(s=[C(e,"click",(u=t[7],function(t){return t.stopPropagation(),u.call(this,t)})),C(n,"click",t[1])],c=!0)},p(t,[o]){l&&l.p&&(!r||32&o)&&p(l,i,t,t[5],r?f(i,t[5],o,null):$(t[5]),null),(!r||1&o)&&T(e,"width",t[0]+"%"),4&o&&_(n,"box-display-none",!t[2])},i(t){r||(Q(l,t),r=!0)},o(t){Y(l,t),r=!1},d(t){t&&m(n),l&&l.d(t),c=!1,o(s)}}}function rn(t,n,e){let{$$slots:o={},$$scope:r}=n,{width:c}=n,{onClose:s}=n,i=!1;return t.$$set=t=>{"width"in t&&e(0,c=t.width),"onClose"in t&&e(3,s=t.onClose),"$$scope"in t&&e(5,r=t.$$scope)},[c,function(){e(2,i=!1),s()},i,s,function(){e(2,i=!0)},r,o,function(n){O.call(this,t,n)}]}class cn extends ot{constructor(t){super(),et(this,t,rn,on,c,{width:0,onClose:3,openModal:4,closeModal:1})}get openModal(){return this.$$.ctx[4]}get closeModal(){return this.$$.ctx[1]}}function sn(n){let e,o,r,c,s,i,l;return{c(){e=x("span"),o=w(n[0]),r=v(),c=x("span"),s=x("input"),y(e,"class","foreground-cc font-small pad-vert-small"),y(s,"class","background-1e box-width-full foreground-cc"),y(s,"type","text"),y(c,"class","pad-bottom-small")},m(t,u){g(t,e,u),h(e,o),g(t,r,u),g(t,c,u),h(c,s),n[6](s),i||(l=C(s,"keydown",n[2]),i=!0)},p(t,[n]){1&n&&E(o,t[0])},i:t,o:t,d(t){t&&m(e),t&&m(r),t&&m(c),n[6](null),i=!1,l()}}}function ln(t,n,e){let o,{label:r}=n,{onEnterCallback:c}=n;return t.$$set=t=>{"label"in t&&e(0,r=t.label),"onEnterCallback"in t&&e(3,c=t.onEnterCallback)},[r,o,function(t){"Enter"===t.key&&0!==t.target.value.length&&(c(t.target.value),t.target.value="")},c,async function(){await(R(),A),o.focus()},function(){e(1,o.value="",o)},function(t){z[t?"unshift":"push"]((()=>{o=t,e(1,o)}))}]}class un extends ot{constructor(t){super(),et(this,t,ln,sn,c,{label:0,onEnterCallback:3,focus:4,clear:5})}get focus(){return this.$$.ctx[4]}get clear(){return this.$$.ctx[5]}}function an(n){let e;return{c(){e=x("div"),e.innerHTML='<img src="icons/cloud-compile.png" width="128px" alt=""/> \n    <span class="foreground-cc font-small pad-vert font-x-large">ShnooTalk Playground</span> \n    <div class="box font-small box-items-center pad-hor"><a href="https://github.com/RainingComputers/ShnooTalk" class="foreground-cc text-no-wrap" target="_blank">github.com/RainingComputers/ShnooTalk</a> \n\n        <a href="https://github.com/RainingComputers/shnootalk-cloud-compile" class="foreground-cc text-no-wrap" target="_blank">github.com/RainingComputers/shnootalk-cloud-compile</a> \n\n        <a href="https://github.com/RainingComputers/shnootalk-playground" class="foreground-cc text-no-wrap" target="_blank">github.com/RainingComputers/shnootalk-playground</a> \n\n        <span class="foreground-f80 text-no-wrap foreground-f80 pad-vert" style="font-size: xx-small;">© Copyrights 2021 RainingComputers</span></div>',y(e,"class","box box-items-center background-25 pad-hor pad-vert")},m(t,n){g(t,e,n)},p:t,i:t,o:t,d(t){t&&m(e)}}}class dn extends ot{constructor(t){super(),et(this,t,null,an,c,{})}}function fn(n){let e,o,r;return{c(){e=x("pre"),o=x("code"),r=w(n[0]),y(o,"class","box box-child-grow foreground-cc"),y(e,"class",pn)},m(t,n){g(t,e,n),h(e,o),h(o,r)},p(t,[n]){1&n&&E(r,t[0])},i:t,o:t,d(t){t&&m(e)}}}const pn=["box","box-child-grow","pad-hor","scroll-x","scroll-y","scroll-hidden"].join(" ");function $n(t,n,e){let{output:o=""}=n;return t.$$set=t=>{"output"in t&&e(0,o=t.output)},[o]}class hn extends ot{constructor(t){super(),et(this,t,$n,fn,c,{output:0})}}function gn(t){let n;return{c(){n=x("span"),n.textContent="OK",y(n,"class","pad-hor pad-vert foreground-green font-small text-bold svelte-j6xj8h")},m(t,e){g(t,n,e)},d(t){t&&m(n)}}}function mn(t){let n;return{c(){n=x("span"),n.textContent="ERROR",y(n,"class","pad-hor pad-vert foreground-red font-small text-bold svelte-j6xj8h")},m(t,e){g(t,n,e)},d(t){t&&m(n)}}}function bn(n){let e,o,r=n[1]&&gn(),c=n[0]&&mn();return{c(){r&&r.c(),e=v(),c&&c.c(),o=k()},m(t,n){r&&r.m(t,n),g(t,e,n),c&&c.m(t,n),g(t,o,n)},p(t,[n]){t[1]?r||(r=gn(),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),t[0]?c||(c=mn(),c.c(),c.m(o.parentNode,o)):c&&(c.d(1),c=null)},i:t,o:t,d(t){r&&r.d(t),t&&m(e),c&&c.d(t),t&&m(o)}}}function xn(t,n,e){let{error:o=!1}=n,{ok:r=!1}=n;return t.$$set=t=>{"error"in t&&e(0,o=t.error),"ok"in t&&e(1,r=t.ok)},[o,r]}class wn extends ot{constructor(t){super(),et(this,t,xn,bn,c,{error:0,ok:1})}}function vn(t){let n,e,o,r,c,s,i,u,d;const b=t[4].default,k=a(b,t,t[3],null);return{c(){n=x("div"),e=x("img"),c=v(),s=x("span"),i=w(t[2]),u=v(),k&&k.c(),l(e.src,o=t[0])||y(e,"src",o),y(e,"class","pad-left"),y(e,"width",r=t[1]+"px"),y(e,"alt",""),y(s,"class",kn),y(n,"class","box box-arrange-hor")},m(t,o){g(t,n,o),h(n,e),h(n,c),h(n,s),h(s,i),h(n,u),k&&k.m(n,null),d=!0},p(t,[n]){(!d||1&n&&!l(e.src,o=t[0]))&&y(e,"src",o),(!d||2&n&&r!==(r=t[1]+"px"))&&y(e,"width",r),(!d||4&n)&&E(i,t[2]),k&&k.p&&(!d||8&n)&&p(k,b,t,t[3],d?f(b,t[3],n,null):$(t[3]),null)},i(t){d||(Q(k,t),d=!0)},o(t){Y(k,t),d=!1},d(t){t&&m(n),k&&k.d(t)}}}const kn=["pad-hor","pad-vert","box-width-full","foreground-cc","font-small","box-child-grow"].join(" ");function Cn(t,n,e){let{$$slots:o={},$$scope:r}=n,{icon:c}=n,{iconWidth:s=16}=n,{label:i}=n;return t.$$set=t=>{"icon"in t&&e(0,c=t.icon),"iconWidth"in t&&e(1,s=t.iconWidth),"label"in t&&e(2,i=t.label),"$$scope"in t&&e(3,r=t.$$scope)},[c,s,i,r,o]}class yn extends ot{constructor(t){super(),et(this,t,Cn,vn,c,{icon:0,iconWidth:1,label:2})}}function En(n){let e,o;return{c(){e=x("div"),o=x("div"),y(o,"class","loader"),T(o,"width",Tn+"px"),T(o,"height",Tn+"px"),y(e,"class","pad-vert")},m(t,n){g(t,e,n),h(e,o)},p:t,i:t,o:t,d(t){t&&m(e)}}}let Tn=50;class _n extends ot{constructor(t){super(),et(this,t,null,En,c,{})}}function In(t){let n,e;return n=new wn({props:{error:t[3],ok:t[2]}}),{c(){Z(n.$$.fragment)},m(t,o){tt(n,t,o),e=!0},p(t,e){const o={};8&e&&(o.error=t[3]),4&e&&(o.ok=t[2]),n.$set(o)},i(t){e||(Q(n.$$.fragment,t),e=!0)},o(t){Y(n.$$.fragment,t),e=!1},d(t){nt(n,t)}}}function Sn(t){let n,e;return n=new hn({props:{output:t[0]}}),{c(){Z(n.$$.fragment)},m(t,o){tt(n,t,o),e=!0},p(t,e){const o={};1&e&&(o.output=t[0]),n.$set(o)},i(t){e||(Q(n.$$.fragment,t),e=!0)},o(t){Y(n.$$.fragment,t),e=!1},d(t){nt(n,t)}}}function Nn(n){let e,o,r,c,s;return o=new _n({}),{c(){e=x("div"),Z(o.$$.fragment),r=v(),c=x("span"),c.textContent="Compiling",y(c,"class","pad-vert foreground-f80 font-small"),y(e,"class","box box-child-grow box-items-center box-width-full")},m(t,n){g(t,e,n),tt(o,e,null),h(e,r),h(e,c),s=!0},p:t,i(t){s||(Q(o.$$.fragment,t),s=!0)},o(t){Y(o.$$.fragment,t),s=!1},d(t){t&&m(e),nt(o)}}}function Ln(t){let n,e,o,r,c,s;n=new yn({props:{icon:"icons/terminal.svg",label:"OUTPUT",$$slots:{default:[In]},$$scope:{ctx:t}}});const i=[Nn,Sn],l=[];function u(t,n){return t[1]?0:1}return o=u(t),r=l[o]=i[o](t),{c(){Z(n.$$.fragment),e=v(),r.c(),c=k()},m(t,r){tt(n,t,r),g(t,e,r),l[o].m(t,r),g(t,c,r),s=!0},p(t,[e]){const s={};28&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);let a=o;o=u(t),o===a?l[o].p(t,e):(q(),Y(l[a],1,1,(()=>{l[a]=null})),J(),r=l[o],r?r.p(t,e):(r=l[o]=i[o](t),r.c()),Q(r,1),r.m(c.parentNode,c))},i(t){s||(Q(n.$$.fragment,t),Q(r),s=!0)},o(t){Y(n.$$.fragment,t),Y(r),s=!1},d(t){nt(n,t),t&&m(e),l[o].d(t),t&&m(c)}}}function Mn(t,n,e){let{output:o=""}=n,{loading:r=!1}=n,{ok:c=!1}=n,{error:s=!1}=n;return t.$$set=t=>{"output"in t&&e(0,o=t.output),"loading"in t&&e(1,r=t.loading),"ok"in t&&e(2,c=t.ok),"error"in t&&e(3,s=t.error)},[o,r,c,s]}class Wn extends ot{constructor(t){super(),et(this,t,Mn,Ln,c,{output:0,loading:1,ok:2,error:3})}}function On(n){let e,o,r,c,s;return o=new yn({props:{icon:"icons/terminal.svg",label:"INPUT"}}),{c(){e=x("div"),Z(o.$$.fragment),r=v(),c=x("textarea"),y(c,"class",jn),y(c,"placeholder","Enter input here"),y(e,"class","box box-width-full border-top-37 box-height-quarter")},m(t,i){g(t,e,i),tt(o,e,null),h(e,r),h(e,c),n[2](c),s=!0},p:t,i(t){s||(Q(o.$$.fragment,t),s=!0)},o(t){Y(o.$$.fragment,t),s=!1},d(t){t&&m(e),nt(o),n[2](null)}}}const jn=["box-height-full","background-2d","foreground-cc","placeholder-foreground-f80","pad-hor"].join(" ");function zn(t,n,e){let o;return[o,function(){return o.value},function(t){z[t?"unshift":"push"]((()=>{o=t,e(0,o)}))}]}class Dn extends ot{constructor(t){super(),et(this,t,zn,On,c,{getInput:1})}get getInput(){return this.$$.ctx[1]}}var Pn;!function(t){t.EXEC_TIMEDOUT="EXEC_TIMEDOUT",t.CLANG_LINK_TIMEDOUT="CLANG_LINK_TIMEDOUT",t.CLANG_LINK_FAILED="CLANG_LINK_FAILED",t.COMPILE_FAILED="COMPILE_FAILED",t.COMPILE_TIMEDOUT="COMPILE_TIMEDOUT",t.SUCCESS="SUCCESS"}(Pn||(Pn={}));const An={output:"Something went wrong, please try again later",result:Pn.COMPILE_FAILED},Un={output:"Execution has timed out",result:Pn.EXEC_TIMEDOUT};async function Rn(t){try{const n=await async function(t,n,e){let o={method:n};e&&(o={method:n,headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});const r=await fetch(t,o);return function(t){if(200!==t.status)throw{error:"response not OK",context:t}}(r),r.json()}("https://shnooapps.loophole.site/shnootalk-playground/api/v2/compile","post",t);return n.result===Pn.EXEC_TIMEDOUT?Un:n}catch(t){return An}}function Hn(t){let n,e,o={label:"Enter name",onEnterCallback:t[12]};return n=new un({props:o}),t[15](n),{c(){Z(n.$$.fragment)},m(t,o){tt(n,t,o),e=!0},p(t,e){n.$set({})},i(t){e||(Q(n.$$.fragment,t),e=!0)},o(t){Y(n.$$.fragment,t),e=!1},d(e){t[15](null),nt(n,e)}}}function Vn(t){let n,e;return n=new dn({}),{c(){Z(n.$$.fragment)},m(t,o){tt(n,t,o),e=!0},i(t){e||(Q(n.$$.fragment,t),e=!0)},o(t){Y(n.$$.fragment,t),e=!1},d(t){nt(n,t)}}}function Fn(t){let n,e,o,r,c,s,i,l,u={ctx:t[10]};return n=new Rt({props:u}),t[20](n),n.$on("newTab",t[11]),o=new en({}),c=new ht({props:{onClick:t[21]}}),i=new dt({props:{onClick:t[14],disabled:t[1]}}),{c(){Z(n.$$.fragment),e=v(),Z(o.$$.fragment),r=v(),Z(c.$$.fragment),s=v(),Z(i.$$.fragment)},m(t,u){tt(n,t,u),g(t,e,u),tt(o,t,u),g(t,r,u),tt(c,t,u),g(t,s,u),tt(i,t,u),l=!0},p(t,e){n.$set({});const o={};32&e&&(o.onClick=t[21]),c.$set(o);const r={};2&e&&(r.disabled=t[1]),i.$set(r)},i(t){l||(Q(n.$$.fragment,t),Q(o.$$.fragment,t),Q(c.$$.fragment,t),Q(i.$$.fragment,t),l=!0)},o(t){Y(n.$$.fragment,t),Y(o.$$.fragment,t),Y(c.$$.fragment,t),Y(i.$$.fragment,t),l=!1},d(l){t[20](null),nt(n,l),l&&m(e),nt(o,l),l&&m(r),nt(c,l),l&&m(s),nt(i,l)}}}function Kn(t){let n,e,o,r,c,s,i,l,u,a,d,f,p,$,b,w,k,E={width:25,onClose:t[16],$$slots:{default:[Hn]},$$scope:{ctx:t}};e=new cn({props:E}),t[17](e);let T={width:30,onClose:t[18],$$slots:{default:[Vn]},$$scope:{ctx:t}};r=new cn({props:T}),t[19](r),s=new it({props:{$$slots:{default:[Fn]},$$scope:{ctx:t}}});let _={ctx:t[10],fontSize:17};u=new tn({props:_}),t[22](u),f=new Wn({props:{output:t[0],loading:t[1],ok:t[2],error:t[3]}});return $=new Dn({props:{}}),t[23]($),{c(){n=x("main"),Z(e.$$.fragment),o=v(),Z(r.$$.fragment),c=v(),Z(s.$$.fragment),i=v(),l=x("div"),Z(u.$$.fragment),a=v(),d=x("div"),Z(f.$$.fragment),p=v(),Z($.$$.fragment),y(d,"class","box background-2d box-width-35"),y(l,"class","box box-arrange-hor box-width-full box-height-full"),y(n,"class","box-root")},m(m,x){g(m,n,x),tt(e,n,null),h(n,o),tt(r,n,null),h(n,c),tt(s,n,null),h(n,i),h(n,l),tt(u,l,null),h(l,a),h(l,d),tt(f,d,null),h(d,p),tt($,d,null),b=!0,w||(k=C(window,"keydown",t[13]),w=!0)},p(t,[n]){const o={};128&n&&(o.onClose=t[16]),16777472&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o);const c={};128&n&&(c.onClose=t[18]),16777216&n&&(c.$$scope={dirty:n,ctx:t}),r.$set(c);const i={};16777314&n&&(i.$$scope={dirty:n,ctx:t}),s.$set(i);u.$set({});const l={};1&n&&(l.output=t[0]),2&n&&(l.loading=t[1]),4&n&&(l.ok=t[2]),8&n&&(l.error=t[3]),f.$set(l);$.$set({})},i(t){b||(Q(e.$$.fragment,t),Q(r.$$.fragment,t),Q(s.$$.fragment,t),Q(u.$$.fragment,t),Q(f.$$.fragment,t),Q($.$$.fragment,t),b=!0)},o(t){Y(e.$$.fragment,t),Y(r.$$.fragment,t),Y(s.$$.fragment,t),Y(u.$$.fragment,t),Y(f.$$.fragment,t),Y($.$$.fragment,t),b=!1},d(o){o&&m(n),t[17](null),nt(e),t[19](null),nt(r),nt(s),t[22](null),nt(u),nt(f),t[23](null),nt($),w=!1,k()}}}function Gn(t,n,e){const o=new bt(["main.shtk"]);let r,c,s,i,l,u,a="",d=!1,f=!1,p=!1;N((()=>{i.setContent("main.shtk",'fn main() -> int\n{\n    println("Hello world")\n    return 0\n}\n'),i.focus()}));return[a,d,f,p,r,c,s,i,l,u,o,function(){r.openModal(),l.focus()},function(t){r.closeModal(),s.addTab(t)},function(t){"Escape"===t.key&&(r.closeModal(),c.closeModal(),l.clear(),i.focus(),t.preventDefault())},async function(){const t=Object.assign(Object.assign({},i.getContents()),{input:u.getInput()});e(1,d=!0);const n=await Rn(t),o=n.result;e(0,a=n.output),e(2,f=o===Pn.SUCCESS),e(3,p=!f),e(1,d=!1)},function(t){z[t?"unshift":"push"]((()=>{l=t,e(8,l)}))},()=>{i.focus()},function(t){z[t?"unshift":"push"]((()=>{r=t,e(4,r)}))},()=>{i.focus()},function(t){z[t?"unshift":"push"]((()=>{c=t,e(5,c)}))},function(t){z[t?"unshift":"push"]((()=>{s=t,e(6,s)}))},()=>c.openModal(),function(t){z[t?"unshift":"push"]((()=>{i=t,e(7,i)}))},function(t){z[t?"unshift":"push"]((()=>{u=t,e(9,u)}))}]}return new class extends ot{constructor(t){super(),et(this,t,Gn,Kn,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
