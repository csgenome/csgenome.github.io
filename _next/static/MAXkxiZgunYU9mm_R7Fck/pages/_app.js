(window.webpackJsonp=window.webpackJsonp||[]).push([["f496"],{"0tVQ":function(e,t,n){n("FlQf"),n("VJsP"),e.exports=n("WEpk").Array.from},"1TCz":function(e,t,n){"use strict";n.r(t);var r=n("0iUn"),a=n("sLSF"),u=n("MI3g"),o=n("a7VT"),i=n("Tit0"),l=n("q1tI"),c=n.n(l),f=n("8Bbg"),d=n.n(f),s=n("m/Pd"),p=n.n(s),h=n("pVnL"),v=n.n(h),m=(n("17x9"),n("2W6z"),n("OKji")),y=n("aXM8"),b=n("hfi/");var g=function(e){var t=e.children,n=e.theme,r=Object(y.a)(),a=c.a.useMemo(function(){var e=null===r?n:function(e,t){return"function"==typeof t?t(e):v()({},e,t)}(r,n);return null!==r&&e&&(e[b.a]=!0),e},[n,r]);return c.a.createElement(m.a.Provider,{value:a},t)},w=n("R/WZ"),C=Object(w.a)(function(e){return{"@global":{html:{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightMedium},body:v()({margin:0,color:e.palette.text.primary},e.typography.body2,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}})}}},{name:"MuiCssBaseline"});var k=function(e){var t=e.children,n=void 0===t?null:t;return C(),c.a.createElement(c.a.Fragment,null,n)},P=n("viY9"),x=n("fWIC"),_=n.n(x),M=Object(P.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:_.a.A400},background:{default:"#fff"}}}),O=function(e){function t(){return Object(r.default)(this,t),Object(u.default)(this,Object(o.default)(t).apply(this,arguments))}return Object(i.default)(t,e),Object(a.default)(t,[{key:"componentDidMount",value:function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode.removeChild(e)}},{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return c.a.createElement(f.Container,null,c.a.createElement(p.a,null,c.a.createElement("title",null,"CS Genome Project")),c.a.createElement(g,{theme:M},c.a.createElement(k,null),c.a.createElement(t,n)))}}]),t}(d.a);t.default=O},"4hZ1":function(e,t,n){"use strict";var r=n("KI45"),a=r(n("0iUn")),u=r(n("MI3g")),o=r(n("a7VT")),i=r(n("AT/M")),l=r(n("sLSF")),c=r(n("Tit0")),f=r(n("dfwq")),d=r(n("ttDY"));Object.defineProperty(t,"__esModule",{value:!0});var s=n("q1tI"),p="undefined"==typeof window;t.default=function(){var e,t=new d.default;function n(n){e=n.props.reduceComponentsToState((0,f.default)(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(r){function f(e){var r;return(0,a.default)(this,f),r=(0,u.default)(this,(0,o.default)(f).call(this,e)),p&&(t.add((0,i.default)(r)),n((0,i.default)(r))),r}return(0,c.default)(f,r),(0,l.default)(f,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),(0,l.default)(f,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),f}(s.Component)}},"8Bbg":function(e,t,n){e.exports=n("B5Ud")},B5Ud:function(e,t,n){"use strict";var r=n("KI45"),a=r(n("eVuF")),u=r(n("UXZV")),o=r(n("/HRN")),i=r(n("WaGi")),l=r(n("ZDA2")),c=r(n("/+P4")),f=r(n("N9n2")),d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},s=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var p=d(n("q1tI")),h=s(n("lgD3")),v=n("Bu4q"),m=n("nOHt"),y=function(e){function t(){return(0,o.default)(this,t),(0,l.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,f.default)(t,e),(0,i.default)(t,[{key:"getChildContext",value:function(){return{router:m.makePublicRouterInstance(this.props.router)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,a=w(t);return p.default.createElement(b,null,p.default.createElement(n,(0,u.default)({},r,{url:a})))}}],[{key:"getInitialProps",value:function(e){var t=e.Component,n=(e.router,e.ctx);try{return a.default.resolve(v.loadGetInitialProps(t,n)).then(function(e){return{pageProps:e}})}catch(r){return a.default.reject(r)}}}]),t}(p.Component);y.childContextTypes={router:h.default.object},t.default=y;var b=function(e){function t(){return(0,o.default)(this,t),(0,l.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,f.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=window.location.hash;if(e=!!e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),t}(p.Component);t.Container=b;var g=v.execOnce(function(){0});function w(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return g(),r},get pathname(){return g(),t},get asPath(){return g(),n},back:function(){g(),e.back()},push:function(t,n){return g(),e.push(t,n)},pushTo:function(t,n){g();var r=n?t:null,a=n||t;return e.push(r,a)},replace:function(t,n){return g(),e.replace(t,n)},replaceTo:function(t,n){g();var r=n?t:null,a=n||t;return e.replace(r,a)}}}t.createUrl=w},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){var e=n("1TCz");return{page:e.default||e}}])},IP1Z:function(e,t,n){"use strict";var r=n("2faE"),a=n("rr1i");e.exports=function(e,t,n){t in e?r.f(e,t,a(0,n)):e[t]=n}},VJsP:function(e,t,n){"use strict";var r=n("2GTP"),a=n("Y7ZC"),u=n("JB68"),o=n("sNwI"),i=n("NwJ3"),l=n("tEej"),c=n("IP1Z"),f=n("fNZA");a(a.S+a.F*!n("TuGD")(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,a,d,s=u(e),p="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,m=void 0!==v,y=0,b=f(s);if(m&&(v=r(v,h>2?arguments[2]:void 0,2)),null==b||p==Array&&i(b))for(n=new p(t=l(s.length));t>y;y++)c(n,y,m?v(s[y],y):s[y]);else for(d=b.call(s),n=new p;!(a=d.next()).done;y++)c(n,y,m?o(d,v,[a.value,y],!0):a.value);return n.length=y,n}})},VKFn:function(e,t,n){n("bBy9"),n("FlQf"),e.exports=n("ldVq")},Wziy:function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI")),u=n("imt6");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.enabled,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,u=e.hasQuery;return n&&(!a||a&&(void 0!==u&&u))}t.isAmp=o,t.useAmp=function(){return o(a.default.useContext(u.AmpModeContext))},t.withAmp=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).hybrid,n=void 0!==t&&t;function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=a.default.useContext(u.AmpModeContext);return r.enabled=!0,r.hybrid=n,a.default.createElement(e,t)}return r.__nextAmpOnly=!n,r.getInitialProps=e.getInitialProps,r}},d04V:function(e,t,n){e.exports=n("0tVQ")},dfwq:function(e,t,n){"use strict";n.r(t);var r=n("p0XB"),a=n.n(r);var u=n("d04V"),o=n.n(u),i=n("yLu3"),l=n.n(i);function c(e){return function(e){if(a()(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(l()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return o()(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"default",function(){return c})},fWIC:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"};t.default=r},imt6:function(e,t,n){"use strict";var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI"));t.AmpModeContext=a.createContext({})},ldVq:function(e,t,n){var r=n("QMMT"),a=n("UWiX")("iterator"),u=n("SBuE");e.exports=n("WEpk").isIterable=function(e){var t=Object(e);return void 0!==t[a]||"@@iterator"in t||u.hasOwnProperty(r(t))}},"m/Pd":function(e,t,n){"use strict";var r=n("KI45")(n("ttDY")),a=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=a(n("q1tI")),o=a(n("4hZ1")),i=n("imt6"),l=n("IClC"),c=n("Wziy");function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"next-head",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[u.default.createElement("meta",{key:"charSet",charSet:"utf-8",className:e})];return t||n.push(u.default.createElement("meta",{key:"viewport",name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1",className:e})),n}function d(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===u.default.Fragment?e.concat(u.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}t.defaultHead=f;var s=["name","httpEquiv","charSet","viewport","itemProp"];function p(e,t){return e.reduce(function(e,t){var n=u.default.Children.toArray(t.props.children);return e.concat(n)},[]).reduce(d,[]).reverse().concat(f("",t.isAmp)).filter((n=new r.default,a=new r.default,o=new r.default,i={},function(e){if(e.key&&"number"!=typeof e.key&&0===e.key.indexOf(".$"))return!n.has(e.key)&&(n.add(e.key),!0);switch(e.type){case"title":case"base":if(a.has(e.type))return!1;a.add(e.type);break;case"meta":for(var t=0,u=s.length;t<u;t++){var l=s[t];if(e.props.hasOwnProperty(l))if("charSet"===l||"viewport"===l){if(o.has(l))return!1;o.add(l)}else{var c=e.props[l],f=i[l]||new r.default;if(f.has(c))return!1;f.add(c),i[l]=f}}}return!0})).reverse().map(function(e,t){var n=(e.props&&e.props.className?e.props.className+" ":"")+"next-head",r=e.key||t;return u.default.cloneElement(e,{key:r,className:n})});var n,a,o,i}var h=o.default();function v(e){var t=e.children;return u.default.createElement(i.AmpModeContext.Consumer,null,function(e){return u.default.createElement(l.HeadManagerContext.Consumer,null,function(n){return u.default.createElement(h,{reduceComponentsToState:p,handleStateChange:n,isAmp:c.isAmp(e)},t)})})}v.rewind=h.rewind,t.default=v},yLu3:function(e,t,n){e.exports=n("VKFn")}},[["GcxT","5d41","9da1"]]]);