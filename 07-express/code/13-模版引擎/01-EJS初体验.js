// 1.安装ejs
// 2.引入ejs模块
const ejs = require('ejs')
const fs = require('fs')

// 3.字符串
const country = '中国'
const weather = '晴天'

// 4.声明变量
const str = fs.readFileSync('./01-index.html').toString()
// 5.ejs渲染字
const res = ejs.render(str, { country, weather })
console.log(res)