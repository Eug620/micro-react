import{r as e,R as t,j as r,b as n}from"https://eug620.github.io/micro-react/assets/acro-design.4ef35e85.js";var o={exports:{}},u={},s=e.exports;var c="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=s.useState,i=s.useEffect,f=s.useLayoutEffect,p=s.useDebugValue;function l(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!c(e,r)}catch(n){return!0}}var y="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=a({inst:{value:r,getSnapshot:t}}),o=n[0].inst,u=n[1];return f((function(){o.value=r,o.getSnapshot=t,l(o)&&u({inst:o})}),[e,r,t]),i((function(){return l(o)&&u({inst:o}),e((function(){l(o)&&u({inst:o})}))}),[e]),p(r),r};u.useSyncExternalStore=void 0!==s.useSyncExternalStore?s.useSyncExternalStore:y,o.exports=u;var d={},m=e.exports,S=o.exports;var b="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},v=S.useSyncExternalStore,x=m.useRef,g=m.useEffect,P=m.useMemo,h=m.useDebugValue;d.useSyncExternalStoreWithSelector=function(e,t,r,n,o){var u=x(null);if(null===u.current){var s={hasValue:!1,value:null};u.current=s}else s=u.current;u=P((function(){function e(e){if(!a){if(a=!0,u=e,e=n(e),void 0!==o&&s.hasValue){var t=s.value;if(o(t,e))return c=t}return c=e}if(t=c,b(u,e))return t;var r=n(e);return void 0!==o&&o(t,r)?t:(u=e,c=r)}var u,c,a=!1,i=void 0===r?null:r;return[function(){return e(t())},null===i?void 0:function(){return e(i())}]}),[t,r,n,o]);var c=v(e,u[0],u[1]);return g((function(){s.hasValue=!0,s.value=c}),[c]),h(c),c};let w=function(e){e()};const $=()=>w,O=t.createContext(null);function M(){return M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},M.apply(this,arguments)}function C(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}var E={exports:{}},j={},R="function"==typeof Symbol&&Symbol.for,T=R?Symbol.for("react.element"):60103,N=R?Symbol.for("react.portal"):60106,F=R?Symbol.for("react.fragment"):60107,q=R?Symbol.for("react.strict_mode"):60108,D=R?Symbol.for("react.profiler"):60114,_=R?Symbol.for("react.provider"):60109,L=R?Symbol.for("react.context"):60110,B=R?Symbol.for("react.async_mode"):60111,k=R?Symbol.for("react.concurrent_mode"):60111,z=R?Symbol.for("react.forward_ref"):60112,V=R?Symbol.for("react.suspense"):60113,W=R?Symbol.for("react.suspense_list"):60120,U=R?Symbol.for("react.memo"):60115,A=R?Symbol.for("react.lazy"):60116,I=R?Symbol.for("react.block"):60121,H=R?Symbol.for("react.fundamental"):60117,G=R?Symbol.for("react.responder"):60118,J=R?Symbol.for("react.scope"):60119;function K(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case T:switch(e=e.type){case B:case k:case F:case D:case q:case V:return e;default:switch(e=e&&e.$$typeof){case L:case z:case A:case U:case _:return e;default:return t}}case N:return t}}}function Q(e){return K(e)===k}j.AsyncMode=B,j.ConcurrentMode=k,j.ContextConsumer=L,j.ContextProvider=_,j.Element=T,j.ForwardRef=z,j.Fragment=F,j.Lazy=A,j.Memo=U,j.Portal=N,j.Profiler=D,j.StrictMode=q,j.Suspense=V,j.isAsyncMode=function(e){return Q(e)||K(e)===B},j.isConcurrentMode=Q,j.isContextConsumer=function(e){return K(e)===L},j.isContextProvider=function(e){return K(e)===_},j.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===T},j.isForwardRef=function(e){return K(e)===z},j.isFragment=function(e){return K(e)===F},j.isLazy=function(e){return K(e)===A},j.isMemo=function(e){return K(e)===U},j.isPortal=function(e){return K(e)===N},j.isProfiler=function(e){return K(e)===D},j.isStrictMode=function(e){return K(e)===q},j.isSuspense=function(e){return K(e)===V},j.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===F||e===k||e===D||e===q||e===V||e===W||"object"==typeof e&&null!==e&&(e.$$typeof===A||e.$$typeof===U||e.$$typeof===_||e.$$typeof===L||e.$$typeof===z||e.$$typeof===H||e.$$typeof===G||e.$$typeof===J||e.$$typeof===I)},j.typeOf=K;var X=E.exports=j,Y={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Z={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ee={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},te={};function re(e){return X.isMemo(e)?ee:te[e.$$typeof]||Y}te[X.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},te[X.Memo]=ee;var ne=Object.defineProperty,oe=Object.getOwnPropertyNames,ue=Object.getOwnPropertySymbols,se=Object.getOwnPropertyDescriptor,ce=Object.getPrototypeOf,ae=Object.prototype;var ie,fe=function e(t,r,n){if("string"!=typeof r){if(ae){var o=ce(r);o&&o!==ae&&e(t,o,n)}var u=oe(r);ue&&(u=u.concat(ue(r)));for(var s=re(t),c=re(r),a=0;a<u.length;++a){var i=u[a];if(!(Z[i]||n&&n[i]||c&&c[i]||s&&s[i])){var f=se(r,i);try{ne(t,i,f)}catch(p){}}}}return t},pe={exports:{}},le={},ye=Symbol.for("react.element"),de=Symbol.for("react.portal"),me=Symbol.for("react.fragment"),Se=Symbol.for("react.strict_mode"),be=Symbol.for("react.profiler"),ve=Symbol.for("react.provider"),xe=Symbol.for("react.context"),ge=Symbol.for("react.server_context"),Pe=Symbol.for("react.forward_ref"),he=Symbol.for("react.suspense"),we=Symbol.for("react.suspense_list"),$e=Symbol.for("react.memo"),Oe=Symbol.for("react.lazy"),Me=Symbol.for("react.offscreen");function Ce(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case ye:switch(e=e.type){case me:case be:case Se:case he:case we:return e;default:switch(e=e&&e.$$typeof){case ge:case xe:case Pe:case Oe:case $e:case ve:return e;default:return t}}case de:return t}}}ie=Symbol.for("react.module.reference"),le.ContextConsumer=xe,le.ContextProvider=ve,le.Element=ye,le.ForwardRef=Pe,le.Fragment=me,le.Lazy=Oe,le.Memo=$e,le.Portal=de,le.Profiler=be,le.StrictMode=Se,le.Suspense=he,le.SuspenseList=we,le.isAsyncMode=function(){return!1},le.isConcurrentMode=function(){return!1},le.isContextConsumer=function(e){return Ce(e)===xe},le.isContextProvider=function(e){return Ce(e)===ve},le.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===ye},le.isForwardRef=function(e){return Ce(e)===Pe},le.isFragment=function(e){return Ce(e)===me},le.isLazy=function(e){return Ce(e)===Oe},le.isMemo=function(e){return Ce(e)===$e},le.isPortal=function(e){return Ce(e)===de},le.isProfiler=function(e){return Ce(e)===be},le.isStrictMode=function(e){return Ce(e)===Se},le.isSuspense=function(e){return Ce(e)===he},le.isSuspenseList=function(e){return Ce(e)===we},le.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===me||e===be||e===Se||e===he||e===we||e===Me||"object"==typeof e&&null!==e&&(e.$$typeof===Oe||e.$$typeof===$e||e.$$typeof===ve||e.$$typeof===xe||e.$$typeof===Pe||e.$$typeof===ie||void 0!==e.getModuleId)},le.typeOf=Ce,pe.exports=le;const Ee=["initMapStateToProps","initMapDispatchToProps","initMergeProps"];function je(e,t,r,n,{areStatesEqual:o,areOwnPropsEqual:u,areStatePropsEqual:s}){let c,a,i,f,p,l=!1;function y(l,y){const d=!u(y,a),m=!o(l,c);return c=l,a=y,d&&m?(i=e(c,a),t.dependsOnOwnProps&&(f=t(n,a)),p=r(i,f,a),p):d?(e.dependsOnOwnProps&&(i=e(c,a)),t.dependsOnOwnProps&&(f=t(n,a)),p=r(i,f,a),p):m?function(){const t=e(c,a),n=!s(t,i);return i=t,n&&(p=r(i,f,a)),p}():p}return function(o,u){return l?y(o,u):(c=o,a=u,i=e(c,a),f=t(n,a),p=r(i,f,a),l=!0,p)}}function Re(e){return function(t){const r=e(t);function n(){return r}return n.dependsOnOwnProps=!1,n}}function Te(e){return e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function Ne(e,t){return function(t,{displayName:r}){const n=function(e,t){return n.dependsOnOwnProps?n.mapToProps(e,t):n.mapToProps(e,void 0)};return n.dependsOnOwnProps=!0,n.mapToProps=function(t,r){n.mapToProps=e,n.dependsOnOwnProps=Te(e);let o=n(t,r);return"function"==typeof o&&(n.mapToProps=o,n.dependsOnOwnProps=Te(o),o=n(t,r)),o},n}}function Fe(e,t){return(r,n)=>{throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${n.wrappedComponentName}.`)}}function qe(e,t,r){return M({},r,e,t)}const De={notify(){},get:()=>[]};function _e(e,t){let r,n=De;function o(){s.onStateChange&&s.onStateChange()}function u(){r||(r=t?t.addNestedSub(o):e.subscribe(o),n=function(){const e=$();let t=null,r=null;return{clear(){t=null,r=null},notify(){e((()=>{let e=t;for(;e;)e.callback(),e=e.next}))},get(){let e=[],r=t;for(;r;)e.push(r),r=r.next;return e},subscribe(e){let n=!0,o=r={callback:e,next:null,prev:r};return o.prev?o.prev.next=o:t=o,function(){n&&null!==t&&(n=!1,o.next?o.next.prev=o.prev:r=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}())}const s={addNestedSub:function(e){return u(),n.subscribe(e)},notifyNestedSubs:function(){n.notify()},handleChangeWrapper:o,isSubscribed:function(){return Boolean(r)},trySubscribe:u,tryUnsubscribe:function(){r&&(r(),r=void 0,n.clear(),n=De)},getListeners:()=>n};return s}const Le=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement)?e.exports.useLayoutEffect:e.exports.useEffect;function Be(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function ke(e,t){if(Be(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;const r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(let o=0;o<r.length;o++)if(!Object.prototype.hasOwnProperty.call(t,r[o])||!Be(e[r[o]],t[r[o]]))return!1;return!0}const ze=["reactReduxForwardedRef"];let Ve=()=>{throw new Error("uSES not initialized!")};const We=[null,null];function Ue(e,t,r,n,o,u){e.current=n,r.current=!1,o.current&&(o.current=null,u())}function Ae(e,t){return e===t}function Ie(n,o,u,{pure:s,areStatesEqual:c=Ae,areOwnPropsEqual:a=ke,areStatePropsEqual:i=ke,areMergedPropsEqual:f=ke,forwardRef:p=!1,context:l=O}={}){const y=l,d=function(e){return e?"function"==typeof e?Ne(e):Fe(e,"mapStateToProps"):Re((()=>({})))}(n),m=function(e){return e&&"object"==typeof e?Re((t=>function(e,t){const r={};for(const n in e){const o=e[n];"function"==typeof o&&(r[n]=(...e)=>t(o(...e)))}return r}(e,t))):e?"function"==typeof e?Ne(e):Fe(e,"mapDispatchToProps"):Re((e=>({dispatch:e})))}(o),S=function(e){return e?"function"==typeof e?function(e){return function(t,{displayName:r,areMergedPropsEqual:n}){let o,u=!1;return function(t,r,s){const c=e(t,r,s);return u?n(c,o)||(o=c):(u=!0,o=c),o}}}(e):Fe(e,"mergeProps"):()=>qe}(u),b=Boolean(n);return n=>{const o=n.displayName||n.name||"Component",u=`Connect(${o})`,s={shouldHandleStateChanges:b,displayName:u,wrappedComponentName:o,WrappedComponent:n,initMapStateToProps:d,initMapDispatchToProps:m,initMergeProps:S,areStatesEqual:c,areStatePropsEqual:i,areOwnPropsEqual:a,areMergedPropsEqual:f};function l(o){const[u,c,a]=e.exports.useMemo((()=>{const{reactReduxForwardedRef:e}=o,t=C(o,ze);return[o.context,e,t]}),[o]),i=e.exports.useMemo((()=>u&&u.Consumer&&pe.exports.isContextConsumer(t.createElement(u.Consumer,null))?u:y),[u,y]),f=e.exports.useContext(i),p=Boolean(o.store)&&Boolean(o.store.getState)&&Boolean(o.store.dispatch),l=Boolean(f)&&Boolean(f.store),d=p?o.store:f.store,m=l?f.getServerState:d.getState,S=e.exports.useMemo((()=>function(e,t){let{initMapStateToProps:r,initMapDispatchToProps:n,initMergeProps:o}=t,u=C(t,Ee);return je(r(e,u),n(e,u),o(e,u),e,u)}(d.dispatch,s)),[d]),[v,x]=e.exports.useMemo((()=>{if(!b)return We;const e=_e(d,p?void 0:f.subscription),t=e.notifyNestedSubs.bind(e);return[e,t]}),[d,p,f]),g=e.exports.useMemo((()=>p?f:M({},f,{subscription:v})),[p,f,v]),P=e.exports.useRef(),h=e.exports.useRef(a),w=e.exports.useRef(),$=e.exports.useRef(!1);e.exports.useRef(!1);const O=e.exports.useRef(!1),E=e.exports.useRef();Le((()=>(O.current=!0,()=>{O.current=!1})),[]);const j=e.exports.useMemo((()=>()=>w.current&&a===h.current?w.current:S(d.getState(),a)),[d,a]),R=e.exports.useMemo((()=>e=>v?function(e,t,r,n,o,u,s,c,a,i,f){if(!e)return()=>{};let p=!1,l=null;const y=()=>{if(p||!c.current)return;const e=t.getState();let r,y;try{r=n(e,o.current)}catch(d){y=d,l=d}y||(l=null),r===u.current?s.current||i():(u.current=r,a.current=r,s.current=!0,f())};return r.onStateChange=y,r.trySubscribe(),y(),()=>{if(p=!0,r.tryUnsubscribe(),r.onStateChange=null,l)throw l}}(b,d,v,S,h,P,$,O,w,x,e):()=>{}),[v]);var T,N,F;let q;T=Ue,N=[h,P,$,a,w,x],Le((()=>T(...N)),F);try{q=Ve(R,j,m?()=>S(m(),a):j)}catch(_){throw E.current&&(_.message+=`\nThe error may be correlated with this previous error:\n${E.current.stack}\n\n`),_}Le((()=>{E.current=void 0,w.current=void 0,P.current=q}));const D=e.exports.useMemo((()=>r(n,{...q,ref:c})),[c,n,q]);return e.exports.useMemo((()=>b?r(i.Provider,{value:g,children:D}):D),[i,D,g])}const v=t.memo(l);if(v.WrappedComponent=n,v.displayName=l.displayName=u,p){const e=t.forwardRef((function(e,t){return r(v,{...e,reactReduxForwardedRef:t})}));return e.displayName=u,e.WrappedComponent=n,fe(e,n)}return fe(v,n)}}function He({store:t,context:n,children:o,serverState:u}){const s=e.exports.useMemo((()=>{const e=_e(t);return{store:t,subscription:e,getServerState:u?()=>u:void 0}}),[t,u]),c=e.exports.useMemo((()=>t.getState()),[t]);Le((()=>{const{subscription:e}=s;return e.onStateChange=e.notifyNestedSubs,e.trySubscribe(),c!==t.getState()&&e.notifyNestedSubs(),()=>{e.tryUnsubscribe(),e.onStateChange=void 0}}),[s,c]);return r((n||O).Provider,{value:s,children:o})}var Ge,Je;Ge=o.exports.useSyncExternalStore,Ve=Ge,Je=n.exports.unstable_batchedUpdates,w=Je;export{He as P,Ie as c};
