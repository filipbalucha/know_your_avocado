(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{158:function(e,t,n){},310:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),i=n.n(c),o=n(64),r=n.n(o),s=n(31),l=n(337),j=n(187),d=n(339),b=n.p+"static/media/avocado.9fb67f28.PNG",u=n(324),h=n(338),O=n(331),x=n(57),m=n(340),p=(new Date).getFullYear(),f=function(e){var t=Object(m.a)().t,n=Object(c.useState)(null),i=Object(s.a)(n,2),o=i[0],r=i[1];return fetch("/model_accuracy",{method:"GET"}).then((function(e){return e.json()})).then((function(e){var t,n=e.accuracy;r((t=n,Math.round(100*t)+"%"))})).catch((function(e){console.error(e)})),Object(a.jsx)(l.a,{inverted:!0,vertical:!0,style:{padding:"1.5em 0em",width:"100%",bottom:0,flex:1},children:Object(a.jsx)(u.a,{children:Object(a.jsx)(h.a,{divided:!0,inverted:!0,stackable:!0,children:Object(a.jsxs)(h.a.Row,{children:[Object(a.jsxs)(h.a.Column,{width:3,children:[Object(a.jsx)(d.a,{inverted:!0,as:"h4",content:t("author")}),Object(a.jsxs)("p",{children:["Filip Balucha \xa9",p]})]}),Object(a.jsxs)(h.a.Column,{width:7,children:[Object(a.jsx)(d.a,{as:"h4",inverted:!0,content:t("why")}),Object(a.jsx)("p",{children:t("motivation",{model:"ResNet-18 CNN",accuracy:o})})]}),Object(a.jsxs)(h.a.Column,{width:3,children:[Object(a.jsx)(d.a,{inverted:!0,as:"h4",content:"Cookies"}),Object(a.jsx)("p",{children:t("cookie_use")})]}),Object(a.jsxs)(h.a.Column,{width:3,children:[Object(a.jsx)(d.a,{as:"h4",inverted:!0,content:t("contact")}),Object(a.jsxs)(O.a,{horizontal:!0,inverted:!0,verticalAlign:"middle",children:[Object(a.jsx)(O.a.Item,{href:"https://www.linkedin.com/in/filip-balucha/",children:Object(a.jsx)(x.a,{name:"linkedin"})}),Object(a.jsx)(O.a.Item,{href:"https://github.com/filipbalucha",children:Object(a.jsx)(x.a,{name:"github"})}),Object(a.jsx)(O.a.Item,{href:"https://www.facebook.com/filiposlav",children:Object(a.jsx)(x.a,{name:"facebook"})}),Object(a.jsx)(O.a.Item,{href:"mailto: ".concat("balucha.filip2@gmail.com"),children:Object(a.jsx)(x.a,{name:"mail"})})]}),Object(a.jsx)("p",{children:t("get_in_touch")})]})]})})})})},g=n(333),v=function(e){var t=e.status,n=Object(m.a)().t;return Object(a.jsxs)(g.a.Group,{unstackable:!0,children:[Object(a.jsxs)(g.a,{active:"AWAIT"===t,children:[Object(a.jsx)(x.a,{name:"upload"}),Object(a.jsx)(g.a.Content,{children:Object(a.jsxs)(g.a.Title,{children:[n("upload")," "]})})]}),Object(a.jsxs)(g.a,{active:"AWAIT"!==t,children:[Object(a.jsx)(x.a,{name:"magic"}),Object(a.jsx)(g.a.Content,{children:Object(a.jsx)(g.a.Title,{children:n("predict")})})]})]})},k=n(329),C=n(328),y=function(e){return Object(a.jsx)(C.a,{item:!0,button:!0,text:Object(a.jsx)(x.a,{name:"world"}),options:[{key:"English",text:"EN \ud83c\uddec\ud83c\udde7",value:"gb"},{key:"Slovak",text:"SK \ud83c\uddf8\ud83c\uddf0",value:"sk"}],onChange:function(t,n){var a=n.value;return e.setLanguage(a)}})},w=n(342),_=(n(158),function(e){var t={margin:10};return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)(x.a,{name:"moon",style:t}),Object(a.jsx)(w.a,{toggle:!0,onChange:function(t,n){var a=n.checked;return e.onChange(a)}}),Object(a.jsx)(x.a,{name:"sun",style:t})]})}),A=function(e){return Object(a.jsx)(k.a,{borderless:!0,fixed:"top",style:{borderBottom:"1px solid #d2d880"},children:Object(a.jsxs)(u.a,{children:[Object(a.jsxs)(k.a.Item,{header:!0,children:[Object(a.jsx)(j.a,{size:"mini",src:b,style:{marginRight:"1.5em"}}),"KYA!"]}),Object(a.jsx)(k.a.Item,{position:"right",children:Object(a.jsx)(_,{onChange:function(){}})}),Object(a.jsx)(k.a.Item,{children:Object(a.jsx)(y,{setLanguage:e.setLanguage})})]})})},I=n(153),S=n(188),T=n(184),z=n(327),F=n(335),N=n(325),P=(n(307),function(e){var t=e.response,n=t.result,c=t.summary,i=Object(m.a)().t,o=(100*n.probability).toFixed(2),r=i(n.category),s={labels:c.categories.map((function(e){return i(e)})),datasets:[{backgroundColor:["#d9a26f","#b5ba6a"],borderWidth:1,data:c.probabilities}]};return Object(a.jsxs)(h.a,{textAlign:"center",columns:"equal",children:[Object(a.jsx)(h.a.Row,{children:Object(a.jsx)(z.a,{content:"The percentage indicates to what extent the 'AI' is certain about its prediction. It does not quantify the ripeness of the \ud83e\udd51 as such.",header:"What does this mean?",trigger:Object(a.jsxs)(l.a,{basic:!0,children:[Object(a.jsxs)(d.a,{as:"h3",content:i(),children:[i("this_avocado")," ",Object(a.jsx)("i",{children:r})]}),Object(a.jsx)("p",{children:i("with_probability",{probability:o})})]})})}),Object(a.jsx)(h.a.Row,{children:Object(a.jsx)(l.a,{basic:!0,style:{height:"30vh"},children:Object(a.jsx)(T.Pie,{data:s,options:{maintainAspectRatio:!1,events:[],legend:{display:!1},plugins:{labels:{render:"label",fontColor:"white",fontSize:16}}}})})})]})}),L=function(e){var t=Object(m.a)().t;return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)(d.a,{as:"h3",content:t("cannot_spot")}),Object(a.jsx)("p",{children:t("retake_photo")})]})},R=function(e){var t=e.onClick,n=Object(m.a)().t;return Object(a.jsxs)(F.a,{animated:!0,onClick:t,children:[Object(a.jsx)(F.a.Content,{visible:!0,content:n("back")}),Object(a.jsx)(F.a.Content,{hidden:!0,children:Object(a.jsx)(x.a,{name:"arrow left"})})]})},W=function(e){var t,n=e.loading,c=e.onBackClicked,o=Object(m.a)().t;return n?Object(a.jsx)(N.a,{active:!0,content:o("loading")}):(t=e.response.fruit_visible?Object(a.jsx)(P,Object(S.a)({},e)):Object(a.jsx)(L,{}),Object(a.jsxs)(i.a.Fragment,{children:[t,Object(a.jsx)(R,{onClick:c})]}))},D=n(326),E=function(e){var t=Object(m.a)().t;return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)(F.a,{as:"label",htmlFor:"cameraInput",content:t("take_picture")}),Object(a.jsx)("input",{id:"cameraInput",type:"file",accept:"image/*",capture:"environment",hidden:!0,onChange:e.onClick})]})},U=function(e){var t=Object(m.a)().t;return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)(F.a,{as:"label",htmlFor:"libraryInput",content:t("upload_image")}),Object(a.jsx)("input",{id:"libraryInput",type:"file",accept:"image/*",multiple:!0,hidden:!0,onChange:e.onClick})]})},B=function(e){var t=Object(m.a)().t,n=e.allowCamera,c=e.onClick;return n?Object(a.jsxs)(h.a,{columns:2,textAlign:"center",children:[Object(a.jsx)(D.a,{vertical:!0,content:t("or")}),Object(a.jsxs)(h.a.Row,{verticalAlign:"middle",children:[Object(a.jsxs)(h.a.Column,{children:[Object(a.jsx)(d.a,{icon:!0,children:Object(a.jsx)(x.a,{name:"photo"})}),Object(a.jsx)(E,{onClick:c})]}),Object(a.jsxs)(h.a.Column,{children:[Object(a.jsx)(d.a,{icon:!0,children:Object(a.jsx)(x.a,{name:"images"})}),Object(a.jsx)(U,{onClick:c})]})]})]}):Object(a.jsxs)(l.a,{basic:!0,children:[Object(a.jsx)(d.a,{icon:!0,children:Object(a.jsx)(x.a,{name:"images"})}),Object(a.jsx)(U,{onClick:c})]})},G=n(332),M=n(132),q=function(e){var t=e.onClick,n=Object(c.useRef)(null);return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)(F.a,{icon:"camera",onClick:function(){return n.current.click()}}),Object(a.jsx)("input",{ref:n,type:"file",accept:"image/*",capture:"environment",hidden:!0,onChange:t})]})},H=function(e){var t=e.onClick,n=e.icon,o=Object(c.useRef)(null);return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)(F.a,{icon:n,onClick:function(){return o.current.click()}}),Object(a.jsx)("input",{ref:o,type:"file",accept:"image/*",multiple:!0,hidden:!0,onChange:t})]})},K=function(e){var t=e.allowCamera,n=e.onClick;return t?Object(a.jsx)(z.a,{trigger:Object(a.jsx)(F.a,{icon:"plus"}),flowing:!0,hoverable:!0,mouseEnterDelay:150,mouseLeaveDelay:150,children:Object(a.jsxs)(h.a,{divided:!0,columns:"equal",children:[Object(a.jsx)(h.a.Column,{children:Object(a.jsx)(q,{onClick:n})}),Object(a.jsx)(h.a.Column,{children:Object(a.jsx)(H,{onClick:n,icon:"image"})})]})}):Object(a.jsx)(H,{onClick:n,icon:"plus"})},Y=function(e){var t=Object(M.useMediaQuery)({minDeviceWidth:1224}),n=e.images,o=e.onPredictPressed,r=e.onAddPressed,b=e.allowCamera,u=Object(c.useState)([]),h=Object(s.a)(u,2),p=h[0],f=h[1];Object(c.useEffect)((function(){p.forEach((function(e){return URL.revokeObjectURL(e)}));var e=n.map((function(e){return URL.createObjectURL(e)}));f(e)}),[n]);var g=function(e){return Object(a.jsx)(F.a,{size:"medium",icon:"trash alternate",color:"red",circular:!0,style:{position:"absolute",top:20,left:20},onClick:e.onClick})},v=function(e){var t=Object(c.useState)(!1),n=Object(s.a)(t,2),o=n[0],r=n[1],l=Object(m.a)().t;return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsxs)(F.a,{fluid:!0,animated:!0,onClick:function(){e.numImagesUploaded<2?r(!0):e.onClick()},children:[Object(a.jsx)(F.a.Content,{visible:!0,content:l("predict")}),Object(a.jsx)(F.a.Content,{hidden:!0,content:Object(a.jsx)(x.a,{name:"arrow right"})})]}),Object(a.jsxs)(G.a,{size:"tiny",open:o,onClose:function(){return r(!1)},children:[Object(a.jsx)(d.a,{icon:"camera",content:l("upload_extra")}),Object(a.jsx)(G.a.Content,{children:Object(a.jsx)("p",{children:l("upload_extra_detail")})}),Object(a.jsxs)(G.a.Actions,{children:[Object(a.jsxs)(F.a,{color:"red",onClick:function(){r(!1),e.onClick()},children:[Object(a.jsx)(x.a,{name:"remove"})," ",l("no")]}),Object(a.jsxs)(F.a,{color:"green",onClick:function(){return r(!1)},children:[Object(a.jsx)(x.a,{name:"checkmark"})," ",l("yes")]})]})]})]})};return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsxs)(O.a,{horizontal:t,verticalAlign:"middle",children:[p.map((function(t,n){return Object(a.jsxs)(O.a.Item,{children:[Object(a.jsx)(j.a,{}),Object(a.jsx)(O.a.Content,{children:Object(a.jsxs)(l.a,{basic:!0,children:[Object(a.jsx)(j.a,{centered:!0,rounded:!0,src:t,size:"medium"}),Object(a.jsx)(g,{onClick:function(){return e.handleRemovePressed(n)}})]})})]},n)})),n.length<4&&Object(a.jsxs)(O.a.Item,{children:[Object(a.jsx)(j.a,{}),Object(a.jsx)(O.a.Content,{children:Object(a.jsx)(K,{allowCamera:b,onClick:r})})]})]}),Object(a.jsx)(D.a,{}),Object(a.jsx)(v,{numImagesUploaded:n.length,onClick:o})]})},J=n(151),Q=function(e){var t=e.status,n=e.setStatus,i=e.setError,o=Object(c.useState)([]),r=Object(s.a)(o,2),j=r[0],d=r[1],b=Object(c.useState)(),u=Object(s.a)(b,2),h=u[0],O=u[1];Object(c.useEffect)((function(){n("AWAIT")}),[j,n]);var x,m=function(e){e.preventDefault(),d((function(t){var n=[].concat(Object(I.a)(t),Object(I.a)(e.target.files)),a=n.map((function(e){return e.name}));return n=n.filter((function(e,t){return a.indexOf(e.name)===t}))}))};return x="AWAIT"!==t?Object(a.jsx)(W,{loading:"LOADING"===t,response:h,onBackClicked:function(){return n("AWAIT")}}):j.length?Object(a.jsx)(Y,{images:j,onPredictPressed:function(){var e=new FormData;j.forEach((function(t,n){e.append("file[]",t)})),n("LOADING"),fetch("/predict",{method:"POST",body:e}).then((function(e){return e.json()})).then((function(e){O(e),n("FINISHED")})).catch((function(e){console.error(e),n("AWAIT"),i(!0)}))},onAddPressed:m,handleRemovePressed:function(e){if(-1!==e){var t=Array.from(j);t.splice(e,1),d(t)}},allowCamera:!J.isBrowser}):Object(a.jsx)(B,{allowCamera:!J.isBrowser,onClick:m}),Object(a.jsx)(l.a,{placeholder:!0,content:x})},V=n(330),X=n(334),Z=function(e){var t=e.visible,n=Object(M.useMediaQuery)({minDeviceWidth:1224}),c=Object(m.a)().t,i=n?"fade left":"fade down",o=n?{position:"absolute",width:"20vw",bottom:"1em",right:"1em",opacity:.9}:{position:"fixed",width:"100%",top:15,left:0,right:0,opacity:.9,zIndex:2};return Object(a.jsx)(V.a,{visible:t,animation:i,duration:500,children:Object(a.jsx)(u.a,{style:o,children:Object(a.jsxs)(X.a,{negative:!0,children:[Object(a.jsx)(X.a.Header,{children:c("server_error")}),Object(a.jsx)("p",{children:c("retry_later")})]})})})},$=n(152),ee=n(186),te=n(101);$.a.use(ee.a).use(te.e).init({fallbackLng:"en",debug:!0,defaultNS:"translations",keySeparator:!1,react:{wait:!0},resources:{en:{translations:{motto:"Say No to Unripe Avocados.",upload:"Upload",predict:"Predict",upload_extra:"Upload more images?",upload_extra_detail:"Uploading an extra image can improve prediction. Would you like to do so?",no:"No",yes:"Yes",server_error:"Server error",retry_later:"Please try again later",why:"Why?",author:"Author",motivation:"I struggle to tell ripe avocados from unripe ones, so I trained a deep learning model based on the {{model}} with a {{accuracy}} accuracy to help with the task. Hope it can help you too \ud83d\ude0a",cookie_use:"This website doesn't use \ud83c\udf6a",contact:"Contact",get_in_touch:"Get in touch if you have any requests or suggestions \ud83d\udc4d\ud83c\udffc",take_picture:"Take a picture",upload_image:"Upload an image",or:"Or",loading:"Loading",avocado_ripe:"ripe",avocado_unripe:"unripe",with_probability:"with a {{probability}}% probability",this_avocado:"This \ud83e\udd51 is",cannot_spot:"Sorry, I was unable to spot any \ud83e\udd51",retake_photo:"Could you try retaking the photo?",back:"Back"}},sk:{translations:{motto:"Povedz nie nezrel\xfdm avok\xe1dam.",upload:"Nahra\u0165",predict:"Predpoveda\u0165",upload_extra:"Nahra\u0165 viac fotiek?",upload_extra_detail:"Nahraj e\u0161te jednu fotku a zlep\u0161i tak predikciu. Ide\u0161 do toho?",no:"Nie",yes:"\xc1no",server_error:"Chyba serveru",retry_later:"Sk\xfas to nesk\xf4r, pros\xedm",author:"Autor",why:"Ale... na\u010do?",motivation:"\u010casto neviem rozozna\u0165 zrel\xe9 avok\xe1do od nezrel\xe9ho, tak som sa rozhodol natr\xe9nova\u0165 model pomocou hlbok\xe9ho u\u010denia, aby mi s t\xfdm pomohol. Model je postaven\xfd na modeli {{model}} a m\xe1 {{accuracy}} presnos\u0165. D\xfafam, \u017ee pom\xf4\u017ee aj tebe \ud83d\ude0a",cookie_use:"T\xe1to str\xe1nka nepou\u017e\xedva \ud83c\udf6a",contact:"Kontakt",get_in_touch:"Ak m\xe1\u0161 n\xe1pad na zlep\u0161enie, tak ma ur\u010dite kontaktuj \ud83d\udc4d\ud83c\udffc",upload_image:"Nahraj fotku",take_picture:"Odfo\u0165 fotku",or:"Alebo",loading:"Na\u010d\xedtavam",avocado_ripe:"zrel\xe9",avocado_unripe:"nezrel\xe9",with_probability:"s {{probability}}% pravdepodobnos\u0165ou",this_avocado:"Toto \ud83e\udd51 je",cannot_spot:"Nevid\xedm \u017eiadne \ud83e\udd51",retake_photo:"Odfotil(a) by si ho e\u0161te raz, pros\xedm?",back:"Spa\u0165"}}}});var ne=$.a,ae=function(){var e=Object(c.useState)("AWAIT"),t=Object(s.a)(e,2),n=t[0],o=t[1],r=Object(c.useState)(!1),u=Object(s.a)(r,2),h=u[0],O=u[1],x=Object(m.a)().t;Object(c.useEffect)((function(){if(h){var e=setTimeout((function(){return O(!1)}),2500);return function(){return clearTimeout(e)}}}),[h]);return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsxs)(l.a,{basic:!0,padded:"very",textAlign:"center",style:{paddingTop:"5em",display:"flex",minHeight:"100vh",flexDirection:"column",margin:0},children:[Object(a.jsx)(A,{setLanguage:function(e){ne.changeLanguage(e)}}),Object(a.jsx)(j.a,{centered:!0,src:b,size:"small"}),Object(a.jsx)(d.a,{as:"h1",children:"Know Your Avocado!"}),Object(a.jsx)("p",{children:x("motto")}),Object(a.jsx)(v,{status:n,handleUploadClicked:function(){return o("AWAIT")}}),Object(a.jsx)(Q,{status:n,setStatus:o,setError:O})]}),Object(a.jsx)(Z,{visible:h}),Object(a.jsx)(f,{})]})},ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,343)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),i(e),o(e)}))};n(309);r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(c.Suspense,{fallback:Object(a.jsx)(c.Spinner,{}),children:Object(a.jsx)(ae,{})})}),document.getElementById("root")),ce()}},[[310,1,2]]]);
//# sourceMappingURL=main.a7f59981.chunk.js.map