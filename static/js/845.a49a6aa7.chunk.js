"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[845],{845:function(e,r,t){t.r(r),t.d(r,{default:function(){return w}});var n=t(433),a=t(861),u=t(439),c=t(757),s=t.n(c),i=t(689),o=t(791),p=t(174),f=(t(462),t(306)),v="reviews_list__zgFfV",d="reviews_item__yqVN2",h="reviews_title__r-jPj",l="reviews_pretitle__6JtpS",m=t(184),w=function(){var e=(0,o.useState)({data:[],loader:!1}),r=(0,u.Z)(e,2),t=r[0],c=r[1],w=(0,i.UO)().movieId;(0,o.useEffect)((function(){var e=function(){var e=(0,a.Z)(s().mark((function e(){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.LC)(w);case 3:r=e.sent,(t=r.results).length||p.Am.warning("\nNo reviews!"),c((function(e){return{prevState:e,data:(0,n.Z)(t)}})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),p.Am.error(" An error occurred. Go to the main page or repeat the request.");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[w]);var _=t.data.map((function(e,r){var t=e.content,n=e.author,a=e.created_at;return(0,m.jsxs)("li",{className:d,children:[(0,m.jsxs)("h2",{className:h,children:["Author: ",n," created ",new Date(a).toDateString()," "]}),(0,m.jsx)("p",{className:l,children:t})]},r)}));return(0,m.jsxs)("div",{children:[(0,m.jsx)(p.Ix,{}),(0,m.jsx)("ul",{className:v,children:_})]})}},306:function(e,r,t){t.d(r,{LC:function(){return f},UK:function(){return p},eZ:function(){return i},k6:function(){return s},ro:function(){return o}});var n=t(861),a=t(757),u=t.n(a),c=t(912).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"31449444226ba6345698313fe055564a"}}),s=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/trending/movie/day");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n,a,s=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>1&&void 0!==s[1]?s[1]:1,e.next=3,c.get("/search/movie",{params:{query:r,page:t}});case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/credits"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/reviews"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=845.a49a6aa7.chunk.js.map