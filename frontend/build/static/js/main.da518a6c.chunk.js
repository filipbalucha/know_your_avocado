(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{167:function(e,t,n){},271:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(0),i=n.n(a),r=n(48),s=n.n(r),o=(n(167),n(123)),j=n(43),l=n(289),d=n(286),b=n(293),u=n(297),h=n(153),O=n(298),x=n.p+"static/media/avocado.9fb67f28.PNG",m=n(154),f=n(148),p=n(296),g=n(288),v=n(294),C=n(40),k=n(285),y=(n(265),function(e){var t=e.response,n=t.result,a=t.summary,i=(100*n.probability).toFixed(2),r=n.category.replace("avocado_",""),s={labels:a.categories.map((function(e){return e.replace("avocado_","")})),datasets:[{backgroundColor:["#d9a26f","#b5ba6a"],borderWidth:1,data:a.probabilities}]};return Object(c.jsxs)(p.a,{textAlign:"center",columns:"equal",children:[Object(c.jsx)(p.a.Row,{children:Object(c.jsx)(g.a,{content:"The percentage indicates to what extent the 'AI' is certain about its prediction. It does not quantify the ripeness of the \ud83e\udd51 as such.",header:"What does this mean?",trigger:Object(c.jsxs)(u.a,{basic:!0,children:[Object(c.jsxs)(O.a,{as:"h3",children:["This \ud83e\udd51 is ",Object(c.jsx)("i",{children:r})]}),Object(c.jsxs)("p",{children:["with a ",i,"% probability"]})]})})}),Object(c.jsx)(p.a.Row,{children:Object(c.jsx)(u.a,{basic:!0,style:{height:"30vh"},children:Object(c.jsx)(f.Pie,{data:s,options:{maintainAspectRatio:!1,events:[],legend:{display:!1},plugins:{labels:{render:"label",fontColor:"white",fontSize:16}}}})})})]})}),w=function(e){return Object(c.jsxs)(i.a.Fragment,{children:[Object(c.jsx)(O.a,{as:"h3",children:"Sorry, I was unable to spot any \ud83e\udd51"}),Object(c.jsx)("p",{children:"Could you try retaking the photo?"})]})},A=function(e){var t=e.onClick;return Object(c.jsxs)(v.a,{animated:!0,onClick:t,children:[Object(c.jsx)(v.a.Content,{visible:!0,children:"Back"}),Object(c.jsx)(v.a.Content,{hidden:!0,children:Object(c.jsx)(C.a,{name:"arrow left"})})]})},I=function(e){var t,n=e.loading,a=e.onBackClicked;return n?Object(c.jsx)(k.a,{active:!0,content:"Loading"}):(t=e.response.fruit_visible?Object(c.jsx)(y,Object(m.a)({},e)):Object(c.jsx)(w,{}),Object(c.jsxs)(i.a.Fragment,{children:[t,Object(c.jsx)(A,{onClick:a})]}))},F=n(290),T=(new Date).getFullYear(),P=function(e){return Object(c.jsx)(u.a,{inverted:!0,vertical:!0,style:{padding:"1.5em 0em",width:"100%",bottom:0,flex:1},children:Object(c.jsx)(d.a,{children:Object(c.jsx)(p.a,{divided:!0,inverted:!0,stackable:!0,children:Object(c.jsxs)(p.a.Row,{children:[Object(c.jsxs)(p.a.Column,{width:3,children:[Object(c.jsx)(O.a,{inverted:!0,as:"h4",content:"Author"}),Object(c.jsxs)("p",{children:["Filip Balucha \xa9",T]})]}),Object(c.jsxs)(p.a.Column,{width:10,children:[Object(c.jsx)(O.a,{as:"h4",inverted:!0,children:"Why?"}),Object(c.jsxs)("p",{children:["I struggle to tell ripe avocados from unripe ones, so I trained a deep learning model based on the ","ResNet-18 CNN"," to help me with the task. Hope it can help you too \ud83d\ude0a. Get in touch if you have any requests or suggestions."]})]}),Object(c.jsxs)(p.a.Column,{width:3,children:[Object(c.jsx)(O.a,{as:"h4",inverted:!0,children:"Contact"}),Object(c.jsxs)(F.a,{horizontal:!0,inverted:!0,verticalAlign:"middle",children:[Object(c.jsx)(F.a.Item,{href:"https://www.linkedin.com/in/filip-balucha/",children:Object(c.jsx)(C.a,{name:"linkedin"})}),Object(c.jsx)(F.a.Item,{href:"https://github.com/filipbalucha",children:Object(c.jsx)(C.a,{name:"github"})}),Object(c.jsx)(F.a.Item,{href:"https://www.facebook.com/filiposlav",children:Object(c.jsx)(C.a,{name:"facebook"})}),Object(c.jsx)(F.a.Item,{href:"mailto: ".concat("balucha.filip2@gmail.com"),children:Object(c.jsx)(C.a,{name:"mail"})})]})]})]})})})})},R=n(287),S=function(e){return Object(c.jsxs)(i.a.Fragment,{children:[Object(c.jsx)(v.a,{as:"label",htmlFor:"cameraInput",content:"Take a Picture"}),Object(c.jsx)("input",{id:"cameraInput",type:"file",accept:"image/*",capture:"environment",hidden:!0,onChange:e.onClick})]})},W=function(e){return Object(c.jsxs)(i.a.Fragment,{children:[Object(c.jsx)(v.a,{as:"label",htmlFor:"libraryInput",content:"Upload an Image"}),Object(c.jsx)("input",{id:"libraryInput",type:"file",accept:"image/*",multiple:!0,hidden:!0,onChange:e.onClick})]})},U=function(e){var t=e.allowCamera,n=e.onClick;return t?Object(c.jsxs)(p.a,{columns:2,textAlign:"center",children:[Object(c.jsx)(R.a,{vertical:!0,children:"Or"}),Object(c.jsxs)(p.a.Row,{verticalAlign:"middle",children:[Object(c.jsxs)(p.a.Column,{children:[Object(c.jsx)(O.a,{icon:!0,children:Object(c.jsx)(C.a,{name:"photo"})}),Object(c.jsx)(S,{onClick:n})]}),Object(c.jsxs)(p.a.Column,{children:[Object(c.jsx)(O.a,{icon:!0,children:Object(c.jsx)(C.a,{name:"images"})}),Object(c.jsx)(W,{onClick:n})]})]})]}):Object(c.jsxs)(u.a,{basic:!0,children:[Object(c.jsx)(O.a,{icon:!0,children:Object(c.jsx)(C.a,{name:"images"})}),Object(c.jsx)(W,{onClick:n})]})},D=n(291),L=n(152),N=function(e){var t=e.onClick,n=Object(a.useRef)(null);return Object(c.jsxs)(i.a.Fragment,{children:[Object(c.jsx)(v.a,{icon:"camera",onClick:function(){return n.current.click()}}),Object(c.jsx)("input",{ref:n,type:"file",accept:"image/*",capture:"environment",hidden:!0,onChange:t})]})},B=function(e){var t=e.onClick,n=e.icon,r=Object(a.useRef)(null);return Object(c.jsxs)(i.a.Fragment,{children:[Object(c.jsx)(v.a,{icon:n,onClick:function(){return r.current.click()}}),Object(c.jsx)("input",{ref:r,type:"file",accept:"image/*",multiple:!0,hidden:!0,onChange:t})]})},E=function(e){var t=e.allowCamera,n=e.onClick;return t?Object(c.jsx)(g.a,{trigger:Object(c.jsx)(v.a,{icon:"plus"}),flowing:!0,hoverable:!0,mouseEnterDelay:150,mouseLeaveDelay:150,children:Object(c.jsxs)(p.a,{divided:!0,columns:"equal",children:[Object(c.jsx)(p.a.Column,{children:Object(c.jsx)(N,{onClick:n})}),Object(c.jsx)(p.a.Column,{children:Object(c.jsx)(B,{onClick:n,icon:"image"})})]})}):Object(c.jsx)(B,{onClick:n,icon:"plus"})},z=function(e){var t=Object(L.useMediaQuery)({minDeviceWidth:1224}),n=e.images,r=e.onPredictPressed,s=e.onAddPressed,o=e.allowCamera,l=Object(a.useState)([]),d=Object(j.a)(l,2),b=d[0],O=d[1];Object(a.useEffect)((function(){b.forEach((function(e){return URL.revokeObjectURL(e)}));var e=n.map((function(e){return URL.createObjectURL(e)}));O(e)}),[n]);var x=function(e){return Object(c.jsx)(v.a,{size:"medium",icon:"cancel",color:"red",circular:!0,style:{position:"absolute",top:20,left:20},onClick:e.onClick})},m=function(e){var t=e.numImagesUploaded,n=e.onClick,r=Object(a.useState)(!1),s=Object(j.a)(r,2),o=s[0],l=s[1];return Object(c.jsxs)(i.a.Fragment,{children:[Object(c.jsx)(v.a,{fluid:!0,onClick:function(){t<2?l(!0):n()},children:"Predict"}),Object(c.jsxs)(D.a,{size:"tiny",open:o,onClose:function(){return l(!1)},children:[Object(c.jsx)(D.a.Header,{children:"Upload more images"}),Object(c.jsx)(D.a.Content,{children:Object(c.jsx)("p",{children:"Uploading an extra image can improve prediction. Would you like to do so?"})}),Object(c.jsxs)(D.a.Actions,{children:[Object(c.jsxs)(v.a,{color:"red",onClick:function(){l(!1),n()},children:[Object(c.jsx)(C.a,{name:"remove"})," No"]}),Object(c.jsxs)(v.a,{color:"green",onClick:function(){return l(!1)},children:[Object(c.jsx)(C.a,{name:"checkmark"})," Yes"]})]})]})]})};return Object(c.jsxs)(i.a.Fragment,{children:[Object(c.jsxs)(F.a,{horizontal:t,verticalAlign:"middle",children:[b.map((function(t,n){return Object(c.jsxs)(F.a.Item,{children:[Object(c.jsx)(h.a,{}),Object(c.jsx)(F.a.Content,{children:Object(c.jsxs)(u.a,{basic:!0,children:[Object(c.jsx)(h.a,{centered:!0,rounded:!0,src:t,size:"medium"}),Object(c.jsx)(x,{onClick:function(){return e.onRemovePressed(n)}})]})})]},n)})),n.length<4&&Object(c.jsxs)(F.a.Item,{children:[Object(c.jsx)(h.a,{}),Object(c.jsx)(F.a.Content,{children:Object(c.jsx)(E,{allowCamera:o,onClick:s})})]})]}),Object(c.jsx)(R.a,{}),Object(c.jsx)(m,{numImagesUploaded:n.length,onClick:r})]})},G=n(292),H=function(e){var t=e.status;return Object(c.jsxs)(G.a.Group,{unstackable:!0,children:[Object(c.jsxs)(G.a,{active:"AWAIT"===t,children:[Object(c.jsx)(C.a,{name:"upload"}),Object(c.jsx)(G.a.Content,{children:Object(c.jsx)(G.a.Title,{children:"Upload "})})]}),Object(c.jsxs)(G.a,{active:"AWAIT"!==t,children:[Object(c.jsx)(C.a,{name:"magic"}),Object(c.jsx)(G.a.Content,{children:Object(c.jsx)(G.a.Title,{children:"Predict"})})]})]})},q=n(122);var Y=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)("AWAIT"),m=Object(j.a)(s,2),f=m[0],p=m[1],g=Object(a.useState)(),v=Object(j.a)(g,2),C=v[0],k=v[1],y=Object(a.useState)(!1),w=Object(j.a)(y,2),A=w[0],F=w[1];Object(a.useEffect)((function(){p("AWAIT")}),[n]),Object(a.useEffect)((function(){if(A){var e=setTimeout((function(){return F(!1)}),2500);return function(){return clearTimeout(e)}}}),[A]);var T=function(e){e.preventDefault(),r((function(t){return[].concat(Object(o.a)(t),Object(o.a)(e.target.files))}))},R=function(){var e=new FormData;n.forEach((function(t,n){e.append("file[]",t)})),p("LOADING"),fetch("/predict",{method:"POST",body:e}).then((function(e){return e.json()})).then((function(e){setTimeout((function(){k(e),p("FINISHED")}),500)})).catch((function(e){console.error(e),p("AWAIT"),F(!0)}))},S=function(e){e.visible;return Object(c.jsx)(l.a,{visible:A,animation:"fade up",duration:500,children:Object(c.jsx)(d.a,{style:{position:"absolute",width:"20vw",bottom:10,right:10},children:Object(c.jsxs)(b.a,{negative:!0,children:[Object(c.jsx)(b.a.Header,{children:"Server error"}),Object(c.jsx)("p",{children:"Please try again later"})]})})})},W=function(e){if(-1!==e){var t=Array.from(n);t.splice(e,1),r(t)}},D=function(){var e;return e="AWAIT"!==f?Object(c.jsx)(I,{loading:"LOADING"===f,response:C,onBackClicked:function(){return p("AWAIT")}}):n.length?Object(c.jsx)(z,{images:n,onPredictPressed:R,onAddPressed:T,onRemovePressed:W,allowCamera:!q.isBrowser}):Object(c.jsx)(U,{allowCamera:!q.isBrowser,onClick:T}),Object(c.jsx)(u.a,{placeholder:!0,content:e})};return Object(c.jsxs)(i.a.Fragment,{children:[Object(c.jsxs)(u.a,{basic:!0,padded:"very",textAlign:"center",style:{display:"flex",minHeight:"100vh",flexDirection:"column",margin:0},children:[Object(c.jsx)(h.a,{centered:!0,src:x,size:"small"}),Object(c.jsx)(O.a,{as:"h1",children:"Know Your Avocado!"}),Object(c.jsx)("p",{children:"Say No to Unripe Avocados."}),Object(c.jsx)(H,{status:f,handleUploadClicked:function(){return p("AWAIT")}}),Object(c.jsx)(D,{})]}),Object(c.jsx)(S,{visible:A}),Object(c.jsx)(P,{})]})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,300)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};n(270);s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(Y,{})}),document.getElementById("root")),_()}},[[271,1,2]]]);
//# sourceMappingURL=main.da518a6c.chunk.js.map