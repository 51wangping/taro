(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[23790],{22122:function(t,e,n){"use strict";function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return a}})},19756:function(t,e,n){"use strict";function a(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}n.d(e,{Z:function(){return a}})},3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),c=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,u=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(u,".").concat(m)]||d[m]||s[m]||i;return n?a.createElement(k,o(o({ref:e},p),{},{components:n})):a.createElement(k,o({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50537:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o={title:"Taro.createAnimation(option)",sidebar_label:"createAnimation"},l={unversionedId:"apis/ui/animation/createAnimation",id:"version-3.x/apis/ui/animation/createAnimation",isDocsHomePage:!1,title:"Taro.createAnimation(option)",description:"Create an animation instance animation. Describe the animation by calling the instance. Use the method of exporting the animation instance to export the animation data and pass it to the animation property of the component.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/ui/animation/createAnimation.md",sourceDirName:"apis/ui/animation",slug:"/apis/ui/animation/createAnimation",permalink:"/taro/en/docs/apis/ui/animation/createAnimation",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/ui/animation/createAnimation.md",version:"3.x",sidebar_label:"createAnimation",frontMatter:{title:"Taro.createAnimation(option)",sidebar_label:"createAnimation"},sidebar:"version-3.x/API",previous:{title:"Taro.pageScrollTo(option)",permalink:"/taro/en/docs/apis/ui/scroll/pageScrollTo"},next:{title:"Animation",permalink:"/taro/en/docs/apis/ui/animation/Animation"}},u=[{value:"Type",id:"type",children:[]},{value:"Parameters",id:"parameters",children:[{value:"Option",id:"option",children:[]},{value:"timingFunction",id:"timingfunction",children:[]}]},{value:"Sample Code",id:"sample-code",children:[]},{value:"API Support",id:"api-support",children:[]}],c={toc:u};function p(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Create an ",(0,i.kt)("inlineCode",{parentName:"p"},"animation")," instance animation. Describe the ",(0,i.kt)("inlineCode",{parentName:"p"},"animation")," by calling the instance. Use the method of exporting the ",(0,i.kt)("inlineCode",{parentName:"p"},"animation")," instance to export the ",(0,i.kt)("inlineCode",{parentName:"p"},"animation")," data and pass it to the ",(0,i.kt)("inlineCode",{parentName:"p"},"animation")," property of the component."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/ui/animation/wx.createAnimation.html"},"Reference"))),(0,i.kt)("h2",{id:"type"},"Type"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Animation\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("h3",{id:"option"},"Option"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Property"),(0,i.kt)("th",null,"Type"),(0,i.kt)("th",{style:{textAlign:"center"}},"Required"),(0,i.kt)("th",null,"Description"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"delay"),(0,i.kt)("td",null,(0,i.kt)("code",null,"number")),(0,i.kt)("td",{style:{textAlign:"center"}},"No"),(0,i.kt)("td",null,"Animation delay time (in ms)")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"duration"),(0,i.kt)("td",null,(0,i.kt)("code",null,"number")),(0,i.kt)("td",{style:{textAlign:"center"}},"No"),(0,i.kt)("td",null,"Animation duration (in ms)")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"timingFunction"),(0,i.kt)("td",null,(0,i.kt)("code",null,'"linear" | "ease" | "ease-in" | "ease-in-out" | "ease-out" | "step-start" | "step-end"')),(0,i.kt)("td",{style:{textAlign:"center"}},"No"),(0,i.kt)("td",null,"Animation effect")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"transformOrigin"),(0,i.kt)("td",null,(0,i.kt)("code",null,"string")),(0,i.kt)("td",{style:{textAlign:"center"}},"No"),(0,i.kt)("td",null)))),(0,i.kt)("h3",{id:"timingfunction"},"timingFunction"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Property"),(0,i.kt)("th",null,"Description"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"linear"),(0,i.kt)("td",null,"The animation keeps the same speed from start to end")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"ease"),(0,i.kt)("td",null,"The animation starts slow, then speeds up, and then slows down before ending.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"ease-in"),(0,i.kt)("td",null,"The animation starts at low speed")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"ease-in-out"),(0,i.kt)("td",null,"The animation starts and ends at low speed")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"ease-out"),(0,i.kt)("td",null,"The animation ends at low speed")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"step-start"),(0,i.kt)("td",null,"The first frame of the animation jumps to the end state until the animation ends")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"step-end"),(0,i.kt)("td",null,"The animation remains the start state until the final frame jumps to the end state")))),(0,i.kt)("h2",{id:"sample-code"},"Sample Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'var animation = Taro.createAnimation({\n  transformOrigin: "50% 50%",\n  duration: 1000,\n  timingFunction: "ease",\n  delay: 0\n})\n')),(0,i.kt)("h2",{id:"api-support"},"API Support"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"API"),(0,i.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,i.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,i.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Taro.createAnimation"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"})))))}p.isMDXComponent=!0}}]);