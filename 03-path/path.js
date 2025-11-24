// 1.引入fs和path模块
const fs = require('fs')
const path = require('path')

// resolve方法可以将相对路径转为绝对路径
console.log(path.resolve(__dirname, './index.html'))
console.log(path.resolve(__dirname, 'index.html'))

// sep 分隔符
// windows  \  Linux  /
console.log(path.sep);

// parse 方法将路径解析为一个对象
// __filename 当前文件的绝对路径
// console.log(__filename)
let str = 'D:\\Code\\study\\node\\study\\03-path\\path.js'
console.log(path.parse(str))
// basename--获取文件名
// console.log(path.basename(str));

// dirname--获取目录名
// console.log(path.dirname(str));

// extname--获取文件扩展名
// console.log(path.extname(str));