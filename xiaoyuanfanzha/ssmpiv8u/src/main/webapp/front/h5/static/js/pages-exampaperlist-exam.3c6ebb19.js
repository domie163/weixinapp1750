(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-exampaperlist-exam"],{4884:function(t,e,n){"use strict";n.r(e);var i=n("4a6a"),a=n("fe12");for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("94f8");var r,c=n("f0c5"),o=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"02ef4653",null,!1,i["a"],r);e["default"]=o.exports},"4a6a":function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"header-container"},[n("v-uni-view",{staticClass:"left-container",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.leaveTap.apply(void 0,arguments)}}},[n("v-uni-image",{staticClass:"icon",attrs:{src:"../../static/center/l5.png",mode:""}}),n("v-uni-text",[t._v("交卷")])],1),n("v-uni-view",{staticClass:"center-container"},[t._v("倒计时："+t._s(t.SecondToDate))]),n("v-uni-view",{staticClass:"right-container"},[t._v("题目： "+t._s(t.currentItem)+"/"+t._s(t.list.length))])],1),n("v-uni-view",{staticClass:"exam-container"},[n("v-uni-view",{staticClass:"title-container"},[0==t.item.type?n("v-uni-text",{staticClass:"type"},[t._v("单选题")]):t._e(),1==t.item.type?n("v-uni-text",{staticClass:"type"},[t._v("多选题")]):t._e(),2==t.item.type?n("v-uni-text",{staticClass:"type"},[t._v("判断题")]):t._e(),3==t.item.type?n("v-uni-text",{staticClass:"type"},[t._v("填空题")]):t._e(),n("v-uni-text",{staticClass:"title"},[t._v(t._s(t.item.questionname))])],1),n("v-uni-view",{staticClass:"answer-container"},[3==t.item.type?n("v-uni-view",{staticClass:"tiankong-container"},[n("v-uni-text",[t._v("填写答案：")]),n("v-uni-input",{staticClass:"answer",attrs:{type:"text",value:""},model:{value:t.answer,callback:function(e){t.answer=e},expression:"answer"}})],1):t._e(),t._l(t.item.options,(function(e,i){return 0==t.item.type||2==t.item.type?n("v-uni-view",{key:i,staticClass:"answer-item"},[n("v-uni-checkbox",{attrs:{value:t.item.index,checked:e.checked},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.itemCheckTap(e.checked,i)}}}),n("v-uni-text",{staticClass:"text"},[t._v(t._s(e.text))])],1):t._e()})),t._l(t.item.options,(function(e,i){return 1==t.item.type?n("v-uni-view",{key:i,staticClass:"answer-item"},[n("v-uni-checkbox",{attrs:{value:t.item.index,checked:e.checked},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.itemCheckTap(e.checked,i)}}}),n("v-uni-text",{staticClass:"text"},[t._v(t._s(e.text))])],1):t._e()})),t.isSubmit?t._e():n("v-uni-button",{staticClass:"btn-submit",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submitTap.apply(void 0,arguments)}}},[t._v("提交答案")]),t.isSubmit&&t.currentItem<=t.list.length?n("v-uni-button",{staticClass:"btn-next",attrs:{type:"warn"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.nextTap.apply(void 0,arguments)}}},[t._v("下一题")]):t._e()],2),t.isSubmit&&t.currentItem<=t.list.length?n("v-uni-view",{staticClass:"tip-container"},[n("v-uni-view",{staticClass:"par"},[t._v("答题结果："),t.item.answer==t.answer?n("v-uni-text",{staticClass:"text-blue"},[t._v("正确")]):t._e(),t.item.answer!=t.answer?n("v-uni-text",{staticClass:"text-red"},[t._v("错误")]):t._e()],1),n("v-uni-view",{staticClass:"par"},[t._v("本题答案："+t._s(t.item.answer))]),n("v-uni-view",{staticClass:"par"},[t._v("您的答案是："+t._s(t.answer))]),n("v-uni-view",{staticClass:"par"},[t._v("题目分析："+t._s(t.item.analysis))])],1):t._e()],1)],1)},s=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}))},"4ed3":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("c5f6"),n("96cf");var a=i(n("3b8d")),s={data:function(){return{item:{},paper:{},isSubmit:!1,answer:"",currentItem:1,score:0,inter:null,list:[],user:{},count:0}},onLoad:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e){var n,i,s,r,c,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.score=0,n=uni.getStorageSync("nowTable"),t.next=4,this.$api.session(n);case 4:return i=t.sent,this.user=i.data,t.next=8,this.$api.info("exampaper",e.id);case 8:return i=t.sent,this.paper=i.data,t.next=12,this.$api.list("examquestion",{page:1,limit:999,sort:"sequence",paperid:e.id});case 12:for(i=t.sent,this.list=i.data.list,this.count=60*this.paper.time,this.count>0&&(s=this,this.inter=setInterval((function(){s.count=s.count-1,s.count<0&&(clearInterval(s.inter),uni.showModal({title:"答题结束",content:"本次竞赛成绩："+s.score,showCancel:!1,success:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.confirm&&uni.navigateBack({delta:1});case 1:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}))}),1e3)),r=0;r<this.list.length;r++){for(c=JSON.parse(this.list[r].options),o=0;o<c.length;o++)c[o].checked=!1;this.list[r].options=c}console.log(this.list),this.item=this.list[0];case 19:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),destroyed:function(){clearInterval(this.inter)},computed:{SecondToDate:function(){var t=this.count;return null!=t&&""!=t&&(t=t>60&&t<3600?parseInt(t/60)+"分钟"+parseInt(60*(parseFloat(t/60)-parseInt(t/60)))+"秒":t>=3600&&t<86400?parseInt(t/3600)+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":t>=86400?parseInt(t/3600/24)+"天"+parseInt(24*(parseFloat(t/3600/24)-parseInt(t/3600/24)))+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":parseInt(t)+"秒"),t}},methods:{leaveTap:function(){var t=this;uni.showModal({title:"提示",content:"确定离开竞赛?未答题目按0分计算",success:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n.confirm&&t.$utils.msgBack("本次$examAlias成绩："+t.score);case 1:case"end":return e.stop()}}),e)})));function n(t){return e.apply(this,arguments)}return n}()})},itemCheckTap:function(t,e){if(0==this.item.type||2==this.item.type)for(var n=0;n<this.item.options.length;n++)this.item.options[n].checked=!1;if(this.item.options[e].checked=!t,1==this.item.type){for(var i=[],a=0;a<this.item.options.length;a++)this.item.options[a].checked&&i.push(this.item.options[a].code);this.answer=i.join(",")}1!=this.item.type&&(this.answer=this.item.options[e].code),console.log(t,e,this.answer)},submitTap:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(){var e,n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(3!=this.item.type||this.answer){t.next=3;break}return this.$utils.msg("请填写答案"),t.abrupt("return");case 3:return e=0,this.answer==this.item.answer&&(this.score=Number(this.score)+Number(this.item.score),e=this.item.score),n={userid:this.user.id,paperid:this.paper.id,papername:this.paper.name,questionid:this.item.id,questionname:this.item.questionname,options:JSON.stringify(this.item.options),score:this.item.score,answer:this.item.answer,analysis:this.item.analysis,myscore:e,myanswer:this.answer},t.next=8,this.$api.add("examrecord",n);case 8:this.isSubmit=!0,i=this,this.currentItem==this.list.length&&uni.showModal({title:"答题结束",content:"本次竞赛成绩："+i.score,showCancel:!1,success:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.confirm&&uni.navigateBack({delta:1});case 1:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()});case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),nextTap:function(){this.isSubmit=!1,this.currentItem=this.currentItem+1,this.item=this.list[this.currentItem-1],this.answer=""}}};e.default=s},"51a8":function(t,e,n){var i=n("a98e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("8f3f335c",i,!0,{sourceMap:!1,shadowMode:!1})},"94f8":function(t,e,n){"use strict";var i=n("51a8"),a=n.n(i);a.a},a98e:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.header-container[data-v-02ef4653]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#fff;border-bottom:%?1?% solid #eee;border-top:%?1?% solid #eee;padding:%?10?%}.header-container .left-container[data-v-02ef4653]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:%?10?%}.header-container .left-container .icon[data-v-02ef4653]{margin-right:%?10?%;width:%?40?%;height:%?40?%}.header-container .center-container[data-v-02ef4653]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center}.header-container .right-container[data-v-02ef4653]{margin:%?10?%}.exam-container[data-v-02ef4653]{background:#fff;margin:%?30?%;border-radius:%?20?%;padding:%?20?%}.exam-container .title-container[data-v-02ef4653]{padding:%?20?%}.exam-container .title-container .type[data-v-02ef4653]{background:#eee;padding:%?10?%;border-radius:%?10?%}.exam-container .title-container .title[data-v-02ef4653]{margin-left:%?20?%}.exam-container .answer-item[data-v-02ef4653]{margin:%?20?%}.exam-container .answer-item .text[data-v-02ef4653]{margin-left:%?20?%}.exam-container .tiankong-container[data-v-02ef4653]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:%?20?%}.exam-container .tiankong-container .answer[data-v-02ef4653]{border:%?1?% solid #eee;height:%?60?%;margin:0 %?20?%}.exam-container .btn-submit[data-v-02ef4653]{height:%?60?%;font-size:%?30?%;line-height:%?60?%;margin-top:%?60?%;border-radius:%?50?%}.exam-container .btn-next[data-v-02ef4653]{height:%?60?%;font-size:%?30?%;line-height:%?60?%;margin-top:%?60?%;border-radius:%?50?%}.tip-container[data-v-02ef4653]{margin-top:%?50?%;border-top:%?1?% solid #eee;padding:%?20?%}.tip-container .par[data-v-02ef4653]{margin-bottom:%?20?%}',""]),t.exports=e},fe12:function(t,e,n){"use strict";n.r(e);var i=n("4ed3"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a}}]);