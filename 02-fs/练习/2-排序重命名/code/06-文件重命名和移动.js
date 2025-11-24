// 1. 引入fs模块
const fs = require('fs')
// 2. 调用rename
fs.rename("./座右铭.txt", "./论语.txt", err => { 
  if (err) {
    console.log('重命名失败')
    return
  } else {
    console.log('重命名成功')
  }
})
// 文件的移动
fs.rename("./data.txt", "../资料/data.txt", err => { 
  if (err) {
    console.log('移动失败')
    return
  } else {
    console.log('移动成功')
  }
})