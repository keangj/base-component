(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{176:function(t,n,e){"use strict";var r=e(3),s=e(14),c=e(18),a=e(66),i=e(64),o=e(6),l=e(86).f,u=e(85).f,f=e(8).f,b=e(180).trim,p=r.Number,v=p,d=p.prototype,h="Number"==c(e(65)(d)),g="trim"in String.prototype,m=function(t){var n=i(t,!1);if("string"==typeof n&&n.length>2){var e,r,s,c=(n=g?n.trim():b(n,3)).charCodeAt(0);if(43===c||45===c){if(88===(e=n.charCodeAt(2))||120===e)return NaN}else if(48===c){switch(n.charCodeAt(1)){case 66:case 98:r=2,s=49;break;case 79:case 111:r=8,s=55;break;default:return+n}for(var a,o=n.slice(2),l=0,u=o.length;l<u;l++)if((a=o.charCodeAt(l))<48||a>s)return NaN;return parseInt(o,r)}}return+n};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof p&&(h?o(function(){d.valueOf.call(e)}):"Number"!=c(e))?a(new v(m(n)),e,p):m(n)};for(var _,x=e(7)?l(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;x.length>N;N++)s(v,_=x[N])&&!s(p,_)&&f(p,_,u(v,_));p.prototype=d,d.constructor=p,e(11)(r,"Number",p)}},180:function(t,n,e){var r=e(10),s=e(17),c=e(6),a=e(181),i="["+a+"]",o=RegExp("^"+i+i+"*"),l=RegExp(i+i+"*$"),u=function(t,n,e){var s={},i=c(function(){return!!a[t]()||"​"!="​"[t]()}),o=s[t]=i?n(f):a[t];e&&(s[e]=o),r(r.P+r.F*i,"String",s)},f=u.trim=function(t,n){return t=String(s(t)),1&n&&(t=t.replace(o,"")),2&n&&(t=t.replace(l,"")),t};t.exports=u},181:function(t,n){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},182:function(t,n,e){},183:function(t,n,e){},189:function(t,n,e){"use strict";var r=e(182);e.n(r).a},190:function(t,n,e){"use strict";var r=e(10),s=e(87)(!0);r(r.P,"Array",{includes:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),e(88)("includes")},191:function(t,n,e){"use strict";var r=e(10),s=e(192);r(r.P+r.F*e(193)("includes"),"String",{includes:function(t){return!!~s(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},192:function(t,n,e){var r=e(67),s=e(17);t.exports=function(t,n,e){if(r(n))throw TypeError("String#"+e+" doesn't accept regex!");return String(s(t))}},193:function(t,n,e){var r=e(2)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[r]=!1,!"/./"[t](n)}catch(t){}}return!0}},194:function(t,n,e){"use strict";var r=e(183);e.n(r).a},195:function(t,n,e){"use strict";e(13),e(176);var r={name:"b-row",props:{gutter:{type:[Number,String]},align:{type:String,validator:function(t){return-1!==["left","right","center"].indexOf(t)}}},computed:{rowClass:function(){var t=this.align;return[t&&"align-".concat(t)]},rowStyle:function(){var t=this.gutter;return{"margin-left":-t/2+"px",marginRight:-t/2+"px"}}},mounted:function(){var t=this;this.$children.forEach(function(n){n.gutter=t.gutter})}},s=(e(189),e(1)),c=Object(s.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"b-row",class:this.rowClass,style:this.rowStyle},[this._t("default")],2)},[],!1,null,"3a6a4e7a",null);n.a=c.exports},196:function(t,n,e){"use strict";var r=e(9),s=(e(176),e(190),e(191),e(13),e(19),e(23),function(t){var n=Object.keys(t),e=!0;return n.forEach(function(t){["span","offset"].includes(t)||(e=!1)}),e}),c={name:"b-col",props:{span:{type:[Number,String]},offset:{type:[Number,String]},xs:{type:[Number,Object],validator:s},sm:{type:[Number,Object],validator:s},md:{type:[Number,Object],validator:s},lg:{type:[Number,Object],validator:s},xl:{type:[Number,Object],validator:s},xxl:{type:[Number,Object],validator:s}},data:function(){return{gutter:0}},computed:{colClass:function(){var t=this.span,n=this.offset,e=this.xs,s=this.sm,c=this.md,a=this.lg,i=this.xl,o=this.xxl,l=this.createClasses;return Object(r.a)(l({span:t,offset:n})).concat(Object(r.a)(l(e,"xs-")),Object(r.a)(l(c,"md-")),Object(r.a)(l(s,"sm-")),Object(r.a)(l(a,"lg-")),Object(r.a)(l(i,"xl-")),Object(r.a)(l(o,"xxl-")))},colStyle:function(){var t=this.gutter;return{paddingLeft:t/2+"px",paddingRight:t/2+"px"}}},methods:{createClasses:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t)return[];var e=[];return t.span&&e.push("col-".concat(n).concat(t.span)),t.offset&&e.push("offset-".concat(n).concat(t.offset)),e}}},a=(e(194),e(1)),i=Object(a.a)(c,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"col",class:this.colClass,style:this.colStyle},[n("div",[this._t("default")],2)])},[],!1,null,"d99f5c52",null);n.a=i.exports},201:function(t,n,e){},224:function(t,n,e){"use strict";var r=e(201);e.n(r).a},246:function(t,n,e){"use strict";e.r(n);e(22);var r=e(195),s=e(196),c={components:{bRow:r.a,bCol:s.a},data:function(){return{content:'\n        <b-row gutter="20">\n          <b-col span="8">\n            <div class="b-content"></div>\n          </b-col>\n          <b-col span="8">\n            <div class="b-content"></div>\n          </b-col>\n          <b-col span="8">\n            <div class="b-content"></div>\n          </b-col>\n        </b-row>\n        <b-row gutter="10">\n          <b-col span="6">\n            <div class="b-content"></div>\n          </b-col>\n          <b-col span="6">\n            <div class="b-content"></div>\n          </b-col>\n          <b-col span="6">\n            <div class="b-content"></div>\n          </b-col>\n          <b-col span="6">\n            <div class="b-content"></div>\n          </b-col>\n        </b-row>\n        <style>\n          * {\n            box-sizing: border-box;\n          }\n          .b-content {\n            height: 50px;\n            border: 1px solid #F2F6FC;\n            background: #aaa;\n            border-radius: 4px;\n          }\n        </style>\n    '.replace(/^ {8}/gm,"").trim()}}},a=(e(224),e(1)),i=Object(a.a)(c,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{"padding-top":"16px"}},[e("h2",[t._v("间隔")]),t._v(" "),t._m(0),t._v(" "),e("b-row",{attrs:{gutter:"20"}},[e("b-col",{attrs:{span:"8"}},[e("div",{staticClass:"b-content"})]),t._v(" "),e("b-col",{attrs:{span:"8"}},[e("div",{staticClass:"b-content"})]),t._v(" "),e("b-col",{attrs:{span:"8"}},[e("div",{staticClass:"b-content"})])],1),t._v(" "),e("b-row",{attrs:{gutter:"10"}},[e("b-col",{attrs:{span:"6"}},[e("div",{staticClass:"b-content"})]),t._v(" "),e("b-col",{attrs:{span:"6"}},[e("div",{staticClass:"b-content"})]),t._v(" "),e("b-col",{attrs:{span:"6"}},[e("div",{staticClass:"b-content"})]),t._v(" "),e("b-col",{attrs:{span:"6"}},[e("div",{staticClass:"b-content"})])],1),t._v(" "),t._m(1),t._v(" "),e("pre",[e("code",[t._v(t._s(t.content))])])],1)},[function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("预览")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("代码")])])}],!1,null,"8c519fee",null);n.default=i.exports}}]);