(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[46118],{22122:function(t,e,r){"use strict";function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}r.d(e,{Z:function(){return n}})},19756:function(t,e,r){"use strict";function n(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}r.d(e,{Z:function(){return n}})},3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var u=n.createContext({}),l=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},p=function(t){var e=l(t.components);return n.createElement(u.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,u=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),s=l(r),m=o,b=s["".concat(u,".").concat(m)]||s[m]||f[m]||a;return r?n.createElement(b,c(c({ref:e},p),{},{components:r})):n.createElement(b,c({ref:e},p))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,c=new Array(a);c[0]=s;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},35480:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return u},default:function(){return p}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),c={slug:"2019-07-10-taro-hooks",title:"\u4f7f\u7528 React Hooks \u91cd\u6784\u4f60\u7684\u5c0f\u7a0b\u5e8f",author:"yuche",author_url:"https://github.com/yuche",author_image_url:"https://static.geekbang.org/ck/5cb53de0e50c0.jpeg?imageView2/0/w/800"},i={permalink:"/taro/blog/2019-07-10-taro-hooks",editUrl:"https://github.com/nervjs/taro/edit/blog/blog/2019-07-10-taro-hooks.md",source:"@site/blog/2019-07-10-taro-hooks.md",title:"\u4f7f\u7528 React Hooks \u91cd\u6784\u4f60\u7684\u5c0f\u7a0b\u5e8f",description:"image",date:"2019-07-10T00:00:00.000Z",formattedDate:"2019\u5e747\u670810\u65e5",tags:[],readingTime:9.535,truncated:!0,prevItem:{title:"\u73a9\u8f6c Taro \u8de8\u7aef\u4e4b flex \u5e03\u5c40\u7bc7",permalink:"/taro/blog/2019-09-25-taro-flex"},nextItem:{title:"Taro \u300c\u7269\u6599\u5e02\u573a\u300d\u53ca\u300c\u4ea4\u6d41\u793e\u533a\u300d \u60ca\u559c\u4e0a\u7ebf",permalink:"/taro/blog/2019-06-21-taro-ext-club"}},u=[],l={toc:u};function p(t){var e=t.components,r=(0,o.Z)(t,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://storage.360buyimg.com/taro-club-img/b42116392c909d0680788853011c70db",alt:"image"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u7531\u4f59\u6f88\u5728 GMTC \u5168\u7403\u5927\u524d\u7aef\u6280\u672f 2019 \u7684\u6f14\u8bb2\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://gmtc.infoq.cn/2019/beijing/presentation/1706"},"\u300a\u4f7f\u7528 React Hooks \u91cd\u6784\u4f60\u7684\u5c0f\u7a0b\u5e8f\u300b"),"\u6574\u7406\u800c\u6210\u3002")))}p.isMDXComponent=!0}}]);