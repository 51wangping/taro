(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[69172],{22122:function(t,e,n){"use strict";function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return l}})},19756:function(t,e,n){"use strict";function l(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}n.d(e,{Z:function(){return l}})},3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return i},kt:function(){return s}});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function k(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=l.createContext({}),o=function(t){var e=l.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):k(k({},e),t)),n},i=function(t){var e=o(t.components);return l.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},p=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,u=t.parentName,i=d(t,["components","mdxType","originalType","parentName"]),p=o(n),s=r,m=p["".concat(u,".").concat(s)]||p[s]||c[s]||a;return n?l.createElement(m,k(k({ref:e},i),{},{components:n})):l.createElement(m,k({ref:e},i))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,k=new Array(a);k[0]=p;var d={};for(var u in e)hasOwnProperty.call(e,u)&&(d[u]=e[u]);d.originalType=t,d.mdxType="string"==typeof t?t:r,k[1]=d;for(var o=2;o<a;o++)k[o]=n[o];return l.createElement.apply(null,k)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},63134:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return k},metadata:function(){return d},toc:function(){return u},default:function(){return i}});var l=n(22122),r=n(19756),a=(n(67294),n(3905)),k={title:"Button",sidebar_label:"Button"},d={unversionedId:"components/forms/button",id:"version-2.x/components/forms/button",isDocsHomePage:!1,title:"Button",description:"\u6309\u94ae",source:"@site/versioned_docs/version-2.x/components/forms/button.md",sourceDirName:"components/forms",slug:"/components/forms/button",permalink:"/taro/docs/2.x/components/forms/button",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/components/forms/button.md",version:"2.x",sidebar_label:"Button",frontMatter:{title:"Button",sidebar_label:"Button"},sidebar:"version-2.x/components",previous:{title:"RichText",permalink:"/taro/docs/2.x/components/base/rich-text"},next:{title:"Checkbox",permalink:"/taro/docs/2.x/components/forms/checkbox"}},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"ButtonProps",id:"buttonprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"size",id:"size",children:[]},{value:"type",id:"type",children:[]},{value:"formType",id:"formtype",children:[]},{value:"openType",id:"opentype",children:[]},{value:"lang",id:"lang",children:[]},{value:"onGetUserInfoEventDetail",id:"ongetuserinfoeventdetail",children:[]},{value:"gender",id:"gender",children:[]},{value:"onContactEventDetail",id:"oncontacteventdetail",children:[]},{value:"onGetPhoneNumberEventDetail",id:"ongetphonenumbereventdetail",children:[]},{value:"onOpenSettingEventDetail",id:"onopensettingeventdetail",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],o={toc:u};function i(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,a.kt)("wrapper",(0,l.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6309\u94ae"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/component/button.html"},"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<ButtonProps>\n")),(0,a.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"export default class PageButton extends Component {\n  state = {\n    btn: [\n      {\n        text: '\u9875\u9762\u4e3b\u64cd\u4f5c Normal',\n        size: 'default',\n        type: 'primary'\n      },\n      {\n        text: '\u9875\u9762\u4e3b\u64cd\u4f5c Loading',\n        size: 'default',\n        type: 'primary',\n        loading: true,\n      },\n      {\n        text: '\u9875\u9762\u4e3b\u64cd\u4f5c Disabled',\n        size: 'default',\n        type: 'primary',\n        disabled: true,\n      },\n      {\n        text: '\u9875\u9762\u6b21\u8981\u64cd\u4f5c Normal',\n        size: 'default',\n        type: 'default'\n      },\n      {\n        text: '\u9875\u9762\u6b21\u8981\u64cd\u4f5c Disabled',\n        size: 'default',\n        type: 'default',\n        disabled: true,\n      },\n      {\n        text: '\u8b66\u544a\u7c7b\u64cd\u4f5c Normal',\n        size: 'default',\n        type: 'warn'\n      },\n      {\n        text: '\u8b66\u544a\u7c7b\u64cd\u4f5c Disabled',\n        size: 'default',\n        type: 'warn',\n        disabled: true,\n      }\n    ]\n  }\n  render () {\n    return (\n      <View className='container'>\n        {this.state.btn.map(item => {\n          return (\n            <Button\n              size={item.size ? item.size : ''}\n              type={item.type ? item.type : ''}\n              loading={item.loading ? item.loading : false}\n              disabled={item.disabled ? item.disabled : false}\n            >\n              {item.text}\n            </Button>\n          )\n        })}\n        <Button className='btn-max-w' plain type='primary'>\u6309\u94ae</Button>\n        <Button className='btn-max-w' plain type='primary' disabled>\u4e0d\u53ef\u70b9\u51fb\u7684\u6309\u94ae</Button>\n        <Button className='btn-max-w' plain >\u6309\u94ae</Button>\n        <Button className='btn-max-w' plain disabled >\u6309\u94ae</Button>\n        <Button size='mini' type='primary'>\u6309\u94ae</Button>\n        <Button size='mini' >\u6309\u94ae</Button>\n        <Button size='mini' type='warn'>\u6309\u94ae</Button>\n      </View>\n    )\n  }\n}\n")),(0,a.kt)("h2",{id:"buttonprops"},"ButtonProps"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"size"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"default" | "mini"')),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"default")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u6309\u94ae\u7684\u5927\u5c0f")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"type"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"default" | "primary" | "warn"')),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"default")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u6309\u94ae\u7684\u6837\u5f0f\u7c7b\u578b")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"plain"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u6309\u94ae\u662f\u5426\u9542\u7a7a\uff0c\u80cc\u666f\u8272\u900f\u660e")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"disabled"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u662f\u5426\u7981\u7528")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"loading"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u540d\u79f0\u524d\u662f\u5426\u5e26 loading \u56fe\u6807")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"formType"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"submit" | "reset"')),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u7528\u4e8e ",(0,a.kt)("code",null,"<form/>")," \u7ec4\u4ef6\uff0c\u70b9\u51fb\u5206\u522b\u4f1a\u89e6\u53d1 ",(0,a.kt)("code",null,"<form/>")," \u7ec4\u4ef6\u7684 submit/reset \u4e8b\u4ef6")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"openType"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"contact" | "contactShare" | "share" | "getRealnameAuthInfo" | "getAuthorize" | "getPhoneNumber" | "getUserInfo" | "lifestyle" | "launchApp" | "openSetting" | "feedback"')),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u5fae\u4fe1\u5f00\u653e\u80fd\u529b")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"hoverClass"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"button-hover")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u6307\u5b9a\u6309\u4e0b\u53bb\u7684\u6837\u5f0f\u7c7b\u3002\u5f53 ",(0,a.kt)("code",null,'hover-class="none"')," \u65f6\uff0c\u6ca1\u6709\u70b9\u51fb\u6001\u6548\u679c")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"hoverStyle"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"none")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u7531\u4e8e RN \u4e0d\u652f\u6301 Class\uff0c\u6545 RN \u7aef\u7684 Button \u7ec4\u4ef6\u5b9e\u73b0\u4e86 ",(0,a.kt)("code",null,"hoverStyle"),"\u5c5e\u6027\uff0c\u5199\u6cd5\u548c style \u7c7b\u4f3c\uff0c\u53ea\u4e0d\u8fc7 ",(0,a.kt)("code",null,"hoverStyle")," \u7684\u6837\u5f0f\u662f\u6307\u5b9a\u6309\u4e0b\u53bb\u7684\u6837\u5f0f\u3002")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"hoverStopPropagation"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u6307\u5b9a\u662f\u5426\u963b\u6b62\u672c\u8282\u70b9\u7684\u7956\u5148\u8282\u70b9\u51fa\u73b0\u70b9\u51fb\u6001")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"hoverStartTime"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"20")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u6309\u4f4f\u540e\u591a\u4e45\u51fa\u73b0\u70b9\u51fb\u6001\uff0c\u5355\u4f4d\u6beb\u79d2")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"hoverStayTime"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"70")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u624b\u6307\u677e\u5f00\u540e\u70b9\u51fb\u6001\u4fdd\u7559\u65f6\u95f4\uff0c\u5355\u4f4d\u6beb\u79d2")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"lang"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"en" | "zh_CN" | "zh_TW"')),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u6307\u5b9a\u8fd4\u56de\u7528\u6237\u4fe1\u606f\u7684\u8bed\u8a00\uff0czh_CN \u7b80\u4f53\u4e2d\u6587\uff0czh_TW \u7e41\u4f53\u4e2d\u6587\uff0cen \u82f1\u6587\u3002",(0,a.kt)("br",null),(0,a.kt)("br",null),"\u751f\u6548\u65f6\u673a: ",(0,a.kt)("code",null,'open-type="getUserInfo"'))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"sessionFrom"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u4f1a\u8bdd\u6765\u6e90",(0,a.kt)("br",null),(0,a.kt)("br",null),"\u751f\u6548\u65f6\u673a\uff1a",(0,a.kt)("code",null,'open-type="contact"'))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"sendMessageTitle"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"\u5f53\u524d\u6807\u9898")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u4f1a\u8bdd\u5185\u6d88\u606f\u5361\u7247\u6807\u9898",(0,a.kt)("br",null),(0,a.kt)("br",null),"\u751f\u6548\u65f6\u673a\uff1a",(0,a.kt)("code",null,'open-type="contact"'))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"sendMessagePath"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"\u5f53\u524d\u6807\u9898")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u4f1a\u8bdd\u5185\u6d88\u606f\u5361\u7247\u70b9\u51fb\u8df3\u8f6c\u5c0f\u7a0b\u5e8f\u8def\u5f84",(0,a.kt)("br",null),(0,a.kt)("br",null),"\u751f\u6548\u65f6\u673a\uff1a",(0,a.kt)("code",null,'open-type="contact"'))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"sendMessageImg"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"\u622a\u56fe")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u4f1a\u8bdd\u5185\u6d88\u606f\u5361\u7247\u56fe\u7247",(0,a.kt)("br",null),(0,a.kt)("br",null),"\u751f\u6548\u65f6\u673a\uff1a",(0,a.kt)("code",null,'open-type="contact"'))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"appParameter"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u6253\u5f00 APP \u65f6\uff0c\u5411 APP \u4f20\u9012\u7684\u53c2\u6570",(0,a.kt)("br",null),(0,a.kt)("br",null),"\u751f\u6548\u65f6\u673a\uff1a",(0,a.kt)("code",null,'open-type="launchApp"'))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"scope"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"userInfo" | "phoneNumber"')),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f scope",(0,a.kt)("br",null),(0,a.kt)("br",null),"\u751f\u6548\u65f6\u673a\uff1a",(0,a.kt)("code",null,'open-type="getAuthorize"'))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"showMessageCard"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u663e\u793a\u4f1a\u8bdd\u5185\u6d88\u606f\u5361\u7247",(0,a.kt)("br",null),(0,a.kt)("br",null),"\u751f\u6548\u65f6\u673a\uff1a",(0,a.kt)("code",null,'open-type="contact"'))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onGetUserInfo"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onGetUserInfoEventDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u7528\u6237\u70b9\u51fb\u8be5\u6309\u94ae\u65f6\uff0c\u4f1a\u8fd4\u56de\u83b7\u53d6\u5230\u7684\u7528\u6237\u4fe1\u606f\uff0c\u56de\u8c03\u7684detail\u6570\u636e\u4e0e Taro.getUserInfo \u8fd4\u56de\u7684\u4e00\u81f4",(0,a.kt)("br",null),(0,a.kt)("br",null),"\u751f\u6548\u65f6\u673a: ",(0,a.kt)("code",null,'open-type="getUserInfo"'))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onGetAuthorize"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<any>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u652f\u4ed8\u5b9d\u83b7\u53d6\u4f1a\u5458\u57fa\u7840\u4fe1\u606f\u6388\u6743\u56de\u8c03",(0,a.kt)("br",null),(0,a.kt)("br",null),"\u751f\u6548\u65f6\u673a\uff1a",(0,a.kt)("code",null,'open-type="getAuthorize"'))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onContact"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onContactEventDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u5ba2\u670d\u6d88\u606f\u56de\u8c03",(0,a.kt)("br",null),(0,a.kt)("br",null),"\u751f\u6548\u65f6\u673a\uff1a",(0,a.kt)("code",null,'open-type="contact"'))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onGetPhoneNumber"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onGetPhoneNumberEventDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u83b7\u53d6\u7528\u6237\u624b\u673a\u53f7\u56de\u8c03",(0,a.kt)("br",null),(0,a.kt)("br",null),"\u751f\u6548\u65f6\u673a\uff1a",(0,a.kt)("code",null,'open-type="getphonenumber"'))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onGetRealnameAuthInfo"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<any>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u83b7\u53d6\u7528\u6237\u5b9e\u540d",(0,a.kt)("br",null),(0,a.kt)("br",null),"\u751f\u6548\u65f6\u673a\uff1a",(0,a.kt)("code",null,'open-type="getRealnameAuthInfo"'))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onError"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<any>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u5f53\u4f7f\u7528\u5f00\u653e\u80fd\u529b\u65f6\uff0c\u53d1\u751f\u9519\u8bef\u7684\u56de\u8c03",(0,a.kt)("br",null),(0,a.kt)("br",null),"\u751f\u6548\u65f6\u673a\uff1a",(0,a.kt)("code",null,'open-type="launchApp"'))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onOpenSetting"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onOpenSettingEventDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u5728\u6253\u5f00\u6388\u6743\u8bbe\u7f6e\u9875\u540e\u56de\u8c03",(0,a.kt)("br",null),(0,a.kt)("br",null),"\u751f\u6548\u65f6\u673a\uff1a",(0,a.kt)("code",null,'open-type="openSetting"'))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onLaunchapp"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<any>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u6253\u5f00 APP \u6210\u529f\u7684\u56de\u8c03",(0,a.kt)("br",null),(0,a.kt)("br",null),"\u751f\u6548\u65f6\u673a\uff1a",(0,a.kt)("code",null,'open-type="launchApp"'))))),(0,a.kt)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ButtonProps.size"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ButtonProps.type"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ButtonProps.plain"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ButtonProps.disabled"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ButtonProps.loading"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ButtonProps.formType"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ButtonProps.openType"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ButtonProps.hoverClass"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"(\u652f\u6301 hoverStyle \u5c5e\u6027\uff0c\u4f46\u6846\u67b6\u672a\u652f\u6301 hoverClass)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ButtonProps.hoverStyle"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ButtonProps.hoverStopPropagation"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ButtonProps.hoverStartTime"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ButtonProps.hoverStayTime"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ButtonProps.lang"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ButtonProps.sessionFrom"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ButtonProps.sendMessageTitle"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ButtonProps.sendMessagePath"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ButtonProps.sendMessageImg"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ButtonProps.appParameter"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ButtonProps.scope"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ButtonProps.onGetUserInfo"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ButtonProps.onGetAuthorize"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ButtonProps.onContact"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ButtonProps.onGetPhoneNumber"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ButtonProps.onGetRealnameAuthInfo"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ButtonProps.onError"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ButtonProps.onOpenSetting"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ButtonProps.onLaunchapp"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))),(0,a.kt)("h3",{id:"size"},"size"),(0,a.kt)("p",null,"size \u7684\u5408\u6cd5\u503c"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"default"),(0,a.kt)("td",null,"\u9ed8\u8ba4\u5927\u5c0f")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"mini"),(0,a.kt)("td",null,"\u5c0f\u5c3a\u5bf8")))),(0,a.kt)("h3",{id:"type"},"type"),(0,a.kt)("p",null,"type \u7684\u5408\u6cd5\u503c"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"primary"),(0,a.kt)("td",null,"\u7eff\u8272")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"default"),(0,a.kt)("td",null,"\u767d\u8272")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"warn"),(0,a.kt)("td",null,"\u7ea2\u8272")))),(0,a.kt)("h3",{id:"formtype"},"formType"),(0,a.kt)("p",null,"form-type \u7684\u5408\u6cd5\u503c"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"submit"),(0,a.kt)("td",null,"\u63d0\u4ea4\u8868\u5355")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"reset"),(0,a.kt)("td",null,"\u91cd\u7f6e\u8868\u5355")))),(0,a.kt)("h3",{id:"opentype"},"openType"),(0,a.kt)("p",null,"open-type \u7684\u5408\u6cd5\u503c"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"contact"),(0,a.kt)("td",null,"\u6253\u5f00\u5ba2\u670d\u4f1a\u8bdd\uff0c\u5982\u679c\u7528\u6237\u5728\u4f1a\u8bdd\u4e2d\u70b9\u51fb\u6d88\u606f\u5361\u7247\u540e\u8fd4\u56de\u5c0f\u7a0b\u5e8f\uff0c\u53ef\u4ee5\u4ece bindcontact \u56de\u8c03\u4e2d\u83b7\u5f97\u5177\u4f53\u4fe1\u606f",(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/customer-message/customer-message.html"},"\u53c2\u8003\u5730\u5740"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"contactShare"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"share"),(0,a.kt)("td",null,"\u89e6\u53d1\u7528\u6237\u8f6c\u53d1\uff0c\u4f7f\u7528\u524d\u5efa\u8bae\u5148\u9605\u8bfb\u4f7f\u7528\u6307\u5f15",(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html#%E4%BD%BF%E7%94%A8%E6%8C%87%E5%BC%95"},"\u53c2\u8003\u5730\u5740"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"getRealnameAuthInfo"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"getAuthorize"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"getPhoneNumber"),(0,a.kt)("td",null,"\u83b7\u53d6\u7528\u6237\u624b\u673a\u53f7\uff0c\u53ef\u4ee5\u4ece bindgetphonenumber \u56de\u8c03\u4e2d\u83b7\u53d6\u5230\u7528\u6237\u4fe1\u606f",(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/getPhoneNumber.html"},"\u53c2\u8003\u5730\u5740"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"getUserInfo"),(0,a.kt)("td",null,"\u83b7\u53d6\u7528\u6237\u4fe1\u606f\uff0c\u53ef\u4ee5\u4ece bindgetuserinfo \u56de\u8c03\u4e2d\u83b7\u53d6\u5230\u7528\u6237\u4fe1\u606f")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"lifestyle"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"launchApp"),(0,a.kt)("td",null,"\u6253\u5f00APP\uff0c\u53ef\u4ee5\u901a\u8fc7app-parameter\u5c5e\u6027\u8bbe\u5b9a\u5411APP\u4f20\u7684\u53c2\u6570",(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/launchApp.html"},"\u53c2\u8003\u5730\u5740"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"openSetting"),(0,a.kt)("td",null,"\u6253\u5f00\u6388\u6743\u8bbe\u7f6e\u9875")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"feedback"),(0,a.kt)("td",null,"\u6253\u5f00\u201c\u610f\u89c1\u53cd\u9988\u201d\u9875\u9762\uff0c\u7528\u6237\u53ef\u63d0\u4ea4\u53cd\u9988\u5185\u5bb9\u5e76\u4e0a\u4f20\u65e5\u5fd7\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u767b\u5f55\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u540e\u53f0\u540e\u8fdb\u5165\u5de6\u4fa7\u83dc\u5355\u201c\u5ba2\u670d\u53cd\u9988\u201d\u9875\u9762\u83b7\u53d6\u5230\u53cd\u9988\u5185\u5bb9")))),(0,a.kt)("h3",{id:"lang"},"lang"),(0,a.kt)("p",null,"lang \u7684\u5408\u6cd5\u503c"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"en"),(0,a.kt)("td",null,"\u82f1\u6587")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"zh_CN"),(0,a.kt)("td",null,"\u7b80\u4f53\u4e2d\u6587")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"zh_TW"),(0,a.kt)("td",null,"\u7e41\u4f53\u4e2d\u6587")))),(0,a.kt)("h3",{id:"ongetuserinfoeventdetail"},"onGetUserInfoEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"userInfo"),(0,a.kt)("td",null,(0,a.kt)("code",null,"{ nickName: string; avatarUrl: string; gender: 0 | 1 | 2; province: string; city: string; country: string; }")),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"rawData"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"\u4e0d\u5305\u62ec\u654f\u611f\u4fe1\u606f\u7684\u539f\u59cb\u6570\u636e ",(0,a.kt)("code",null,"JSON")," \u5b57\u7b26\u4e32\uff0c\u7528\u4e8e\u8ba1\u7b97\u7b7e\u540d")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"signature"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"\u4f7f\u7528 ",(0,a.kt)("code",null,"sha1(rawData + sessionkey)")," \u5f97\u5230\u5b57\u7b26\u4e32\uff0c\u7528\u4e8e\u6821\u9a8c\u7528\u6237\u4fe1\u606f")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"encryptedData"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"\u5305\u62ec\u654f\u611f\u6570\u636e\u5728\u5185\u7684\u5b8c\u6574\u7528\u6237\u4fe1\u606f\u7684\u52a0\u5bc6\u6570\u636e")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"iv"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"\u52a0\u5bc6\u7b97\u6cd5\u7684\u521d\u59cb\u5411\u91cf")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"errMsg"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null)))),(0,a.kt)("h3",{id:"gender"},"gender"),(0,a.kt)("p",null,"\u6027\u522b\u7684\u5408\u6cd5\u503c"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"0"),(0,a.kt)("td",null,"\u672a\u77e5")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"1"),(0,a.kt)("td",null,"\u7537")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"2"),(0,a.kt)("td",null,"\u5973")))),(0,a.kt)("h3",{id:"oncontacteventdetail"},"onContactEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"errMsg"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"path"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"\u5c0f\u7a0b\u5e8f\u6d88\u606f\u6307\u5b9a\u7684\u8def\u5f84")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"query"),(0,a.kt)("td",null,(0,a.kt)("code",null,"Record<string, any>")),(0,a.kt)("td",null,"\u5c0f\u7a0b\u5e8f\u6d88\u606f\u6307\u5b9a\u7684\u67e5\u8be2\u53c2\u6570")))),(0,a.kt)("h3",{id:"ongetphonenumbereventdetail"},"onGetPhoneNumberEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"errMsg"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"encryptedData"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"\u5305\u62ec\u654f\u611f\u6570\u636e\u5728\u5185\u7684\u5b8c\u6574\u7528\u6237\u4fe1\u606f\u7684\u52a0\u5bc6\u6570\u636e")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"iv"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"\u52a0\u5bc6\u7b97\u6cd5\u7684\u521d\u59cb\u5411\u91cf")))),(0,a.kt)("h3",{id:"onopensettingeventdetail"},"onOpenSettingEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"errMsg"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"authSetting"),(0,a.kt)("td",null,(0,a.kt)("code",null,"Record<string, boolean>"))))),(0,a.kt)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Button"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}i.isMDXComponent=!0}}]);