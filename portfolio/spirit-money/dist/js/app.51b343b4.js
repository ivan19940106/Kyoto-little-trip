(function(e){function n(n){for(var i,o,c=n[0],s=n[1],d=n[2],m=0,u=[];m<c.length;m++)o=c[m],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&u.push(a[o][0]),a[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);p&&p(n);while(u.length)u.shift()();return r.push.apply(r,d||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],i=!0,c=1;c<t.length;c++){var s=t[c];0!==a[s]&&(i=!1)}i&&(r.splice(n--,1),e=o(o.s=t[0]))}return e}var i={},a={app:0},r=[];function o(n){if(i[n])return i[n].exports;var t=i[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=i,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)o.d(t,i,function(n){return e[n]}.bind(null,i));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=n,c=c.slice();for(var d=0;d<c.length;d++)n(c[d]);var p=s;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"1e10":function(e,n,t){e.exports=t.p+"img/mothergod.ebfbec9c.png"},4669:function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var i=t("7a23"),a=t("1e10"),r=t.n(a),o=Object(i["o"])("data-v-01c9ee9c");Object(i["i"])("data-v-01c9ee9c");var c=Object(i["e"])("img",{class:"mothergod",alt:"Vue logo",src:r.a},null,-1);Object(i["h"])();var s=o((function(e,n,t,a,r,o){var s=Object(i["l"])("HelloWorld");return Object(i["g"])(),Object(i["c"])(i["a"],null,[c,Object(i["e"])(s,{msg:"金紙備忘錄"})],64)})),d=(t("b0c0"),Object(i["o"])("data-v-404e1c98"));Object(i["i"])("data-v-404e1c98");var p={class:"hello"},m=Object(i["e"])("p",null,[Object(i["d"])(" 燒金紙一定有順序，不同神明有金有銀，"),Object(i["e"])("br"),Object(i["d"])(" 燃燒前應詳閱 "),Object(i["e"])("a",{href:"https://paipai.blog",target:"_blank",rel:"noopener"},"拜拜基本款 ─ pài-pài"),Object(i["d"])(" 與金紙備忘錄。 ")],-1),u={class:"card-wrapper"},l={class:"money-title"},f={class:"money-container"};Object(i["h"])();var g=d((function(e,n,t,a,r,o){var c=Object(i["l"])("spiritMoney");return Object(i["g"])(),Object(i["c"])("div",p,[Object(i["e"])("h1",null,Object(i["m"])(t.msg),1),m,(Object(i["g"])(!0),Object(i["c"])(i["a"],null,Object(i["k"])(r.gods,(function(e,n){return Object(i["g"])(),Object(i["c"])("div",{class:"god-container",key:e},[Object(i["e"])("h3",null,Object(i["m"])(e["name"]),1),Object(i["e"])("ul",u,[(Object(i["g"])(!0),Object(i["c"])(i["a"],null,Object(i["k"])(e["moneyInfo"],(function(e,t){return Object(i["g"])(),Object(i["c"])("li",{class:"card",key:e},[Object(i["e"])("h4",l,Object(i["m"])(e.moneyName),1),Object(i["e"])("div",f,[Object(i["e"])(c,{mtype:e.moneyType,gindex:n,mindex:t},null,8,["mtype","gindex","mindex"])])])})),128))])])})),128))])})),b=Object(i["o"])("data-v-35874e15");Object(i["i"])("data-v-35874e15");var y=Object(i["e"])("div",{class:"image"},null,-1);Object(i["h"])();var h=b((function(e,n,t,a,r,o){return Object(i["g"])(!0),Object(i["c"])(i["a"],null,Object(i["k"])(r.pages,(function(e){return Object(i["g"])(),Object(i["c"])("div",{class:"spirit-money",key:e,onClick:n[1]||(n[1]=function(){return o.fade&&o.fade.apply(o,arguments)})},[y])})),128)})),j=(t("7db0"),t("a9e3"),t("1157")),k=t.n(j),O={name:"spiritMoney",props:{mtype:String,mindex:Number,gindex:Number},data:function(){return{pages:10,daibyaku:{name:"大百壽金",size:{width:"100px",height:"250px"},image:{"background-image":"url(../assets/images/jukin.jpg)",border:"8px solid #D1104C"}},jukin:{name:"壽金",size:{width:"200px",height:"150px"},image:{"background-image":"url(/img/jukin.eb070586.jpg)",border:"15px solid #D1104C"}},karikin:{name:"刈金",size:{width:"180px",height:"135px"},image:{"background-image":"radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%), radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #9f7928 62.5%, #8A6E2F 100%);",border:"15px solid #FF8C00"}},fukukin:{name:"福金",size:{width:"150px",height:"112.5px"},image:{"background-image":"radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%), radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #9f7928 62.5%, #8A6E2F 100%);",border:"15px solid #FF8C00"}},daigin:{name:"大銀紙",size:{width:"180px",height:"135px"},image:{"background-image":"radial-gradient(ellipse farthest-corner at right bottom, #D3D3D3 0%, #C0C0C0 8%, #A9A9A9 30%, #9c9c9c 40%, transparent 80%), radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #D3D3D3 8%, #C0C0C0 25%, #A9A9A9 62.5%, #9c9c9c 100%);",border:"15px solid #FF8C00"}},kogin:{name:"小銀紙",size:{width:"150px",height:"112.5px"},image:{"background-image":"radial-gradient(ellipse farthest-corner at right bottom, #D3D3D3 0%, #C0C0C0 8%, #A9A9A9 30%, #9c9c9c 40%, transparent 80%), radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #D3D3D3 8%, #C0C0C0 25%, #A9A9A9 62.5%, #9c9c9c 100%);",border:"15px solid #FF8C00"}}}},methods:{fade:function(){var e=0;k()(".spirit-money").click((function(){e>=this.pages-1?e=this.pages-1:(k()(this).eq(e).fadeOut(),e++)}))}},mounted:function(){for(var e=0;e<this.pages;e++)for(var n=325/2.3-2*e,t=200-2*e,i=-1*e,a=0;a<k()(".money-container").length;a++)k()(".money-container").eq(a).find(".spirit-money").eq(e).css({top:n+"px",width:t+"px","z-index":this.pages+i});var r=this.mtype,o=this.gindex,c=this.mindex;switch(r){case"daibyaku":for(var s=0;s<this.pages;s++)k()(".card-wrapper").eq(o).find(".money-container").eq(c).find(".image").eq(s).css(this.daibyaku.image),k()(".card-wrapper").eq(o).find(".money-container").eq(c).find(".spirit-money").eq(s).css(this.daibyaku.size);break;case"jukin":for(s=0;s<this.pages;s++)k()(".card-wrapper").eq(o).find(".money-container").eq(c).find(".image").eq(s).css(this.jukin.image),k()(".card-wrapper").eq(o).find(".money-container").eq(c).find(".spirit-money").eq(s).css(this.jukin.size);break;case"karikin":for(s=0;s<this.pages;s++)k()(".card-wrapper").eq(o).find(".money-container").eq(c).find(".image").eq(s).css(this.karikin.image),console.log(this.karikin.image),k()(".card-wrapper").eq(o).find(".money-container").eq(c).find(".spirit-money").eq(s).css(this.karikin.size);break;case"fukukin":for(s=0;s<this.pages;s++)k()(".card-wrapper").eq(o).find(".money-container").eq(c).find(".image").eq(s).css(this.fukukin.image),k()(".card-wrapper").eq(o).find(".money-container").eq(c).find(".spirit-money").eq(s).css(this.fukukin.size);break;case"daigin":for(s=0;s<this.pages;s++)k()(".card-wrapper").eq(o).find(".money-container").eq(c).find(".image").eq(s).css(this.daigin.image),k()(".card-wrapper").eq(o).find(".money-container").eq(c).find(".spirit-money").eq(s).css(this.daigin.size);break;case"kogin":for(s=0;s<this.pages;s++)k()(".card-wrapper").eq(o).find(".money-container").eq(c).find(".image").eq(s).css(this.kogin.image),k()(".card-wrapper").eq(o).find(".money-container").eq(c).find(".spirit-money").eq(s).css(this.kogin.size);break}}};t("a18c");O.render=h,O.__scopeId="data-v-35874e15";var F=O,v={name:"HelloWorld",components:{spiritMoney:F},props:{msg:String},data:function(){return{gods:[{name:"神明",moneyInfo:[{moneyType:"daibyaku",moneyName:"大百壽金"},{moneyType:"jukin",moneyName:"壽金"},{moneyType:"karikin",moneyName:"刈金"},{moneyType:"fukukin",moneyName:"福金"}]},{name:"公媽",moneyInfo:[{moneyType:"karikin",moneyName:"刈金"},{moneyType:"daigin",moneyName:"大銀紙"},{moneyType:"kogin",moneyName:"小銀紙"}]},{name:"地基主",moneyInfo:[{moneyType:"karikin",moneyName:"刈金"},{moneyType:"daigin",moneyName:"大銀紙"},{moneyType:"kogin",moneyName:"小銀紙"}]}]}}};t("b310");v.render=g,v.__scopeId="data-v-404e1c98";var q=v,x={name:"App",components:{HelloWorld:q}};t("6dbb"),t("8425");x.render=s,x.__scopeId="data-v-01c9ee9c";var w=x,C=t("5502"),D=Object(C["a"])({state:{},mutations:{},actions:{},modules:{}});Object(i["b"])(w).use(D).mount("#app")},"6dbb":function(e,n,t){"use strict";t("8196")},8196:function(e,n,t){},8425:function(e,n,t){"use strict";t("8e95")},"8e95":function(e,n,t){},a18c:function(e,n,t){"use strict";t("4669")},b310:function(e,n,t){"use strict";t("bcc1")},bcc1:function(e,n,t){}});
//# sourceMappingURL=app.51b343b4.js.map