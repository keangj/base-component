(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{176:function(t,n,s){"use strict";var c=s(3),a=s(14),e=s(18),o=s(66),i=s(64),r=s(6),l=s(86).f,b=s(85).f,v=s(8).f,d=s(180).trim,u=c.Number,p=u,f=u.prototype,h="Number"==e(s(65)(f)),_="trim"in String.prototype,g=function(t){var n=i(t,!1);if("string"==typeof n&&n.length>2){var s,c,a,e=(n=_?n.trim():d(n,3)).charCodeAt(0);if(43===e||45===e){if(88===(s=n.charCodeAt(2))||120===s)return NaN}else if(48===e){switch(n.charCodeAt(1)){case 66:case 98:c=2,a=49;break;case 79:case 111:c=8,a=55;break;default:return+n}for(var o,r=n.slice(2),l=0,b=r.length;l<b;l++)if((o=r.charCodeAt(l))<48||o>a)return NaN;return parseInt(r,c)}}return+n};if(!u(" 0o1")||!u("0b1")||u("+0x1")){u=function(t){var n=arguments.length<1?0:t,s=this;return s instanceof u&&(h?r(function(){f.valueOf.call(s)}):"Number"!=e(s))?o(new p(g(n)),s,u):g(n)};for(var m,C=s(7)?l(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;C.length>x;x++)a(p,m=C[x])&&!a(u,m)&&v(u,m,b(p,m));u.prototype=f,f.constructor=u,s(11)(c,"Number",u)}},180:function(t,n,s){var c=s(10),a=s(17),e=s(6),o=s(181),i="["+o+"]",r=RegExp("^"+i+i+"*"),l=RegExp(i+i+"*$"),b=function(t,n,s){var a={},i=e(function(){return!!o[t]()||"​"!="​"[t]()}),r=a[t]=i?n(v):o[t];s&&(a[s]=r),c(c.P+c.F*i,"String",a)},v=b.trim=function(t,n){return t=String(a(t)),1&n&&(t=t.replace(r,"")),2&n&&(t=t.replace(l,"")),t};t.exports=b},181:function(t,n){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},182:function(t,n,s){},183:function(t,n,s){},189:function(t,n,s){"use strict";var c=s(182);s.n(c).a},190:function(t,n,s){"use strict";var c=s(10),a=s(87)(!0);c(c.P,"Array",{includes:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),s(88)("includes")},191:function(t,n,s){"use strict";var c=s(10),a=s(192);c(c.P+c.F*s(193)("includes"),"String",{includes:function(t){return!!~a(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},192:function(t,n,s){var c=s(67),a=s(17);t.exports=function(t,n,s){if(c(n))throw TypeError("String#"+s+" doesn't accept regex!");return String(a(t))}},193:function(t,n,s){var c=s(2)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(s){try{return n[c]=!1,!"/./"[t](n)}catch(t){}}return!0}},194:function(t,n,s){"use strict";var c=s(183);s.n(c).a},195:function(t,n,s){"use strict";s(13),s(176);var c={name:"b-row",props:{gutter:{type:[Number,String]},align:{type:String,validator:function(t){return-1!==["left","right","center"].indexOf(t)}}},computed:{rowClass:function(){var t=this.align;return[t&&"align-".concat(t)]},rowStyle:function(){var t=this.gutter;return{"margin-left":-t/2+"px",marginRight:-t/2+"px"}}},mounted:function(){var t=this;this.$children.forEach(function(n){n.gutter=t.gutter})}},a=(s(189),s(1)),e=Object(a.a)(c,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"b-row",class:this.rowClass,style:this.rowStyle},[this._t("default")],2)},[],!1,null,"3a6a4e7a",null);n.a=e.exports},196:function(t,n,s){"use strict";var c=s(9),a=(s(176),s(190),s(191),s(13),s(19),s(23),function(t){var n=Object.keys(t),s=!0;return n.forEach(function(t){["span","offset"].includes(t)||(s=!1)}),s}),e={name:"b-col",props:{span:{type:[Number,String]},offset:{type:[Number,String]},xs:{type:[Number,Object],validator:a},sm:{type:[Number,Object],validator:a},md:{type:[Number,Object],validator:a},lg:{type:[Number,Object],validator:a},xl:{type:[Number,Object],validator:a},xxl:{type:[Number,Object],validator:a}},data:function(){return{gutter:0}},computed:{colClass:function(){var t=this.span,n=this.offset,s=this.xs,a=this.sm,e=this.md,o=this.lg,i=this.xl,r=this.xxl,l=this.createClasses;return Object(c.a)(l({span:t,offset:n})).concat(Object(c.a)(l(s,"xs-")),Object(c.a)(l(e,"md-")),Object(c.a)(l(a,"sm-")),Object(c.a)(l(o,"lg-")),Object(c.a)(l(i,"xl-")),Object(c.a)(l(r,"xxl-")))},colStyle:function(){var t=this.gutter;return{paddingLeft:t/2+"px",paddingRight:t/2+"px"}}},methods:{createClasses:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t)return[];var s=[];return t.span&&s.push("col-".concat(n).concat(t.span)),t.offset&&s.push("offset-".concat(n).concat(t.offset)),s}}},o=(s(194),s(1)),i=Object(o.a)(e,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"col",class:this.colClass,style:this.colStyle},[n("div",[this._t("default")],2)])},[],!1,null,"d99f5c52",null);n.a=i.exports},200:function(t,n,s){},223:function(t,n,s){"use strict";var c=s(200);s.n(c).a},249:function(t,n,s){"use strict";s.r(n);s(22);var c=s(195),a=s(196),e={components:{bRow:c.a,bCol:a.a},data:function(){return{content:'\n        <b-row>\n          <b-col span="8">\n            <div class="b-content"></div>\n          </b-col>\n          <b-col span="8">\n            <div class="b-content"></div>\n          </b-col>\n          <b-col span="8">\n            <div class="b-content"></div>\n          </b-col>\n        </b-row>\n        <b-row>\n          <b-col span="6">\n            <div class="b-content"></div>\n          </b-col>\n          <b-col span="6">\n            <div class="b-content"></div>\n          </b-col>\n          <b-col span="6">\n            <div class="b-content"></div>\n          </b-col>\n          <b-col span="6">\n            <div class="b-content"></div>\n          </b-col>\n        </b-row>\n        <b-row>\n          <b-col span="4">\n            <div class="b-content"></div>\n          </b-col>\n          <b-col span="4">\n            <div class="b-content"></div>\n          </b-col>\n          <b-col span="4">\n            <div class="b-content"></div>\n          </b-col>\n          <b-col span="4">\n            <div class="b-content"></div>\n          </b-col>\n          <b-col span="4">\n            <div class="b-content"></div>\n          </b-col>\n          <b-col span="4">\n            <div class="b-content"></div>\n          </b-col>\n        </b-row>\n        <b-row>\n          <b-col span="2">\n            <div class="b-content"></div>\n          </b-col>\n          <b-col span="2">\n            <div class="b-content"></div>\n          </b-col>\n          <b-col span="2">\n            <div class="b-content"></div>\n          </b-col>\n          <b-col span="2">\n            <div class="b-content"></div>\n          </b-col>\n          <b-col span="2">\n            <div class="b-content"></div>\n          </b-col>\n          <b-col span="2">\n            <div class="b-content"></div>\n          </b-col>\n          <b-col span="2">\n            <div class="b-content"></div>\n          </b-col>\n          <b-col span="2">\n            <div class="b-content"></div>\n          </b-col>\n          <b-col span="2">\n            <div class="b-content"></div>\n          </b-col>\n          <b-col span="2">\n            <div class="b-content"></div>\n          </b-col>\n          <b-col span="2">\n            <div class="b-content"></div>\n          </b-col>\n          <b-col span="2">\n            <div class="b-content"></div>\n          </b-col>\n        </b-row>\n        <style>\n          * {\n            box-sizing: border-box;\n          }\n          .b-content {\n            height: 50px;\n            border: 1px solid #F2F6FC;\n            background: #aaa;\n            border-radius: 4px;\n          }\n        </style>\n    '.replace(/^ {8}/gm,"").trim()}}},o=(s(223),s(1)),i=Object(o.a)(e,function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticStyle:{"padding-top":"16px"}},[s("h2",[t._v("基本用法")]),t._v(" "),t._m(0),t._v(" "),s("b-row",[s("b-col",{attrs:{span:"8"}},[s("div",{staticClass:"b-content"})]),t._v(" "),s("b-col",{attrs:{span:"8"}},[s("div",{staticClass:"b-content"})]),t._v(" "),s("b-col",{attrs:{span:"8"}},[s("div",{staticClass:"b-content"})])],1),t._v(" "),s("b-row",[s("b-col",{attrs:{span:"6"}},[s("div",{staticClass:"b-content"})]),t._v(" "),s("b-col",{attrs:{span:"6"}},[s("div",{staticClass:"b-content"})]),t._v(" "),s("b-col",{attrs:{span:"6"}},[s("div",{staticClass:"b-content"})]),t._v(" "),s("b-col",{attrs:{span:"6"}},[s("div",{staticClass:"b-content"})])],1),t._v(" "),s("b-row",[s("b-col",{attrs:{span:"4"}},[s("div",{staticClass:"b-content"})]),t._v(" "),s("b-col",{attrs:{span:"4"}},[s("div",{staticClass:"b-content"})]),t._v(" "),s("b-col",{attrs:{span:"4"}},[s("div",{staticClass:"b-content"})]),t._v(" "),s("b-col",{attrs:{span:"4"}},[s("div",{staticClass:"b-content"})]),t._v(" "),s("b-col",{attrs:{span:"4"}},[s("div",{staticClass:"b-content"})]),t._v(" "),s("b-col",{attrs:{span:"4"}},[s("div",{staticClass:"b-content"})])],1),t._v(" "),s("b-row",[s("b-col",{attrs:{span:"2"}},[s("div",{staticClass:"b-content"})]),t._v(" "),s("b-col",{attrs:{span:"2"}},[s("div",{staticClass:"b-content"})]),t._v(" "),s("b-col",{attrs:{span:"2"}},[s("div",{staticClass:"b-content"})]),t._v(" "),s("b-col",{attrs:{span:"2"}},[s("div",{staticClass:"b-content"})]),t._v(" "),s("b-col",{attrs:{span:"2"}},[s("div",{staticClass:"b-content"})]),t._v(" "),s("b-col",{attrs:{span:"2"}},[s("div",{staticClass:"b-content"})]),t._v(" "),s("b-col",{attrs:{span:"2"}},[s("div",{staticClass:"b-content"})]),t._v(" "),s("b-col",{attrs:{span:"2"}},[s("div",{staticClass:"b-content"})]),t._v(" "),s("b-col",{attrs:{span:"2"}},[s("div",{staticClass:"b-content"})]),t._v(" "),s("b-col",{attrs:{span:"2"}},[s("div",{staticClass:"b-content"})]),t._v(" "),s("b-col",{attrs:{span:"2"}},[s("div",{staticClass:"b-content"})]),t._v(" "),s("b-col",{attrs:{span:"2"}},[s("div",{staticClass:"b-content"})])],1),t._v(" "),t._m(1),t._v(" "),s("pre",[s("code",[t._v(t._s(t.content))])])],1)},[function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("预览")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("代码")])])}],!1,null,"58b663f0",null);n.default=i.exports}}]);