(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(30)},24:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(14),l=a.n(c),r=a(3),p=a(4),o=a(6),i=a(5),u=a(7),m=a(10),h=(a(24),s.a.createContext({})),b=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.time;return s.a.createElement("section",{className:"step stage__step"},s.a.createElement("h3",{className:"step__title",title:t},t),s.a.createElement("p",{className:"step__time"},s.a.createElement("span",null,"\u0412\u0440\u0435\u043c\u044f"),s.a.createElement("b",null,a)),this.elements)}},{key:"elements",get:function(){var e=this.context.elements;return this.props.items.reduce(function(t,a){return t.concat([s.a.createElement("button",{key:a,className:"element step__element",type:"button",title:e[a].name},s.a.createElement("span",null,e[a].name))])},[])}}]),t}(n.PureComponent);b.contextType=h;var _=b,d=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.time;return s.a.createElement("header",{className:"stage__info"},s.a.createElement("button",{className:"stage__collapse stage__collapse--closed",type:"button",title:"\u0421\u0432\u0435\u0440\u043d\u0443\u0442\u044c\\\u0420\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c"}),s.a.createElement("div",{className:"stage__row"},s.a.createElement("h2",{className:"stage__title",title:t},t),s.a.createElement("p",{className:"stage__time"},s.a.createElement("span",null,"\u0412\u0440\u0435\u043c\u044f"),s.a.createElement("b",null,a)),this.elements))}},{key:"elements",get:function(){var e=this.context.steps;return this.props.items.reduce(function(t,a){return t.concat([s.a.createElement("button",{key:a,className:"element stage__element",type:"button",title:e[a].name},s.a.createElement("span",null,e[a].name))])},[])}}]),t}(n.PureComponent);d.contextType=h;var y=d,E="\u044d\u0442\u0430\u043f",f="\u0448\u0430\u0433",O="stage",v="step",j=a(33),N=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.type,a=e.history,n=E,c=f,l=O,r=v,p=t===n,o=p?function(){return a.push("/add/".concat(l))}:function(){return a.push("/add/".concat(r))};return s.a.createElement("footer",{className:"add-item"},s.a.createElement("h2",{className:"visually-hidden"},"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 ","".concat(p?n:c,"\u0430")),s.a.createElement("button",{className:"add-item__button",type:"button",onClick:o},s.a.createElement("span",null,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c ",p?n:c)))}}]),t}(n.PureComponent),g=Object(j.a)(N),k=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.time,n=e.employee,c=e.items;return s.a.createElement("section",{className:"stage process__stage"},s.a.createElement(y,{name:t,time:a,employee:n,items:c}),this.steps,c.length<3?s.a.createElement(g,{type:f}):null)}},{key:"steps",get:function(){var e=this.context.steps;return this.props.items.reduce(function(t,a){return t.concat([s.a.createElement(_,{key:a,name:e[a].name,time:e[a].time,items:e[a].items})])},[])}}]),t}(n.PureComponent);k.contextType=h;var x=k,C=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement("section",{className:"process"},s.a.createElement("h1",{className:"visually-hidden"},"\u041a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430"),s.a.createElement("p",{className:"process__start"},s.a.createElement("span",null,"\u0421\u0442\u0430\u0440\u0442")),this.stages))}},{key:"stages",get:function(){var e=this.context,t=e.list,a=e.stages;return t.reduce(function(e,t){return e.concat([s.a.createElement(x,{key:t,name:a[t].name,employee:a[t].employee,time:a[t].time,items:a[t].items})])},[])}}]),t}(n.PureComponent);C.contextType=h;var S=C,w=a(32),P=a(31),J=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).handleClose=a.handleClose.bind(Object(m.a)(Object(m.a)(a))),a}return Object(u.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.match,t=O,a=E,n=f,c=-1!==e.path.indexOf("add")?"\u0421\u043e\u0437\u0434\u0430\u0442\u044c":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",l=e.params.type===t?a:n;return s.a.createElement("section",{className:"popup"},s.a.createElement("h2",{className:"visually-hidden"},"\u0412\u0441\u043f\u043b\u044b\u0432\u0430\u044e\u0449\u0435\u0435 \u043e\u043a\u043d\u043e"),s.a.createElement("div",{className:"popup__overlay",onClick:this.handleClose}),s.a.createElement("form",{className:"popup__form"},s.a.createElement("div",{className:"popup__wrapper"},s.a.createElement("h2",{className:"popup__title"},c," ",l),s.a.createElement("label",{className:"popup__label",htmlFor:"popup__name"},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435:"),s.a.createElement("input",{className:"popup__input-text",required:!0,type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0448\u0430\u0433\u0430..",id:"popup__name"}),s.a.createElement("label",{className:"popup__label",htmlFor:"popup__employee"},"\u041e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439:"),s.a.createElement("input",{className:"popup__input-text",required:!0,type:"text",placeholder:"\u0418\u0432\u0430\u043d\u043e\u0432 \u0418\u0432\u0430\u043d..",id:"popup__employee"}),s.a.createElement("label",{className:"popup__label",htmlFor:"popup__time"},"\u0412\u0440\u0435\u043c\u044f \u043d\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435(\u0427\u0427:\u041c\u041c):"),s.a.createElement("input",{className:"popup__input-text",required:!0,pattern:"[0-9]{2}[:][0-9]{2}",type:"text",placeholder:"45:00",id:"popup__time"}),s.a.createElement("div",{className:"popup__buttons"},s.a.createElement("button",{className:"popup__button popup__button--cancel",type:"button",onClick:this.handleClose},"\u041e\u0442\u043c\u0435\u043d\u0430"),s.a.createElement("button",{className:"popup__button popup__button--submit",type:"submit"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")))))}},{key:"handleClose",value:function(){this.props.history.push("/")}}]),t}(n.PureComponent),T=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).state={list:[],stages:{},steps:{},elements:{}},a.api={saveState:a.saveState.bind(Object(m.a)(Object(m.a)(a)))},a}return Object(u.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.loadState()}},{key:"render",value:function(){return s.a.createElement(w.a,{basename:"/planner"},s.a.createElement(h.Provider,{value:Object.assign({},this.state,this.api)},s.a.createElement(S,null),s.a.createElement(g,{type:E}),s.a.createElement(P.a,{path:"/add/:type",component:J})))}},{key:"saveState",value:function(){localStorage.setItem("state",JSON.stringify(this.state))}},{key:"loadState",value:function(){var e=localStorage.getItem("state");null!==e&&this.setState(JSON.parse(e))}}]),t}(n.Component);l.a.render(s.a.createElement(T,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.71d4b5d2.chunk.js.map