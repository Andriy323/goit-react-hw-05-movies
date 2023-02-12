"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[875,588],{875:function(e,t,r){r.r(t);var n=r(433),a=r(861),c=r(439),o=r(757),i=r.n(o),u=r(689),s=r(791),p=r(306),f=r(588),l=r(184);t.default=function(){var e=(0,s.useState)({item:[],loader:!1,error:null}),t=(0,c.Z)(e,2),r=t[0],o=t[1],v=(0,u.UO)().movieId;console.log(v),(0,s.useEffect)((function(){var e=function(){var e=(0,a.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.UK)(v);case 3:t=e.sent,r=t.cast,console.log(r,"----------"),o((function(e){return{prevState:e,item:(0,n.Z)(r)}})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[v]);var d=r.item.map((function(e,t){var r=e.name,n=e.character,a=e.profile_path;return(0,l.jsxs)("li",{children:[(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(a),alt:r}),(0,l.jsxs)("p",{children:["Name: ",r]}),(0,l.jsxs)("p",{children:["Character: ",n]})]},t)}));return(0,l.jsx)("div",{children:(0,l.jsx)(f.default,{itemCast:d})})}},588:function(e,t,r){r.r(t);var n=r(683),a=r(861),c=r(439),o=r(757),i=r.n(o),u=r(689),s=r(87),p=r(791),f=r(306),l=r(184);t.default=function(e){var t,r=e.itemRevievs,o=e.itemCast,v=(0,p.useState)({item:{},error:null,loading:!1}),d=(0,c.Z)(v,2),m=d[0],h=d[1];console.log(m);var b=(0,u.s0)(),g=(0,u.TH)();console.log(g,"----------");var x=(null===(t=g.state)||void 0===t?void 0:t.from)||"/movies",w=(0,u.UO)().movieId;(0,p.useEffect)((function(){var e=function(){var e=(0,a.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.eZ)(w);case 3:t=e.sent,h((function(e){return(0,n.Z)((0,n.Z)({},e),{},{item:(0,n.Z)({},t)})})),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[w]);var O=m.item,j=O.original_title,_=O.overview,y=O.popularity,S=O.poster_path;return(0,l.jsxs)("div",{children:[(0,l.jsx)("button",{onClick:function(){b(x)},children:"Back"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(S),alt:j})}),(0,l.jsxs)("li",{children:["Name:",j]}),(0,l.jsxs)("li",{children:["Title: ",_]}),(0,l.jsxs)("li",{children:["Popularity: ",y]})]}),(0,l.jsx)(s.rU,{state:{from:x},to:"/movies/".concat(w,"/cast"),children:(0,l.jsx)("button",{children:"Cast"})}),(0,l.jsx)(s.rU,{state:{from:x},to:"/movies/".concat(w,"/reviews"),children:(0,l.jsx)("button",{children:"Reviews"})}),r,o]})}},306:function(e,t,r){r.d(t,{LC:function(){return v},UK:function(){return l},eZ:function(){return p},k6:function(){return s},ro:function(){return f}});var n=r(861),a=r(757),c=r.n(a),o=r(912),i={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.API_KEY;console.log({NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.API_KEY);var u=o.Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:i}}),s=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/trending/movie/day",{params:{page:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a,o=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>1&&void 0!==o[1]?o[1]:1,e.next=3,u.get("/search/movie",{params:{query:t,page:r}});case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},683:function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=875.7125791d.chunk.js.map