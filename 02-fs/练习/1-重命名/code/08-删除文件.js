// 1. 引入fs模块
const fs = require('fs')

// 2. 调用unlink方法删除文件
fs.unlink('./观后感.txt', err => {
  if (err) {
    console.log('删除失败')
    return
  } else {
    console.log('删除成功')
  }
})

// 3.调用rm方法删除文件
fs.rm('./论语.txt', err => {
  if (err) {
    console.log('删除失败')
    return
  } else {
    console.log('删除成功')
  }
})