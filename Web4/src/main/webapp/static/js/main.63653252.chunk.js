(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{15:function(e,t,n){},85:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),s=n.n(a),c=n(8),o=n.n(c),i=(n(15),n(26)),h=n(27),l=n(37),u=n(36),p=n(9),d=n(28);var f=Object(d.a)((function(e,t){switch(t.type){case"TOKEN_CLEAR":return sessionStorage.clear(),{token:t.token};case"TOKEN_UPDATE":return sessionStorage.setItem("access_token",t.rtoken),{token:t.token};case"NEW_TOKEN":return sessionStorage.setItem("access_token",t.token),sessionStorage.setItem("refresh_token",t.rtoken),{token:t.token};default:return e}}),{token:sessionStorage.getItem("access_token")});f.subscribe((function(){return console.log(f.getState())}));var m=f,j=n(6),b=n(14),v=n(30),x=n(31);var g=function(e){var t=e.x,n=e.setX,a=e.xs,s=e.string;return Object(r.jsxs)("span",{children:[t.id+"-> ",Object(r.jsx)(x.Checkbox,{checked:t.check,onChange:function(){return e=t.id,void n(a.map((function(t){return t.id===e?t.check=!t.check:"r"===s&&(t.check=!1),t})));var e}}),"\xa0\xa0"]})};var O=function(e){function t(){var t=0;return e.r.map((function(e){!0===e.check&&(t=e.id)})),t}return Object(r.jsx)("div",{className:"p-align-center p-fluid",children:Object(r.jsxs)("form",{children:[Object(r.jsx)(b.Messages,{ref:function(t){return e.messageText.current=t}}),Object(r.jsxs)("div",{className:"p-field p-grid",children:[Object(r.jsxs)("div",{className:"p-field p-grid ",children:[Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"x_value",className:"p-sm-2 p-md-4 p-xl-6",children:"X:"}),Object(r.jsx)("span",{className:"p-sm-12 p-md-7 p-xl-5 p-col",children:e.x.map((function(t){return Object(r.jsx)(g,{x:t,setX:e.setX,xs:e.x,string:"x"},t.id)}))})]}),Object(r.jsxs)("div",{className:"p-field p-grid ",children:[Object(r.jsx)("label",{htmlFor:"y_value",className:"p-sm-2 p-md-4 p-xl-6",children:"Y:"}),Object(r.jsx)("div",{className:"p-sm-12 p-md-7 p-xl-5 p-col",children:Object(r.jsx)(v.InputNumber,{id:"y_value",value:e.y,onValueChange:function(t){return e.setY(t.value)},mode:"decimal",min:-3,max:5,minFractionDigits:1,maxFractionDigits:5,placeholder:"Enter Y [-3;5]"})})]}),Object(r.jsxs)("div",{className:"p-field p-grid ",children:[Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"r_value",className:"p-sm-2 p-md-4 p-xl-6",children:"R:"}),Object(r.jsx)("span",{className:"p-sm-12 p-md-7 p-xl-5 p-col",children:e.r.map((function(t){return Object(r.jsx)(g,{x:t,setX:e.setR,xs:e.r,string:"r"},t.id)}))})]}),Object(r.jsx)("br",{}),Object(r.jsx)("div",{className:"p-sm-12 p-md-6  p-align-center p-col",children:Object(r.jsx)(j.Button,{type:"button",onClick:function(){e.x.map((function(n){!0===n.check&&e.validate()&&fetch("/api/app/area",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8",Authorization:"Bearer_".concat(m.getState().token)},body:JSON.stringify({x:n.id,y:e.y,r:t()})}).then((function(r){return r.text().then((function(a){r.ok&&e.setResults(JSON.parse(a)),403==r.status&&fetch("/api/refresh/token",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refresh_token:sessionStorage.getItem("refresh_token")})}).then((function(r){return r.json().then((function(a){r.ok?(m.dispatch({type:"TOKEN_UPDATE",token:a.token}),fetch("/api/app/area",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8",Authorization:"Bearer_".concat(m.getState().token)},body:JSON.stringify({x:n.id,y:e.y,r:t()})}).then((function(t){return t.text().then((function(n){t.ok?e.setResults(JSON.parse(n)):e.messageText.current.show({severity:"error",summary:"Refresh token error"})}))}))):e.messageText.current.show({severity:"error",summary:"Refresh token error"})}))}))}))}))}))},className:"p-button-primary p-margin",label:"Submit",icon:"pi"})}),Object(r.jsx)("br",{}),Object(r.jsx)("div",{className:"p-sm-12 p-md-6 p-xl-3 p-align-center p-col",children:Object(r.jsx)(j.Button,{type:"button",onClick:function(){fetch("/api/app/clear",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8",Authorization:"Bearer_".concat(m.getState().token)}}).then((function(t){t.ok&&e.setResults(null),403==t.status&&fetch("/api/refresh/token",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refresh_token:sessionStorage.getItem("refresh_token")})}).then((function(t){return t.json().then((function(n){t.ok?(m.dispatch({type:"TOKEN_UPDATE",token:n.token}),fetch("/api/app/clear",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8",Authorization:"Bearer_".concat(m.getState().token)}}).then((function(t){t.ok?e.setResults(null):e.messageText.current.show({severity:"error",summary:"Refresh token error"})}))):e.messageText.current.show({severity:"error",summary:"Refresh token error"})}))}))}))},className:"p-button-primary",label:"Clear",icon:"pi"})})]})]})})},k=function(){m.dispatch({type:"TOKEN_CLEAR",token:null})};var y=function(){return Object(r.jsxs)("div",{className:"p-align-center p-fluid",children:[Object(r.jsx)("div",{className:"p-sm-12 p-md-6 p-xl-3",children:Object(r.jsx)(j.Button,{type:"button",onClick:k,className:"p-button-primary p-margin",label:"Logout"})}),Object(r.jsx)("br",{})]})},T=n(11),N=n(32);var S=function(e){var t=Object(r.jsx)(j.Button,{type:"button",icon:"pi pi-refresh",className:"p-button-text"}),n=Object(r.jsx)(j.Button,{type:"button",icon:"pi pi-cloud",className:"p-button-text"});return Object(r.jsx)("div",{children:Object(r.jsxs)(N.DataTable,{id:"result_table",value:e.results,paginator:!0,rows:10,paginatorLeft:t,paginatorRight:n,children:[Object(r.jsx)(T.Column,{field:"x",header:"x"}),Object(r.jsx)(T.Column,{field:"y",header:"y"}),Object(r.jsx)(T.Column,{field:"r",header:"r"}),Object(r.jsx)(T.Column,{field:"res",header:"result"})]})})};function w(e){return e<0?-1:1}function _(e,t,n,r,a){var s=t-r;e.font="15px courier new",e.beginPath(),e.lineWidth=2,e.moveTo(t,n),e.lineTo(r,a),e.stroke(),e.beginPath(),e.moveTo(r,a),e.lineTo(r+7*w(s),a+7*w(s)),e.lineTo(r-7,a+7),e.fill()}function C(e,t){return e>t?t/6:e/6}function P(e,t,n,r){var a;e.strokeStyle="white",e.fillStyle="white";var s=e.canvas.height*t,c=e.canvas.width*n,o=(e.canvas.height-s)/2,i=(e.canvas.width-c)/2;a=C(c,s),_(e,i,.5*e.canvas.height,e.canvas.width-i,.5*e.canvas.height),e.fillText("X",e.canvas.width-i-10,.5*e.canvas.height+15),_(e,.5*e.canvas.width,e.canvas.height-o,.5*e.canvas.width,o),e.fillText("Y",.5*e.canvas.width+10,o+15);for(var h=0,l=-2;l<=2;l++)0!=l&&(e.fillText(r[h],e.canvas.width/2+6,e.canvas.height/2+a*l+5),e.beginPath(),e.moveTo(e.canvas.width/2-4,e.canvas.height/2+a*l),e.lineTo(e.canvas.width/2+4,e.canvas.height/2+a*l),e.stroke(),h++);for(var u=3,p=-2;p<=2;p++)0!=p&&(e.fillText(r[u],e.canvas.width/2+a*p-5,e.canvas.height/2-10),e.beginPath(),e.moveTo(e.canvas.width/2+a*p,e.canvas.height/2+4),e.lineTo(e.canvas.width/2+a*p,e.canvas.height/2-4),e.stroke(),u--)}function R(e,t){var n=function(e){var t=[];return null!==e&&0!==e?(e=parseFloat(e),t[0]=e,t[1]=e/2,t[2]=-e/2,t[3]=-e):t=["R","R/2","-R/2","-R"],t}(e);if(t.clearRect(0,0,t.canvas.width,t.canvas.height),0!==e){t.strokeStyle="#00A66F",t.fillStyle="#00A66F";var r=C(t.canvas.width,t.canvas.height),a=t.canvas.width/2,s=t.canvas.height/2;t.beginPath(),t.moveTo(a,s),t.arc(a,s,2*r,0,Math.PI/2,!1),t.fill(),t.beginPath(),t.moveTo(a,s),t.lineTo(a-r,s),t.lineTo(a,s-2*r),t.fill(),t.beginPath(),t.moveTo(a,s),t.lineTo(a+2*r,s),t.lineTo(a+2*r,s-2*r),t.lineTo(a,s-2*r),t.fill()}P(t,1,1,n),P(t,1,1,n)}function E(e,t,n,r,a,s,c){var o;o=0==n?0:2*C(c.canvas.width,c.canvas.height)/n,c.strokeStyle="rgba(".concat(a,",").concat(s,",0,").concat(r,")"),c.fillStyle="rgba(".concat(a,",").concat(s,",0,").concat(r,")"),c.beginPath(),c.moveTo(c.canvas.width/2+e*o,c.canvas.height/2-t*o),c.arc(c.canvas.width/2+e*o,c.canvas.height/2-t*o,4,0,2*Math.PI),c.fill()}function J(e,t,n){if(t.length>0){var r,a=1;r=t.length>5?t.length-5:0;for(var s=t.length-1;s>=r;s--)console.log(t[s].x+"                           "+parseFloat(t[s].x)),"true"==t[s].res?E(parseFloat(t[s].x),parseFloat(t[s].y),parseFloat(e),5/(5*a),0,255,n):E(parseFloat(t[s].x),parseFloat(t[s].y),parseFloat(e),5/(5*a),255,0,n),a++}}var F=function(e){var t=Object(a.useRef)();function n(){var t=0;return e.r.map((function(e){!0===e.check&&(t=e.id)})),t}return Object(a.useEffect)((function(){R(n(),t.current.getContext("2d")),null!=e.results&&J(n(),e.results,t.current.getContext("2d"))}),[R,J,e]),Object(r.jsx)("div",{children:Object(r.jsx)("canvas",{className:"p-align-center",width:"750",height:"500",ref:t,onClick:function(r){!function(e,t,n,r,a,s){var c=n,o=4*C(t.canvas.width,t.canvas.height)/c,i=e.nativeEvent.offsetX,h=e.nativeEvent.offsetY,l=(2*i-t.canvas.width)/o,u=-(2*h-t.canvas.height)/o;console.log((2*i-t.canvas.width)/o),r(l,-3,5)&&r(u,-5,5)&&r(n,-3,5)?fetch("/api/app/area",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8",Authorization:"Bearer_".concat(m.getState().token)},body:JSON.stringify({x:l,y:u,r:n})}).then((function(e){return e.text().then((function(t){e.ok&&s(JSON.parse(t)),403==e.status&&fetch("/api/refresh/token",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refresh_token:sessionStorage.getItem("refresh_token")})}).then((function(e){return e.json().then((function(t){e.ok?(m.dispatch({type:"TOKEN_UPDATE",token:t.token}),fetch("/api/app/area",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8",Authorization:"Bearer_".concat(m.getState().token)},body:JSON.stringify({x:l,y:u,r:n})}).then((function(e){return e.text().then((function(t){e.ok?s(JSON.parse(t)):a.current.show({severity:"error",summary:"Refresh token error"})}))}))):a.current.show({severity:"error",summary:"Refresh token error"})}))}))}))})):null!==a.current&&a.current.show({severity:"warn",summary:"Validation error"})}(r,t.current.getContext("2d"),n(),e.validateNumber,e.messageText,e.setResults)}})})};var A,B=function(){var e=Object(a.useState)(null),t=Object(p.a)(e,2),n=t[0],c=t[1],o=s.a.useState([{id:-3,check:!1},{id:-2,check:!1},{id:-1,check:!1},{id:0,check:!1},{id:1,check:!1},{id:2,check:!1},{id:3,check:!1},{id:4,check:!1},{id:5,check:!1}]),i=Object(p.a)(o,2),h=i[0],l=i[1],u=Object(a.useState)(null),d=Object(p.a)(u,2),f=d[0],j=d[1],b=s.a.useState([{id:1,check:!1},{id:2,check:!1},{id:3,check:!1},{id:4,check:!1},{id:5,check:!1}]),v=Object(p.a)(b,2),x=v[0],g=v[1],k=Object(a.useRef)();function T(e,t,n){var r=parseFloat(e);return!isNaN(r)&&r>=t&&r<=n}function N(){var e=0;return x.map((function(t){!0===t.check&&(e=t.id)})),e}return Object(a.useEffect)((function(){h.map((function(e){!0===e.check&&null===n&&fetch("/api/app/results",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8",Authorization:"Bearer_".concat(m.getState().token)}}).then((function(t){return t.text().then((function(n){t.ok&&c(JSON.parse(n)),403==t.status&&fetch("/api/refresh/token",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refresh_token:sessionStorage.getItem("refresh_token")})}).then((function(t){return t.json().then((function(n){t.ok?(m.dispatch({type:"TOKEN_UPDATE",token:n.token}),fetch("/api/app/area",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8",Authorization:"Bearer_".concat(m.getState().token)},body:JSON.stringify({x:e.id,y:f,r:N()})}).then((function(e){return e.text().then((function(t){e.ok?c(JSON.parse(t)):k.current.show({severity:"error",summary:"Refresh token error"})}))}))):k.current.show({severity:"error",summary:"Refresh token error"})}))}))}))}))}))})),Object(r.jsxs)("div",{children:[Object(r.jsx)(y,{}),Object(r.jsx)(F,{validateNumber:T,messageText:k,x:h,y:f,r:x,results:n,setResults:c}),Object(r.jsx)(O,{setResults:c,messageText:k,x:h,y:f,r:x,setX:l,setY:j,setR:g,validate:function(){var e=!T(f,-5,5);return e&&null!==k.current&&k.current.show({severity:"warn",summary:"Validation error"}),!e}}),Object(r.jsx)(S,{results:n})]})},I=(n(85),n(33)),K=n(34);var D=function(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(""),o=Object(p.a)(c,2),i=o[0],h=o[1];return Object(r.jsx)("div",{className:"p-align-center p-fluid",children:Object(r.jsxs)("form",{className:"form_div",children:[Object(r.jsx)(b.Messages,{icon:!0,ref:function(e){return A=e}}),Object(r.jsxs)("div",{className:"p-field p-grid",children:[Object(r.jsxs)("div",{className:"p-field p-grid",children:[Object(r.jsx)("label",{htmlFor:"username",className:"p-sm-2 p-md-4 p-xl-6",children:"Username"}),Object(r.jsx)("div",{className:"p-sm-12 p-md-7 p-xl-5",children:Object(r.jsx)(I.InputText,{id:"username",value:n,onChange:function(e){return s(e.target.value)}})})]}),Object(r.jsxs)("div",{className:"p-field p-grid ",children:[Object(r.jsx)("label",{htmlFor:"password",className:"p-sm-2 p-md-4 p-xl-6",children:"Password"}),Object(r.jsx)("div",{className:"p-sm-12 p-md-7 p-xl-5 ",children:Object(r.jsx)(K.Password,{id:"password",value:i,onChange:function(e){return h(e.target.value)}})})]}),Object(r.jsx)("br",{}),Object(r.jsx)("div",{className:"p-sm-12 p-md-6  p-align-center",children:Object(r.jsx)(j.Button,{type:"button",onClick:function(e){var t={username:n,password:i};fetch("/api/auth/login",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json;charset=utf-8"}}).then((function(e){return e.json().then((function(t){e.ok?m.dispatch({type:"NEW_TOKEN",token:t.token,rtoken:t.refresh_token}):403===e.status?A.show({severity:"error",summary:t.description}):A.show({severity:"error",summary:"Unhandled error"})}))}))},className:"p-button-primary p-margin",label:"Sign in",icon:"pi"})}),Object(r.jsx)("br",{}),Object(r.jsx)("div",{className:"p-sm-12 p-md-6 p-xl-3 p-align-center",children:Object(r.jsx)(j.Button,{type:"button",onClick:function(e){var t={username:n,password:i};fetch("/api/auth/register",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json;charset=utf-8"}}).then((function(e){return e.json().then((function(t){e.ok?m.dispatch({type:"NEW_TOKEN",token:t.token,rtoken:t.refresh_token}):403===e.status?A.show({severity:"error",summary:t.description}):A.show({severity:"error",summary:"Unhandled error"})}))}))},className:"p-button-primary ",label:"Register",icon:"pi"})})]})]})})},z=n(35),U=(n(88),n(89),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.store.subscribe((function(){e.setState({reduxState:e.props.store.getState()})}))}},{key:"render",value:function(){return Object(r.jsx)("div",{className:"p-grid p-justify-center wrapper",children:Object(r.jsx)("div",{className:"p-col p-sm-12 p-md-8 p-xl-5",children:Object(r.jsxs)(z.Panel,{header:"Lyubkin and Patutin \u211621382",children:[null!==this.props.store.getState().token?Object(r.jsx)(B,{}):Object(r.jsx)(D,{}),"  "]})})})}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(U,{store:m})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[90,1,2]]]);
//# sourceMappingURL=main.63653252.chunk.js.map