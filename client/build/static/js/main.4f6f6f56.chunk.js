(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{34:function(e,t,n){},36:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),s=n(28),o=n.n(s),i=(n(34),n(7)),r=n.n(i),l=n(11),u=n(5),d=(n.p,n(36),n(29)),p=n.n(d),j=n(12),h=n.n(j),b=(n(61),n(62),n(63),n(64),n(65),n(66),n(67),n(68),n(13)),m=n(14),O="http://localhost:5000",g=n(1);var v=function(){var e=Object(c.useState)("c_cpp"),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)("60%"),o=Object(u.a)(s,2),i=o[0],d=o[1],j=Object(c.useState)("40%"),v=Object(u.a)(j,2),x=v[0],f=v[1],N=Object(c.useState)('#include <iostream>\nusing namespace std;\nint main() {\n    cout<<"Hello World!";\n    return 0;\n} \n'),k=Object(u.a)(N,2),y=k[0],S=k[1],w=Object(c.useState)(""),I=Object(u.a)(w,2),C=I[0],A=I[1],L=Object(c.useState)(""),P=Object(u.a)(L,2),F=P[0],T=P[1];Object(c.useEffect)((function(){S("c_cpp"===n?'#include <iostream>\nusing namespace std;\nint main() {\n  cout<<"Hello World!";\n  return 0;\n} \n   ':'print("Hello World!")')}),[n]);var _=function(){var e=Object(l.a)(r.a.mark((function e(t){var c,a,s,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(F),c={language:"c_cpp"===n?"cpp":"py",code:y,input:F},e.next=5,h()({url:"".concat(O,"/api/compiler/run"),method:"POST",data:c});case 5:a=e.sent,s=a.data,console.log(s),o=setInterval(Object(l.a)(r.a.mark((function e(){var t,c,a,i,l,u,d,p,j,b,m;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(O,"/api/compiler/status"),{params:{id:s.jobId}});case 2:if(t=e.sent,c=t.data,a=c.success,i=c.job,l=c.error,console.log(l),console.log(a),!a){e.next=17;break}if(u=i.status,d=i.output,"pending"!==u){e.next=11;break}return e.abrupt("return");case 11:console.log(u),"error"===u?(j=JSON.parse(d),console.log(j),"c_cpp"===n?(b=j.error.cmd.split(" ")[1]+":",p=j.stderr.replaceAll(b,"")):(b='File "'+j.error.cmd.split(" ")[1]+'",',console.log(b),console.log(b.split(" ")),p=j.stderr.replaceAll(b,"")),p=p.replace(/\s+/g," ").trim(),console.log(p)):p=d,A(p),clearInterval(o),e.next=22;break;case 17:console.log(l),m=l,console.log(m),A(m),clearInterval(o);case 22:console.log(c);case 23:case"end":return e.stop()}}),e)}))),1e3);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("div",{className:"headingMain ace-monokai",children:"ONLINE IDE"}),Object(g.jsxs)("div",{className:"ace-monokai sectionAbove",children:[Object(g.jsxs)("div",{className:"innerSection1",children:[Object(g.jsxs)("button",{onClick:_,className:"buttonRun",children:[" ",Object(g.jsx)(b.a,{icon:m.b,color:"white"})," ",Object(g.jsx)("span",{children:"Run"})]}),Object(g.jsxs)("select",{className:"select ace-monokai",value:n,onChange:function(e){a(e.target.value)},children:[Object(g.jsx)("option",{value:"c_cpp",children:"C++"}),Object(g.jsx)("option",{value:"python",children:"Python"})]}),Object(g.jsxs)("button",{className:"ace-monokai buttonInput",onClick:function(e){"40%"===x?(d("100%"),f("0%")):(d("60%"),f("40%"))},children:[Object(g.jsx)("span",{children:"INPUT"}),Object(g.jsx)(b.a,{icon:m.a,color:"white"})," "]})]}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{children:"Made by Tushar Chopra"})]}),Object(g.jsxs)("div",{className:"main",children:[Object(g.jsx)(p.a,{className:"editor",style:{height:"100vh",width:"".concat(i)},placeholder:"Start Coding",mode:n,theme:"monokai",name:"basic-code-editor",onChange:function(e){return S(e)},fontSize:18,showPrintMargin:!1,showGutter:!0,highlightActiveLine:!0,value:y,setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,showLineNumbers:!0,tabSize:4}}),Object(g.jsxs)("div",{className:"display ace-monokai",style:{width:"".concat(x),height:"100vh"},children:[Object(g.jsxs)("div",{style:{height:"50vh"},children:[Object(g.jsx)("div",{className:"ace-monokai headingDisplay",children:"Input"}),Object(g.jsx)("textarea",{className:"ace-monokai output",value:F,onChange:function(e){T(e.target.value)}})]}),Object(g.jsxs)("div",{className:"dispalyInner",style:{height:"50vh"},children:[Object(g.jsx)("div",{className:"headingDisplay ace-monokai",children:"Output"}),Object(g.jsx)("textarea",{className:"ace-monokai output",value:C,readOnly:!0})]})]})]})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),s(e),o(e)}))};o.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(v,{})}),document.getElementById("root")),x()}},[[72,1,2]]]);
//# sourceMappingURL=main.4f6f6f56.chunk.js.map