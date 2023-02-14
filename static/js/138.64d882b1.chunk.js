"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[138],{775:function(e,r,t){t.d(r,{Z:function(){return i}});var n=t(87),a=t(526),s={list:"render-flms_list__wYqK8",items:"render-flms_items__J5xGQ",link:"render-flms_link__IjNs3",imgContainer:"render-flms_imgContainer__VK2Wy",image:"render-flms_image__I969H",maskOne:"render-flms_maskOne__kMvb7",maskOneFrame:"render-flms_maskOneFrame__QjevC",title:"render-flms_title__ANpIN",pretitle:"render-flms_pretitle__yQLdj"},c=t(184),u=function(e){var r=e.items,t=e.location,u=r.map((function(e,r){var u=e.id,i=e.title,o=e.poster_path,f=e.adult,l=e.release_date,p=o?"https://image.tmdb.org/t/p/w200/".concat(o):a;return(0,c.jsx)("li",{className:s.items,children:(0,c.jsxs)(n.rU,{state:{from:t},className:s.link,to:"/movies/".concat(u),children:[(0,c.jsx)("div",{className:s.imgContainer+" "+s.maskOne+" "+s.maskOneFrame,children:(0,c.jsx)("img",{className:s.image,src:p,alt:i})}),(0,c.jsxs)("div",{children:[(0,c.jsx)("h1",{className:s.title,children:i}),f&&(0,c.jsx)("p",{className:s.pretitle,children:"+18"}),(0,c.jsx)("p",{className:s.pretitle,children:l})]})]})},r)}));return(0,c.jsx)("div",{className:s.container,children:(0,c.jsx)("ul",{className:s.list,children:u})})},i=u;u.defaultProps={items:[]}},138:function(e,r,t){t.r(r),t.d(r,{default:function(){return g}});var n=t(433),a=t(861),s=t(439),c=t(757),u=t.n(c),i=t(87),o=t(689),f=t(791),l=t(934),p="form-search_formContainer__2xfmJ",m="form-search_btn__x0StP",d="form-search_search__4ioCv",v=t(184),h=function(e){var r=e.onHangleSubmit,t=(0,f.useState)(""),n=(0,s.Z)(t,2),a=n[0],c=n[1];return(0,v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r(a),c("")},className:p,children:[(0,v.jsx)("label",{htmlFor:""}),(0,v.jsx)("input",{className:d,type:"text",placeholder:"Search",onChange:function(e){c(e.target.value)},value:a}),(0,v.jsx)("button",{className:m,children:"Search"})]})},_=t(775),x=t(306),g=function(){var e=(0,f.useState)([]),r=(0,s.Z)(e,2),t=r[0],c=r[1],p=(0,i.lr)(),m=(0,s.Z)(p,2),d=m[0],g=m[1],k=(0,f.useState)(!1),b=(0,s.Z)(k,2),w=b[0],j=b[1],Z=d.get("search"),y=(0,o.TH)();(0,f.useEffect)((function(){if(Z){var e=function(){var e=(0,a.Z)(u().mark((function e(){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j((function(e){return!e})),e.next=4,(0,x.ro)(Z);case 4:r=e.sent,t=r.results,c((0,n.Z)(t)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:return e.prev=12,j((function(e){return!e})),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}}),[Z]);return(0,v.jsxs)("div",{children:[w&&(0,v.jsx)(l.Z,{}),(0,v.jsx)(h,{onHangleSubmit:function(e){g({search:e})}}),(0,v.jsx)(_.Z,{items:t,location:y})]})}},306:function(e,r,t){t.d(r,{LC:function(){return l},UK:function(){return f},eZ:function(){return i},k6:function(){return u},ro:function(){return o},xn:function(){return m}});var n=t(861),a=t(757),s=t.n(a),c=t(912).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"31449444226ba6345698313fe055564a"}}),u=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/trending/movie/day");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n,a,u=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>1&&void 0!==u[1]?u[1]:1,e.next=3,c.get("/search/movie",{params:{query:r,page:t}});case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/credits"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/reviews"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(r,t){var n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/videos"),{params:{language:t}});case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),m=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n,a,c,u;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=["uk-UA","ru-Ru","en-US"],n="",a=0;case 3:if(!(a<t.length)){e.next=15;break}return e.next=6,p(r,t[a]);case 6:if(c=e.sent,u=c.results,console.log(u),!u.length){e.next=12;break}return n=u[0].key,e.abrupt("break",15);case 12:a++,e.next=3;break;case 15:return e.abrupt("return",n);case 16:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},526:function(e,r,t){e.exports=t.p+"static/media/notImage.01a1732ec75dd89d00d1.jpg"}}]);
//# sourceMappingURL=138.64d882b1.chunk.js.map