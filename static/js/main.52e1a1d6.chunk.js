(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(36)},27:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(18),c=a.n(i),l=a(4),r=a(5),o=a(7),p=a(6),m=a(8),u=a(1),h=(a(27),a(16)),d=n.a.createContext({}),b=a(39),y="\u044d\u0442\u0430\u043f",f="\u0448\u0430\u0433",v="\u044d\u043b\u0435\u043c\u0435\u043d\u0442",O="stage",g="step",_="item",j=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.name,s=t.time,i=t.id,c=t.parentID;return n.a.createElement("section",{className:"step stage__step"},n.a.createElement("h3",{className:"step__title",title:a},a),n.a.createElement("button",{className:"step__delete",title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0448\u0430\u0433",onClick:function(){return e.context.deleteStep(c,i)}}),n.a.createElement("p",{className:"step__time"},n.a.createElement("span",null,"\u0412\u0440\u0435\u043c\u044f"),n.a.createElement("b",null,s)),this.elements)}},{key:"elements",get:function(){var e=this,t=this.context.elements,a=this.props,s=a.items,i=a.id,c=a.history,l=n.a.createElement("button",{key:"add",title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442",className:"element element--add step__element",onClick:function(){return c.push("/add/".concat(_,"/").concat(i))}}),r=s.reduce(function(a,s){return a.concat([n.a.createElement("div",{className:"step__item",key:s},n.a.createElement("button",{className:"element step__element",type:"button",title:t[s].name,onClick:function(){return c.push("/edit/".concat(_,"/").concat(s))}},n.a.createElement("span",null,t[s].name)),n.a.createElement("button",{className:"step__delete-element",title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",onClick:function(){return e.context.deleteItem(i,s)}}))])},[]);switch(s.length){case 0:return[l];case 1:case 2:return[].concat(Object(h.a)(r),[l]);case 3:return Object(h.a)(r);default:return null}}}]),t}(s.Component),E=Object(b.a)(j);j.contextType=d;var S=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.name,s=t.time,i=t.isCollapsed,c=t.onCollapse,l=t.id,r=t.history;return n.a.createElement("header",{className:"stage__info"},n.a.createElement("button",{className:"stage__collapse ".concat(i?"stage__collapse--closed":""),type:"button",title:"\u0421\u0432\u0435\u0440\u043d\u0443\u0442\u044c\\\u0420\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c",onClick:c}),n.a.createElement("button",{className:"stage__edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u044d\u0442\u0430\u043f",onClick:function(){return r.push("/edit/".concat(O,"/").concat(l))}}),n.a.createElement("button",{className:"stage__delete",title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u0442\u0430\u043f",onClick:function(){return e.context.deleteStage(l)}}),n.a.createElement("div",{className:"stage__row"},n.a.createElement("h2",{className:"stage__title",title:a},a),n.a.createElement("p",{className:"stage__time"},n.a.createElement("span",null,"\u0412\u0440\u0435\u043c\u044f"),n.a.createElement("b",null,s)),this.elements))}},{key:"elements",get:function(){var e=this.context.steps,t=this.props,a=t.items,s=t.history;return a.reduce(function(t,a){return t.concat([n.a.createElement("button",{key:a,className:"element stage__element",type:"button",title:e[a].name,onClick:function(){return s.push("/edit/".concat(g,"/").concat(a))}},n.a.createElement("span",null,e[a].name))])},[])}}]),t}(s.PureComponent),k=Object(b.a)(S);S.contextType=d;var N=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.type,a=e.history,s=e.parentKey,i=y,c=f,l=O,r=g,o=t===i,p=o?function(){return a.push("/add/".concat(l))}:function(){return a.push("/add/".concat(r,"/").concat(s))};return n.a.createElement("footer",{className:"add-item"},n.a.createElement("h2",{className:"visually-hidden"},"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 ","".concat(o?i:c,"\u0430")),n.a.createElement("button",{className:"add-item__button",type:"button",onClick:p},n.a.createElement("span",null,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c ",o?i:c)))}}]),t}(s.PureComponent),C=Object(b.a)(N),x=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(p.a)(t).call(this,e))).state={isCollapsed:!1},a.handleCollapse=a.handleCollapse.bind(Object(u.a)(Object(u.a)(a))),a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.time,s=e.employee,i=e.items,c=e.id,l=this.state.isCollapsed;return n.a.createElement("section",{className:"stage ".concat(l?"stage--collapsed":""," process__stage")},n.a.createElement(k,{id:c,name:t,time:a,employee:s,items:i,isCollapsed:l,onCollapse:this.handleCollapse}),this.steps,i.length<3?n.a.createElement(C,{type:f,parentKey:c}):null)}},{key:"handleCollapse",value:function(){this.setState({isCollapsed:!this.state.isCollapsed})}},{key:"steps",get:function(){var e=this.context.steps,t=this.props,a=t.items,s=t.id;return a.reduce(function(t,a){return t.concat([n.a.createElement(E,{key:a,id:a,parentID:s,name:e[a].name,time:e[a].time,items:e[a].items})])},[])}}]),t}(s.PureComponent);x.contextType=d;var w=x,I=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("section",{className:"process"},n.a.createElement("h1",{className:"visually-hidden"},"\u041a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430"),n.a.createElement("p",{className:"process__start"},n.a.createElement("span",null,"\u0421\u0442\u0430\u0440\u0442")),this.stages))}},{key:"stages",get:function(){var e=this.context,t=e.listOfStages,a=e.stages;return t.reduce(function(e,t){return e.concat([n.a.createElement(w,{key:t,id:t,name:a[t].name,employee:a[t].employee,time:a[t].time,items:a[t].items})])},[])}}]),t}(s.PureComponent);I.contextType=d;var T=I,K=a(38),W=a(37),D=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(p.a)(t).call(this,e))).state={name:"",employee:"",time:"00:00"},a.isAdd=-1!==a.props.match.url.indexOf("add"),a.handleClose=a.handleClose.bind(Object(u.a)(Object(u.a)(a))),a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(!this.isAdd){var t=function(){var t=O,a=g,s=_;switch(e.props.match.params.type){case t:return e.context.stages[e.props.match.params.parentKey];case a:return e.context.steps[e.props.match.params.parentKey];case s:return e.context.elements[e.props.match.params.parentKey]}}();this.setState({name:t.name,employee:t.employee,time:t.time})}}},{key:"render",value:function(){var e=this,t=this.state,a=t.name,i=t.employee,c=t.time,l=this.isAdd?"\u0421\u043e\u0437\u0434\u0430\u0442\u044c":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c";return n.a.createElement("section",{className:"popup"},n.a.createElement("h2",{className:"visually-hidden"},"\u0412\u0441\u043f\u043b\u044b\u0432\u0430\u044e\u0449\u0435\u0435 \u043e\u043a\u043d\u043e"),n.a.createElement("div",{className:"popup__overlay",onClick:this.handleClose}),n.a.createElement("form",{className:"popup__form",onSubmit:this.handleSubmit.bind(this)},n.a.createElement("div",{className:"popup__wrapper"},n.a.createElement("h2",{className:"popup__title"},l," ",this.type),n.a.createElement("label",{className:"popup__label",htmlFor:"popup__name"},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435:"),n.a.createElement("input",{className:"popup__input-text",value:a,required:!0,type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 ".concat(this.type,"\u0430.."),id:"popup__name",onChange:function(t){return e.setState({name:t.target.value})}}),n.a.createElement("label",{className:"popup__label",htmlFor:"popup__employee"},"\u041e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439:"),n.a.createElement("input",{className:"popup__input-text",value:i,required:!0,type:"text",placeholder:"\u0418\u0432\u0430\u043d\u043e\u0432 \u0418\u0432\u0430\u043d..",id:"popup__employee",onChange:function(t){return e.setState({employee:t.target.value})}}),this.type===v?n.a.createElement(s.Fragment,null,n.a.createElement("label",{className:"popup__label",htmlFor:"popup__time"},"\u0412\u0440\u0435\u043c\u044f \u043d\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435(\u0427\u0427:\u041c\u041c):"),n.a.createElement("input",{className:"popup__input-text",value:c,required:!0,pattern:"[0-9]{2}[:][0-9]{2}",type:"text",placeholder:"45:00",id:"popup__time",onChange:function(t){return e.setState({time:t.target.value})}})):null,n.a.createElement("div",{className:"popup__buttons"},n.a.createElement("button",{className:"popup__button popup__button--cancel",type:"button",onClick:this.handleClose},"\u041e\u0442\u043c\u0435\u043d\u0430"),n.a.createElement("button",{className:"popup__button popup__button--submit",type:"submit"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")))))}},{key:"handleClose",value:function(){this.props.history.goBack()}},{key:"handleSubmit",value:function(e){var t=e.currentTarget;if(e.preventDefault(),!1===t.checkValidity())e.stopPropagation();else{e.preventDefault();var a=this.state,s=a.name,n=a.employee,i=a.time,c=y,l=f,r=v;if(this.isAdd)switch(this.type){case c:this.context.addStage({name:s,employee:n,time:i});break;case l:this.context.addStep({name:s,employee:n,time:i},this.props.match.params.parentKey);break;case r:this.context.addItem({name:s,employee:n,time:i},this.props.match.params.parentKey)}else switch(this.type){case c:this.context.editStage({name:s,employee:n,time:i},this.props.match.params.parentKey);break;case l:this.context.editStep({name:s,employee:n,time:i},this.props.match.params.parentKey);break;case r:this.context.editItem({name:s,employee:n,time:i},this.props.match.params.parentKey)}this.props.history.push("/")}}},{key:"type",get:function(){var e=O,t=g,a=_,s=v,n=y,i=f;switch(this.props.match.params.type){case e:return n;case t:return i;case a:return s;default:return null}}}]),t}(s.PureComponent);D.contextType=d;var P=D,J=a(13),A=a.n(J),F=function(e){return JSON.parse(JSON.stringify(e))},q=a(15),B=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(p.a)(t).call(this,e))).state={listOfStages:[],stages:{},steps:{},elements:{}},a.api={saveState:a.saveState.bind(Object(u.a)(Object(u.a)(a))),addStage:a.addStage.bind(Object(u.a)(Object(u.a)(a))),addStep:a.addStep.bind(Object(u.a)(Object(u.a)(a))),addItem:a.addItem.bind(Object(u.a)(Object(u.a)(a))),deleteItem:a.deleteItem.bind(Object(u.a)(Object(u.a)(a))),deleteStep:a.deleteStep.bind(Object(u.a)(Object(u.a)(a))),deleteStage:a.deleteStage.bind(Object(u.a)(Object(u.a)(a))),editItem:a.editItem.bind(Object(u.a)(Object(u.a)(a))),editStep:a.editStep.bind(Object(u.a)(Object(u.a)(a))),editStage:a.editStage.bind(Object(u.a)(Object(u.a)(a)))},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.loadState()}},{key:"componentDidUpdate",value:function(){this.saveState()}},{key:"render",value:function(){return n.a.createElement(K.a,{basename:"/planner"},n.a.createElement(d.Provider,{value:Object.assign({},this.state,this.api)},n.a.createElement(T,null),n.a.createElement(C,{type:y}),n.a.createElement(W.a,{path:"/(add|edit)/:type/:parentKey?",component:P})))}},{key:"saveState",value:function(){localStorage.setItem("state",JSON.stringify(this.state))}},{key:"loadState",value:function(){var e=localStorage.getItem("state");null!==e&&this.setState(JSON.parse(e))}},{key:"setNewStateWithTime",value:function(e){var t=Object.assign(F(this.state),e),a=t.stages,s=t.steps;t.listOfStages.forEach(function(e){var n=Object(q.duration)("0");a[e].items.length>0&&a[e].items.forEach(function(e){var a=Object(q.duration)("0");s[e].items.length>0&&(s[e].items.forEach(function(e){a.add(t.elements[e].time,String)}),s[e].time="".concat(a.days(),":").concat(a.hours(),":").concat(a.minutes())),n.add(a)}),a[e].time="".concat(n.days(),":").concat(n.hours(),":").concat(n.minutes())}),this.setState(t)}},{key:"addStage",value:function(e){var t=F(this.state.stages),a=A()();t[a]=Object.assign({},e,{items:[]});var s=this.state.listOfStages.slice();s.push(a),this.setNewStateWithTime({listOfStages:s,stages:t})}},{key:"deleteStage",value:function(e){var t=F(this.state.listOfStages),a=F(this.state.stages),s=F(this.state.steps),n=F(this.state.elements);a[e].items.forEach(function(e){s[e].items.forEach(function(e){return delete n[e]})}),delete a[e],t.splice(t.indexOf(e),1),this.setNewStateWithTime({listOfStages:t,stages:a,steps:s,elements:n})}},{key:"editStage",value:function(e,t){var a=F(this.state.stages);a[t]=Object.assign(a[t],e),this.setNewStateWithTime({stages:a})}},{key:"addStep",value:function(e,t){var a=F(this.state.steps),s=A()();a[s]=Object.assign({},e,{items:[]});var n=this.state.stages[t].items.slice();n.push(s);var i=F(this.state.stages);i[t].items=n,this.setNewStateWithTime({stages:i,steps:a})}},{key:"deleteStep",value:function(e,t){var a=F(this.state.stages),s=F(this.state.steps),n=F(this.state.elements);s[t].items.forEach(function(e){return delete n[e]}),delete s[t],a[e].items.splice(a[e].items.indexOf(t),1),this.setNewStateWithTime({stages:a,steps:s,elements:n})}},{key:"editStep",value:function(e,t){var a=F(this.state.steps);a[t]=Object.assign(a[t],e),this.setNewStateWithTime({steps:a})}},{key:"addItem",value:function(e,t){var a=F(this.state.elements),s=A()();a[s]=e;var n=this.state.steps[t].items.slice();n.push(s);var i=F(this.state.steps);i[t].items=n,this.setNewStateWithTime({steps:i,elements:a})}},{key:"deleteItem",value:function(e,t){var a=F(this.state.steps),s=F(this.state.elements);delete s[t],a[e].items.splice(a[e].items.indexOf(t),1),this.setNewStateWithTime({steps:a,elements:s})}},{key:"editItem",value:function(e,t){var a=F(this.state.elements);a[t]=Object.assign(a[t],e),this.setNewStateWithTime({elements:a})}}]),t}(s.Component);c.a.render(n.a.createElement(B,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.52e1a1d6.chunk.js.map