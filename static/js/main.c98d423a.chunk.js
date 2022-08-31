(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,function(e,t,a){},function(e,t,a){},,,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(10),c=a.n(n),l=(a(16),a(5)),s=a(2),i=(a(8),a(1)),r=a(7),j=(a(9),a(0));var u=function(e){var t=Object(i.useState)(""),a=Object(s.a)(t,2),n=a[0],c=a[1],l=Object(i.useState)(""),r=Object(s.a)(l,2),u=r[0],o=r[1],d=Object(i.useState)(""),b=Object(s.a)(d,2),x=b[0],v=b[1];return Object(j.jsx)("div",{className:"new-expense",children:Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a={title:n,amount:u,date:new Date(x)};e.onSaveExpenseData(a),c(""),o(""),v("")},children:[Object(j.jsx)("div",{className:"new-expense__controls",children:Object(j.jsxs)("div",{className:"new-expense__control label",children:[Object(j.jsx)("label",{children:"Title"}),Object(j.jsx)("input",{type:"text",value:n,onChange:function(e){c(e.target.value)}})]})}),Object(j.jsx)("div",{className:"new-expense__controls",children:Object(j.jsxs)("div",{className:"new-expense__control label",children:[Object(j.jsx)("label",{children:"Price"}),Object(j.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:u,onChange:function(e){o(e.target.value)}})]})}),Object(j.jsx)("div",{className:"new-expense__controls",children:Object(j.jsxs)("div",{className:"new-expense__control label ",children:[Object(j.jsx)("label",{children:"Date"}),Object(j.jsx)("input",{type:"date",value:x,onChange:function(e){v(e.target.value)}})]})}),Object(j.jsxs)("div",{className:"new-expense__actions",children:[Object(j.jsx)("button",{type:"button",onClick:e.oncancle,children:"cancel"}),Object(j.jsx)("button",{type:"submit",children:"Add Expense"})]})]})})};var o=function(e){var t=Object(i.useState)(!1),a=Object(s.a)(t,2),n=a[0],c=a[1];return Object(j.jsxs)("div",{className:"new-expense",children:[!n&&Object(j.jsx)("button",{onClick:function(){c(!0)},children:"Add New Expense"}),n&&Object(j.jsx)(u,{onSaveExpenseData:function(t){var a=Object(r.a)(Object(r.a)({},t),{},{id:Math.random().toString()});e.onsaveexpensedata(a)},oncancle:function(){c(!1)}})]})};a(18);var d=function(e){var t=Object(i.useState)(""),a=Object(s.a)(t,2);return a[0],a[1],Object(j.jsx)("div",{className:"expenses-filter",children:Object(j.jsxs)("div",{className:"expenses-filter__control",children:[Object(j.jsx)("label",{children:"Filter by year"}),Object(j.jsxs)("select",{value:e.selected,onChange:function(t){e.onEnteringtheyear(t.target.value)},children:[Object(j.jsx)("option",{value:"2022",children:"2022"}),Object(j.jsx)("option",{value:"2021",children:"2021"}),Object(j.jsx)("option",{value:"2020",children:"2020"}),Object(j.jsx)("option",{value:"2019",children:"2019"})]})]})})};var b=function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),a=e.date.toLocaleString("en-US",{day:"2-digit"}),n=e.date.getFullYear();return Object(j.jsxs)("div",{className:"expense-date",children:[Object(j.jsx)("div",{className:"expense-date__month",children:t}),Object(j.jsx)("div",{className:"expense-date__year",children:n}),Object(j.jsx)("div",{className:"expense-date__day",children:a})]})};var x=function(e){var t=Object(i.useState)(e.title),a=Object(s.a)(t,2),n=a[0],c=a[1];return Object(j.jsxs)("div",{className:"expense-item",children:[Object(j.jsx)(b,{date:e.date}),Object(j.jsx)("div",{className:"expense-item__description",children:Object(j.jsx)("h2",{children:n})}),Object(j.jsxs)("div",{className:"expense-item__price",children:["\u20b9",e.amount]}),Object(j.jsx)("button",{className:"expense-item__price expense-item__btn",onClick:function(){c(prompt("Please enter the new title"))},children:"Change Title"})]})},v=a(11);a(19),a(20);var O=function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)),Object(j.jsxs)("div",{className:"chart-bar",children:[Object(j.jsx)("div",{className:"chart-bar__inner",children:Object(j.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(j.jsx)("div",{className:"chart-bar__label",children:e.label})]})};var h=function(e){var t=e.dataPoints.map((function(e){return e.value})),a=Math.max.apply(Math,Object(l.a)(t));return Object(j.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(j.jsx)(O,{value:e.value,maxValue:a,label:e.label},e.label)}))})};var p=function(e){var t,a=[{label:"Jan",value:0},{label:"fed",value:0},{label:"March",value:0},{label:"April",value:0},{label:"May",value:0},{label:"June",value:0},{label:"July",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],n=Object(v.a)(e.expenses);try{for(n.s();!(t=n.n()).done;){var c=t.value;a[c.date.getMonth()].value+=c.amount}}catch(l){n.e(l)}finally{n.f()}return Object(j.jsx)(h,{dataPoints:a})};var m=function(e){var t=Object(i.useState)("2020"),a=Object(s.a)(t,2),n=a[0],c=a[1],l=e.items.filter((function(e){return e.date.getFullYear().toString()===n}));return Object(j.jsxs)("div",{className:"expenses",children:[Object(j.jsx)(d,{selected:n,onEnteringtheyear:function(e){c(e)}}),Object(j.jsx)(p,{expenses:l}),0===l.length?Object(j.jsx)("p",{className:"NoExpensesFound",children:"No Expense found."}):l.map((function(e){return Object(j.jsx)(x,{title:e.title,amount:e.amount,date:e.date},e.id)}))]})},f=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}];var _=function(){var e=Object(i.useState)(f),t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)(o,{onsaveexpensedata:function(e){n((function(t){return[e].concat(Object(l.a)(t))}))}}),Object(j.jsx)(m,{items:a})]})};c.a.render(Object(j.jsx)(_,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.c98d423a.chunk.js.map