// 1.引入fs模块
const fs = require('fs')
 
// 2.调用appendFile方法追加写入内容
fs.appendFile('./座右铭.txt', '\n学而时习之, 不亦说乎', err => { 
  if (err) {
    console.log('追加写入失败')
    return
  } else {
    console.log('追加写入成功')
  }
})

// 同步追加写入
fs.appendFileSync('./data.txt', '\nhello')