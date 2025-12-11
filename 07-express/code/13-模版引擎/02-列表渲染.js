// 光与夜之恋--要求变为ul li标签
const gy = ['萧逸', '陆沉', '齐司礼', '查理苏', '夏鸣星']

// // 原生js
// const str = '<ul>'

// // 遍历
// gy.forEach(item => {
//   str += `<li>${item}</li>`
// })
// str += '</ul>'


// ejs实现
// 1.引入ejs模块
const ejs = require('ejs')
const fs = require('fs')
const str = fs.readFileSync('./02-光夜.html').toString()
// 2.渲染
const res = ejs.render(str, { gy })
// 3.输出
console.log(res)
