(function(e){function t(t){for(var n,o,p=t[0],i=t[1],c=t[2],d=0,u=[];d<p.length;d++)o=p[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&u.push(r[o][0]),r[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);l&&l(t);while(u.length)u.shift()();return a.push.apply(a,c||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],n=!0,p=1;p<s.length;p++){var i=s[p];0!==r[i]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=s[0]))}return e}var n={},r={app:0},a=[];function o(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=n,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(s,n,function(t){return e[t]}.bind(null,n));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var p=window["webpackJsonp"]=window["webpackJsonp"]||[],i=p.push.bind(p);p.push=t,p=p.slice();for(var c=0;c<p.length;c++)t(p[c]);var l=i;a.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";s("8a23")},"12cb":function(e,t,s){var n,r=s("6374").default,a=r(["en-US","zh-CN"]);try{for(a.s();!(n=a.n()).done;){var o=n.value;t[o]=s("5a82")("./".concat(o,".json"))}}catch(p){a.e(p)}finally{a.f()}},"3e1e":function(e){e.exports=JSON.parse('{"name":"中文 (简体)","title":"Flash MoKee <code>AyxEdition</code>","step1:title":"准备","step1:p1":"你需要做好以下准备：","step1:p1:li1":"一部<a href=\\"https://download.mokeedev.com/devices.html\\">受支持的手机</a>，并且已经刷入了 <a href=\\"https://twrp.me/Devices\\">TWRP</a>；","step1:p1:li2":"将手机重启到 Recovery 模式（TWRP）；","step1:p1:li3":"如果你是第一次使用魔趣，请进行一次数据清除操作（如果不是特别情况，不需要进行高级清除）；","step1:p1:li4":"你可能还需要将底包更新到 ROM 所要求的版本；","step1:p1:li5":"<a href=\\"https://download.mokeedev.com/devices.html\\">下载</a>好魔趣 ROM 的卡刷包。","step1:unsupported:p1":"你的浏览器不支持 WebUSB API。如果您使用的浏览器内核是较新的 Chromium，请尝试通过 HTTPS 访问（在地址栏前面加上 https:// 后回车）","step1:unsupported:p2":"建议使用最新版本的 Microsoft Edge 或 Google Chrome 访问本页面。","step1:next":"继续","step2:title":"选择刷机包","step2:title:selected":"已选择: {name}","step2:title:unsupported":"浏览器不支持或连接不安全","step2:uploader:normal":"将刷机包拖动到此处或<a>点击选择</a>","step2:uploader:active":"松开鼠标左键即可导入刷机包","step2:previous":"上一步","step2:next":"继续","step3:title":"连接手机","step3:title:connected":"已连接: {name}","step3:p1":"请将手机切换到 TWRP 的 ADB Sideload 模式并连接到电脑，然后点击下面的「连接手机」按钮。在弹出的对话框中选中你的手机，并点击「连接」。","step3:p2":"Windows 用户如果在对话框中看不到你的手机，可能需要先安装<a href=\\"https://developer.android.com/studio/run/win-usb\\">相应的驱动程序</a>。","step3:connect":"连接手机","step3:previous":"上一步","step4:title":"刷机","step4:p1":"一切就绪，请点击「开始刷机」。","step4:flashing":"正在刷入，请稍候…","step4:start":"开始刷机","step4:previous":"上一步","step5:title":"完成","step5:p1":"恭喜，刷机已完成。如果没遇到什么错误，你现在可以重启你的手机了。<a>遇到错误？</a>","step5:reset":"完成并返回开始","hint:zip":"刷机包文件应该是 ZIP 格式","hint:sideload":"手机未处于 Sideload 模式","hint:connect":"连接失败，请重试","END":""}')},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d"),s("4e827"),s("b64b");var n=s("2b0e"),r=s("a925"),a=s("f309");n["a"].use(a["a"]);var o=new a["a"]({}),p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",[s("v-snackbar",{model:{value:e.snackbarShown,callback:function(t){e.snackbarShown=t},expression:"snackbarShown"}},[e._v(" "+e._s(e.snackbarText)+" ")]),s("v-content",[s("v-container",{staticClass:"container"},[s("header",[s("div",{staticClass:"langs"},[s("v-select",{attrs:{solo:"",dense:"",flat:"",items:e.langs,"prepend-inner-icon":"mdi-web"},model:{value:e.$root.$i18n.locale,callback:function(t){e.$set(e.$root.$i18n,"locale",t)},expression:"$root.$i18n.locale"}})],1),s("h1",{domProps:{innerHTML:e._s(e.$t("title"))}})]),s("v-stepper",{attrs:{vertical:""},model:{value:e.step,callback:function(t){e.step=t},expression:"step"}},[s("v-stepper-step",{attrs:{complete:e.step>1,step:"1"}},[s("span",{staticClass:"step"},[e._v(e._s(e.$t("step1:title")))])]),s("v-stepper-content",{attrs:{step:"1"}},[e.supported?s("div",{staticClass:"section"},[s("p",{domProps:{innerHTML:e._s(e.$t("step1:p1"))}}),s("p",[s("ol",[s("li",{domProps:{innerHTML:e._s(e.$t("step1:p1:li1"))}}),s("li",{domProps:{innerHTML:e._s(e.$t("step1:p1:li2"))}}),s("li",{domProps:{innerHTML:e._s(e.$t("step1:p1:li3"))}}),s("li",{domProps:{innerHTML:e._s(e.$t("step1:p1:li4"))}}),s("li",{domProps:{innerHTML:e._s(e.$t("step1:p1:li5"))}})])])]):s("div",{staticClass:"section"},[s("p",{domProps:{innerHTML:e._s(e.$t("step1:unsupported:p1"))}}),s("p",{domProps:{innerHTML:e._s(e.$t("step1:unsupported:p2"))}})]),e.supported?s("div",{staticClass:"nav"},[s("v-btn",{attrs:{color:"primary",depressed:""},on:{click:function(t){e.step=2}}},[e._v(e._s(e.$t("step1:next")))])],1):e._e()]),s("v-stepper-step",{attrs:{complete:e.step>2,step:"2",rules:[function(){return e.supported}]}},[e.supported?e.selected?s("span",{staticClass:"step"},[e._v(e._s(e.$t("step2:title:selected",{name:e.selected?e.selected.name:null})))]):s("span",{staticClass:"step"},[e._v(e._s(e.$t("step2:title")))]):s("span",{staticClass:"step"},[e._v(e._s(e.$t("step2:title:unsupported")))])]),s("v-stepper-content",{attrs:{step:"2"}},[s("div",{staticClass:"section"},[s("upload",{ref:"upload",staticClass:"upload",attrs:{accept:"application/zip",extensions:"zip",drop:!0,"drop-directory":!1},on:{"input-file":e.selectFile},model:{value:e.files,callback:function(t){e.files=t},expression:"files"}},[e.uploader&&e.uploader.dropActive?s("div",{staticClass:"upload-hint active",domProps:{innerHTML:e._s(e.$t("step2:uploader:active"))}}):e.selected?s("div",{staticClass:"upload-hint selected"},[e._v(e._s(e.selected?e.selected.name:null))]):s("div",{staticClass:"upload-hint",domProps:{innerHTML:e._s(e.$t("step2:uploader:normal"))}})])],1),s("div",{staticClass:"nav"},[s("v-btn",{attrs:{color:"primary",depressed:"",disabled:!e.selected},on:{click:function(t){e.step=3}}},[e._v(e._s(e.$t("step2:next")))]),e._v(" "),s("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){e.step=1}}},[e._v(e._s(e.$t("step2:previous")))])],1)]),s("v-stepper-step",{attrs:{complete:e.step>3,step:"3"}},[e.name?s("span",{staticClass:"step"},[e._v(e._s(e.$t("step3:title:connected",{name:e.name})))]):s("span",{staticClass:"step"},[e._v(e._s(e.$t("step3:title")))])]),s("v-stepper-content",{attrs:{step:"3"}},[s("div",{staticClass:"section"},[s("p",{domProps:{innerHTML:e._s(e.$t("step3:p1"))}}),s("p",{domProps:{innerHTML:e._s(e.$t("step3:p2"))}})]),s("div",{staticClass:"nav"},[s("v-btn",{attrs:{color:"primary",depressed:""},on:{click:e.connect}},[e._v(e._s(e.$t("step3:connect")))]),e._v(" "),s("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){e.step=2}}},[e._v(e._s(e.$t("step3:previous")))])],1)]),s("v-stepper-step",{attrs:{complete:e.step>4,step:"4"}},[s("span",{staticClass:"step"},[e._v(e._s(e.$t("step4:title")))])]),s("v-stepper-content",{attrs:{step:"4"}},[e.flashing?s("div",{staticClass:"section"},[s("p",{domProps:{innerHTML:e._s(e.$t("step4:flashing"))}}),s("v-progress-linear",{attrs:{value:e.progress?Math.round(e.progress/e.progressTotal*100):0,indeterminate:0==e.progress}})],1):s("div",{staticClass:"section"},[s("p",{domProps:{innerHTML:e._s(e.$t("step4:p1"))}})]),e.flashing?e._e():s("div",{staticClass:"nav"},[s("v-btn",{attrs:{color:"primary",depressed:""},on:{click:e.sideload}},[e._v(e._s(e.$t("step4:start")))]),e._v(" "),s("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){e.step=3}}},[e._v(e._s(e.$t("step4:previous")))])],1)]),s("v-stepper-step",{attrs:{complete:e.step>5,step:"5"}},[s("span",{staticClass:"step"},[e._v(e._s(e.$t("step5:title")))])]),s("v-stepper-content",{attrs:{step:"5"}},[s("div",{staticClass:"section"},[s("p",{domProps:{innerHTML:e._s(e.$t("step5:p1"))}})]),s("div",{staticClass:"nav"},[s("v-btn",{attrs:{color:"primary",depressed:""},on:{click:e.reset}},[e._v(e._s(e.$t("step5:reset")))])],1)])],1)],1)],1),s("footer",[e._v(" Copyright © 2020 MoKee Open Source Project ")])],1)},i=[],c=s("1da1"),l=(s("96cf"),s("d81d"),s("b0c0"),s("8a79"),s("99af"),s("fb6a"),s("14b8")),d=s.n(l),u=s("8019"),f=s.n(u),v=s("12cb"),h=s.n(v);s("d3b7"),s("ace4"),s("5cc6"),s("9a8c"),s("a975"),s("735e"),s("c1ac"),s("d139"),s("3a7b"),s("d5d6"),s("82f8"),s("e91f"),s("60bd"),s("5f96"),s("3280"),s("3fcc"),s("ca91"),s("25a1"),s("cd26"),s("3c5d"),s("2954"),s("649e"),s("219c"),s("170b"),s("b39a"),s("72f7");function m(e){return new Promise((function(t,s){var n=new FileReader;n.onload=function(e){return t(new Uint8Array(e.target.result))},n.onabort=function(){return t(null)},n.onerror=function(e){return s(e)},n.readAsArrayBuffer(e)}))}var b=Object.keys(h.a).sort().map((function(e){return{text:h.a[e].name,value:e}})),g={name:"App",components:{upload:f.a},data:function(){return{langs:b,supported:"undefined"!=typeof navigator.usb,step:1,name:null,files:[],uploader:null,selected:null,flashing:!1,progress:0,progressTotal:0,snackbarShown:!1,snackbarText:""}},watch:{step:function(){this.uploader=this.$refs.upload}},methods:{showSnackbar:function(e){this.snackbarText=e,this.snackbarShown=!0},selectFile:function(e){e?e.name.endsWith(".zip")?(this.selected=e.file,this.step=3):(this.selected=null,this.showSnackbar(this.$t("hint:zip"))):this.selected=null},connect:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var s,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.open("WebUSB");case 3:return e.usb=t.sent,t.next=6,e.usb.connectAdb("host::");case 6:if(e.adb=t.sent,"sideload"==e.adb.mode){t.next=11;break}return e.showSnackbar(e.$t("hint:sideload")),e.usb.close(),t.abrupt("return");case 11:s=e.usb.device,n=s.manufacturerName,r=s.productName,e.name="".concat(n," ").concat(r),e.step=4,t.next=20;break;case 16:t.prev=16,t.t0=t["catch"](0),console.error(t.t0),"NotFoundError"!=t.t0.name&&e.showSnackbar(e.$t("hint:connect"));case 20:case"end":return t.stop()}}),t,null,[[0,16]])})))()},sideload:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var s,n,r,a,o,p,i,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.flashing=!0,e.progress=0,s=65536,t.next=5,m(e.selected);case 5:return n=t.sent,t.next=8,e.adb.open("sideload-host:".concat(n.length,":").concat(s));case 8:r=t.sent,e.progressTotal=n.length;case 10:if(!e.flashing){t.next=35;break}return t.next=13,r.receive();case 13:if(a=t.sent,"OKAY"!=a.cmd){t.next=17;break}return t.next=17,r.send("OKAY");case 17:if("WRTE"==a.cmd){t.next=19;break}return t.abrupt("continue",10);case 19:if(o=new TextDecoder("utf-8").decode(a.data),"DONEDONE"!=o&&"FAILFAIL"!=o){t.next=24;break}return e.step=5,e.flashing=!1,t.abrupt("break",35);case 24:return p=parseInt(o)*s,i=p+s,i>n.length&&(i=n.length),c=n.slice(p,i),t.next=30,r.send("WRTE",c);case 30:return t.next=32,r.send("OKAY");case 32:e.progress+=c.length,t.next=10;break;case 35:case"end":return t.stop()}}),t)})))()},reset:function(){this.name=null,this.selected=null,this.progress=0,this.progressTotal=0,this.step=1}}},_=g,y=(s("034f"),s("2877")),w=s("6544"),k=s.n(w),x=s("7496"),$=s("8336"),C=s("a523"),P=s("a75b"),T=s("8e36"),S=s("b974"),M=s("2db4"),O=s("7e85"),j=s("e516"),A=s("56a4"),L=Object(y["a"])(_,p,i,!1,null,null,null),R=L.exports;k()(L,{VApp:x["a"],VBtn:$["a"],VContainer:C["a"],VContent:P["a"],VProgressLinear:T["a"],VSelect:S["a"],VSnackbar:M["a"],VStepper:O["a"],VStepperContent:j["a"],VStepperStep:A["a"]});var E=s("b85c");s("ac1f"),s("466d"),s("4d63"),s("25f0");function H(e,t){var s,n=Object(E["a"])(t);try{for(n.s();!(s=n.n()).done;){var r,a=s.value,o=Object(E["a"])(e);try{for(o.s();!(r=o.n()).done;){var p=r.value;if(W(p,a))return p}}catch(i){o.e(i)}finally{o.f()}}}catch(i){n.e(i)}finally{n.f()}}function W(e,t){var s=D(e),n=D(t);return n[1]?t==e:n[0]==s[0]}function D(e){return e.match(/^([^-]+)(.*)$/),[RegExp.$1,RegExp.$2]}n["a"].config.productionTip=!1,n["a"].use(r["a"]);var F=Object.keys(h.a).sort(),N=navigator.languages,I=new r["a"]({locale:H(F,N),fallbackLocale:"en-US",messages:h.a});new n["a"]({i18n:I,vuetify:o,render:function(e){return e(R)}}).$mount("#app")},"5a82":function(e,t,s){var n={"./en-US.json":"fdfc","./zh-CN.json":"3e1e"};function r(e){var t=a(e);return s(t)}function a(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=a,e.exports=r,r.id="5a82"},"8a23":function(e,t,s){},fdfc:function(e){e.exports=JSON.parse('{"name":"English (US)","title":"Flash MoKee <code>AyxEdition</code>","step1:title":"Prepare","step1:p1":"Please ensure:","step1:p1:li1":"A <a href=\\"https://download.mokeedev.com/devices.html\\">supported device</a> with <a href=\\"https://twrp.me/Devices\\">TWRP</a> flashed;","step1:p1:li2":"Rebooted into Recovery Mode (TWRP);","step1:p1:li3":"If this is your first time flashing MoKee, wipe your data once (no need to do any \\"Advanced Wipe\\" unless special cases);","step1:p1:li4":"You may also need to update your base firmware to the required version;","step1:p1:li5":"You\'ve downloaded <a href=\\"https://download.mokeedev.com/devices.html\\">a flashable ZIP of MoKee</a>.","step1:unsupported:p1":"WebUSB API was not supported by your browser or the connection is not secure. Please try visiting via HTTPS if you\'re running the latest Google Chrome or Microsoft Edge.","step1:unsupported:p2":"Please use the latest version of Google Chrome.","step1:next":"Continue","step2:title":"Select a package","step2:title:selected":"Selected: {name}","step2:title:unsupported":"Browser not supported","step2:uploader:normal":"Drop or <a>select</a> a package","step2:uploader:active":"Release the left mouse button to import package","step2:previous":"Previous","step2:next":"Continue","step3:title":"Connect to a phone","step3:title:connected":"Connected: {name}","step3:p1":"Enable ADB Sideload mode of TWRP and plug your phone to the computer. Then, click \\"Connect phone\\" below. Select your phone in the shown dialog and click \\"Connect\\".","step3:p2":"Tips for Windows User: If your phone isn\'t showing up in the dialog, you may need to install <a href=\\"https://developer.android.com/studio/run/win-usb\\">this driver</a> first.","step3:connect":"Connect phone","step3:previous":"Previous","step4:title":"Flash","step4:p1":"Everything is ready. Click \\"Start\\".","step4:flashing":"Flashing, please wait…","step4:start":"Start","step4:previous":"Previous","step5:title":"Done","step5:p1":"Congratulations! Flash done. If you didn\'t see any error, now you can reboot your phone. <a>Got an error?</a>","step5:reset":"Finish and return","hint:zip":"A package should be a ZIP file.","hint:sideload":"The phone is not in Sideload mode.","hint:connect":"Connect failed, please retry.","END":""}')}});
//# sourceMappingURL=app.d7d78e21.js.map