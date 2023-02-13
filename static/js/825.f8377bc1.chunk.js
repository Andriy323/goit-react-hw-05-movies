"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[825],{825:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var n=r(683),a=r(861),i=r(439),c=r(757),s=r.n(c),o=r(87),u=r(689),l=r(791),p=r(306),f={container:"movies-details_container__ZQ1+r",containerImage:"movies-details_containerImage__z+JCT",btnBack:"movies-details_btnBack__svJbg",title:"movies-details_title__9ufsc",image:"movies-details_image__VCMub",item:"movies-details_item__tvVvF",pretitle:"movies-details_pretitle__whvlN",link:"movies-details_link__U2UJO"},m=r(184),v=function(){var e,t=(0,l.useState)({item:{},error:null}),r=(0,i.Z)(t,2),c=r[0],v=r[1],d=(0,u.s0)(),h=(null===(e=(0,u.TH)().state)||void 0===e?void 0:e.from)||"/movies",b=(0,u.UO)().movieId;(0,l.useEffect)((function(){var e=function(){var e=(0,a.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.eZ)(b);case 3:t=e.sent,v((function(e){return(0,n.Z)((0,n.Z)({},e),{},{item:(0,n.Z)({},t)})})),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[b]);var _=c.item,g=_.original_title,x=_.overview,j=_.poster_path,w=_.vote_average;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("button",{className:f.btnBack,onClick:function(){d(h)},children:"<== Back"}),(0,m.jsxs)("div",{className:f.containerImage,children:[j&&(0,m.jsx)("img",{className:f.image,src:"https://image.tmdb.org/t/p/original".concat(j),alt:g}),(0,m.jsxs)("div",{children:[(0,m.jsxs)("ul",{className:f.list,children:[(0,m.jsx)("li",{className:f.item,children:(0,m.jsx)("h1",{className:f.title,children:g})}),(0,m.jsx)("li",{className:f.item,children:(0,m.jsx)("p",{className:f.pretitle,children:x})}),(0,m.jsx)("li",{className:f.item,children:(0,m.jsxs)("p",{className:f.pretitle,children:["Rating: ",Number(w).toFixed(1)]})})]}),(0,m.jsx)(o.rU,{className:f.link,state:{from:h},to:"/movies/".concat(b,"/cast"),children:"Cast"}),(0,m.jsx)(o.rU,{className:f.link,state:{from:h},to:"/movies/".concat(b,"/reviews"),children:"Reviews"})]})]}),(0,m.jsx)(u.j3,{})]})},d=(0,l.memo)(v)},306:function(e,t,r){r.d(t,{LC:function(){return p},UK:function(){return l},eZ:function(){return o},k6:function(){return s},ro:function(){return u}});var n=r(861),a=r(757),i=r.n(a),c=r(912).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"31449444226ba6345698313fe055564a"}}),s=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/trending/movie/day");case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n,a,s=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:1,e.next=3,c.get("/search/movie",{params:{query:t,page:r}});case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},683:function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,{Z:function(){return i}})}}]);
//# sourceMappingURL=825.f8377bc1.chunk.js.map