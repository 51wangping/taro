(window.webpackJsonp=window.webpackJsonp||[]).push([[1843],{1908:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return l})),n.d(e,"metadata",(function(){return a})),n.d(e,"rightToc",(function(){return b})),n.d(e,"default",(function(){return u}));var r=n(2199),c=n(2200),o=(n(0),n(2201)),l={title:"Taro.openLocation(option)",sidebar_label:"openLocation"},a={unversionedId:"apis/location/openLocation",id:"version-2.x/apis/location/openLocation",isDocsHomePage:!1,title:"Taro.openLocation(option)",description:"\u4f7f\u7528\u5fae\u4fe1\u5185\u7f6e\u5730\u56fe\u67e5\u770b\u4f4d\u7f6e",source:"@site/versioned_docs/version-2.x/apis/location/openLocation.md",slug:"/apis/location/openLocation",permalink:"/taro/docs/2.x/apis/location/openLocation",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/location/openLocation.md",version:"2.x",sidebar_label:"openLocation",sidebar:"version-2.x/API",previous:{title:"Taro.startLocationUpdate(option)",permalink:"/taro/docs/2.x/apis/location/startLocationUpdate"},next:{title:"Taro.onLocationChange(callback)",permalink:"/taro/docs/2.x/apis/location/onLocationChange"}},b=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={rightToc:b};function u(t){var e=t.components,n=Object(c.a)(t,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u4f7f\u7528\u5fae\u4fe1\u5185\u7f6e\u5730\u56fe\u67e5\u770b\u4f4d\u7f6e"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.openLocation.html"}),"\u53c2\u8003\u6587\u6863"))),Object(o.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<CallbackResult>\n")),Object(o.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(o.b)("h3",{id:"option"},"Option"),Object(o.b)("table",null,Object(o.b)("thead",null,Object(o.b)("tr",null,Object(o.b)("th",null,"\u53c2\u6570"),Object(o.b)("th",null,"\u7c7b\u578b"),Object(o.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(o.b)("th",null,"\u8bf4\u660e"))),Object(o.b)("tbody",null,Object(o.b)("tr",null,Object(o.b)("td",null,"latitude"),Object(o.b)("td",null,Object(o.b)("code",null,"number")),Object(o.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(o.b)("td",null,"\u7eac\u5ea6\uff0c\u8303\u56f4\u4e3a-90~90\uff0c\u8d1f\u6570\u8868\u793a\u5357\u7eac\u3002\u4f7f\u7528 gcj02 \u56fd\u6d4b\u5c40\u5750\u6807\u7cfb")),Object(o.b)("tr",null,Object(o.b)("td",null,"longitude"),Object(o.b)("td",null,Object(o.b)("code",null,"number")),Object(o.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(o.b)("td",null,"\u7ecf\u5ea6\uff0c\u8303\u56f4\u4e3a-180~180\uff0c\u8d1f\u6570\u8868\u793a\u897f\u7ecf\u3002\u4f7f\u7528 gcj02 \u56fd\u6d4b\u5c40\u5750\u6807\u7cfb")),Object(o.b)("tr",null,Object(o.b)("td",null,"address"),Object(o.b)("td",null,Object(o.b)("code",null,"string")),Object(o.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(o.b)("td",null,"\u5730\u5740\u7684\u8be6\u7ec6\u8bf4\u660e")),Object(o.b)("tr",null,Object(o.b)("td",null,"complete"),Object(o.b)("td",null,Object(o.b)("code",null,"(res: CallbackResult) => void")),Object(o.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(o.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(o.b)("tr",null,Object(o.b)("td",null,"fail"),Object(o.b)("td",null,Object(o.b)("code",null,"(res: CallbackResult) => void")),Object(o.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(o.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(o.b)("tr",null,Object(o.b)("td",null,"name"),Object(o.b)("td",null,Object(o.b)("code",null,"string")),Object(o.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(o.b)("td",null,"\u4f4d\u7f6e\u540d")),Object(o.b)("tr",null,Object(o.b)("td",null,"scale"),Object(o.b)("td",null,Object(o.b)("code",null,"number")),Object(o.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(o.b)("td",null,"\u7f29\u653e\u6bd4\u4f8b\uff0c\u8303\u56f45~18")),Object(o.b)("tr",null,Object(o.b)("td",null,"success"),Object(o.b)("td",null,Object(o.b)("code",null,"(res: CallbackResult) => void")),Object(o.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(o.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(o.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.getLocation({\n type: 'gcj02', //\u8fd4\u56de\u53ef\u4ee5\u7528\u4e8e Taro.openLocation\u7684\u7ecf\u7eac\u5ea6\n success: function (res) {\n   const latitude = res.latitude\n   const longitude = res.longitude\n   Taro.openLocation({\n     latitude,\n     longitude,\n     scale: 18\n   })\n }\n})\n")),Object(o.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Taro.openLocation"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))))}u.isMDXComponent=!0},2199:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return r}))},2200:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,c={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(c[n]=t[n]);return c}n.d(e,"a",(function(){return r}))},2201:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return s}));var r=n(0),c=n.n(r);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function b(t,e){if(null==t)return{};var n,r,c=function(t,e){if(null==t)return{};var n,r,c={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(c[n]=t[n]);return c}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(c[n]=t[n])}return c}var i=c.a.createContext({}),u=function(t){var e=c.a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},d=function(t){var e=u(t.components);return c.a.createElement(i.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return c.a.createElement(c.a.Fragment,{},e)}},O=c.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,i=b(t,["components","mdxType","originalType","parentName"]),d=u(n),O=r,s=d["".concat(l,".").concat(O)]||d[O]||p[O]||o;return n?c.a.createElement(s,a(a({ref:e},i),{},{components:n})):c.a.createElement(s,a({ref:e},i))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=O;var a={};for(var b in e)hasOwnProperty.call(e,b)&&(a[b]=e[b]);a.originalType=t,a.mdxType="string"==typeof t?t:r,l[1]=a;for(var i=2;i<o;i++)l[i]=n[i];return c.a.createElement.apply(null,l)}return c.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);