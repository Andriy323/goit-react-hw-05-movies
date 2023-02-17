"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[138],{775:function(e,r,n){n.d(r,{Z:function(){return i}});var t=n(87),a=n(526),s={list:"render-flms_list__wYqK8",items:"render-flms_items__J5xGQ",link:"render-flms_link__IjNs3",imgContainer:"render-flms_imgContainer__VK2Wy",image:"render-flms_image__I969H",maskOne:"render-flms_maskOne__kMvb7",maskOneFrame:"render-flms_maskOneFrame__QjevC",title:"render-flms_title__ANpIN",pretitle:"render-flms_pretitle__yQLdj"},u=n(184),c=function(e){var r=e.items,n=e.location,c=r.map((function(e,r){var c=e.id,i=e.title,o=e.poster_path,f=e.adult,l=e.release_date,p=o?"https://image.tmdb.org/t/p/w200/".concat(o):a;return(0,u.jsx)("li",{className:s.items,children:(0,u.jsxs)(t.rU,{state:{from:n},className:s.link,to:"/movies/".concat(c),children:[(0,u.jsx)("div",{className:s.imgContainer+" "+s.maskOne+" "+s.maskOneFrame,children:(0,u.jsx)("img",{className:s.image,src:p,alt:i})}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h1",{className:s.title,children:i}),f&&(0,u.jsx)("p",{className:s.pretitle,children:"+18"}),(0,u.jsx)("p",{className:s.pretitle,children:l})]})]})},r)}));return(0,u.jsx)("div",{className:s.container,children:(0,u.jsx)("ul",{className:s.list,children:c})})},i=c;c.defaultProps={items:[]}},138:function(e,r,n){n.r(r),n.d(r,{default:function(){return g}});var t=n(433),a=n(861),s=n(439),u=n(757),c=n.n(u),i=n(87),o=n(689),f=n(791),l=n(934),p="form-search_formContainer__2xfmJ",m="form-search_btn__x0StP",d="form-search_search__4ioCv",v=n(184),h=function(e){var r=e.onHangleSubmit,n=(0,f.useState)(""),t=(0,s.Z)(n,2),a=t[0],u=t[1];return(0,v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r(a),u("")},className:p,children:[(0,v.jsx)("label",{htmlFor:""}),(0,v.jsx)("input",{className:d,type:"text",placeholder:"Search",onChange:function(e){u(e.target.value)},value:a}),(0,v.jsx)("button",{className:m,children:"Search"})]})},_=n(775),x=n(306),g=function(){var e=(0,f.useState)([]),r=(0,s.Z)(e,2),n=r[0],u=r[1],p=(0,i.lr)(),m=(0,s.Z)(p,2),d=m[0],g=m[1],k=(0,f.useState)(!1),w=(0,s.Z)(k,2),b=w[0],j=w[1],Z=d.get("search"),y=(0,o.TH)();(0,f.useEffect)((function(){if(Z){var e=function(){var e=(0,a.Z)(c().mark((function e(){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j((function(e){return!e})),e.next=4,(0,x.ro)(Z);case 4:r=e.sent,n=r.results,u((0,t.Z)(n)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:return e.prev=12,j((function(e){return!e})),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}}),[Z]);return(0,v.jsxs)("div",{children:[b&&(0,v.jsx)(l.Z,{}),(0,v.jsx)(h,{onHangleSubmit:function(e){g({search:e})}}),(0,v.jsx)(_.Z,{items:n,location:y})]})}},306:function(e,r,n){n.d(r,{E$:function(){return o},LC:function(){return p},UK:function(){return l},k6:function(){return c},ro:function(){return f},xn:function(){return d}});var t=n(861),a=n(757),s=n.n(a),u=n(912).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"31449444226ba6345698313fe055564a"}}),c=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/trending/movie/day");case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),i=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t,a,c=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:"en-US",e.next=3,u.get("/movie/".concat(r),{params:{language:n}});case 3:return t=e.sent,a=t.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t,a,u;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i(r,"uk-UA"),t=i(r,"ru-Ru"),a=i(r,"en-US"),u=Promise.all([n,t,a]).then((function(e){return e.find((function(e){return e.overview}))})).catch((function(e){return console.log(e)})),e.abrupt("return",u);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t,a,c=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:1,e.next=3,u.get("/search/movie",{params:{query:r,page:n}});case 3:return t=e.sent,a=t.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(r,"/credits"));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(r,"/reviews"));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),m=function(){var e=(0,t.Z)(s().mark((function e(r,n){var t,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(r,"/videos"),{params:{language:n}});case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t,a,u;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=m(r,"uk-UA"),t=m(r,"ru-Ru"),a=m(r,"en-US"),u=Promise.all([n,t,a]).then((function(e){var r=e.find((function(e){return e.results.length>0}));return r?r.results[0].key:""})).catch((function(e){return console.log(e,"error")})),e.abrupt("return",u);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},526:function(e,r,n){e.exports=n.p+"static/media/notImage.01a1732ec75dd89d00d1.jpg"}}]);
//# sourceMappingURL=138.d5eb690d.chunk.js.map