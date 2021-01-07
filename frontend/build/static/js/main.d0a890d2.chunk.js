(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{167:function(e,t,n){},270:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n(0),a=n.n(i),r=n(48),s=n.n(r),o=(n(167),n(123)),j=n(43),l=n(288),d=n(285),b=n(292),u=n(297),h=n(153),O=n(296),x=n.p+"static/media/avocado.9fb67f28.PNG",m=n(154),f=n(148),p=n(295),g=n(287),v=n(284),C=function(e){var t=e.response,n=t.result,i=t.summary,a=function(e){return(100*e).toFixed(2)},r=i.probabilities.map(a),s=a(n.probability),o=n.category.replace("avocado_",""),j={labels:i.categories,datasets:[{backgroundColor:["#d9a26f","#b5ba6a"],borderWidth:1,label:"TBA",data:r}]};return Object(c.jsxs)(p.a,{textAlign:"center",children:[Object(c.jsx)(p.a.Row,{children:Object(c.jsx)(g.a,{content:"The percentage indicates to what extent the 'AI' is certain about its prediction. It does not quantify the ripeness of the \ud83e\udd51 as such.",header:"What does this mean?",trigger:Object(c.jsxs)(O.a,{as:"h3",children:["This \ud83e\udd51 is ",Object(c.jsx)("b",{children:o})," with a ",s,"% probability!"]})})}),Object(c.jsx)(p.a.Row,{children:Object(c.jsx)(u.a,{basic:!0,style:{height:"50vh"},children:Object(c.jsx)(f.Pie,{data:j,options:{maintainAspectRatio:!1}})})})]})},k=function(){return Object(c.jsxs)(a.a.Fragment,{children:[Object(c.jsx)(O.a,{as:"h3",children:"Sorry, I was unable to spot any \ud83e\udd51"}),Object(c.jsx)("p",{children:"Could you try retaking the photo?"})]})},y=function(e){var t;return t=e.loading?Object(c.jsx)(v.a,{active:!0,content:"Loading"}):e.response.fruit_visible?Object(c.jsx)(C,Object(m.a)({},e)):Object(c.jsx)(k,{}),Object(c.jsx)(u.a,{placeholder:!0,children:t})},w=n(289),A=n(40),I=(new Date).getFullYear(),F=function(e){return Object(c.jsx)(u.a,{inverted:!0,vertical:!0,style:{padding:"1.5em 0em",width:"100%",bottom:0,flex:1},children:Object(c.jsx)(d.a,{children:Object(c.jsx)(p.a,{divided:!0,inverted:!0,stackable:!0,children:Object(c.jsxs)(p.a.Row,{children:[Object(c.jsxs)(p.a.Column,{width:3,children:[Object(c.jsx)(O.a,{inverted:!0,as:"h4",content:"Author"}),Object(c.jsxs)("p",{children:["Filip Balucha \xa9",I]})]}),Object(c.jsxs)(p.a.Column,{width:10,children:[Object(c.jsx)(O.a,{as:"h4",inverted:!0,children:"Why?"}),Object(c.jsxs)("p",{children:["I struggle to tell ripe avocados from unripe ones, so I trained a deep learning model based on the ","ResNet-18 CNN"," to help me with the task. Hope it can help you too \ud83d\ude0a. Get in touch if you have any requests or suggestions."]})]}),Object(c.jsxs)(p.a.Column,{width:3,children:[Object(c.jsx)(O.a,{as:"h4",inverted:!0,children:"Contact"}),Object(c.jsxs)(w.a,{horizontal:!0,inverted:!0,verticalAlign:"middle",children:[Object(c.jsx)(w.a.Item,{href:"https://www.linkedin.com/in/filip-balucha/",children:Object(c.jsx)(A.a,{name:"linkedin"})}),Object(c.jsx)(w.a.Item,{href:"https://github.com/filipbalucha",children:Object(c.jsx)(A.a,{name:"github"})}),Object(c.jsx)(w.a.Item,{href:"https://www.facebook.com/filiposlav",children:Object(c.jsx)(A.a,{name:"facebook"})}),Object(c.jsx)(w.a.Item,{href:"mailto: ".concat("balucha.filip2@gmail.com"),children:Object(c.jsx)(A.a,{name:"mail"})})]})]})]})})})})},T=n(293),P=n(286),R=function(e){return Object(c.jsxs)(a.a.Fragment,{children:[Object(c.jsx)(T.a,{as:"label",htmlFor:"cameraInput",content:"Take a Picture"}),Object(c.jsx)("input",{id:"cameraInput",type:"file",accept:"image/*",capture:"environment",hidden:!0,onChange:e.onClick})]})},S=function(e){return Object(c.jsxs)(a.a.Fragment,{children:[Object(c.jsx)(T.a,{as:"label",htmlFor:"libraryInput",content:"Upload an Image"}),Object(c.jsx)("input",{id:"libraryInput",type:"file",accept:"image/*",multiple:!0,hidden:!0,onChange:e.onClick})]})},D=function(e){var t,n=e.allowCamera,i=e.onClick;return t=n?Object(c.jsxs)(p.a,{columns:2,textAlign:"center",children:[Object(c.jsx)(P.a,{vertical:!0,children:"Or"}),Object(c.jsxs)(p.a.Row,{verticalAlign:"middle",children:[Object(c.jsxs)(p.a.Column,{children:[Object(c.jsx)(O.a,{icon:!0,children:Object(c.jsx)(A.a,{name:"photo"})}),Object(c.jsx)(R,{onClick:i})]}),Object(c.jsxs)(p.a.Column,{children:[Object(c.jsx)(O.a,{icon:!0,children:Object(c.jsx)(A.a,{name:"images"})}),Object(c.jsx)(S,{onClick:i})]})]})]}):Object(c.jsxs)(u.a,{basic:!0,children:[Object(c.jsx)(O.a,{icon:!0,children:Object(c.jsx)(A.a,{name:"images"})}),Object(c.jsx)(S,{onClick:i})]}),Object(c.jsx)(u.a,{placeholder:!0,children:t})},U=n(290),W=n(152),L=function(e){var t=e.onClick,n=Object(i.useRef)(null);return Object(c.jsxs)(a.a.Fragment,{children:[Object(c.jsx)(T.a,{icon:"camera",onClick:function(){return n.current.click()}}),Object(c.jsx)("input",{ref:n,type:"file",accept:"image/*",capture:"environment",hidden:!0,onChange:t})]})},N=function(e){var t=e.onClick,n=e.icon,r=Object(i.useRef)(null);return Object(c.jsxs)(a.a.Fragment,{children:[Object(c.jsx)(T.a,{icon:n,onClick:function(){return r.current.click()}}),Object(c.jsx)("input",{ref:r,type:"file",accept:"image/*",multiple:!0,hidden:!0,onChange:t})]})},E=function(e){var t=e.allowCamera,n=e.onClick;return t?Object(c.jsx)(g.a,{trigger:Object(c.jsx)(T.a,{icon:"plus"}),flowing:!0,hoverable:!0,mouseEnterDelay:150,mouseLeaveDelay:150,children:Object(c.jsxs)(p.a,{divided:!0,columns:"equal",children:[Object(c.jsx)(p.a.Column,{children:Object(c.jsx)(L,{onClick:n})}),Object(c.jsx)(p.a.Column,{children:Object(c.jsx)(N,{onClick:n,icon:"image"})})]})}):Object(c.jsx)(N,{onClick:n,icon:"plus"})},z=function(e){var t=Object(W.useMediaQuery)({minDeviceWidth:1224}),n=e.images,r=e.onPredictPressed,s=e.onAddPressed,o=e.allowCamera,l=Object(i.useState)([]),d=Object(j.a)(l,2),b=d[0],O=d[1];Object(i.useEffect)((function(){b.forEach((function(e){return URL.revokeObjectURL(e)}));var e=n.map((function(e){return URL.createObjectURL(e)}));O(e)}),[n]);var x=function(e){return Object(c.jsx)(T.a,{size:"medium",icon:"cancel",color:"red",circular:!0,style:{position:"absolute",top:20,left:20},onClick:e.onClick})},m=function(e){var t=e.numImagesUploaded,n=e.onClick,r=Object(i.useState)(!1),s=Object(j.a)(r,2),o=s[0],l=s[1];return Object(c.jsxs)(a.a.Fragment,{children:[Object(c.jsx)(T.a,{fluid:!0,onClick:function(){t<2?l(!0):n()},children:"Predict"}),Object(c.jsxs)(U.a,{size:"tiny",open:o,onClose:function(){return l(!1)},children:[Object(c.jsx)(U.a.Header,{children:"Upload more images"}),Object(c.jsx)(U.a.Content,{children:Object(c.jsx)("p",{children:"Uploading an extra image can improve prediction. Would you like to do so?"})}),Object(c.jsxs)(U.a.Actions,{children:[Object(c.jsxs)(T.a,{color:"red",onClick:function(){l(!1),n()},children:[Object(c.jsx)(A.a,{name:"remove"})," No"]}),Object(c.jsxs)(T.a,{color:"green",onClick:function(){return l(!1)},children:[Object(c.jsx)(A.a,{name:"checkmark"})," Yes"]})]})]})]})};return Object(c.jsxs)(u.a,{placeholder:!0,children:[Object(c.jsxs)(w.a,{horizontal:t,verticalAlign:"middle",children:[b.map((function(t,n){return Object(c.jsxs)(w.a.Item,{children:[Object(c.jsx)(h.a,{}),Object(c.jsx)(w.a.Content,{children:Object(c.jsxs)(u.a,{basic:!0,children:[Object(c.jsx)(h.a,{centered:!0,rounded:!0,src:t,size:"medium"}),Object(c.jsx)(x,{onClick:function(){return e.onRemovePressed(n)}})]})})]},n)})),n.length<4&&Object(c.jsxs)(w.a.Item,{children:[Object(c.jsx)(h.a,{}),Object(c.jsx)(w.a.Content,{children:Object(c.jsx)(E,{allowCamera:o,onClick:s})})]})]}),Object(c.jsx)(P.a,{}),Object(c.jsx)(m,{numImagesUploaded:n.length,onClick:r})]})},B=n(291),G=function(e){var t=e.status;return Object(c.jsxs)(B.a.Group,{unstackable:!0,children:[Object(c.jsxs)(B.a,{active:"AWAIT"===t,children:[Object(c.jsx)(A.a,{name:"upload"}),Object(c.jsx)(B.a.Content,{children:Object(c.jsx)(B.a.Title,{children:"Upload "})})]}),Object(c.jsxs)(B.a,{active:"AWAIT"!==t,children:[Object(c.jsx)(A.a,{name:"magic"}),Object(c.jsx)(B.a.Content,{children:Object(c.jsx)(B.a.Title,{children:"Predict"})})]})]})},H=n(122);var q=function(){var e=Object(i.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1],s=Object(i.useState)("AWAIT"),m=Object(j.a)(s,2),f=m[0],p=m[1],g=Object(i.useState)(),v=Object(j.a)(g,2),C=v[0],k=v[1],w=Object(i.useState)(!1),A=Object(j.a)(w,2),I=A[0],T=A[1];Object(i.useEffect)((function(){p("AWAIT")}),[n]),Object(i.useEffect)((function(){if(I){var e=setTimeout((function(){return T(!1)}),2500);return function(){return clearTimeout(e)}}}),[I]);var P=function(e){e.preventDefault(),r((function(t){return[].concat(Object(o.a)(t),Object(o.a)(e.target.files))}))},R=function(){var e=new FormData;n.forEach((function(t,n){e.append("file[]",t)})),p("LOADING"),fetch("/predict",{method:"POST",body:e}).then((function(e){return e.json()})).then((function(e){setTimeout((function(){k(e),p("FINISHED")}),500)})).catch((function(e){console.error(e),p("AWAIT"),T(!0)}))},S=function(e){e.visible;return Object(c.jsx)(l.a,{visible:I,animation:"fade up",duration:500,children:Object(c.jsx)(d.a,{style:{position:"absolute",width:"20vw",bottom:10,right:10},children:Object(c.jsxs)(b.a,{negative:!0,children:[Object(c.jsx)(b.a.Header,{children:"Server error"}),Object(c.jsx)("p",{children:"Please try again later"})]})})})},U=function(e){if(-1!==e){var t=Array.from(n);t.splice(e,1),r(t)}},W=function(){return"AWAIT"!==f?Object(c.jsx)(y,{loading:"LOADING"===f,response:C}):n.length?Object(c.jsx)(z,{images:n,onPredictPressed:R,onAddPressed:P,onRemovePressed:U,allowCamera:!H.isBrowser}):Object(c.jsx)(D,{allowCamera:!H.isBrowser,onClick:P})};return Object(c.jsxs)(a.a.Fragment,{children:[Object(c.jsxs)(u.a,{basic:!0,padded:"very",textAlign:"center",style:{display:"flex",minHeight:"100vh",flexDirection:"column",margin:0},children:[Object(c.jsx)(h.a,{centered:!0,src:x,size:"small"}),Object(c.jsx)(O.a,{as:"h1",children:"Know Your Avocado!"}),Object(c.jsx)("p",{children:"Say No to Unripe Avocados."}),Object(c.jsx)(G,{}),Object(c.jsx)(W,{})]}),Object(c.jsx)(S,{visible:I}),Object(c.jsx)(F,{})]})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,299)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))};n(269);s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(q,{})}),document.getElementById("root")),Y()}},[[270,1,2]]]);
//# sourceMappingURL=main.d0a890d2.chunk.js.map