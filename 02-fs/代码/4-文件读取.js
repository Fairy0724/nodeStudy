// 1.引入fs模块
const fs = require('fs')

// 2.异步读取文件
fs.readFile('./座右铭.txt', (err, data) => { 
  if (err) {
    console.log('读取失败')
    return
  } else {
    console.log(data.toString()) // 将二进制数据转换为字符串输出
  }
})

// 3.同步读取文件
const data = fs.readFileSync('./观后感.txt')
console.log(data.toString())