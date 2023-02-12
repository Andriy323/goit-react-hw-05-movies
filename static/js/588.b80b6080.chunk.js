"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[588],{588:function(e,t,r){r.r(t);var n=r(683),o=r(861),c=r(439),a=r(757),i=r.n(a),u=r(689),s=r(87),p=r(791),f=r(306),v=r(184);t.default=function(e){var t,r=e.itemRevievs,a=e.itemCast,l=(0,p.useState)({item:{},error:null,loading:!1}),d=(0,c.Z)(l,2),h=d[0],m=d[1];console.log(h);var b=(0,u.s0)(),O=(0,u.TH)();console.log(O,"----------");var w=(null===(t=O.state)||void 0===t?void 0:t.from)||"/movies",g=(0,u.UO)().movieId;(0,p.useEffect)((function(){var e=function(){var e=(0,o.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.eZ)(g);case 3:t=e.sent,m((function(e){return(0,n.Z)((0,n.Z)({},e),{},{item:(0,n.Z)({},t)})})),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[g]);var _=h.item,x=_.original_title,j=_.overview,y=_.popularity,S=_.poster_path;return(0,v.jsxs)("div",{children:[(0,v.jsx)("button",{onClick:function(){b(w)},children:"Back"}),(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:(0,v.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(S),alt:x})}),(0,v.jsxs)("li",{children:["Name:",x]}),(0,v.jsxs)("li",{children:["Title: ",j]}),(0,v.jsxs)("li",{children:["Popularity: ",y]})]}),(0,v.jsx)(s.rU,{state:{from:w},to:"/movies/".concat(g,"/cast"),children:(0,v.jsx)("button",{children:"Cast"})}),(0,v.jsx)(s.rU,{state:{from:w},to:"/movies/".concat(g,"/reviews"),children:(0,v.jsx)("button",{children:"Reviews"})}),r,a]})}},306:function(e,t,r){r.d(t,{LC:function(){return l},UK:function(){return v},eZ:function(){return p},k6:function(){return s},ro:function(){return f}});var n=r(861),o=r(757),c=r.n(o),a=r(912),i={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.API_KEY;console.log({NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.API_KEY);var u=a.Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:i}}),s=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/trending/movie/day",{params:{page:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,o,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:1,e.next=3,u.get("/search/movie",{params:{query:t,page:r}});case 3:return n=e.sent,o=n.data,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},683:function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=588.b80b6080.chunk.js.map