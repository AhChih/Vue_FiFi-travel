(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d224580"],{e076:function(s,t,e){"use strict";e.r(t);var a=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",[e("div",{staticClass:"SignBox"},[e("div",{staticClass:"InputBox box-shadow"},[e("router-link",{attrs:{to:"/home"}},[e("img",{staticClass:"logo",attrs:{src:"https://s3.amazonaws.com/designmantic-logos/logos/2020/Jan/small-1927-5e25454e1df25.png",alt:""}})]),e("router-link",{attrs:{to:"/home"}},[s._v("← 回到首頁")]),e("form",{staticClass:"sign-text-center",on:{submit:function(t){return t.preventDefault(),s.signin(t)}}},[e("div",{staticClass:"form-group"},[e("h3",{staticClass:"sign-text"},[s._v("請登入管理員帳號")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"email","aria-describedby":"emailHelp",placeholder:"Enter email"},domProps:{value:s.user.username},on:{input:function(t){t.target.composing||s.$set(s.user,"username",t.target.value)}}})]),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password"},domProps:{value:s.user.password},on:{input:function(t){t.target.composing||s.$set(s.user,"password",t.target.value)}}})]),e("button",{staticClass:"btn-sign btn btn-coffee",attrs:{type:"submit"}},[s._v("Sign In")])])],1)])])},n=[],r={data:function(){return{user:{username:"",password:""}}},methods:{signin:function(){var s="".concat("https://vue-course-api.herokuapp.com","/admin/signin"),t=this;t.$http.post(s,t.user).then((function(s){s.data.success&&t.$router.push("/admin/products")}))}}},o=r,i=e("2877"),u=Object(i["a"])(o,a,n,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d224580.d38839ea.js.map