(function(e){function t(t){for(var r,a,s=t[0],c=t[1],u=t[2],f=0,p=[];f<s.length;f++)a=s[f],i[a]&&p.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={wifi:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;o.push([1,"chunk-vendors"]),n()})({1:function(e,t,n){e.exports=n("7f22")},"402c":function(e,t,n){"use strict";n("d1e7");var r=n("2b0e"),i=n("f309");r["a"].use(i["a"]),t["a"]=new i["a"]({icons:{iconfont:"md"}})},4666:function(e,t,n){"use strict";n.d(t,"a",function(){return a});n("96cf");var r=n("3b8d"),i=n("bc3a"),o=n.n(i);function a(){return s.apply(this,arguments)}function s(){return s=Object(r["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("http://".concat(location.host,"/api/v1/is-authorized"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.isUserAuthorized);case 5:case"end":return e.stop()}},e)})),s.apply(this,arguments)}},"7f22":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-content",[e.isAuthorized?n("WifiConfig"):e._e()],1)],1)},o=[],a=(n("96cf"),n("3b8d")),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-list",[n("v-subheader",{staticClass:"indigo--text display-1"},[e._v("Wifi list")]),n("v-list-item-group",{attrs:{color:"primary"},model:{value:e.selectedWifiIndex,callback:function(t){e.selectedWifiIndex=t},expression:"selectedWifiIndex"}},e._l(e.wifis,function(t,r){return n("v-list-item",{key:r},[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(t)}})],1)],1)}),1)],1)],1),null!==e.selectedWifiIndex?n("v-flex",{attrs:{xs12:"","mt-12":""}},[n("h4",[e._v("Selected network: "+e._s(e.wifis[e.selectedWifiIndex]))]),n("v-text-field",{attrs:{type:"password",label:"Enter password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1):e._e(),n("v-flex",{attrs:{xs12:"","mt-6":""}},[null!==e.selectedWifiIndex?n("v-btn",{attrs:{color:"primary mr-2",large:""},on:{click:e.connectToNetwork}},[e._v("Connect")]):e._e(),n("v-btn",{attrs:{color:"success",large:""},on:{click:e.getAvailableWifis}},[e._v("Scan")])],1),n("v-flex",{attrs:{xs12:""}},[n("h3",{class:{"indigo--text":e.isConnectionOk,"red--text":!e.isConnectionOk}},[e._v(e._s(e.networkConnectionResult))])])],1)],1)},c=[],u=n("bc3a"),l=n.n(u),f={data:function(){return{selectedWifiIndex:null,wifis:[],password:"",networkConnectionResult:"",isConnectionOk:!1}},created:function(){this.getAvailableWifis()},methods:{getAvailableWifis:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.get("http://".concat(location.host,"/api/v1/wifi"));case 3:t=e.sent,this.wifis=t.data,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.error(e.t0);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(){return e.apply(this,arguments)}return t}(),connectToNetwork:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.isConnectionOk=!0,this.networkConnectionResult="Attempting connection...",t={ssid:this.wifis[this.selectedWifiIndex],passphrase:this.password},e.next=6,l.a.post("http://".concat(location.host,"/api/v1/wifi/connect"),t);case 6:n=e.sent,this.isConnectionOk=n.data.result,this.networkConnectionResult=this.isConnectionOk?"Success, app will restart shortly":"Connection failed, check your password",e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),console.error(e.t0);case 14:case"end":return e.stop()}},e,this,[[0,11]])}));function t(){return e.apply(this,arguments)}return t}()}},p=f,d=n("2877"),h=n("6544"),v=n.n(h),w=n("8336"),b=n("a523"),x=n("0e8f"),m=n("a722"),g=n("8860"),k=n("da13"),y=n("5d23"),O=n("1baa"),_=n("e0c7"),C=n("8654"),j=Object(d["a"])(p,s,c,!1,null,null,null),W=j.exports;v()(j,{VBtn:w["a"],VContainer:b["a"],VFlex:x["a"],VLayout:m["a"],VList:g["a"],VListItem:k["a"],VListItemContent:y["a"],VListItemGroup:O["a"],VListItemTitle:y["b"],VSubheader:_["a"],VTextField:C["a"]});var V=n("4666"),I={name:"App",data:function(){return{isAuthorized:!1}},components:{WifiConfig:W},beforeCreate:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(V["a"])();case 2:if(e.sent){e.next=6;break}window.location.href="http://".concat(location.host,"/login"),e.next=7;break;case 6:this.isAuthorized=!0;case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},R=I,A=n("7496"),S=n("a75b"),P=Object(d["a"])(R,i,o,!1,null,null,null),T=P.exports;v()(P,{VApp:A["a"],VContent:S["a"]});var L=n("402c");r["a"].config.productionTip=!1,new r["a"]({vuetify:L["a"],render:function(e){return e(T)}}).$mount("#app")}});
//# sourceMappingURL=wifi.8368da3b.js.map