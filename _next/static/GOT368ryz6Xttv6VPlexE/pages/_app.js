(window.webpackJsonp=window.webpackJsonp||[]).push([["f496"],{"1TCz":function(e,t,n){"use strict";n.r(t);var r=n("0iUn"),a=n("sLSF"),u=n("MI3g"),o=n("a7VT"),l=n("Tit0"),i=n("q1tI"),c=n.n(i),f=n("8Bbg"),d=n.n(f),s=n("m/Pd"),p=n.n(s),h=n("pVnL"),m=n.n(h),v=(n("17x9"),n("2W6z"),n("OKji")),b=n("aXM8"),y=n("hfi/");var g=function(e){var t=e.children,n=e.theme,r=Object(b.a)(),a=c.a.useMemo(function(){var e=null===r?n:function(e,t){return"function"==typeof t?t(e):m()({},e,t)}(r,n);return null!==r&&e&&(e[y.a]=!0),e},[n,r]);return c.a.createElement(v.a.Provider,{value:a},t)},k=n("R/WZ"),C=Object(k.a)(function(e){return{"@global":{html:{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightMedium},body:m()({margin:0,color:e.palette.text.primary},e.typography.body2,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}})}}},{name:"MuiCssBaseline"});var P=function(e){var t=e.children,n=void 0===t?null:t;return C(),c.a.createElement(c.a.Fragment,null,n)},j=n("viY9"),w=n("fWIC"),O=n.n(w),T=Object(j.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:O.a.A400},background:{default:"#fff"}}}),_=function(e){function t(){return Object(r.default)(this,t),Object(u.default)(this,Object(o.default)(t).apply(this,arguments))}return Object(l.default)(t,e),Object(a.default)(t,[{key:"componentDidMount",value:function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode.removeChild(e)}},{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return c.a.createElement(f.Container,null,c.a.createElement(p.a,null,c.a.createElement("title",null,"CS Genome Project")),c.a.createElement(g,{theme:T},c.a.createElement(P,null),c.a.createElement(t,n)))}}]),t}(d.a);t.default=_},"8Bbg":function(e,t,n){e.exports=n("B5Ud")},B5Ud:function(e,t,n){"use strict";var r=n("KI45"),a=r(n("eVuF")),u=r(n("UXZV")),o=r(n("/HRN")),l=r(n("WaGi")),i=r(n("ZDA2")),c=r(n("/+P4")),f=r(n("N9n2")),d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},s=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var p=d(n("q1tI")),h=s(n("lgD3")),m=n("Bu4q"),v=n("nOHt"),b=function(e){function t(){return(0,o.default)(this,t),(0,i.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,f.default)(t,e),(0,l.default)(t,[{key:"getChildContext",value:function(){return{router:v.makePublicRouterInstance(this.props.router)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,a=k(t);return p.default.createElement(y,null,p.default.createElement(n,(0,u.default)({},r,{url:a})))}}],[{key:"getInitialProps",value:function(e){var t=e.Component,n=(e.router,e.ctx);try{return a.default.resolve(m.loadGetInitialProps(t,n)).then(function(e){return{pageProps:e}})}catch(r){return a.default.reject(r)}}}]),t}(p.Component);b.childContextTypes={router:h.default.object},t.default=b;var y=function(e){function t(){return(0,o.default)(this,t),(0,i.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,f.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=window.location.hash;if(e=!!e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),t}(p.Component);t.Container=y;var g=m.execOnce(function(){0});function k(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return g(),r},get pathname(){return g(),t},get asPath(){return g(),n},back:function(){g(),e.back()},push:function(t,n){return g(),e.push(t,n)},pushTo:function(t,n){g();var r=n?t:null,a=n||t;return e.push(r,a)},replace:function(t,n){return g(),e.replace(t,n)},replaceTo:function(t,n){g();var r=n?t:null,a=n||t;return e.replace(r,a)}}}t.createUrl=k},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){var e=n("1TCz");return{page:e.default||e}}])},fWIC:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"};t.default=r}},[["GcxT","5d41","9da1"]]]);