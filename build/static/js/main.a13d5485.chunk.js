(this.webpackJsonppersonals=this.webpackJsonppersonals||[]).push([[0],{187:function(e,t,n){e.exports=n(363)},323:function(e,t,n){},339:function(e,t,n){},362:function(e,t,n){},363:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),o=n.n(c),i=Object(a.createContext)(),l=i.Provider,s=i.Consumer,u=n(33),m=n(66),p=n(27),d=n(32),C=n(34),h=n(35),b=function(){return r.a.createElement("h3",null,"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430...")},f=function(e){Object(h.a)(n,e);var t=Object(C.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={error:!1},e}return Object(d.a)(n,[{key:"componentDidCatch",value:function(e){this.setState({error:!0}),console.log("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u0440\u0435\u043d\u0434\u0435\u0440\u0438\u043d\u0433\u0430: ",e)}},{key:"render",value:function(){return this.state.error?r.a.createElement(b,null):this.props.children}}]),n}(a.Component),O=n(92),y=n(26),E=n(13),j={contacts:[],editContact:null,searchContacts:[],users:[],loading:null,login:null},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD":return Object(E.a)({},e,{contacts:t.payload,loading:!0});case"COMPLETE":return Object(E.a)({},e,{contacts:e.contacts,loading:!1});case"ON-LOGIN-LOAD":return Object(E.a)({},e,{loading:!0,users:t.payload});case"ON-LOGIN":var n=e.users.findIndex((function(e){return e.name===t.payload.username&&e.password===t.payload.password}));return-1!==n?Object(E.a)({},e,{loading:!1,login:!0}):Object(E.a)({},e,{login:!1,loading:!1});case"EDIT-CONTACT":console.log(e.actionType);e.contacts.findIndex((function(e){return e.name==t.payload.name}));return Object(E.a)({},e,{editContact:t.payload});case"EDIT-CONTACT-ITEM":var a="name"===t.payload.target.id?t.payload.target.value:e.editContact.name,r="number"===t.payload.target.id?t.payload.target.value:e.editContact.number,c="email"===t.payload.target.id?t.payload.target.value:e.editContact.email;return Object(E.a)({},e,{editContact:Object(E.a)({},e.editContact,{name:a,number:r,email:c})});case"EDIT-CONTACT-COMPLETE":var o,i=e.contacts.findIndex((function(t){return t.key==e.editContact.key}));return-1!=e.searchContacts.findIndex((function(t){return t.key==e.editContact.key}))?(o=e.searchContacts.findIndex((function(t){return t.key==e.editContact.key})),Object(E.a)({},e,{contacts:[].concat(Object(y.a)(e.contacts.slice(0,i)),[e.editContact],Object(y.a)(e.contacts.slice(i+1))),searchContacts:[].concat(Object(y.a)(e.searchContacts.slice(0,o)),[e.editContact],Object(y.a)(e.searchContacts.slice(o+1))),editContact:null})):"ADD"===e.actionType?e.editContact.number&&e.editContact.name?Object(E.a)({},e,{contacts:[].concat(Object(y.a)(e.contacts),[e.editContact]),editContact:null,actionType:null}):Object(E.a)({},e,{editContact:null,actionType:null}):Object(E.a)({},e,{contacts:[].concat(Object(y.a)(e.contacts.slice(0,i)),[e.editContact],Object(y.a)(e.contacts.slice(i+1))),editContact:null,actionType:null});case"EDIT-CONTACT-REMOVE":var l=e.contacts.findIndex((function(e){return e.name==t.payload.name})),s=null;return-1!=e.searchContacts.findIndex((function(e){return e.name==t.payload.name}))&&(s=e.searchContacts.findIndex((function(e){return e.name==t.payload.name}))),Object(E.a)({},e,{contacts:[].concat(Object(y.a)(e.contacts.slice(0,l)),Object(y.a)(e.contacts.slice(l+1))),searchContacts:[].concat(Object(y.a)(e.searchContacts.slice(0,s)),Object(y.a)(e.searchContacts.slice(s+1)))});case"EDIT-CONTACT-CANCEL":return Object(E.a)({},e,{editContact:null});case"SEARCH-CONTACTS":return t.payload.length<=0?Object(E.a)({},e,{searchContacts:[],searchValues:null}):Object(E.a)({},e,{searchValues:t.payload,searchContacts:Object(y.a)(e.contacts.filter((function(e){return e.name.toLowerCase().includes(t.payload.toLowerCase())||e.number.includes(t.payload)})))});case"ADD-CONTACT":return Object(E.a)({},e,{editContact:Object(E.a)({},e.editContact,{key:e.contacts.length+1+""}),actionType:"ADD"});default:return e}},v=Object(O.b)(g),T=n(51),k=n(366),I=n(368),N=n(79),A=n(58),D=function(e){return function(t){return r.a.createElement(s,null,(function(n){return r.a.createElement(e,Object.assign({},t,{value:n}))}))}},w={labelCol:{span:8},wrapperCol:{span:16}},L={wrapperCol:{offset:8,span:16}},x=function(e){Object(h.a)(n,e);var t=Object(C.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"loadUsers",value:function(e){var t=this;(0,this.props.value.getUsers)().then((function(e){return t.props.onLoadUsers(e)})).then((function(){return t.props.onLogin(e)}))}},{key:"render",value:function(){var e=this,t=this.props;return!1===t.login&&r.a.createElement("p",null,"\u041d\u0435 \u0432\u0435\u0440\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"),t.loading?r.a.createElement("h1",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."):t.login?r.a.createElement(T.a,{to:"/"}):r.a.createElement("div",{className:"forms"},r.a.createElement(k.a,Object.assign({},w,{name:"basic",initialValues:{remember:!0},onFinish:function(t){return e.loadUsers(t)},onFinishFailed:function(e){return console.log("Failed:",e)}}),r.a.createElement(k.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}]},r.a.createElement(I.a,null)),r.a.createElement(k.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},r.a.createElement(I.a.Password,null)),r.a.createElement(k.a.Item,Object.assign({},L,{name:"remember",valuePropName:"checked"}),r.a.createElement(N.a,null,"Remember me")),r.a.createElement(k.a.Item,L,r.a.createElement(A.a,{type:"primary",htmlType:"submit"},"Submit"))))}}]),n}(a.Component),P=Object(u.b)((function(e){return Object(E.a)({},e)}),(function(e){return{onLoadUsers:function(t){return e({type:"ON-LOGIN-LOAD",payload:t})},onLogin:function(t){return e({type:"ON-LOGIN",payload:t})}}}))(D(x)),S=function(){return r.a.createElement(P,null)},M=n(365),U=(n(323),n(367)),R=n(369),V=function(e){Object(h.a)(n,e);var t=Object(C.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e,t,n,a,c=this,o="edit-contact ";this.props.editContact&&(o+="yes",e=this.props.editContact.name,t=this.props.editContact.number,n=this.props.editContact.email,a="ADD"===this.props.actionType?"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c");this.props.edit;return r.a.createElement("div",{className:o,id:"edit-contact"},r.a.createElement(U.a,{title:a+" \u041a\u043e\u043d\u0442\u0430\u043a\u0442",style:{width:350},onChange:function(e){return c.props.editContactItem(e)}},r.a.createElement(I.a,{id:"name",className:"margin",placeholder:"\u0418\u043c\u044f",prefix:r.a.createElement(R.a,{className:"site-form-item-icon"}),value:e}),r.a.createElement(I.a,{type:"number",id:"number",placeholder:"\u041d\u043e\u043c\u0435\u0440",className:"margin",value:t}),r.a.createElement(I.a,{placeholder:"Email",type:"email",id:"email",value:n}),r.a.createElement("div",{className:"btn"},r.a.createElement(A.a,{type:"primary",onClick:function(){return c.props.editComplete()}},a),r.a.createElement(A.a,{type:"primary",onClick:function(){return c.props.editContactCancel()}},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"))))}}]),n}(a.Component),F=Object(u.b)((function(e){return Object(E.a)({},e)}),(function(e){return{editContactItem:function(t){return e({type:"EDIT-CONTACT-ITEM",payload:t})},editComplete:function(){return e({type:"EDIT-CONTACT-COMPLETE"})},editContactCancel:function(){return e({type:"EDIT-CONTACT-CANCEL"})}}}))(V),G=I.a.Search,z=function(e){var t=e.search;return r.a.createElement("div",null,r.a.createElement(G,{placeholder:"\u041f\u043e\u0438\u0441\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430..",enterButton:"Search",size:"large",onSearch:function(e){return t(e)},onChange:function(e){return t(e.target.value)}}))},q=(n(339),function(e){Object(h.a)(n,e);var t=Object(C.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;(0,this.props.value.getData)().then((function(t){return e.props.load(t)})).then((function(){return e.props.complete()}))}},{key:"render",value:function(){var e,t=this;if(console.log(this.props),!this.props.login)return r.a.createElement(T.a,{to:"/login"});if(this.props.loading)return r.a.createElement("h1",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430");e=this.props.searchContacts.length>=1?this.props.searchContacts:this.props.contacts;var n=[{title:"\u0418\u043c\u044f",dataIndex:"name",key:"name",render:function(e){return r.a.createElement("a",null,e)}},{title:"\u042d\u043b. \u043f\u043e\u0447\u0442\u0430",dataIndex:"email",key:"email"},{title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",dataIndex:"number",key:"number"},{title:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f",key:"action",render:function(e,n){return r.a.createElement("span",null,r.a.createElement("a",{style:{marginRight:16},onClick:function(){return t.props.edit(e)}},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"),r.a.createElement("a",{onClick:function(){return t.props.remove(e)}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))}}];return r.a.createElement("div",null,r.a.createElement(z,{search:this.props.search}),r.a.createElement(A.a,{block:!0,className:"button-block",onClick:function(){return t.props.add()}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442"),r.a.createElement(M.a,{columns:n,dataSource:e}),r.a.createElement(F,null))}}]),n}(a.Component)),B=Object(u.b)((function(e){return Object(E.a)({},e)}),(function(e){return{edit:function(t){return e({type:"EDIT-CONTACT",payload:t})},load:function(t){return e({type:"LOAD",payload:t})},complete:function(){return e({type:"COMPLETE"})},remove:function(t){return e({type:"EDIT-CONTACT-REMOVE",payload:t})},search:function(t){return e({type:"SEARCH-CONTACTS",payload:t})},add:function(){return e({type:"ADD-CONTACT"})}}}))(D(q)),H=function(e){Object(h.a)(n,e);var t=Object(C.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return this.props.login?r.a.createElement(T.a,{to:"/contacts"}):r.a.createElement(T.a,{to:"/login"})}}]),n}(a.Component),J=Object(u.b)((function(e){return Object(E.a)({},e)}))(H),K=(n(362),function(e){return r.a.createElement("div",{className:"app"},r.a.createElement(T.d,null,r.a.createElement(T.b,{path:"/login",component:S}),r.a.createElement(T.b,{path:"/contacts",component:B}),r.a.createElement(T.b,{path:"/",component:J})))}),Q=new function e(){var t=this;Object(p.a)(this,e),this.users=[{name:"vasilii",password:"test"},{name:"petr",password:"test"}],this.data=[{key:"1",name:"\u0412\u0430\u0441\u0438\u043b\u0438\u0439 \u0418\u0432\u0430\u043d\u043e\u0432",email:"vas@mail.ru",number:"89197777777",tags:["nice","developer"]},{key:"2",name:"\u0418\u0432\u0430\u043d \u041d\u0438\u043a\u043e\u043b\u0430\u0435\u0432",email:"ivan@ivan.ru",number:"89555555555",tags:["loser"]},{key:"3",name:"\u041c\u0438\u0445\u0430\u0438\u043b \u0421\u043d\u043e\u043f\u043a\u0438\u043d",email:"mikhail@mikhail.ru",number:"88005553535",tags:["cool","teacher"]},{key:"4",name:"\u041a\u0443\u0437\u044c\u043c\u0430 \u041a\u0443\u0437\u044c\u043c\u0438\u043d",email:"kuzma@kuzmin.ru",number:"89999999999",tags:["cool","teacher"]},{key:"5",name:"\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440 \u041f\u0443\u0442\u0435\u0432\u044b\u0439",email:"vladimir@vlad.ru",number:"89628887272",tags:["cool","teacher"]}],this.getUsers=function(){return new Promise((function(e,n){setTimeout((function(){return e(t.users)}),500)}))},this.getData=function(){return new Promise((function(e,n){setTimeout((function(){return e(t.data)}),500)}))}};o.a.render(r.a.createElement(u.a,{store:v},r.a.createElement(f,null,r.a.createElement(l,{value:Q},r.a.createElement(m.a,null,r.a.createElement(K,null))))),document.getElementById("root"))}},[[187,1,2]]]);
//# sourceMappingURL=main.a13d5485.chunk.js.map