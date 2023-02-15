"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[773],{773:function(t,e,r){r.r(e),r.d(e,{default:function(){return b}});var n=r(433),a=r(413),c=r(861),u=r(439),s=r(757),i=r.n(s),o=r(689),p=r(791),f=r(174),v=(r(462),r(306)),h=r(317),m="cast_list__-re0Y",d="cast_item__hhrDs",l="cast_pretitle__cVtSG",x="cast_image__bQqUU",g=r(934),w=r(184),b=function(){var t=(0,p.useState)({item:[],loader:!1}),e=(0,u.Z)(t,2),r=e[0],s=e[1],b=(0,p.useState)(!1),k=(0,u.Z)(b,2),_=k[0],Z=k[1],y=(0,o.UO)().movieId;(0,p.useEffect)((function(){if(_){var t=document.getElementById("cast");t&&t.scrollIntoView({block:"start",behavior:"smooth"})}}),[_]),(0,p.useEffect)((function(){var t=function(){var t=(0,c.Z)(i().mark((function t(){var e,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,s((function(t){return(0,a.Z)((0,a.Z)({},t),{},{loader:!0})})),t.next=4,(0,v.UK)(y);case 4:e=t.sent,r=e.cast,s((function(t){return{prevState:t,item:(0,n.Z)(r)}})),r.length?Z(!0):f.Am.warning("\nNo credits!"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),f.Am.error(" An error occurred. Go to the main page or repeat the request.");case 13:return t.prev=13,s((function(t){return(0,a.Z)((0,a.Z)({},t),{},{loader:!1})})),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})));return function(){return t.apply(this,arguments)}}();t()}),[y]);var j=r.item.map((function(t,e){var r=t.name,n=t.character,a=t.profile_path,c=a?"https://image.tmdb.org/t/p/w200/".concat(a):h;return(0,w.jsxs)("li",{className:d,children:[(0,w.jsx)("img",{src:c,alt:r,width:"120",className:x}),(0,w.jsxs)("p",{className:l,children:["Name: ",r]}),(0,w.jsxs)("p",{className:l,children:["Character: ",n]})]},e)}));return(0,w.jsxs)("div",{id:"cast",children:[r.loader&&(0,w.jsx)(g.Z,{}),(0,w.jsx)(f.Ix,{}),(0,w.jsx)("ul",{className:m,children:j})]})}},306:function(t,e,r){r.d(e,{LC:function(){return f},UK:function(){return p},eZ:function(){return i},k6:function(){return s},ro:function(){return o},xn:function(){return h}});var n=r(861),a=r(757),c=r.n(a),u=r(912).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"31449444226ba6345698313fe055564a"}}),s=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/trending/movie/day");case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(e));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n,a,s=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:1,t.next=3,u.get("/search/movie",{params:{query:e,page:r}});case 3:return n=t.sent,a=n.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(e,"/credits"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(e,"/reviews"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,n.Z)(c().mark((function t(e,r){var n,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(e,"/videos"),{params:{language:r}});case 2:return n=t.sent,a=n.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n,a,u,s;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=["uk-UA","ru-Ru","en-US"],n="",a=0;case 3:if(!(a<r.length)){t.next=14;break}return t.next=6,v(e,r[a]);case 6:if(u=t.sent,!(s=u.results).length){t.next=11;break}return n=s[0].key,t.abrupt("break",14);case 11:a++,t.next=3;break;case 14:return t.abrupt("return",n);case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},317:function(t,e,r){t.exports=r.p+"static/media/noavatar.b86c8161324e948f55d4.png"}}]);
//# sourceMappingURL=773.7646ae8b.chunk.js.map