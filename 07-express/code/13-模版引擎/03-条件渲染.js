/**
 * 通过 isLogin 决定最终的输出内容
 * true   输出『<span>欢迎回来</span>』
 * false  输出『<button>登录</button>  <button>注册</button>』
 */
// 1.引入ejs
const ejs = require('ejs')
const fs = require('fs')
// 变量
const isLogin = true

//原生 JS
// if(isLogin){
//   console.log('<span>欢迎回来</span>')
// }else{
//   console.log('<button>登录</button>  <button>注册</button>');
// }

// ejs实现
const str = fs.readFileSync('./03-home.html').toString()
const res = ejs.render(str, { isLogin })

console.log(res)
