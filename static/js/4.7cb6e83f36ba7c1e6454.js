webpackJsonp([4],{106:function(e,t,n){var o=n(107);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(96)("41dbc73a",o,!0)},107:function(e,t,n){(e.exports=n(95)(!0)).push([e.i,".state[data-v-80126438]{background:#fff}","",{version:3,sources:["/Volumes/Data/Eric/Develop/Repository/Vimon/demos/src/pages/refresher.vue"],names:[],mappings:"AACA,wBACE,eAAiB,CAClB",file:"refresher.vue",sourcesContent:["\n.state[data-v-80126438] {\n  background: #fff;\n}\n"],sourceRoot:""}])},144:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={data:function(){return{items:[],enabled:!0,data:["Fast Times at Ridgemont High","Peggy Sue Got Married","Raising Arizona","Moonstruck","Fire Birds","Honeymoon in Vegas","Amos & Andrew","It Could Happen to You","Trapped in Paradise","Leaving Las Vegas","The Rock","Con Air","Face/Off","City of Angels","Gone in Sixty Seconds","The Family Man","Windtalkers","Matchstick Men","National Treasure","Ghost Rider","Grindhouse","Next","Kick-Ass","Drive Angry"]}},methods:{toggleDisabled:function(){this.enabled=!this.enabled},doRefresh:function(e){var t=this;console.log("DOREFRESH",e),this.getAsyncData().then(function(n){for(var o=0;o<n.length;o++)t.items.unshift(n[o]);e.complete()})},doPulling:function(e){console.log("DOPULLING",e.progress)},doStart:function(e){console.log("STARTING",e.progress)},getData:function(){for(var e=[],t=0;t<20;t++)e.unshift(this._getRandomData());return e},getAsyncData:function(){var e=this;return new Promise(function(t){setTimeout(function(){t(e.getData())},500)})},_getRandomData:function(){var e=Math.floor(Math.random()*this.data.length);return this.data[e]}},created:function(){this.items=this.getData(),console.log(this.items)}},s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ion-page",{directives:[{name:"nav",rawName:"v-nav",value:{title:"Refresher"},expression:"{title: 'Refresher'}"}]},[n("ion-content",[n("ion-refresher",{attrs:{slot:"refresher",enabled:e.enabled,pullingText:"Pull to refresh...",r:"",efreshingText:"Refreshing..."},on:{onRefresh:function(t){e.doRefresh(t)},onStart:function(t){e.doStart(t)},onPull:function(t){e.doPulling(t)}},slot:"refresher"}),e._v(" "),n("div",{staticClass:"state",attrs:{padding:"","text-center":""}},[n("p",[e._v("状态: "+e._s(e.enabled))]),e._v(" "),n("ion-button",{attrs:{small:"",outline:""},nativeOn:{click:function(t){e.toggleDisabled(t)}}},[e._v("禁用/启用")])],1),e._v(" "),n("ion-list",e._l(e.items,function(t,o){return n("ion-item",{key:o},[e._v(e._s(t))])}))],1)],1)},staticRenderFns:[]},a=n(0)(o,s,!1,function(e){n(106)},"data-v-80126438",null);t["default"]=a.exports}});