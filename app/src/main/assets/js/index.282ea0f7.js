(function(e){function t(t){for(var i,n,l=t[0],o=t[1],c=t[2],d=0,h=[];d<l.length;d++)n=l[d],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&h.push(a[n][0]),a[n]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);u&&u(t);while(h.length)h.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],i=!0,l=1;l<s.length;l++){var o=s[l];0!==a[o]&&(i=!1)}i&&(r.splice(t--,1),e=n(n.s=s[0]))}return e}var i={},a={index:0},r=[];function n(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=i,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=o;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("df31")},"402c":function(e,t,s){"use strict";s("5363");var i=s("2b0e"),a=s("f309");i["a"].use(a["a"]),t["a"]=new a["a"]({icons:{iconfont:"mdi"}})},4666:function(e,t,s){"use strict";s.d(t,"c",(function(){return r})),s.d(t,"a",(function(){return n})),s.d(t,"b",(function(){return l}));var i=s("bc3a"),a=s.n(i);async function r(){const{data:e}=await a.a.get(`http://${location.host}/api/v1/is-authorized`);return e.isUserAuthorized}async function n(){const{data:e}=await a.a.get(`http://${location.host}/api/v1/is-required-login`);return e.isRequiredLogin}async function l(){const{data:e}=await a.a.get(`http://${location.host}/api/v1/is-required-security-code`);return e.isRequiredSecurityCode}},"61cf":function(e,t,s){"use strict";var i=s("7836"),a=s.n(i);a.a},7836:function(e,t,s){},df31:function(e,t,s){"use strict";s.r(t);var i=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",[s("v-content",[e.displayable?s("AppPreference"):e._e()],1)],1)},r=[],n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{staticClass:"main-container"},[s("v-form",{ref:"form",model:{value:e.formValid,callback:function(t){e.formValid=t},expression:"formValid"}},[s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:"",md6:""}},[s("v-layout",{attrs:{"align-center":"","fill-height":""}},[s("h3",{staticClass:"indigo--text"},[e._v("Instagram configurations")])])],1),s("v-flex",{attrs:{xs12:"",md6:""}},[s("v-radio-group",{attrs:{row:""},model:{value:e.sourceConfigMode,callback:function(t){e.sourceConfigMode=t},expression:"sourceConfigMode"}},[s("v-radio",{attrs:{label:"Get posts by URL",value:1},on:{change:e.changeMode}}),s("v-radio",{attrs:{label:"Get posts by hashtag",value:2},on:{change:e.changeMode}})],1)],1),s("v-flex",{attrs:{xs12:""}},[e.sourceConfigMode===e.MODE_URL?s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{error:!e.isInstagramSourceValid,"error-messages":e.instagramSourceUrlErrorMsg,label:"Instagram source URL",hint:"Example: https://www.instagram.com/adidas/",required:""},on:{focusout:e.validateInstagramSourceUrl,focus:e.setBaseInstagramUrl},model:{value:e.instagramSourceUrl,callback:function(t){e.instagramSourceUrl=t},expression:"instagramSourceUrl"}})],1):e._e(),s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{error:!e.isInstagramSourceTagsValid,rules:e.sourceHashtagsRules.concat(e.duplicatedHashtagRule,e.hashtagInvalidCharRule),label:e.sourceConfigMode===e.MODE_URL?"Get posts with these tags only":"Instagram source hashtags",hint:e.sourceConfigMode===e.MODE_URL?"Separated by commas, example: #fashion, #sport, #art":"Only 1 hashtag is allowed, example: #sport",required:""},on:{input:e.watchHashtagInput},model:{value:e.instagramSourceTags,callback:function(t){e.instagramSourceTags=t},expression:"instagramSourceTags"}})],1)],1),s("v-flex",{attrs:{xs12:"","mt-6":""}},[s("h3",{staticClass:"indigo--text"},[e._v("Presentation configurations")]),s("v-text-field",{attrs:{type:"number",rules:e.numberOfPostRules,label:"Number of posts to display",required:""},model:{value:e.numberOfPostsToDisplay,callback:function(t){e.numberOfPostsToDisplay=t},expression:"numberOfPostsToDisplay"}})],1),s("v-flex",[s("v-text-field",{attrs:{error:!e.isExcludedTagsValid,rules:e.duplicatedHashtagRule.concat(e.hashtagInvalidCharRule),label:"Excluded Hashtags, separated by commas",hint:"Example: #new, #cool, #abc"},on:{input:e.watchHashtagInput},model:{value:e.excludedHashtags,callback:function(t){e.excludedHashtags=t},expression:"excludedHashtags"}})],1),s("v-flex",{attrs:{xs12:"","mt-6":""}},[s("v-row",[s("v-col",{staticClass:"d-flex align-center",attrs:{cols:"9"}},[s("h3",{staticClass:"indigo--text"},[e._v("Size configurations")])]),s("v-col",{attrs:{cols:"3"}},[s("v-switch",{attrs:{label:"Auto"},model:{value:e.autoSize,callback:function(t){e.autoSize=t},expression:"autoSize"}})],1)],1)],1),s("v-flex",{attrs:{xs6:""}},[s("v-text-field",{staticClass:"pr-3",attrs:{type:"number",rules:e.widthRules,label:"Main image width",suffix:"px",disabled:e.autoSize,required:""},model:{value:e.imgMainWidth,callback:function(t){e.imgMainWidth=t},expression:"imgMainWidth"}})],1),s("v-flex",{attrs:{xs6:""}},[s("v-text-field",{attrs:{type:"number",rules:e.heightRules,label:"Main image height",suffix:"px",disabled:e.autoSize,required:""},model:{value:e.imgMainHeight,callback:function(t){e.imgMainHeight=t},expression:"imgMainHeight"}})],1),s("v-flex",{attrs:{xs6:""}},[s("v-text-field",{staticClass:"pr-3",attrs:{type:"number",rules:e.widthRules,label:"Profile image width",suffix:"px",disabled:e.autoSize,required:""},model:{value:e.profilePicWidth,callback:function(t){e.profilePicWidth=t},expression:"profilePicWidth"}})],1),s("v-flex",{attrs:{xs6:""}},[s("v-text-field",{attrs:{type:"number",rules:e.heightRules,label:"Profile image height",suffix:"px",disabled:e.autoSize,required:""},model:{value:e.profilePicHeight,callback:function(t){e.profilePicHeight=t},expression:"profilePicHeight"}})],1),s("v-flex",{attrs:{xs6:""}},[s("v-text-field",{staticClass:"pr-3",attrs:{type:"number",rules:e.sizeRules,label:"Username text size",suffix:"pt",disabled:e.autoSize,required:""},model:{value:e.usernameTextSize,callback:function(t){e.usernameTextSize=t},expression:"usernameTextSize"}})],1),s("v-flex",{attrs:{xs6:""}},[s("v-text-field",{attrs:{type:"number",rules:e.sizeRules,label:"Likes text size",suffix:"pt",disabled:e.autoSize,required:""},model:{value:e.likeTextSize,callback:function(t){e.likeTextSize=t},expression:"likeTextSize"}})],1),s("v-flex",{attrs:{xs6:""}},[s("v-text-field",{staticClass:"pr-3",attrs:{type:"number",rules:e.sizeRules,label:"Comments text size",suffix:"pt",disabled:e.autoSize,required:""},model:{value:e.commentTextSize,callback:function(t){e.commentTextSize=t},expression:"commentTextSize"}})],1),s("v-flex",{attrs:{xs6:""}},[s("v-text-field",{attrs:{type:"number",rules:e.sizeRules,label:"Caption text size",suffix:"pt",disabled:e.autoSize,required:""},model:{value:e.captionTextSize,callback:function(t){e.captionTextSize=t},expression:"captionTextSize"}})],1),s("v-flex",{attrs:{xs12:"","mt-6":""}},[s("h3",{staticClass:"indigo--text"},[e._v("Slide configurations")])]),s("v-flex",{attrs:{xs6:""}},[s("v-text-field",{staticClass:"pr-3",attrs:{type:"number",rules:e.presentIntervalRules,label:"Each image is shown for",suffix:"sec",required:""},model:{value:e.presentInterval,callback:function(t){e.presentInterval=t},expression:"presentInterval"}})],1),s("v-flex",{attrs:{xs6:""}},[s("v-text-field",{attrs:{type:"number",rules:e.refreshIntervalRules,label:"Images are refreshed every",suffix:"min",required:""},model:{value:e.refreshInterval,callback:function(t){e.refreshInterval=t},expression:"refreshInterval"}})],1),s("v-flex",{attrs:{xs12:"","mt-6":""}},[s("h3",{staticClass:"indigo--text"},[e._v("Visibility configurations")])]),s("v-flex",{attrs:{xs12:""}},[s("v-switch",{attrs:{label:e.profilePicMsg},model:{value:e.isProfilePicDisplayed,callback:function(t){e.isProfilePicDisplayed=t},expression:"isProfilePicDisplayed"}})],1),s("v-flex",{attrs:{xs12:""}},[s("v-switch",{attrs:{label:e.usernameMsg},model:{value:e.isUsernameDisplayed,callback:function(t){e.isUsernameDisplayed=t},expression:"isUsernameDisplayed"}})],1),s("v-flex",{attrs:{xs12:""}},[s("v-switch",{attrs:{label:e.likeMsg},model:{value:e.isLikesDisplayed,callback:function(t){e.isLikesDisplayed=t},expression:"isLikesDisplayed"}})],1),s("v-flex",{attrs:{xs12:""}},[s("v-switch",{attrs:{label:e.commentMsg},model:{value:e.isCommentsDisplayed,callback:function(t){e.isCommentsDisplayed=t},expression:"isCommentsDisplayed"}})],1),s("v-flex",{attrs:{xs12:""}},[s("v-switch",{attrs:{label:e.captionMsg},model:{value:e.isCaptionDisplayed,callback:function(t){e.isCaptionDisplayed=t},expression:"isCaptionDisplayed"}})],1),s("v-flex",{attrs:{xs12:"","mt-6":""}},[s("h3",{staticClass:"indigo--text"},[e._v("Status configurations")])]),s("v-flex",{attrs:{xs12:""}},[s("v-switch",{attrs:{label:e.networkStrengthMsg},model:{value:e.isNetworkStrengthDisplayed,callback:function(t){e.isNetworkStrengthDisplayed=t},expression:"isNetworkStrengthDisplayed"}})],1),e.isLicenseValid?e._e():[s("v-flex",{attrs:{xs12:""}},[s("h3",{staticClass:"indigo--text"},[e._v("License configurations (Your key id is "+e._s(e.licenseKeyId)+")")])]),s("v-flex",{attrs:{xs9:""}},[s("v-text-field",{staticClass:"pr-3",attrs:{label:"Enter license key"},model:{value:e.licenseKey,callback:function(t){e.licenseKey=t},expression:"licenseKey"}})],1),s("v-flex",{attrs:{xs3:""}},[s("v-layout",{attrs:{"align-center":"","fill-height":""}},[s("v-btn",{staticClass:"white--text",attrs:{color:"green",disabled:e.isLicenseSubmitted&&e.isLicenseValid},on:{click:e.validateKey}},[e._v("Submit\n            ")])],1)],1)],s("v-flex",{attrs:{xs12:""}},[e.isLicenseSubmitted&&e.isLicenseValid?s("h6",{staticClass:"green--text"},[e._v('\n          Success! please click "Restart" to refresh the application')]):e.isLicenseSubmitted&&!e.isLicenseValid?s("h6",{staticClass:"red--text"},[e._v("\n          Invalid license key")]):e._e()]),s("v-flex",{attrs:{xs12:"","mt-12":""}},[s("v-layout",{attrs:{"justify-space-around":""}},[s("v-dialog",{attrs:{persistent:"","max-width":"290"},scopedSlots:e._u([{key:"activator",fn:function(t){t.on;return[s("v-btn",{staticClass:"mr-2",attrs:{color:"primary",disabled:!e.formValid,large:""},on:{click:e.saveAppPreference}},[e._v("Save & Restart\n              ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[s("v-card",{directives:[{name:"show",rawName:"v-show",value:e.verifyDialog,expression:"verifyDialog"}],attrs:{color:"primary",dark:""}},[s("v-card-text",[e._v("\n                Saving config information\n                "),s("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1),s("v-card",{directives:[{name:"show",rawName:"v-show",value:e.statusDialog,expression:"statusDialog"}]},[s("v-card-title",{staticClass:"headline",class:e.dialogSuccessMsg?"green--text":"error--text"},[e._v(e._s(e.responseTitle))]),s("v-card-text",[e._v("\n                "+e._s(e.responseContent)+"\n              ")]),s("v-card-actions",[s("div",{staticClass:"flex-grow-1"}),s("v-btn",{attrs:{color:"darken-1",text:""},on:{click:e.closeDialog}},[e._v("\n                  OK\n                ")])],1)],1)],1),s("v-btn",{attrs:{color:"error",large:"",dark:""},on:{click:e.getAppPreferences}},[e._v("Last Config")])],1)],1)],2)],1)],1)},l=[],o=s("bc3a"),c=s.n(o),u=s("2ef0"),d=s.n(u),h={data(){return{instagramSourceUrl:"",instagramSourceTags:"",numberOfPostsToDisplay:0,excludedHashtags:"",isProfilePicDisplayed:!1,isUsernameDisplayed:!1,isLikesDisplayed:!1,isCommentsDisplayed:!1,isCaptionDisplayed:!1,isNetworkStrengthDisplayed:!1,isInstagramSourceValid:!1,isInstagramSourceTagsValid:!0,isExcludedTagsValid:!0,formValid:!1,sourceConfigMode:1,MODE_URL:1,MODE_HASHTAG:2,dialog:!1,verifyDialog:!1,statusDialog:!1,dialogSuccessMsg:!0,responseTitle:"",responseContent:"",licenseKey:"",licenseKeyId:"",isLicenseValid:!1,isLicenseSubmitted:!1,instagramSourceUrlErrorMsg:"Please specify a valid Instagram user URL",autoSize:!0,profilePicWidth:0,profilePicHeight:0,usernameTextSize:0,imgMainWidth:0,imgMainHeight:0,likeTextSize:0,commentTextSize:0,captionTextSize:0,presentInterval:0,refreshInterval:0,numberOfPostRules:[e=>/^-{0,1}\d+$/.test(e)||"Number of post must be a whole number",e=>parseInt(e,10)>0||"Minimum number is 1",e=>parseInt(e,10)<=100||"Maximum number is 100"],widthRules:[e=>/^-{0,1}\d+$/.test(e)||"Width must be a whole number",e=>parseInt(e,10)>=0||"Minimum width is 0"],heightRules:[e=>/^-{0,1}\d+$/.test(e)||"Height must be a whole number",e=>parseInt(e,10)>=0||"Minimum height is 0"],sizeRules:[e=>/^-{0,1}\d+$/.test(e)||"Size must be a whole number",e=>parseInt(e,10)>=0||"Minimum size is 0"],presentIntervalRules:[e=>/^-{0,1}\d+$/.test(e)||"Interval must be a whole number",e=>parseInt(e,10)>=5||"Minimum interval is 5 seconds"],refreshIntervalRules:[e=>/^-{0,1}\d+$/.test(e)||"Interval must be a whole number",e=>parseInt(e,10)>=1||"Minimum interval is 1 minutes"],hashtagInvalidCharRule:[e=>{const t=e.split(",");for(let s=0;s<t.length;s+=1){const e=t[s].trim();if(!this.isStringBlank(e)&&!e.startsWith("#"))return"Hashtag must start with #";const i=t[s].trim().substring(1),a=encodeURI(i),r=new RegExp(/^([!#$&-;=?-[\]_a-z~]|%[0-9a-fA-F]{2})+$/);if(!this.isStringBlank(i)&&!r.test(a))return"Invalid hashtag"}return!0}]}},created(){this.getAppPreferences(),this.getLicenseKeyId(),this.isValidated()},methods:{isStringBlank(e){return!e||0===e.trim().length},async getAppPreferences(){try{const{data:e}=await c.a.get(`http://${location.host}/api/v1/preference`);this.instagramSourceUrl=e.instagramSourceUrl,this.instagramSourceTags=e.instagramSourceTags,this.numberOfPostsToDisplay=e.numberOfPostsToDisplay,this.excludedHashtags=e.excludedHashtags,this.isProfilePicDisplayed=e.isProfilePicDisplayed,this.isUsernameDisplayed=e.isUsernameDisplayed,this.isLikesDisplayed=e.isLikesDisplayed,this.isCommentsDisplayed=e.isCommentsDisplayed,this.isCaptionDisplayed=e.isCaptionDisplayed,this.isNetworkStrengthDisplayed=e.isNetworkStrengthDisplayed,this.instagramUsername=e.instagramUsername,this.instagramPassword=e.instagramPassword,this.isRequiredLogin=e.isRequiredLogin,this.autoSize=e.autoSize,this.profilePicWidth=e.profilePicWidth,this.profilePicHeight=e.profilePicHeight,this.imgMainWidth=e.imgMainWidth,this.imgMainHeight=e.imgMainHeight,this.usernameTextSize=e.usernameTextSize,this.likeTextSize=e.likeTextSize,this.commentTextSize=e.commentTextSize,this.captionTextSize=e.captionTextSize,this.presentInterval=e.presentInterval,this.refreshInterval=e.refreshInterval,this.validateInstagramSourceUrl(),0===this.instagramSourceUrl.length&&0!==this.instagramSourceTags.length?this.sourceConfigMode=this.MODE_HASHTAG:this.sourceConfigMode=this.MODE_URL}catch(e){console.error(e)}},async saveAppPreference(){this.dialog=!0,this.verifyDialog=!0;const e={instagramSourceUrl:this.instagramSourceUrl,instagramSourceTags:this.instagramSourceTags,numberOfPostsToDisplay:this.numberOfPostsToDisplay,excludedHashtags:this.excludedHashtags,isProfilePicDisplayed:this.isProfilePicDisplayed,isUsernameDisplayed:this.isUsernameDisplayed,isLikesDisplayed:this.isLikesDisplayed,isCommentsDisplayed:this.isCommentsDisplayed,isCaptionDisplayed:this.isCaptionDisplayed,isNetworkStrengthDisplayed:this.isNetworkStrengthDisplayed,instagramUsername:this.instagramUsername,instagramPassword:this.instagramPassword,autoSize:this.autoSize,profilePicWidth:this.profilePicWidth,profilePicHeight:this.profilePicHeight,usernameTextSize:this.usernameTextSize,imgMainWidth:this.imgMainWidth,imgMainHeight:this.imgMainHeight,likeTextSize:this.likeTextSize,commentTextSize:this.commentTextSize,captionTextSize:this.captionTextSize,presentInterval:this.presentInterval,refreshInterval:this.refreshInterval};try{const{data:t}=await c.a.post(`http://${location.host}/api/v1/preference`,e);t.success?(this.responseTitle="Success",this.responseContent=t.success,this.dialogSuccessMsg=!0):t.redirect?window.location.href=`http://${location.host}${t.redirect}`:(this.responseTitle="Error",this.responseContent=t.error,this.dialogSuccessMsg=!1)}catch(t){this.responseTitle="Error",this.responseContent="Request failed",this.dialogSuccessMsg=!1}this.verifyDialog=!1,this.statusDialog=!0},async validateInstagramSourceUrl(){if(this.sourceConfigMode!==this.MODE_HASHTAG){try{this.instagramSourceUrl=this.instagramSourceUrl.toLowerCase();const e=RegExp(/^(https:\/\/)?(www.)?instagram.com\/\w+(\.\w+)*\/?$/),t=e.test(this.instagramSourceUrl);if(!t)throw new Error("Invalid URL");if(await c.a.get(this.instagramSourceUrl.concat("?__a=1")),this.isStringBlank(this.instagramSourceUrl))throw new Error("Empty URL");this.instagramSourceUrlErrorMsg="",this.isInstagramSourceValid=!0}catch(e){this.instagramSourceUrlErrorMsg="Please specify a valid Instagram user URL",this.isInstagramSourceValid=!1}this.$refs.form.validate()}},async getLicenseKeyId(){try{const{data:e}=await c.a.get(`http://${location.host}/api/v1/license`);this.licenseKeyId=e}catch(e){console.warn(e)}},async validateKey(){try{const e={licenseKey:this.licenseKey};await c.a.post(`http://${location.host}/api/v1/license/validate`,e),this.isLicenseValid=!0}catch(e){console.warn(e),this.isLicenseValid=!1}this.isLicenseSubmitted=!0},async isValidated(){try{const{data:e}=await c.a.get(`http://${location.host}/api/v1/license/is-validated`);this.isLicenseValid=e.validated}catch(e){console.warn(e),this.isLicenseValid=!0}},setBaseInstagramUrl(){this.instagramSourceUrlErrorMsg="",this.instagramSourceUrl.startsWith("https://www.instagram.com/")||(this.instagramSourceUrl="https://www.instagram.com/")},watchHashtagInput(){this.$refs.form.validate()},changeMode(){this.instagramSourceTags="",this.instagramSourceUrl="",this.validateInstagramSourceUrl()},closeDialog(){this.dialog=!1,this.verifyDialog=!1,this.statusDialog=!1}},computed:{profilePicMsg(){return this.isProfilePicDisplayed?"Display user's profile picture":"Do not display user's profile picture"},usernameMsg(){return this.isUsernameDisplayed?"Display username":"Do not display username"},likeMsg(){return this.isLikesDisplayed?"Display number of likes":"Do not display number of likes"},commentMsg(){return this.isCommentsDisplayed?"Display number of comments":"Do not display number of comments"},captionMsg(){return this.isCaptionDisplayed?"Display post caption":"Do not display post caption"},networkStrengthMsg(){return this.isNetworkStrengthDisplayed?"Display network strength":"Do not display network strength"},sourceHashtagsRules(){const e=[];return this.sourceConfigMode===this.MODE_HASHTAG&&(e.push(e=>!this.isStringBlank(e)||"Please specify a hashtag, example: #sport"),e.push(e=>e.split(",").length<=1||"Only 1 hashtag is allowed")),e},duplicatedHashtagRule(){const e=[];return e.push(()=>{const e=this.excludedHashtags.replace(/\s/g,"").toLowerCase().split(","),t=this.instagramSourceTags.replace(/\s/g,"").toLowerCase().split(",");return!(!this.isStringBlank(this.excludedHashtags)&&!this.isStringBlank(this.instagramSourceTags)&&d.a.intersection(e,t).length>0)||"Excluded hashtags conflict with source hashtags"}),e}}},p=h,g=(s("61cf"),s("2877")),m=s("6544"),f=s.n(m),v=s("8336"),x=s("b0af"),y=s("99d9"),b=s("62ad"),S=s("a523"),w=s("169a"),D=s("0e8f"),k=s("4bd4"),C=s("a722"),M=s("8e36"),P=s("67b6"),T=s("43a6"),z=s("0fd9"),I=s("b73d"),U=s("8654"),R=Object(g["a"])(p,n,l,!1,null,"740dd2c4",null),L=R.exports;f()(R,{VBtn:v["a"],VCard:x["a"],VCardActions:y["a"],VCardText:y["b"],VCardTitle:y["c"],VCol:b["a"],VContainer:S["a"],VDialog:w["a"],VFlex:D["a"],VForm:k["a"],VLayout:C["a"],VProgressLinear:M["a"],VRadio:P["a"],VRadioGroup:T["a"],VRow:z["a"],VSwitch:I["a"],VTextField:U["a"]});var _=s("4666"),H={name:"App",data(){return{displayable:!1}},components:{AppPreference:L},async beforeCreate(){try{const e=await Object(_["c"])(),t=await Object(_["a"])(),s=await Object(_["b"])();this.displayable=e&&!t&&!s,this.displayable||(window.location.href=`http://${location.host}/authorize`)}catch(e){console.error(e)}}},V=H,O=s("7496"),E=s("a75b"),$=Object(g["a"])(V,a,r,!1,null,null,null),A=$.exports;f()($,{VApp:O["a"],VContent:E["a"]});var q=s("402c");i["a"].config.productionTip=!1,new i["a"]({vuetify:q["a"],render:e=>e(A)}).$mount("#app")}});
//# sourceMappingURL=index.282ea0f7.js.map