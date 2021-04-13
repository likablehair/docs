(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{369:function(t,a,s){"use strict";s.r(a);var e=s(46),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"backend-docs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#backend-docs"}},[t._v("#")]),t._v(" Backend Docs")]),t._v(" "),s("h2",{attrs:{id:"hasauthtoken-middleware"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hasauthtoken-middleware"}},[t._v("#")]),t._v(" HasAuthToken middleware")]),t._v(" "),s("p",[s("code",[t._v("HasAuthToken")]),t._v(" is an express middleware that filter requests without authorization token.")]),t._v(" "),s("h4",{attrs:{id:"missing-auth-token-or-user-id"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#missing-auth-token-or-user-id"}},[t._v("#")]),t._v(" Missing auth-token or user-id")]),t._v(" "),s("p",[t._v("In case of missing auth-token or user-id it returns "),s("code",[t._v("400")]),t._v(" with a body message like this:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'message'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'token or user not known'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"wrong-auth-token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wrong-auth-token"}},[t._v("#")]),t._v(" Wrong auth-token")]),t._v(" "),s("p",[t._v("In case of wrong auth-token it returns "),s("code",[t._v("400")]),t._v(" with a body message like this:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'message'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'access denied'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"permission-module"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#permission-module"}},[t._v("#")]),t._v(" Permission module")]),t._v(" "),s("p",[t._v("This module is used to filter requests in base of the user's permissions. Permissions are stored in the database into the table "),s("code",[t._v("permissions")]),t._v(" e they reference the "),s("code",[t._v("groups")]),t._v(" table.")]),t._v(" "),s("h3",{attrs:{id:"can-function"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#can-function"}},[t._v("#")]),t._v(" can function")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" actor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// user id")]),t._v("\n  admin"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// is admin")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" action "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'view'")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// name of the action, usually view or manage")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" resource "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'User'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// name of the resource to access, usually the name of the model")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("can")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("actor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" resource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("code",[t._v("can")]),t._v(" function takes an actor, an action and a resource and returns "),s("code",[t._v("true")]),t._v(" when the user is authorized, "),s("code",[t._v("false")]),t._v(" otherwise.")]),t._v(" "),s("p",[s("code",[t._v("can")]),t._v(" is a global function")]),t._v(" "),s("h4",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" examples")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" actor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  admin"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" action "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'view'")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" resource "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'User'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" authorized "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("can")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("actor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" resource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("authorized"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// can perform actions")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// cannot")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"ispermittedto-middleware"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ispermittedto-middleware"}},[t._v("#")]),t._v(" isPermittedTo middleware")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" action "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'view'")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// name of the action, usually view or manage")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" resource "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'User'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// name of the resource to access, usually the name of the model")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isPermittedTo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" resource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("code",[t._v("isPermittedTo")]),t._v(" is similar to "),s("code",[t._v("can")]),t._v(" function, but differently it is a "),s("code",[t._v("middleware")]),t._v(" and it doesn't take the user object as parameter, it takes it from the "),s("code",[t._v("req")]),t._v(" object.")]),t._v(" "),s("p",[t._v("It "),s("b",[t._v("cannot")]),t._v(" be used before or without "),s("RouterLink",{attrs:{to:"/guide/#hasauthtoken-middleware"}},[t._v("hasAuthToken")]),t._v(" middleware.")],1),t._v(" "),s("h4",{attrs:{id:"not-authorized"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#not-authorized"}},[t._v("#")]),t._v(" Not authorized")]),t._v(" "),s("p",[t._v("In case of permission denied it returns "),s("code",[t._v("400")]),t._v(" with a body message like this:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  success"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  message"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("You're not authorize to this page")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"examples-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples-2"}},[t._v("#")]),t._v(" examples")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// index.js")]),t._v("\n\nrouter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/danger'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("hasAuthToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isPermittedTo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'manage'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Danger'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// some danger stuff")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"global-path-helper"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#global-path-helper"}},[t._v("#")]),t._v(" Global path helper")]),t._v(" "),s("h3",{attrs:{id:"basedir-var"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basedir-var"}},[t._v("#")]),t._v(" baseDir var")]),t._v(" "),s("p",[s("code",[t._v("baseDir")]),t._v(" returns the absolute path of the base dir of the project.")]),t._v(" "),s("p",[t._v("It is a global var.")]),t._v(" "),s("h4",{attrs:{id:"examples-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples-3"}},[t._v("#")]),t._v(" examples")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("baseDir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// my/path/to/my/project/root/")]),t._v("\n")])])]),s("h3",{attrs:{id:"abspath-function"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#abspath-function"}},[t._v("#")]),t._v(" absPath function")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" path "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my/relative/path'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("absPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("code",[t._v("absPath")]),t._v(" return the absolute path of "),s("code",[t._v("path")]),t._v(" added to the base dir of the project")]),t._v(" "),s("p",[t._v("It is a global function.")]),t._v(" "),s("h4",{attrs:{id:"examples-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples-4"}},[t._v("#")]),t._v(" examples")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" path "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my/relative/path'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" myAbsolutePath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("absPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myAbsolutePath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// my/path/to/my/project/root/my/relative/path")]),t._v("\n")])])]),s("h3",{attrs:{id:"include-function"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#include-function"}},[t._v("#")]),t._v(" include function")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" path "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my/relative/path/file.js'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("include")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("code",[t._v("include")]),t._v(" call "),s("code",[t._v("require(absPath(path))")])]),t._v(" "),s("p",[t._v("It is a global function.")]),t._v(" "),s("h4",{attrs:{id:"examples-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples-5"}},[t._v("#")]),t._v(" examples")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// to/include/hello.js")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello world'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// index.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'to/include/hello.js'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hello "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("include")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Hello world")]),t._v("\n")])])]),t._v(" "),s("h2",{attrs:{id:"authetication"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authetication"}},[t._v("#")]),t._v(" Authetication")]),t._v(" "),s("p",[t._v("the authentication is handled with "),s("a",{attrs:{href:"http://www.passportjs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Passport"),s("OutboundLink")],1),t._v(" and it's an auth-token based one. Useful endpoints:")]),t._v(" "),s("h3",{attrs:{id:"login"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#login"}},[t._v("#")]),t._v(" login")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("POST")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("users"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("login\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// request body")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  user"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    email"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'required'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    password"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'required'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// success response")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"success"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"boolean"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"auth-token"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"token, to send each subsequent request"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user-id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user\'s id, to send each subsequent request"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"token-max-age"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"days within token expiration"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"logout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#logout"}},[t._v("#")]),t._v(" logout")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("POST")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("users"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("logout\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// request body empty")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// success response")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"success"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'boolean'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("need to send the auth-token in the "),s("code",[t._v("auth-token")]),t._v(" header")])]),t._v(" "),s("h2",{attrs:{id:"environment-variable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#environment-variable"}},[t._v("#")]),t._v(" Environment variable")]),t._v(" "),s("p",[t._v("the project use "),s("a",{attrs:{href:"https://www.npmjs.com/package/dotenv",target:"_blank",rel:"noopener noreferrer"}},[t._v("dotenv"),s("OutboundLink")],1),t._v(", to add an environment variable create a "),s("code",[t._v(".env")]),t._v(" file in the rood directory and add them in format "),s("code",[t._v("VARIABLE=VALUE")]),t._v(", they will be accessible within the application with "),s("code",[t._v("process.env.VARIABLE")]),t._v(". Never commit the .env file. Use "),s("code",[t._v(".env.example")]),t._v(" to create "),s("code",[t._v(".env")]),t._v(" file")]),t._v(" "),s("h4",{attrs:{id:"examples-6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples-6"}},[t._v("#")]),t._v(" examples")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# .env")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PIPPO")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pippo value'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PLUTO")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pluto value'")]),t._v("\n")])])]),s("h2",{attrs:{id:"database-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#database-configuration"}},[t._v("#")]),t._v(" Database configuration")]),t._v(" "),s("p",[t._v("the project use "),s("a",{attrs:{href:"https://vincit.github.io/objection.js/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Objection"),s("OutboundLink")],1),t._v(", built on "),s("a",{attrs:{href:"http://knexjs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Knex"),s("OutboundLink")],1),t._v(". In "),s("code",[t._v("knexfile.js")]),t._v(" there are the database informations for each environment. To set the correct ones on the project use env vars:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# .env")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DEVELOPMENT_DATABASE_HOST")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("host_of_the_databse\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DEVELOPMENT_DATABASE_USER")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("user_of_the_databse\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DEVELOPMENT_DATABASE_PASS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("password_of_the_databse\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DEVELOPMENT_DATABASE_NAME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("name_of_the_databse\n")])])]),s("p",[t._v("change "),s("code",[t._v("DEVELOPMENT")]),t._v(" to "),s("code",[t._v("PRODUCTION")]),t._v(" or whather is the environment")]),t._v(" "),s("h2",{attrs:{id:"migrations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#migrations"}},[t._v("#")]),t._v(" Migrations")]),t._v(" "),s("p",[s("b",[t._v("Migrations")]),t._v(" are operations performed on the database schema, they allow each developer working on the same project to have the same database schema. "),s("a",{attrs:{href:"http://knexjs.org/#Migrations",target:"_blank",rel:"noopener noreferrer"}},[t._v("Knex"),s("OutboundLink")],1),t._v(" has it's own migration CLI. Here the main commands:")]),t._v(" "),s("h4",{attrs:{id:"install-the-knex-command-line"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-the-knex-command-line"}},[t._v("#")]),t._v(" install the knex command line")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" knex -g\n")])])]),s("h4",{attrs:{id:"execute-the-first-unexecuted-migration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#execute-the-first-unexecuted-migration"}},[t._v("#")]),t._v(" execute the first unexecuted migration")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("knex migrate:up\n")])])]),s("h4",{attrs:{id:"execute-all-unexecuted-migrations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#execute-all-unexecuted-migrations"}},[t._v("#")]),t._v(" execute all unexecuted migrations")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("knex migrate:latest\n")])])]),s("h4",{attrs:{id:"execute-specific-migration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#execute-specific-migration"}},[t._v("#")]),t._v(" execute specific migration")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("knex migrate:up 001_migration_name.js\n")])])]),s("h4",{attrs:{id:"create-a-migration-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-a-migration-file"}},[t._v("#")]),t._v(" create a migration file")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("knex migrate:make migration_name\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("Migration filename")]),t._v(" "),s("p",[t._v("use "),s("code",[t._v("snake case")]),t._v(" in the command, it will be translated in "),s("code",[t._v("camel case")])])]),t._v(" "),s("h4",{attrs:{id:"rollback-all-migrations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rollback-all-migrations"}},[t._v("#")]),t._v(" rollback all migrations")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("knex migrate:rollback --all\n")])])]),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("Migration rollback")]),t._v(" "),s("p",[t._v("this could cause some errors due to migration definition")])]),t._v(" "),s("h4",{attrs:{id:"rollback-specific-migration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rollback-specific-migration"}},[t._v("#")]),t._v(" rollback specific migration")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("knex migrate:down 001_migration_name.js\n")])])]),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("Migration rollback")]),t._v(" "),s("p",[t._v("this could cause some errors due to migration definition")])]),t._v(" "),s("h2",{attrs:{id:"development-commands"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#development-commands"}},[t._v("#")]),t._v(" Development commands")]),t._v(" "),s("h3",{attrs:{id:"start-the-development-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start-the-development-server"}},[t._v("#")]),t._v(" Start the development server")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run start\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);