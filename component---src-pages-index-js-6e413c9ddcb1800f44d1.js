(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var i=n("q1tI"),a=n.n(i),r=n("Wbzz"),o=n("vOnD"),l=n("7oih"),c=n("axcl"),s=n.n(c),f=n("RMjV"),p=Object(o.d)(["from{transform:scale(.25);opacity:0;}to{transform:scale(1);opacity:1;}"]),u=o.c.div.withConfig({displayName:"Confetti__Box",componentId:"sc-1igro7q-0"})(["position:absolute;display:flex;flex:1;top:0;left:0;bottom:0;right:0;"]),d=o.c.div.withConfig({displayName:"Confetti__Wrapper",componentId:"sc-1igro7q-1"})(["display:flex;flex:1;flex-direction:column;justify-content:center;align-items:center;animation:"," ","s ease-out;"],p,.5),h=o.c.div.withConfig({displayName:"Confetti__PaaragraphWrapper",componentId:"sc-1igro7q-2"})(["text-align:center;"]),y=o.c.p.withConfig({displayName:"Confetti__Paragraph",componentId:"sc-1igro7q-3"})(["display:inline;font-weight:300;font-size:1.6rem;text-align:center;line-height:200%;margin:0;color:white;margin-top:30px;"]),m=o.c.p.withConfig({displayName:"Confetti__FatParagraph",componentId:"sc-1igro7q-4"})(["display:inline;font-weight:700;font-size:1.6rem;text-align:center;line-height:200%;margin:0;color:white;margin-top:30px;"]),g={angle:90,spread:360,startVelocity:50,elementCount:500,dragFriction:.2,duration:3e3,stagger:0,width:"20px",height:"10px",perspective:"500px",colors:["#a864fd","#29cdff","#78ff44","#ff718d","#fdff6a"]};function v(){var e=Object(i.useState)(!1),t=e[0],n=e[1];return Object(i.useEffect)((function(){var e=setTimeout((function(){n(!0)}),350);return function(){return clearTimeout(e)}}),[]),a.a.createElement(u,null,a.a.createElement(d,null,a.a.createElement(s.a,{active:t,config:g}),a.a.createElement(f.a,{title:"JOBELLO",header:"Välkommen till Sveriges första sociala jobbsajt för yrkesarbetare 🤩"},a.a.createElement(h,null,a.a.createElement(y,null,"Här kommer du kunna skapa ett CV i världsklass, nätverka med andra och söka bland Sveriges alla jobbannonser på ett nytt smart sätt. "),a.a.createElement(m,null,"Och självklart kommer allt att vara helt gratis. "),a.a.createElement(y,null,"Häng på! 😃")))))}var b=o.c.div.withConfig({displayName:"pages__Preloader",componentId:"sc-1c4d8dy-0"})(["display:",";visibility:hidden;"],(function(e){return e.hidden?"none":"block"}));function w(){var e=Object(i.useState)(!1),t=e[0],n=e[1];return Object(i.useEffect)((function(){n(!0);var e=setTimeout((function(){Object(r.navigate)("/earlybird")}),1e4);return function(){clearTimeout(e)}}),[]),a.a.createElement(l.a,{title:"Jobello"},a.a.createElement(v,null),a.a.createElement(b,{hidden:t},a.a.createElement(r.Link,{to:"/earlybird",rel:"preload"},"Earlybird")))}},"a/YJ":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.confetti=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object.assign({},o,l(t)),c=n.elementCount,s=n.colors,f=n.width,p=n.height,u=n.perspective,d=n.angle,h=n.spread,y=n.startVelocity,m=n.decay,g=n.dragFriction,v=n.duration,b=n.stagger,w=n.random;e.style.perspective=u;var _=i(e,c,s,f,p),x=_.map((function(e){return{element:e,physics:a(d,h,y,w)}}));return r(e,x,g,m,v,b)};function i(e,t,n,i,a){return Array.from({length:t}).map((function(t,r){var o=document.createElement("div"),l=n[r%n.length];return o.style["background-color"]=l,o.style.width=i,o.style.height=a,o.style.position="absolute",o.style.willChange="transform, opacity",o.style.visibility="hidden",e.appendChild(o),o}))}function a(e,t,n,i){var a=e*(Math.PI/180),r=t*(Math.PI/180);return{x:0,y:0,z:0,wobble:10*i(),wobbleSpeed:.1+.1*i(),velocity:.5*n+i()*n,angle2D:-a+(.5*r-i()*r),angle3D:-Math.PI/4+i()*(Math.PI/2),tiltAngle:i()*Math.PI,tiltAngleSpeed:.1+.3*i()}}function r(e,t,n,i,a,r){var o=void 0;return new Promise((function(l){requestAnimationFrame((function c(s){o||(o=s);var f=s-o,p=o===s?0:(s-o)/a;t.slice(0,Math.ceil(f/r)).forEach((function(e){!function(e,t,n,i){e.physics.x+=Math.cos(e.physics.angle2D)*e.physics.velocity,e.physics.y+=Math.sin(e.physics.angle2D)*e.physics.velocity,e.physics.z+=Math.sin(e.physics.angle3D)*e.physics.velocity,e.physics.wobble+=e.physics.wobbleSpeed,i?e.physics.velocity*=i:e.physics.velocity-=e.physics.velocity*n,e.physics.y+=3,e.physics.tiltAngle+=e.physics.tiltAngleSpeed;var a=e.physics,r=a.x,o=a.y,l=a.z,c=a.tiltAngle,s=a.wobble,f="translate3d("+(r+10*Math.cos(s))+"px, "+(o+10*Math.sin(s))+"px, "+l+"px) rotate3d(1, 1, 1, "+c+"rad)";e.element.style.visibility="visible",e.element.style.transform=f,e.element.style.opacity=1-t}(e,p,n,i)})),s-o<a?requestAnimationFrame(c):(t.forEach((function(t){if(t.element.parentNode===e)return e.removeChild(t.element)})),l())}))}))}var o={angle:90,spread:45,startVelocity:45,elementCount:50,width:"10px",height:"10px",perspective:"",colors:["#a864fd","#29cdff","#78ff44","#ff718d","#fdff6a"],duration:3e3,stagger:0,dragFriction:.1,random:Math.random};function l(e){return!e.stagger&&e.delay&&(e.stagger=e.delay),e}},axcl:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n("q1tI"),o=(i=r)&&i.__esModule?i:{default:i},l=n("a/YJ");var c={position:"relative"},s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setRef=n.setRef.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidUpdate",value:function(e){!e.active&&this.props.active&&(0,l.confetti)(this.container,this.props.config)}},{key:"setRef",value:function(e){this.container=e}},{key:"render",value:function(){return o.default.createElement("div",{className:this.props.className,style:c,ref:this.setRef})}}]),t}(r.Component);t.default=s}}]);
//# sourceMappingURL=component---src-pages-index-js-6e413c9ddcb1800f44d1.js.map