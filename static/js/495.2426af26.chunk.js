"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[495,588],{588:function(e,t,r){r.r(t);var n=r(683),a=r(861),c=r(439),u=r(757),i=r.n(u),o=r(689),s=r(87),p=r(791),f=r(306),l=r(184);t.default=function(e){var t,r=e.itemRevievs,u=e.itemCast,v=(0,p.useState)({item:{},error:null,loading:!1}),d=(0,c.Z)(v,2),h=d[0],m=d[1];console.log(h);var b=(0,o.s0)(),x=(0,o.TH)();console.log(x,"----------");var w=(null===(t=x.state)||void 0===t?void 0:t.from)||"/movies",j=(0,o.UO)().movieId;(0,p.useEffect)((function(){var e=function(){var e=(0,a.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.eZ)(j);case 3:t=e.sent,m((function(e){return(0,n.Z)((0,n.Z)({},e),{},{item:(0,n.Z)({},t)})})),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[j]);var g=h.item,y=g.original_title,k=g.overview,O=g.popularity,Z=g.poster_path;return(0,l.jsxs)("div",{children:[(0,l.jsx)("button",{onClick:function(){b(w)},children:"Back"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(Z),alt:y})}),(0,l.jsxs)("li",{children:["Name:",y]}),(0,l.jsxs)("li",{children:["Title: ",k]}),(0,l.jsxs)("li",{children:["Popularity: ",O]})]}),(0,l.jsx)(s.rU,{state:{from:w},to:"/movies/".concat(j,"/cast"),children:(0,l.jsx)("button",{children:"Cast"})}),(0,l.jsx)(s.rU,{state:{from:w},to:"/movies/".concat(j,"/reviews"),children:(0,l.jsx)("button",{children:"Reviews"})}),r,u]})}},495:function(e,t,r){r.r(t);var n=r(433),a=r(861),c=r(439),u=r(757),i=r.n(u),o=r(689),s=r(791),p=r(306),f=r(588),l=r(184);t.default=function(){var e=(0,s.useState)({data:[],loader:!1,error:null}),t=(0,c.Z)(e,2),r=t[0],u=t[1],v=(0,o.UO)().movieId;(0,s.useEffect)((function(){var e=function(){var e=(0,a.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.LC)(v);case 3:t=e.sent,r=t.results,console.log(r),u((function(e){return{prevState:e,data:(0,n.Z)(r)}})),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[v]);var d=r.data.map((function(e,t){var r=e.content,n=e.author;return(0,l.jsxs)("li",{children:[(0,l.jsxs)("h2",{children:["Name: ",n]}),(0,l.jsxs)("p",{children:["Content: ",r]})]},t)}));return(0,l.jsx)("div",{children:(0,l.jsx)(f.default,{itemRevievs:d})})}},306:function(e,t,r){r.d(t,{LC:function(){return f},UK:function(){return p},eZ:function(){return o},k6:function(){return i},ro:function(){return s}});var n=r(861),a=r(757),c=r.n(a),u=r(912).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"31449444226ba6345698313fe055564a"}}),i=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/trending/movie/day",{params:{page:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a,i=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:1,e.next=3,u.get("/search/movie",{params:{query:t,page:r}});case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},683:function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=495.2426af26.chunk.js.map