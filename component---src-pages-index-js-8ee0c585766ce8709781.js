(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var i=n("q1tI"),r=n.n(i),a=n("Wbzz"),o=n("vOnD"),l=n("7oih"),s=n("axcl"),c=n.n(s),f=n("RMjV"),u=Object(o.d)(["from{transform:scale(.25);opacity:0;}to{transform:scale(1);opacity:1;}"]),p=o.c.div.withConfig({displayName:"Confetti__Box",componentId:"sc-1igro7q-0"})(["position:absolute;display:flex;flex:1;top:0;left:0;bottom:0;right:0;"]),d=o.c.div.withConfig({displayName:"Confetti__Wrapper",componentId:"sc-1igro7q-1"})(["display:flex;flex:1;flex-direction:column;justify-content:center;align-items:center;animation:"," ","s ease-out;"],u,.5),y={angle:90,spread:360,startVelocity:50,elementCount:500,dragFriction:.2,duration:3e3,stagger:0,width:"20px",height:"10px",perspective:"500px",colors:["#a864fd","#29cdff","#78ff44","#ff718d","#fdff6a"]};function h(){var e=Object(i.useState)(!1),t=e[0],n=e[1];return Object(i.useEffect)((function(){var e=setTimeout((function(){n(!0)}),350);return function(){return clearTimeout(e)}}),[]),r.a.createElement(p,null,r.a.createElement(d,null,r.a.createElement(c.a,{active:t,config:y}),r.a.createElement(f.a,{title:"JOBELLO",header:"Du hittade till Sveriges första sociala jobbsajt🤩",paragraph:"Jobello är platsen där du kan skapa ett CV i världsklass, söka bland Sveriges alla jobbannonser och diskutera yrkesfrågor som hur man nailar arbetsintervjun, hittar drömjobbet, löneförhandlar eller planerar den årliga firmafesten med mycket mer! Självklart är allt helt gratis. Häng på! 😃"})))}var m=o.c.div.withConfig({displayName:"pages__Preloader",componentId:"sc-1c4d8dy-0"})(["display:",";visibility:hidden;"],(function(e){return e.hidden?"none":"block"}));function b(){var e=Object(i.useState)(!1),t=e[0],n=e[1];return Object(i.useEffect)((function(){n(!0);var e=setTimeout((function(){Object(a.navigate)("/earlybird")}),1e4);return function(){clearTimeout(e)}}),[]),r.a.createElement(l.a,{title:"Jobello"},r.a.createElement(h,null),r.a.createElement(m,{hidden:t},r.a.createElement(a.Link,{to:"/earlybird",rel:"preload"},"Earlybird")))}},"a/YJ":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.confetti=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object.assign({},o,l(t)),s=n.elementCount,c=n.colors,f=n.width,u=n.height,p=n.perspective,d=n.angle,y=n.spread,h=n.startVelocity,m=n.decay,b=n.dragFriction,v=n.duration,g=n.stagger,w=n.random;e.style.perspective=p;var j=i(e,s,c,f,u),x=j.map((function(e){return{element:e,physics:r(d,y,h,w)}}));return a(e,x,b,m,v,g)};function i(e,t,n,i,r){return Array.from({length:t}).map((function(t,a){var o=document.createElement("div"),l=n[a%n.length];return o.style["background-color"]=l,o.style.width=i,o.style.height=r,o.style.position="absolute",o.style.willChange="transform, opacity",o.style.visibility="hidden",e.appendChild(o),o}))}function r(e,t,n,i){var r=e*(Math.PI/180),a=t*(Math.PI/180);return{x:0,y:0,z:0,wobble:10*i(),wobbleSpeed:.1+.1*i(),velocity:.5*n+i()*n,angle2D:-r+(.5*a-i()*a),angle3D:-Math.PI/4+i()*(Math.PI/2),tiltAngle:i()*Math.PI,tiltAngleSpeed:.1+.3*i()}}function a(e,t,n,i,r,a){var o=void 0;return new Promise((function(l){requestAnimationFrame((function s(c){o||(o=c);var f=c-o,u=o===c?0:(c-o)/r;t.slice(0,Math.ceil(f/a)).forEach((function(e){!function(e,t,n,i){e.physics.x+=Math.cos(e.physics.angle2D)*e.physics.velocity,e.physics.y+=Math.sin(e.physics.angle2D)*e.physics.velocity,e.physics.z+=Math.sin(e.physics.angle3D)*e.physics.velocity,e.physics.wobble+=e.physics.wobbleSpeed,i?e.physics.velocity*=i:e.physics.velocity-=e.physics.velocity*n,e.physics.y+=3,e.physics.tiltAngle+=e.physics.tiltAngleSpeed;var r=e.physics,a=r.x,o=r.y,l=r.z,s=r.tiltAngle,c=r.wobble,f="translate3d("+(a+10*Math.cos(c))+"px, "+(o+10*Math.sin(c))+"px, "+l+"px) rotate3d(1, 1, 1, "+s+"rad)";e.element.style.visibility="visible",e.element.style.transform=f,e.element.style.opacity=1-t}(e,u,n,i)})),c-o<r?requestAnimationFrame(s):(t.forEach((function(t){if(t.element.parentNode===e)return e.removeChild(t.element)})),l())}))}))}var o={angle:90,spread:45,startVelocity:45,elementCount:50,width:"10px",height:"10px",perspective:"",colors:["#a864fd","#29cdff","#78ff44","#ff718d","#fdff6a"],duration:3e3,stagger:0,dragFriction:.1,random:Math.random};function l(e){return!e.stagger&&e.delay&&(e.stagger=e.delay),e}},axcl:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=n("q1tI"),o=(i=a)&&i.__esModule?i:{default:i},l=n("a/YJ");var s={position:"relative"},c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setRef=n.setRef.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){!e.active&&this.props.active&&(0,l.confetti)(this.container,this.props.config)}},{key:"setRef",value:function(e){this.container=e}},{key:"render",value:function(){return o.default.createElement("div",{className:this.props.className,style:s,ref:this.setRef})}}]),t}(a.Component);t.default=c}}]);
//# sourceMappingURL=component---src-pages-index-js-8ee0c585766ce8709781.js.map