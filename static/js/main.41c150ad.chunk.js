(this["webpackJsonpfibonacci-clock"]=this["webpackJsonpfibonacci-clock"]||[]).push([[0],{12:function(e,c,n){},14:function(e,c,n){"use strict";n.r(c);var t=n(1),s=n.n(t),i=n(5),r=n.n(i),a=n(6),l=n(7),o=(n(12),n(0));var u=function(){var e=Object(t.useRef)(),c=Object(t.useRef)(),n=Object(t.useState)(["var(--blank)","var(--blank)","var(--blank","var(--blank)","var(--blank)"]),s=Object(l.a)(n,2),i=s[0],r=s[1],u=function(){for(var n=[5,3,2,1,1],t=c.current.value,s=e.current.value,l=[],o=[],u=0;u<5;u++)t/n[u]>=1&&(l.push(n[u]),t-=n[u]),s/(5*n[u])>=1&&(o.push(n[u]),s-=5*n[u]);for(var b=Object(a.a)(i),d=0;d<5;d++)l.includes(n[d])&&o.includes(n[d])?(b[d]="var(--both)",l.splice(l.indexOf(n[d]),1),o.splice(o.indexOf(n[d]),1)):l.includes(n[d])?(b[d]="var(--hours)",l.splice(l.indexOf(n[d]),1)):o.includes(n[d])?(b[d]="var(--minutes)",o.splice(o.indexOf(n[d]),1)):b[d]="var(--blank)";r(b)};return Object(o.jsxs)("div",{id:"fibonacciClock",children:[Object(o.jsx)("h1",{children:"Fibonacci Clock"}),Object(o.jsxs)("div",{className:"inputs",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"hours",children:"Hours"}),Object(o.jsx)("input",{type:"number",name:"hours",id:"hours",ref:c,min:"1",max:"12",onChange:function(e){u()}})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"minutes",children:"Minutes"}),Object(o.jsx)("input",{type:"number",name:"minutes",id:"minutes",ref:e,min:"0",max:"59",onChange:function(e){u()}})]}),Object(o.jsx)("button",{onClick:function(){c.current.value=((new Date).getHours()+24)%12||12,e.current.value=(new Date).getMinutes(),u(),u()},children:"Get Current Time"})]}),Object(o.jsxs)("div",{className:"clock",children:[Object(o.jsx)("div",{className:"five",style:{backgroundColor:i[0]},children:"5"}),Object(o.jsx)("div",{className:"three",style:{backgroundColor:i[1]},children:"3"}),Object(o.jsx)("div",{className:"two",style:{backgroundColor:i[2]},children:"2"}),Object(o.jsx)("div",{className:"oneFirst",style:{backgroundColor:i[3]},children:"1"}),Object(o.jsx)("div",{className:"oneSecond",style:{backgroundColor:i[4]},children:"1"})]})]})};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.41c150ad.chunk.js.map