webpackJsonp([28],{128:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={data:function(){return{wwwReleased:"1991",netscapeReleased:"1994-12-15T13:47:20.789",operaReleased:"1995-04-15",webkitReleased:"1998-11-04T11:06Z",firefoxReleased:"2002-09-23T15:03:46.789",chromeReleased:"2008-09-02",tokyoTime:"",parisTime:"",madisonTime:"",alertTime:"10:15",operaShortDay:["søn","man","tir","ons","tor","fre","lør"]}},created:function(){this.tokyoTime=this.calculateTime("+9"),this.parisTime=this.calculateTime("+1"),this.madisonTime=this.calculateTime("-6"),this.dst(new Date)&&(this.parisTime=this.calculateTime("+2"),this.madisonTime=this.calculateTime("-5"))},methods:{change:function(e){console.log("change:",e)},calculateTime:function(e){var t=new Date;return new Date(t.getTime()+36e5*e).toISOString()},stdTimezoneOffset:function(e){var t=new Date(e.getFullYear(),0,1),i=new Date(e.getFullYear(),6,1);return Math.max(t.getTimezoneOffset(),i.getTimezoneOffset())},dst:function(e){return e.getTimezoneOffset()<this.stdTimezoneOffset(e)}}},l={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ion-page",[i("ion-header",[i("ion-navbar",[i("ion-title",[e._v("DateTime")])],1)],1),e._v(" "),i("ion-content",{staticClass:"outer-content"},[i("ion-list",[i("ion-list-header",[e._v("Web Release Dates")]),e._v(" "),i("ion-item",[i("ion-label",{attrs:{slot:"item-label"},slot:"item-label"},[e._v("World Wide Web")]),e._v(" "),i("ion-datetime",{attrs:{slot:"item-content",displayFormat:"YYYY",min:"1981",max:"2002"},slot:"item-content",model:{value:e.wwwReleased,callback:function(t){e.wwwReleased=t},expression:"wwwReleased"}})],1),e._v(" "),i("ion-item",[i("ion-label",{attrs:{slot:"item-label"},slot:"item-label"},[e._v("Netscape")]),e._v(" "),i("ion-datetime",{attrs:{slot:"item-content",displayFormat:"MMMM YY",min:"1989",max:"2004"},slot:"item-content",model:{value:e.netscapeReleased,callback:function(t){e.netscapeReleased=t},expression:"netscapeReleased"}})],1),e._v(" "),i("ion-item",[i("ion-label",{attrs:{slot:"item-label"},slot:"item-label"},[e._v("Opera")]),e._v(" "),i("ion-datetime",{attrs:{slot:"item-content",displayFormat:"DDD DD.MM.YY",min:"1990",max:"2000",dayShortNames:e.operaShortDay},slot:"item-content",model:{value:e.operaReleased,callback:function(t){e.operaReleased=t},expression:"operaReleased"}})],1),e._v(" "),i("ion-item",[i("ion-label",{attrs:{slot:"item-label"},slot:"item-label"},[e._v("Webkit")]),e._v(" "),i("ion-datetime",{attrs:{slot:"item-content",displayFormat:"D MMM YYYY",min:"1990-02",max:"2010-10"},slot:"item-content",model:{value:e.webkitReleased,callback:function(t){e.webkitReleased=t},expression:"webkitReleased"}})],1),e._v(" "),i("ion-item",[i("ion-label",{attrs:{slot:"item-label"},slot:"item-label"},[e._v("Firefox")]),e._v(" "),i("ion-datetime",{attrs:{slot:"item-content",displayFormat:"MMM DD, YYYY",min:"1994-03-14",max:"2012-12-09"},slot:"item-content",model:{value:e.firefoxReleased,callback:function(t){e.firefoxReleased=t},expression:"firefoxReleased"}})],1),e._v(" "),i("ion-item",[i("ion-label",{attrs:{slot:"item-label"},slot:"item-label"},[e._v("Chrome")]),e._v(" "),i("ion-datetime",{attrs:{slot:"item-content",displayFormat:"DDDD MMM D, YYYY",min:"2005",max:"2016"},slot:"item-content",model:{value:e.chromeReleased,callback:function(t){e.chromeReleased=t},expression:"chromeReleased"}})],1)],1),e._v(" "),i("ion-list",[i("ion-list-header",[e._v("World Times")]),e._v(" "),i("ion-item",[i("ion-label",{attrs:{slot:"item-label"},slot:"item-label"},[e._v("Tokyo")]),e._v(" "),i("ion-datetime",{attrs:{slot:"item-content",displayFormat:"hh:mm A"},slot:"item-content",model:{value:e.tokyoTime,callback:function(t){e.tokyoTime=t},expression:"tokyoTime"}})],1),e._v(" "),i("ion-item",[i("ion-label",{attrs:{slot:"item-label"},slot:"item-label"},[e._v("Paris")]),e._v(" "),i("ion-datetime",{attrs:{slot:"item-content",displayFormat:"HH:mm"},slot:"item-content",model:{value:e.parisTime,callback:function(t){e.parisTime=t},expression:"parisTime"}})],1),e._v(" "),i("ion-item",[i("ion-label",{attrs:{slot:"item-label"},slot:"item-label"},[e._v("Madison")]),e._v(" "),i("ion-datetime",{attrs:{slot:"item-content",displayFormat:"h:mm a"},slot:"item-content",model:{value:e.madisonTime,callback:function(t){e.madisonTime=t},expression:"madisonTime"}})],1)],1),e._v(" "),i("ion-list",[i("ion-list-header",[e._v("Set Alarm")]),e._v(" "),i("ion-item",[i("ion-label",{attrs:{slot:"item-label"},slot:"item-label"},[e._v("Alert")]),e._v(" "),i("ion-datetime",{attrs:{slot:"item-content",displayFormat:"mm",minuteValues:"0,15,30,45"},slot:"item-content",model:{value:e.alertTime,callback:function(t){e.alertTime=t},expression:"alertTime"}})],1)],1)],1)],1)},staticRenderFns:[]},o=i(0)(a,l,!1,null,null,null);t["default"]=o.exports}});