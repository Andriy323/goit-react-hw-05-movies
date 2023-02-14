"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[825],{825:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var n=r(413),a=r(861),i=r(439),s=r(757),c=r.n(s),o=r(87),u=r(689),l=r(791),m=r(174),p=(r(462),r(526)),v=r(306),d={container:"movies-details_container__ZQ1+r",containerImage:"movies-details_containerImage__z+JCT",btnBack:"movies-details_btnBack__svJbg",title:"movies-details_title__9ufsc",image:"movies-details_image__VCMub",item:"movies-details_item__tvVvF",pretitle:"movies-details_pretitle__whvlN",link:"movies-details_link__U2UJO"},f=r(934),h=r(184),_=function(){var e,t=(0,l.useState)({item:{},loader:!1}),r=(0,i.Z)(t,2),s=r[0],_=r[1],x=(0,u.s0)(),g=(null===(e=(0,u.TH)().state)||void 0===e?void 0:e.from)||"/movies",k=(0,u.UO)().movieId;(0,l.useEffect)((function(){var e=function(){var e=(0,a.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,_((function(e){return(0,n.Z)((0,n.Z)({},e),{},{loader:!0})})),e.next=4,(0,v.eZ)(k);case 4:t=e.sent,_((function(e){return(0,n.Z)((0,n.Z)({},e),{},{item:(0,n.Z)({},t)})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),m.Am.error(" An error occurred. Go to the main page or repeat the request.");case 11:return e.prev=11,_((function(e){return(0,n.Z)((0,n.Z)({},e),{},{loader:!1})})),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[k]);var w=s.item,b=w.original_title,j=w.overview,Z=w.poster_path,N=w.vote_average,y=Z?"https://image.tmdb.org/t/p/original/".concat(Z):p;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(m.Ix,{}),s.loader&&(0,h.jsx)(f.Z,{}),(0,h.jsx)("button",{className:d.btnBack,onClick:function(){x(g)},children:"<== Back"}),(0,h.jsxs)("div",{className:d.containerImage,children:[(0,h.jsx)("img",{className:d.image,src:y,alt:b,width:"450"}),(0,h.jsxs)("div",{children:[(0,h.jsxs)("ul",{className:d.list,children:[(0,h.jsx)("li",{className:d.item,children:(0,h.jsx)("h1",{className:d.title,children:b})}),(0,h.jsx)("li",{className:d.item,children:(0,h.jsx)("p",{className:d.pretitle,children:j})}),(0,h.jsx)("li",{className:d.item,children:(0,h.jsxs)("p",{className:d.pretitle,children:["Rating: ",Number(N).toFixed(1)]})})]}),(0,h.jsx)(o.rU,{className:d.link,state:{from:g},to:"/movies/".concat(k,"/cast"),children:"Cast"}),(0,h.jsx)(o.rU,{className:d.link,state:{from:g},to:"/movies/".concat(k,"/reviews"),children:"Reviews"})]})]}),(0,h.jsx)(u.j3,{})]})},x=(0,l.memo)(_)},306:function(e,t,r){r.d(t,{LC:function(){return m},UK:function(){return l},eZ:function(){return o},k6:function(){return c},ro:function(){return u}});var n=r(861),a=r(757),i=r.n(a),s=r(912).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"31449444226ba6345698313fe055564a"}}),c=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/trending/movie/day");case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n,a,c=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>1&&void 0!==c[1]?c[1]:1,e.next=3,s.get("/search/movie",{params:{query:t,page:r}});case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},526:function(e,t,r){e.exports=r.p+"static/media/notImage.01a1732ec75dd89d00d1.jpg"}}]);
//# sourceMappingURL=825.6433816b.chunk.js.map