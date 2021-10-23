(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{17:function(e,t,n){e.exports={card:"card_card__1py-W",bright:"card_bright__311wN",green:"card_green__3ohQZ",red:"card_red__154ez",blue:"card_blue__33omM",profile:"card_profile__1ZyC9",imgContainer:"card_imgContainer__3RXfC",avatar:"card_avatar__33lzN",info:"card_info__2Fslj",name:"card_name__31aE7",subinfo:"card_subinfo__3ZKFh",position:"card_position__IZGNR",email:"card_email__3uHYI",ph:"card_ph__2pPK_",company:"card_company__3UM9t"}},22:function(e,t,n){e.exports={form:"cardAddForm_form__2QF72",inputContainer:"cardAddForm_inputContainer__3aCPC",input:"cardAddForm_input__34y7D",choose:"cardAddForm_choose__3-Cbm",select:"cardAddForm_select__3ml8F",button:"cardAddForm_button__f-gwt"}},23:function(e,t,n){e.exports={form:"cardEditForm_form__3gtCZ",inputContainer:"cardEditForm_inputContainer__3kMzG",input:"cardEditForm_input__3fiun",choose:"cardEditForm_choose__35Iuf",select:"cardEditForm_select__Zw0FR",upload:"cardEditForm_upload__2wdEu",button:"cardEditForm_button__pIG48"}},30:function(e,t,n){e.exports={login:"login_login__19aQM",loginOption:"login_loginOption__3cwBJ",googleLogin:"login_googleLogin__clE0A",githubLogin:"login_githubLogin__14T9Q"}},33:function(e,t,n){e.exports={input:"imageInput_input__WcOjh",button:"imageInput_button__K-6HV",loadingSpinner:"imageInput_loadingSpinner__1iYtT",spin:"imageInput_spin__1KYU4",grey:"imageInput_grey__exAo4",pink:"imageInput_pink__3jL9v"}},41:function(e,t,n){e.exports={header:"loginHeader_header__XEdNq",logo:"loginHeader_logo__tjYMU",title:"loginHeader_title__3jHDo"}},42:function(e,t,n){e.exports={headerBg:": rgba(72, 106, 179, 1)",header:"header_header__1iAdp",title:"header_title__pSLbL",button:"header_button__3Fo82"}},46:function(e,t,n){e.exports={editorBg:"#7c8cdc",maker:"cardEditor_maker__2XB6K",title:"cardEditor_title__3Igm-"}},47:function(e,t,n){e.exports={previewBg:"#b4c1ff",preview:"cardPreview_preview__2UBWQ",title:"cardPreview_title__cPI12"}},48:function(e,t,n){e.exports={footer:"footer_footer__EZ95G"}},49:function(e,t,n){e.exports={mediaQuery:"54rem",main:"maker_main__3px5-",cardContainer:"maker_cardContainer__1AsAx"}},53:function(e,t,n){e.exports={app:"app_app__cewju"}},58:function(e,t,n){e.exports={button:"button_button__3_GL1"}},65:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(28),c=n(8),i=n.n(c),r=n(52),s=n.n(r),o=(n(65),n(34)),l=n(12),u=n(53),d=n.n(u),j=n(41),b=n.n(j),m=n(7),p=function(){return Object(m.jsxs)("header",{className:b.a.header,children:[Object(m.jsx)("img",{className:b.a.logo,src:"/images/logo.png",alt:"logo"}),Object(m.jsx)("h1",{className:b.a.title,children:"Business Card Maker"})]})},h=n(30),f=n.n(h),O=n(56),_=n(57),g=function(e){var t=e.authService,n=Object(l.f)(),a=function(e){t.login(e.currentTarget.textContent).then((function(e){return i(e.user.uid)}))},i=function(e){n.push({pathname:"/main",state:{id:e}})};return Object(c.useEffect)((function(){t.onAuthChange((function(e){e&&i(e.uid)}))})),Object(m.jsxs)("section",{className:f.a.login,children:[Object(m.jsx)(p,{}),Object(m.jsxs)("ul",{className:f.a.loginOption,children:[Object(m.jsx)("h4",{children:"LOGIN"}),Object(m.jsx)("li",{children:Object(m.jsxs)("button",{onClick:a,className:"".concat(f.a.loginBtn," ").concat(f.a.googleLogin),children:[Object(m.jsx)(O.a,{className:f.a.icon}),"Sign in with Google"]})}),Object(m.jsx)("li",{children:Object(m.jsxs)("button",{onClick:a,className:"".concat(f.a.loginBtn," ").concat(f.a.githubLogin),children:[Object(m.jsx)(_.a,{className:f.a.icon}),"Sign in with Github"]})})]})]})},x=n(14),v=n(22),N=n.n(v),C=n(24),y=n(58),k=n.n(y),w=Object(c.memo)((function(e){var t=e.name,n=e.onClick;return Object(m.jsx)("button",{className:k.a.button,onClick:n,children:t})})),F=Object(c.memo)((function(e){var t=e.FileInput,n=e.addAndUpdateCard,a=Object(C.useRef)(),i=Object(C.useRef)(),r=Object(C.useRef)(),s=Object(C.useRef)(),o=Object(C.useRef)(),l=Object(C.useRef)(),u=Object(C.useRef)(),d=Object(c.useState)({fileName:null,imgURL:null}),j=Object(x.a)(d,2),b=j[0],p=j[1];return Object(m.jsxs)("form",{ref:a,className:N.a.form,children:[Object(m.jsx)("h1",{children:" ADD "}),Object(m.jsxs)("div",{className:N.a.inputContainer,children:[Object(m.jsx)("input",{ref:i,className:N.a.input,type:"text",name:"name",maxlength:"15",placeholder:"Name"}),Object(m.jsx)("input",{ref:r,className:N.a.input,type:"text",name:"company",maxlength:"15",placeholder:"Company"}),Object(m.jsx)("input",{ref:s,className:N.a.input,type:"text",name:"position",maxlength:"20",placeholder:"Position"})]}),Object(m.jsxs)("div",{className:N.a.inputContainer,children:[Object(m.jsx)("input",{ref:o,className:N.a.input,type:"text",maxlength:"20",name:"email",placeholder:"Email"}),Object(m.jsx)("input",{ref:l,className:N.a.input,type:"text",maxlength:"15",name:"ph",placeholder:"phone"})]}),Object(m.jsxs)("div",{className:N.a.choose,children:[Object(m.jsxs)("select",{ref:u,className:N.a.select,name:"theme",children:[Object(m.jsx)("option",{defaultValue:!0,disabled:!0,value:"Choose theme",children:"choose theme"}),Object(m.jsx)("option",{value:"bright",children:"bright"}),Object(m.jsx)("option",{value:"green",children:"green"}),Object(m.jsx)("option",{value:"red",children:"red"}),Object(m.jsx)("option",{value:"blue",children:"blue"})]}),Object(m.jsx)("div",{className:N.a.uploadBtn,children:Object(m.jsx)(t,{name:b.fileName,onFileChange:function(e){p({fileName:e.name,imgURL:e.url})}})}),Object(m.jsx)("div",{className:N.a.button,children:Object(m.jsx)(w,{name:"Add",onClick:function(e){e.preventDefault();var t={id:Date.now(),name:i.current.value||"",company:r.current.value||"",position:s.current.value||"",email:o.current.value||"",ph:l.current.value||"",theme:u.current.value||"",fileName:b.fileName||"",imgURL:b.imgURL||""};a.current.reset(),p({fileName:null,imgURL:null}),n(t)}})})]})]})})),A=n(3),R=n(23),I=n.n(R),L=Object(c.memo)((function(e){var t=e.FileInput,n=e.card,i=e.addAndUpdateCard,r=e.deleteCard,s=n.name,o=n.company,l=n.theme,u=n.ph,d=n.position,j=n.email,b=n.fileName,p=Object(c.useRef)(),h=Object(c.useRef)(),f=Object(c.useRef)(),O=Object(c.useRef)(),_=Object(c.useRef)(),g=Object(c.useRef)(),x=function(e){null!==e.currentTarget.name&&(e.preventDefault(),i(Object(a.a)(Object(a.a)({},n),{},Object(A.a)({},e.currentTarget.name,e.currentTarget.value))))};return Object(m.jsxs)("form",{className:I.a.form,children:[Object(m.jsxs)("div",{className:I.a.inputContainer,children:[Object(m.jsx)("input",{ref:p,className:I.a.input,type:"text",name:"name",maxlength:"15",value:s,onChange:x}),Object(m.jsx)("input",{ref:h,className:I.a.input,type:"text",name:"company",maxlength:"15",value:o,onChange:x}),Object(m.jsx)("input",{ref:f,className:I.a.input,type:"text",name:"position",maxlength:"20",value:d,onChange:x})]}),Object(m.jsxs)("div",{className:I.a.inputContainer,children:[Object(m.jsx)("input",{ref:O,className:I.a.input,type:"text",name:"email",maxlength:"20",value:j,onChange:x}),Object(m.jsx)("input",{ref:_,className:I.a.input,type:"text",name:"ph",maxlength:"15",value:u,onChange:x})]}),Object(m.jsxs)("div",{className:I.a.choose,children:[Object(m.jsxs)("select",{ref:g,className:I.a.select,name:"theme",value:l,onChange:x,children:[Object(m.jsx)("option",{selected:"selected",disabled:!0,value:"Choose theme",children:"choose theme"}),Object(m.jsx)("option",{value:"bright",children:"bright"}),Object(m.jsx)("option",{value:"green",children:"green"}),Object(m.jsx)("option",{value:"red",children:"red"}),Object(m.jsx)("option",{value:"blue",children:"blue"})]}),Object(m.jsx)("div",{className:I.a.upload,children:Object(m.jsx)(t,{name:b,onFileChange:function(e){i(Object(a.a)(Object(a.a)({},n),{},{fileName:e.name,imgURL:e.url}))}})}),Object(m.jsx)("div",{className:I.a.button,children:Object(m.jsx)(w,{name:"Delete",onClick:function(){return r(n)}})})]})]})})),S=n(46),U=n.n(S),E=function(e){var t=e.FileInput,n=e.cards,a=e.addAndUpdateCard,c=e.deleteCard;return Object(m.jsxs)("section",{className:U.a.maker,children:[Object(m.jsx)("h1",{className:U.a.title,children:"Editor"}),Object.keys(n).map((function(e){return Object(m.jsx)(L,{FileInput:t,card:n[e],addAndUpdateCard:a,deleteCard:c},e)})),Object(m.jsx)(F,{FileInput:t,addAndUpdateCard:a})]})},P=n(17),B=n.n(P);function D(e){switch(e){case"bright":return B.a.bright;case"green":return B.a.green;case"red":return B.a.red;case"blue":return B.a.blue}}var G=Object(c.memo)((function(e){var t=e.card,n=t.name,a=t.company,c=t.ph,i=t.position,r=t.email,s=t.imgURL,o=t.theme,l=s||"/images/default_user.png";return Object(m.jsxs)("li",{className:"".concat(B.a.card," ").concat(D(o)),children:[Object(m.jsxs)("div",{className:B.a.profile,children:[Object(m.jsx)("div",{className:B.a.imgContainer,children:Object(m.jsx)("img",{className:B.a.avatar,src:l,alt:"profile"})}),Object(m.jsx)("h4",{className:B.a.company,children:a})]}),Object(m.jsxs)("div",{className:B.a.info,children:[Object(m.jsx)("h1",{className:B.a.name,children:n}),Object(m.jsxs)("div",{className:B.a.subinfo,children:[Object(m.jsx)("p",{className:B.a.position,children:i}),Object(m.jsxs)("p",{className:B.a.email,children:[" ",r]}),Object(m.jsx)("p",{className:B.a.ph,children:c})]})]})]})})),M=n(47),T=n.n(M),K=function(e){var t=e.cards;return Object(m.jsxs)("section",{className:T.a.preview,children:[Object(m.jsx)("h1",{className:T.a.title,children:"Preview"}),Object.keys(t).map((function(e){return Object(m.jsx)(G,{card:t[e]},e)}))]})},Q=n(48),Z=n.n(Q),H=Object(C.memo)((function(){return Object(m.jsx)("div",{className:Z.a.footer,children:Object(m.jsx)("p",{className:Z.a.footer,children:"2021 copyright @Daniel Chung"})})})),z=n(42),J=n.n(z),W=Object(C.memo)((function(e){var t=e.onLogout;return Object(m.jsxs)("header",{className:J.a.header,children:[Object(m.jsx)("h1",{className:J.a.title,children:"Business Card Maker"}),t&&Object(m.jsx)("button",{className:J.a.button,onClick:t,children:"LOGOUT"})]})})),Y=n(49),V=n.n(Y),X=function(e){var t,n=e.FileInput,i=e.authService,r=e.cardRepository,s=Object(l.f)(),o=null===s||void 0===s||null===(t=s.location)||void 0===t?void 0:t.state,u=Object(c.useState)({}),d=Object(x.a)(u,2),j=d[0],b=d[1],p=Object(c.useState)(o&&o.id),h=Object(x.a)(p,2),f=h[0],O=h[1],_=Object(c.useCallback)((function(){i.logout()}),[i]);Object(c.useEffect)((function(){if(f){var e=r.syncCards(f,(function(e){b(e)}));return function(){return e()}}}),[f,r]);return Object(c.useEffect)((function(){i.onAuthChange((function(e){e?O(e.uid):s.push("/")}))}),[i,f,s]),Object(m.jsxs)("section",{className:V.a.main,children:[Object(m.jsx)(W,{onLogout:_}),Object(m.jsxs)("div",{className:V.a.cardContainer,children:[Object(m.jsx)(E,{FileInput:n,cards:j,addAndUpdateCard:function(e){b((function(t){var n=Object(a.a)({},t);return n[e.id]=e,n})),r.saveCard(f,e)},deleteCard:function(e){b((function(t){var n=Object(a.a)({},t);return delete n[e.id],n})),r.removeCard(f,e)}}),Object(m.jsx)(K,{cards:j})]}),Object(m.jsx)(H,{})]})};var q=function(e){var t=e.FileInput,n=e.authService,a=e.cardRepository;return Object(m.jsx)(o.a,{children:Object(m.jsx)("div",{className:d.a.app,children:Object(m.jsxs)(l.c,{children:[Object(m.jsx)(l.a,{exact:!0,path:"/",children:Object(m.jsx)(g,{authService:n})}),Object(m.jsx)(l.a,{path:"/main",children:Object(m.jsx)(X,{cardRepository:a,FileInput:t,authService:n})})]})})})},$=n(5),ee=n(6),te=n(39),ne=function(){function e(t){Object($.a)(this,e),this.firebaseAuth=Object(te.c)(t),this.googleProvider=new te.b,this.githubProvider=new te.a}return Object(ee.a)(e,[{key:"login",value:function(e){var t=this.getProvider(e);return Object(te.d)(this.firebaseAuth,t)}},{key:"logout",value:function(){this.firebaseAuth.signOut()}},{key:"onAuthChange",value:function(e){this.firebaseAuth.onAuthStateChanged((function(t){return e(t)}))}},{key:"getProvider",value:function(e){switch(e){case"Sign in with Google":return this.googleProvider;case"Sign in with Github":return this.githubProvider;default:console.log("not supported provider : ".concat(e," "))}}}]),e}(),ae=n(59),ce=Object(ae.a)({apiKey:"AIzaSyDuPAaRfBAvJJsb7GxpRwVfAQ5ULK4WbNg",authDomain:"business-card-775fd.firebaseapp.com",projectId:"business-card-775fd"}),ie=n(1),re=n.n(ie),se=n(4),oe=function(){function e(){Object($.a)(this,e)}return Object(ee.a)(e,[{key:"upload",value:function(){var e=Object(se.a)(re.a.mark((function e(t){var n,a;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("file",t),n.append("upload_preset","vwodzywe"),e.next=5,fetch("https://api.cloudinary.com/v1_1/dilkjksbn/upload",{method:"POST",body:n});case 5:return a=e.sent,e.next=8,a.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),le=n(33),ue=n.n(le),de=Object(c.memo)((function(e){var t=e.imageUploader,n=e.name,a=e.onFileChange,i=Object(c.useState)(!1),r=Object(x.a)(i,2),s=r[0],o=r[1],l=Object(c.useRef)(),u=function(){var e=Object(se.a)(re.a.mark((function e(n){var c;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,t.upload(n.target.files[0]);case 3:c=e.sent,o(!1),a({name:c.original_filename,url:c.url});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:ue.a.container,children:[Object(m.jsx)("input",{ref:l,type:"file",className:ue.a.input,accept:"image/*",name:"file",onChange:u}),!s&&Object(m.jsx)("button",{className:"".concat(ue.a.button," ").concat(n?ue.a.pink:ue.a.grey),onClick:function(e){e.preventDefault(),l.current.click()},children:n||"Upload Profile"}),s&&Object(m.jsx)("div",{className:ue.a.loadingSpinner})]})})),je=n(31),be=function(){function e(t){Object($.a)(this,e),this.db=Object(je.a)(t)}return Object(ee.a)(e,[{key:"syncCards",value:function(e,t){var n=Object(je.d)(this.db,"".concat(e,"/cards"));return Object(je.c)(n,(function(e){var n=e.val();n&&t(n)})),function(){return Object(je.b)(n)}}},{key:"saveCard",value:function(e,t){Object(je.f)(Object(je.d)(this.db,"".concat(e,"/cards/").concat(t.id)),t)}},{key:"removeCard",value:function(e,t){Object(je.e)(Object(je.d)(this.db,"".concat(e,"/cards/").concat(t.id)))}}]),e}(),me=new ne(ce),pe=new oe,he=new be(ce);s.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(o.a,{children:Object(m.jsx)(q,{authService:me,FileInput:function(e){return Object(m.jsx)(de,Object(a.a)(Object(a.a)({},e),{},{imageUploader:pe}))},cardRepository:he})})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.ae781dee.chunk.js.map