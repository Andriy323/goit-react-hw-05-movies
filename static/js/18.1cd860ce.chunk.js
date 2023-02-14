/*! For license information please see 18.1cd860ce.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[18],{18:function(e,t,r){r.r(t),r.d(t,{default:function(){return _}});var n=r(413),a=r(861),i=r(439),s=r(757),l=r.n(s),o=r(87),c=r(689),u=r(791),p=r(174),f=(r(462),r(526)),d=r(306),m={container:"movies-details_container__ZQ1+r",containerImage:"movies-details_containerImage__z+JCT",btnBack:"movies-details_btnBack__svJbg",title:"movies-details_title__9ufsc",image:"movies-details_image__VCMub",item:"movies-details_item__tvVvF",pretitle:"movies-details_pretitle__whvlN",link:"movies-details_link__U2UJO"},v=r(934),h=r(433),b=r(725),g=r.n(b),y=function(e){for(var t=e.url,r=e.allowFullScreen,n=e.position,a=e.display,i=e.height,s=e.width,l=e.overflow,o=e.styles,c=e.onLoad,p=e.onMouseOver,f=e.onMouseOut,d=e.scrolling,m=e.id,v=e.frameBorder,b=e.ariaHidden,y=e.sandbox,w=e.allow,x=e.className,k=e.title,j=e.ariaLabel,_=e.ariaLabelledby,O=e.name,Z=e.target,N=e.loading,C=e.importance,T=e.referrerpolicy,U=e.allowpaymentrequest,S=e.src,I=e.key,q=g()({src:S||t,target:Z||null,style:{position:n||null,display:a||"initial",overflow:l||null},scrolling:d||null,allowpaymentrequest:U||null,importance:C||null,sandbox:y&&(0,h.Z)(y).join(" ")||null,loading:N||null,styles:o||null,name:O||null,className:x||null,allowFullScreen:"allowFullScreen",referrerpolicy:T||null,title:k||null,allow:w||null,id:m||null,"aria-labelledby":_||null,"aria-hidden":b||null,"aria-label":j||null,width:s||null,height:i||null,onLoad:c||null,onMouseOver:p||null,onMouseOut:f||null,key:I||"iframe"}),F=Object.create(null),L=0,P=Object.keys(q);L<P.length;L++){var B=P[L];null!=q[B]&&(F[B]=q[B])}for(var E=0,M=Object.keys(F.style);E<M.length;E++){var A=M[E];null==F.style[A]&&delete F.style[A]}if(F.styles)for(var R=0,J=Object.keys(F.styles);R<J.length;R++){var H=J[R];F.styles.hasOwnProperty(H)&&(F.style[H]=F.styles[H]),Object.keys(F.styles).pop()==H&&delete F.styles}if(r)if("allow"in F){var V=F.allow.replace("fullscreen","");F.allow="fullscreen ".concat(V.trim()).trim()}else F.allow="fullscreen";return v>=0&&(F.style.hasOwnProperty("border")||(F.style.border=v)),u.createElement("iframe",Object.assign({},F))},w="trailer_trailer__7msAu",x=r(184),k=function(e){var t=e.keyTrailer;return(0,x.jsx)("div",{className:w,children:(0,x.jsx)(y,{url:"https://www.youtube.com/embed/".concat(t,"?origin=").concat(window.location.host),width:"640px",height:"320px",className:"",display:"block",position:"relative"})})},j=function(){var e,t=(0,u.useState)({item:{},loader:!1,keyTrailer:""}),r=(0,i.Z)(t,2),s=r[0],h=r[1],b=(0,c.s0)(),g=(null===(e=(0,c.TH)().state)||void 0===e?void 0:e.from)||"/movies",y=(0,c.UO)().movieId;(0,u.useEffect)((function(){var e=function(){var e=(0,a.Z)(l().mark((function e(){var t,r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h((function(e){return(0,n.Z)((0,n.Z)({},e),{},{loader:!0})})),e.next=4,(0,d.eZ)(y);case 4:return t=e.sent,h((function(e){return(0,n.Z)((0,n.Z)({},e),{},{item:(0,n.Z)({},t)})})),e.next=8,(0,d.xn)(y);case 8:r=e.sent,h((function(e){return(0,n.Z)((0,n.Z)({},e),{},{keyTrailer:r})})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),p.Am.error(" An error occurred. Go to the main page or repeat the request.");case 15:return e.prev=15,h((function(e){return(0,n.Z)((0,n.Z)({},e),{},{loader:!1})})),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,12,15,18]])})));return function(){return e.apply(this,arguments)}}();e()}),[y]);var w=s.item,j=w.original_title,_=w.overview,O=w.poster_path,Z=w.vote_average,N=O?"https://image.tmdb.org/t/p/w500/".concat(O):f;return console.log(s),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(p.Ix,{}),s.loader&&(0,x.jsx)(v.Z,{}),(0,x.jsx)("button",{className:m.btnBack,onClick:function(){b(g)},children:"<== Back"}),(0,x.jsxs)("div",{className:m.containerImage,children:[(0,x.jsx)("img",{className:m.image,src:N,alt:j,width:"450"}),(0,x.jsxs)("div",{children:[(0,x.jsxs)("ul",{className:m.list,children:[(0,x.jsx)("li",{className:m.item,children:(0,x.jsx)("h1",{className:m.title,children:j})}),(0,x.jsx)("li",{className:m.item,children:(0,x.jsx)("p",{className:m.pretitle,children:_})}),(0,x.jsx)("li",{className:m.item,children:(0,x.jsxs)("p",{className:m.pretitle,children:["Rating: ",Number(Z).toFixed(1)]})})]}),(0,x.jsx)(o.rU,{className:m.link,state:{from:g},to:"/movies/".concat(y,"/cast"),children:"Cast"}),(0,x.jsx)(o.rU,{className:m.link,state:{from:g},to:"/movies/".concat(y,"/reviews"),children:"Reviews"}),s.keyTrailer&&(0,x.jsx)(k,{keyTrailer:s.keyTrailer})]})]}),(0,x.jsx)(c.j3,{})]})},_=(0,u.memo)(j)},306:function(e,t,r){r.d(t,{LC:function(){return p},UK:function(){return u},eZ:function(){return o},k6:function(){return l},ro:function(){return c},xn:function(){return d}});var n=r(861),a=r(757),i=r.n(a),s=r(912).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"31449444226ba6345698313fe055564a"}}),l=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/trending/movie/day");case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n,a,l=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=l.length>1&&void 0!==l[1]?l[1]:1,e.next=3,s.get("/search/movie",{params:{query:t,page:r}});case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(i().mark((function e(t,r){var n,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t,"/videos"),{params:{language:r}});case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n,a,s,l;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=["uk-UA","ru-Ru","en-US"],n="",a=0;case 3:if(!(a<r.length)){e.next=15;break}return e.next=6,f(t,r[a]);case 6:if(s=e.sent,l=s.results,console.log(l),!l.length){e.next=12;break}return n=l[0].key,e.abrupt("break",15);case 12:a++,e.next=3;break;case 15:return e.abrupt("return",n);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},725:function(e){var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,i){for(var s,l,o=a(e),c=1;c<arguments.length;c++){for(var u in s=Object(arguments[c]))r.call(s,u)&&(o[u]=s[u]);if(t){l=t(s);for(var p=0;p<l.length;p++)n.call(s,l[p])&&(o[l[p]]=s[l[p]])}}return o}},526:function(e,t,r){e.exports=r.p+"static/media/notImage.01a1732ec75dd89d00d1.jpg"}}]);
//# sourceMappingURL=18.1cd860ce.chunk.js.map