"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[138],{775:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(87),a=r(526),s={list:"render-flms_list__wYqK8",items:"render-flms_items__J5xGQ",link:"render-flms_link__IjNs3",imgContainer:"render-flms_imgContainer__VK2Wy",image:"render-flms_image__I969H",maskOne:"render-flms_maskOne__kMvb7",maskOneFrame:"render-flms_maskOneFrame__QjevC",title:"render-flms_title__ANpIN",pretitle:"render-flms_pretitle__yQLdj"},c=r(184),i=function(e){var t=e.items,r=e.location,i=t.map((function(e,t){var i=e.id,u=e.title,o=e.poster_path,l=e.adult,m=e.release_date,f=o?"https://image.tmdb.org/t/p/w200/".concat(o):a;return(0,c.jsx)("li",{className:s.items,children:(0,c.jsxs)(n.rU,{state:{from:r},className:s.link,to:"/movies/".concat(i),children:[(0,c.jsx)("div",{className:s.imgContainer+" "+s.maskOne+" "+s.maskOneFrame,children:(0,c.jsx)("img",{className:s.image,src:f,alt:u})}),(0,c.jsxs)("div",{children:[(0,c.jsx)("h1",{className:s.title,children:u}),l&&(0,c.jsx)("p",{className:s.pretitle,children:"+18"}),(0,c.jsx)("p",{className:s.pretitle,children:m})]})]})},t)}));return(0,c.jsx)("div",{className:s.container,children:(0,c.jsx)("ul",{className:s.list,children:i})})},u=i;i.defaultProps={items:[]}},138:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var n=r(433),a=r(861),s=r(439),c=r(757),i=r.n(c),u=r(87),o=r(689),l=r(791),m="form-search_formContainer__2xfmJ",f="form-search_btn__x0StP",p="form-search_search__4ioCv",d=r(184),v=function(e){var t=e.onHangleSubmit,r=(0,l.useState)(""),n=(0,s.Z)(r,2),a=n[0],c=n[1];return(0,d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(a),c("")},className:m,children:[(0,d.jsx)("label",{htmlFor:""}),(0,d.jsx)("input",{className:p,type:"text",placeholder:"Search",onChange:function(e){c(e.target.value)},value:a}),(0,d.jsx)("button",{className:f,children:"Search"})]})},h=r(775),_=r(306),x=function(){var e=(0,l.useState)([]),t=(0,s.Z)(e,2),r=t[0],c=t[1],m=(0,u.lr)(),f=(0,s.Z)(m,2),p=f[0],x=f[1],g=p.get("search");console.log(g,"namee");var k=(0,o.TH)();(0,l.useEffect)((function(){if(g){var e=function(){var e=(0,a.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,_.ro)(g);case 3:t=e.sent,r=t.results,c((0,n.Z)(r)),console.log(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}}),[g]);return(0,d.jsxs)("div",{children:[(0,d.jsx)(v,{onHangleSubmit:function(e){console.log(e,"father"),x({search:e})}}),(0,d.jsx)(h.Z,{items:r,location:k})]})}},306:function(e,t,r){r.d(t,{LC:function(){return m},UK:function(){return l},eZ:function(){return u},k6:function(){return i},ro:function(){return o}});var n=r(861),a=r(757),s=r.n(a),c=r(912).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"31449444226ba6345698313fe055564a"}}),i=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/trending/movie/day");case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n,a,i=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:1,e.next=3,c.get("/search/movie",{params:{query:t,page:r}});case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},526:function(e,t,r){e.exports=r.p+"static/media/notImage.01a1732ec75dd89d00d1.jpg"}}]);
//# sourceMappingURL=138.b951abc1.chunk.js.map