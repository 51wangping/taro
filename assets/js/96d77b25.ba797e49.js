(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[20308],{22122:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},19756:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:function(){return r}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=p(n),d=o,v=f["".concat(u,".").concat(d)]||f[d]||s[d]||a;return n?r.createElement(v,i(i({ref:t},l),{},{components:n})):r.createElement(v,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},16436:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return l}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={title:"\u73af\u5883\u5224\u65ad"},c={unversionedId:"apis/about/env",id:"version-1.x/apis/about/env",isDocsHomePage:!1,title:"\u73af\u5883\u5224\u65ad",description:"Taro.ENV_TYPE",source:"@site/versioned_docs/version-1.x/apis/about/env.md",sourceDirName:"apis/about",slug:"/apis/about/env",permalink:"/taro/docs/1.x/apis/about/env",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/apis/about/env.md",version:"1.x",frontMatter:{title:"\u73af\u5883\u5224\u65ad"},sidebar:"version-1.x/API",previous:{title:"Taro.Component",permalink:"/taro/docs/1.x/apis/about/tarocomponent"},next:{title:"\u6d88\u606f\u673a\u5236",permalink:"/taro/docs/1.x/apis/about/events"}},u=[{value:"Taro.ENV_TYPE",id:"taroenv_type",children:[]},{value:"Taro.getEnv()",id:"tarogetenv",children:[]}],p={toc:u};function l(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"taroenv_type"},"Taro.ENV_TYPE"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ENV_TYPE.WEAPP")," \u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u73af\u5883"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ENV_TYPE.SWAN")," \u767e\u5ea6\u5c0f\u7a0b\u5e8f\u73af\u5883"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ENV_TYPE.ALIPAY")," \u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u73af\u5883"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ENV_TYPE.TT")," \u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f\u73af\u5883"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ENV_TYPE.WEB")," WEB(H5)\u73af\u5883"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ENV_TYPE.RN")," ReactNative \u73af\u5883"),(0,a.kt)("h2",{id:"tarogetenv"},"Taro.getEnv()"),(0,a.kt)("p",null,"\u83b7\u53d6\u5f53\u524d\u73af\u5883\u503c\uff0c\u5177\u4f53\u503c\u5982\u4e0a ",(0,a.kt)("inlineCode",{parentName:"p"},"Taro.ENV_TYPE")))}l.isMDXComponent=!0}}]);