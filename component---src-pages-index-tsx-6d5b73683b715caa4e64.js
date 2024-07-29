"use strict";(self.webpackChunkportfolio_v2=self.webpackChunkportfolio_v2||[]).push([[691],{9918:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(4160),a=n(7294),l="navbar-module--nav-link-item--24d96",o=n(2389);const c=n(1181).Eo;var i=()=>a.createElement("nav",null,a.createElement("ul",{className:"navbar-module--nav-links--d8aac"},a.createElement("li",{className:l},a.createElement(r.rU,{to:"/"},a.createElement(o.Z,null,"Home"))),a.createElement("li",{className:l},a.createElement(r.rU,{to:"/blog"},a.createElement(o.Z,null,"Blog"))),a.createElement("li",null,a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer"}))))},7650:function(e,t,n){var r=n(7294),a=n(4160);t.Z=e=>{let{title:t}=e;const n=(0,a.K2)("3159585216");return r.createElement("title",null,t," | ",n.site.siteMetadata.title)}},2389:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294);const a={light:"typography-module--light--75169",dark:"typography-module--dark--fe94f"};var l=e=>{let{variant:t="p",color:n="light",children:l,...o}=e;const c=t;return r.createElement(c,{className:a[n],...o},l)}},5002:function(e,t,n){n.r(t),n.d(t,{Head:function(){return y},default:function(){return p}});var r=n(7294),a=n(7650),l="index-module--section1--6b5eb",o=n(2389),c=n(9918),i=n(1181),u=n(3442);const s=i.nb,m=i.oN;var d=()=>{const e=Object.keys(s).length<1;return(0,r.useEffect)((()=>{}),[]),e?r.createElement(r.Fragment,null):r.createElement("table",null,Object.entries(s).toSorted(((e,t)=>t[1]-e[1])).map((e=>{let[t,n]=e;return r.createElement("tr",{key:t},r.createElement("td",null,r.createElement("div",{className:"skillchart-module--skill-name--3df06"},r.createElement(o.Z,null,t))),Array.from({length:n}).map(((e,t)=>r.createElement("td",{key:u.i.create().toString()},r.createElement("div",{className:"skillchart-module--point-square--8b07c"})))),Array.from({length:m-n}).map(((e,t)=>r.createElement("td",{key:n+t},r.createElement("div",{className:"skillchart-module--point-square-empty--aea05"})))))})))};var f=()=>r.createElement("div",{className:"projectsgrid-module--empty-state--48a56"},r.createElement(o.Z,{variant:"h3"},"Projects View - Coming Soon")),E=n(9842),g=n.n(E);var v=()=>{const e=(0,r.useRef)(null),t=(0,r.useRef)(null);return(0,r.useEffect)((()=>{let n=g().Engine,r=g().Render,a=g().World,l=g().Bodies,o=n.create({}),c=r.create({element:e.current,engine:o,canvas:t.current,options:{width:300,height:300,background:"rgba(255, 0, 0, 0.5)",wireframes:!1}});const i=l.rectangle(150,300,300,20,{isStatic:!0,render:{fillStyle:"blue"}}),u=l.circle(150,0,10,{restitution:.9,render:{fillStyle:"yellow"}});a.add(o.world,[i,u]),g().Runner.run(o),r.run(c)}),[]),r.createElement("div",{ref:e,style:{width:300,height:300}},r.createElement("canvas",{ref:t}))},h=n(3355);var p=()=>r.createElement(r.Fragment,null,r.createElement("div",{className:"index-module--header-section--99099"},r.createElement(c.Z,null),r.createElement("div",{className:"index-module--container--f8c32"},r.createElement(o.Z,{variant:"h1"},"Nicholas Thiemann"),r.createElement(o.Z,{variant:"h2"},"Web Developer"))),r.createElement("div",{className:"index-module--transition--17b00"}),r.createElement("div",{className:l},r.createElement(d,null),r.createElement(f,null)),(0,h.f)("tech_bucket")&&r.createElement("div",{className:l},r.createElement(v,null)));const y=()=>r.createElement(r.Fragment,null,r.createElement(a.Z,{title:"Home"}),";",r.createElement("body",{className:"index-module--body--4606d"}))},3355:function(e,t,n){n.d(t,{f:function(){return a}});var r=n(1181);function a(e){const t=r.h2;if(console.log({toggles:t}),!(e in t)){const t='Feature toggle ID "'+e+'" not found in config.';throw console.error(t),new Error(t)}return t[e]}},3442:function(e,t){var n=function(){function e(t){if(!t)throw new TypeError("Invalid argument; `value` has no value.");this.value=e.EMPTY,t&&e.isGuid(t)&&(this.value=t)}return e.isGuid=function(t){var n=t.toString();return t&&(t instanceof e||e.validator.test(n))},e.create=function(){return new e([e.gen(2),e.gen(1),e.gen(1),e.gen(1),e.gen(3)].join("-"))},e.createEmpty=function(){return new e("emptyguid")},e.parse=function(t){return new e(t)},e.raw=function(){return[e.gen(2),e.gen(1),e.gen(1),e.gen(1),e.gen(3)].join("-")},e.gen=function(e){for(var t="",n=0;n<e;n++)t+=(65536*(1+Math.random())|0).toString(16).substring(1);return t},e.prototype.equals=function(t){return e.isGuid(t)&&this.value===t.toString()},e.prototype.isEmpty=function(){return this.value===e.EMPTY},e.prototype.toString=function(){return this.value},e.prototype.toJSON=function(){return{value:this.value}},e.validator=new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$","i"),e.EMPTY="00000000-0000-0000-0000-000000000000",e}();t.i=n},1181:function(e){e.exports=JSON.parse('{"h2":{"blog":true,"blog_posts":false,"tech_bucket":false},"Eo":"https://github.com/nthiemann","nb":{"HTML":8,"CSS":5,"Python":7,"TypeScript":8},"oN":10}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-6d5b73683b715caa4e64.js.map