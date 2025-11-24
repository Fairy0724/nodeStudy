/**
 * 需求:
 * 新建一个文件, 座右铭.txt,  写入内容, 三人行, 则必有我师焉
 */
// 1.引入fs模块
const fs = require('fs')
// 2.新建文件座右铭.txt
// 文件名 待写入数据 （选项设置） 回调函数
// fs.writeFile('./座右铭.txt', '三人行, 则必有我师焉', err => {
//   if (err) {
//     console.log('写入失败')
//     return
//   } else {
//     console.log('写入成功')
//   }
// })

// 同步写入
fs.writeFileSync('./data.txt', 'test')