(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-637e73c6"],{"076a":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("FirestoreDatabaseTest")],1)},s=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"result"},[n("table",[e._m(0),e._l(e.users,(function(t,a){return n("tr",{key:a},[n("td",[e._v(e._s(t.id))]),n("td",[e._v(e._s(t.name))]),n("td",[e._v(e._s(t.phone))]),n("td",[e._v(e._s(t.address.city))]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.names[a],expression:"names[index]"}],attrs:{type:"text"},domProps:{value:e.names[a]},on:{input:function(t){t.target.composing||e.$set(e.names,a,t.target.value)}}}),n("button",{on:{click:function(t){return e.editUserName(e.names[a],a)}}},[e._v("Edit Name")])])])}))],2)])])},u=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("th",[e._v("id")]),n("th",[e._v("Name")]),n("th",[e._v("Phone")]),n("th",[e._v("Address")])])}],o=(n("b0c0"),n("159b"),n("59ca")),c=n.n(o),i={name:"FirestoreDatabaseTest",data:function(){return{users:null,names:[]}},mounted:function(){var e=this,t=c.a.database().ref("users");t.on("value",(function(t){e.names=[],e.users=t.val(),e.users.forEach((function(t){e.names.push(t.name)})),console.log(e.names)}))},computed:{},methods:{editUserName:function(e,t){c.a.database().ref("users/".concat(t)).update({name:e})}}},l=i,m=(n("6347"),n("2877")),d=Object(m["a"])(l,r,u,!1,null,"28afcae8",null),f=d.exports,v={name:"Database",components:{FirestoreDatabaseTest:f}},_=v,p=Object(m["a"])(_,a,s,!1,null,"01615290",null);t["default"]=p.exports},6037:function(e,t,n){},6347:function(e,t,n){"use strict";var a=n("6037"),s=n.n(a);s.a},b0c0:function(e,t,n){var a=n("83ab"),s=n("9bf2").f,r=Function.prototype,u=r.toString,o=/^\s*function ([^ (]*)/,c="name";!a||c in r||s(r,c,{configurable:!0,get:function(){try{return u.call(this).match(o)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-637e73c6.3f524a18.js.map